/* global loadPyodide */
importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js')

let pyodide = null

self.onmessage = async (e) => {
  const { type } = e.data
  if (type === 'init') await initPyodide()
  if (type === 'run') await runCode(e.data.code, e.data.inputs || [], e.data.id)
}

async function initPyodide() {
  try {
    self.postMessage({ type: 'loading', progress: 20, message: 'Downloading Python engine...' })
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
    })
    self.postMessage({ type: 'loading', progress: 85, message: 'Setting up PyQuest...' })
    await patchMatplotlib()
    self.postMessage({ type: 'ready', progress: 100 })
  } catch (err) {
    self.postMessage({ type: 'init_error', message: err.message })
  }
}

async function patchMatplotlib() {
  try {
    await pyodide.runPythonAsync(`
try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    import io, base64

    def _pyquest_show(*a, **kw):
        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight', dpi=100)
        buf.seek(0)
        print('__PLOT__:' + base64.b64encode(buf.read()).decode())
        plt.close('all')

    plt.show = _pyquest_show
except ImportError:
    pass
`)
  } catch (_) { /* matplotlib not installed yet — patched after on-demand load */ }
}

async function runCode(code, inputs, id) {
  if (!pyodide) return

  const stdoutParts = []
  const plots = []

  pyodide.setStdout({
    batched: (text) => {
      if (text.startsWith('__PLOT__:')) plots.push(text.slice(9))
      else stdoutParts.push(text)
    },
  })
  pyodide.setStderr({ batched: () => {} })

  // Patch builtins.input with pre-collected values — avoids Pyodide's setStdin
  // which throws OSError (ESPIPE errno 29) in 0.27 when stdin isn't seekable
  pyodide.globals.set('__pyquest_inputs__', pyodide.toPy(inputs))
  await pyodide.runPythonAsync(`
import builtins as _bi
_pyquest_idx = 0
def _pyquest_input(prompt=''):
    global _pyquest_idx
    if prompt:
        print(prompt, end='', flush=True)
    val = __pyquest_inputs__[_pyquest_idx] if _pyquest_idx < len(__pyquest_inputs__) else ''
    _pyquest_idx += 1
    return val
_bi.input = _pyquest_input
`)

  // Load required packages on demand
  const pkgs = detectPackages(code)
  if (pkgs.length > 0) {
    self.postMessage({ type: 'status', message: `Loading ${pkgs.join(', ')}…` })
    try {
      await pyodide.loadPackage(pkgs)
      if (pkgs.includes('matplotlib')) await patchMatplotlib()
    } catch (_) { /* let the code fail naturally with a readable error */ }
    self.postMessage({ type: 'status', message: '' })
  }

  try {
    await pyodide.runPythonAsync(code)
    self.postMessage({ type: 'result', id, stdout: stdoutParts.join('\n'), error: null, plots })
  } catch (err) {
    self.postMessage({ type: 'result', id, stdout: stdoutParts.join('\n'), error: cleanError(err.message || String(err)), plots })
  }
}

function cleanError(msg) {
  // Remove the long Pyodide traceback preamble, keep the readable part
  const lines = msg.split('\n')
  const relevantIdx = lines.findIndex(l => /Error:|error:/.test(l))
  if (relevantIdx !== -1) {
    return lines.slice(Math.max(0, relevantIdx - 4)).join('\n').trim()
  }
  return msg.trim()
}

function detectPackages(code) {
  const map = {
    numpy: 'numpy', pandas: 'pandas', matplotlib: 'matplotlib',
    scipy: 'scipy', sklearn: 'scikit-learn', PIL: 'Pillow', sympy: 'sympy',
  }
  return Object.entries(map)
    .filter(([imp]) => code.includes(`import ${imp}`) || code.includes(`from ${imp} `))
    .map(([, pkg]) => pkg)
}
