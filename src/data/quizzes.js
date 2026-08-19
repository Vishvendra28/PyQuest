// Fallback retrieval quizzes shown every 3rd lesson when the lesson has no built-in quiz
export const FALLBACK_QUIZZES = [
  // ── Beginner: Variables & Types ──────────────────────────────────────────
  {
    q: 'What does print() do in Python?',
    options: ['Saves a file to disk', 'Displays output on screen', 'Creates a variable', 'Runs a loop'],
    answer: 1,
    explain: 'print() outputs text to the console so you can see your results. It\'s one of the most-used functions in Python!',
  },
  {
    q: 'Which symbol assigns a value to a variable?',
    options: ['==', '::', '=', '=>'],
    answer: 2,
    explain: 'A single = assigns a value (name = "Alice"). Double == checks equality (name == "Alice"). Easy to mix up!',
  },
  {
    q: 'What type is the value "hello" in Python?',
    options: ['int', 'bool', 'float', 'str'],
    answer: 3,
    explain: 'Text in quotes is a string (str). It can hold letters, numbers, symbols — anything you can type.',
  },
  {
    q: 'What does len("Python") return?',
    options: ['5', '6', '7', 'Error'],
    answer: 1,
    explain: 'len() counts characters. "Python" has 6 characters: P-y-t-h-o-n.',
  },
  {
    q: 'Which of these starts a Python comment?',
    options: ['// comment', '/* comment */', '# comment', '<!-- comment -->'],
    answer: 2,
    explain: 'Python uses # for comments. Everything after # on that line is ignored by Python.',
  },
  {
    q: 'What does print(2 + 3 * 4) output?',
    options: ['20', '14', '24', 'Error'],
    answer: 1,
    explain: 'Python follows PEMDAS: multiplication first (3×4=12), then addition (2+12=14). Parentheses override the order.',
  },
  {
    q: 'What does bool(0) evaluate to?',
    options: ['True', 'False', '0', 'Error'],
    answer: 1,
    explain: 'In Python, 0 is "falsy" — bool(0) is False. Any non-zero number (1, -5, 3.14) is True.',
  },
  {
    q: 'Which function converts a number to a string?',
    options: ['int()', 'float()', 'str()', 'num()'],
    answer: 2,
    explain: 'str() converts numbers (and other types) to text. Useful when joining numbers with strings: "Score: " + str(42).',
  },
  {
    q: 'What is the correct way to write an f-string?',
    options: ['f"Hello {name}"', '"Hello {name}"f', 'f(Hello name)', '"Hello" + f(name)'],
    answer: 0,
    explain: 'f-strings start with f before the quote. Curly braces {} inside embed any Python expression directly.',
  },
  {
    q: 'Which of these creates a list in Python?',
    options: ['(1, 2, 3)', '{1, 2, 3}', '[1, 2, 3]', '<1, 2, 3>'],
    answer: 2,
    explain: 'Square brackets [] create a list. Parentheses () create a tuple. Curly braces {} create a set or dict.',
  },
  {
    q: 'How do you get user input in Python?',
    options: ['read()', 'get()', 'input()', 'scan()'],
    answer: 2,
    explain: 'input() pauses the program and waits for the user to type something. It always returns a string.',
  },
  {
    q: 'What keyword starts a function definition?',
    options: ['func', 'function', 'def', 'fn'],
    answer: 2,
    explain: 'def is short for "define". You write def function_name(parameters): and indent the body below.',
  },

  // ── Beginner: Conditions & Loops ─────────────────────────────────────────
  {
    q: 'What does the "elif" keyword mean?',
    options: ['End the loop', 'Else if — another condition to check', 'Define a new function', 'Import a module'],
    answer: 1,
    explain: '"elif" is short for "else if". It lets you check multiple conditions in sequence without nesting lots of if blocks.',
  },
  {
    q: 'How many times does this loop run?  for i in range(5):',
    options: ['4 times', '5 times', '6 times', 'Infinite'],
    answer: 1,
    explain: 'range(5) produces 0, 1, 2, 3, 4 — five values. The loop body runs once per value, so 5 times total.',
  },
  {
    q: 'What does "break" do inside a loop?',
    options: ['Skips to the next iteration', 'Exits the loop immediately', 'Restarts the loop', 'Raises an error'],
    answer: 1,
    explain: 'break stops the loop right there. The code after the loop continues. Use it when you\'ve found what you need.',
  },
  {
    q: 'What does "continue" do inside a loop?',
    options: ['Exits the loop', 'Skips the rest of this iteration and moves to the next', 'Pauses execution', 'Calls the next function'],
    answer: 1,
    explain: 'continue skips everything below it in the loop body for that iteration, then goes back to the top of the loop.',
  },
  {
    q: 'Which loop is best when you don\'t know how many iterations you need?',
    options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
    answer: 1,
    explain: 'while loops keep running as long as a condition is True — perfect when the number of iterations depends on runtime data.',
  },

  // ── Intermediate: Lists, Dicts, Functions ────────────────────────────────
  {
    q: 'What does list.append(x) do?',
    options: ['Inserts x at position 0', 'Adds x to the end of the list', 'Removes x from the list', 'Sorts the list'],
    answer: 1,
    explain: 'append() adds one item to the END of the list. To add at a specific position, use list.insert(index, x) instead.',
  },
  {
    q: 'How do you access the value for key "name" in dict d?',
    options: ['d.name', 'd[name]', 'd["name"]', 'd->name'],
    answer: 2,
    explain: 'Dictionary values are accessed with square brackets and the key in quotes: d["name"]. Using d.get("name") is safer — it returns None if the key is missing.',
  },
  {
    q: 'What is a Python tuple?',
    options: ['A mutable list', 'An immutable ordered sequence', 'A set of unique values', 'A dictionary key'],
    answer: 1,
    explain: 'Tuples are like lists but immutable — once created, you can\'t change, add, or remove items. Great for fixed data like coordinates.',
  },
  {
    q: 'What does the "return" keyword do in a function?',
    options: ['Prints a value', 'Sends a value back to the caller and exits the function', 'Loops back to the start', 'Imports a module'],
    answer: 1,
    explain: 'return sends a result out of the function. Without return, the function returns None. The caller captures it: result = my_func().',
  },
  {
    q: 'What is a default parameter in Python?',
    options: ['A parameter that must always be provided', 'A parameter with a fallback value if not supplied', 'The first parameter of any function', 'A global variable'],
    answer: 1,
    explain: 'Default parameters have a preset value: def greet(name="World"):. If the caller doesn\'t pass name, it uses "World" automatically.',
  },
  {
    q: 'What does *args do in a function definition?',
    options: ['Makes all arguments optional', 'Collects any number of positional arguments into a tuple', 'Unpacks a list', 'Marks required arguments'],
    answer: 1,
    explain: '*args collects extra positional arguments as a tuple. def add(*nums): sum(nums) — you can pass add(1,2,3,4) and it handles all.',
  },
  {
    q: 'What is a list comprehension?',
    options: ['A way to understand what a list does', 'A concise syntax to build a list from an iterable in one line', 'A method that explains a list\'s contents', 'A type of for loop that only works with lists'],
    answer: 1,
    explain: '[x*2 for x in range(5)] builds [0,2,4,6,8] in one line. It\'s faster and more readable than a full for loop + append.',
  },

  // ── Intermediate: OOP & Errors ───────────────────────────────────────────
  {
    q: 'What is "self" in a class method?',
    options: ['A keyword that returns the class name', 'A reference to the current instance of the class', 'A global variable', 'The parent class'],
    answer: 1,
    explain: 'self refers to the specific object calling the method. It lets each instance store its own data (self.name, self.age, etc.).',
  },
  {
    q: 'What does __init__ do in a Python class?',
    options: ['Destroys the object', 'Initialises the object\'s attributes when it is created', 'Imports the class', 'Defines a class-level constant'],
    answer: 1,
    explain: '__init__ is the constructor — it runs automatically when you call MyClass(). Use it to set up the object\'s initial state.',
  },
  {
    q: 'What is inheritance in OOP?',
    options: ['Copying a class into a new file', 'A child class receiving attributes and methods from a parent class', 'Storing data in a variable', 'Running a method twice'],
    answer: 1,
    explain: 'Inheritance lets Dog(Animal) gain Animal\'s methods without rewriting them. Override only what needs to be different.',
  },
  {
    q: 'Which block runs when no exception occurs in a try/except?',
    options: ['except', 'finally', 'else', 'pass'],
    answer: 2,
    explain: 'The else block runs only when try succeeds with no errors. finally always runs, whether there was an error or not.',
  },
  {
    q: 'What does raising an exception do?',
    options: ['Silently ignores an error', 'Prints a warning message', 'Immediately stops the current function and signals an error', 'Retries the failed operation'],
    answer: 2,
    explain: 'raise ValueError("bad input") stops execution and signals that something went wrong. The caller can catch it with except ValueError.',
  },

  // ── Advanced: Generators, Decorators, Async ──────────────────────────────
  {
    q: 'What does the "yield" keyword do?',
    options: ['Returns a value and ends the function', 'Pauses a function and produces a value, resuming later', 'Imports a module lazily', 'Declares a constant'],
    answer: 1,
    explain: 'yield turns a function into a generator. Each call to next() resumes from where yield left off — great for large sequences without loading all data at once.',
  },
  {
    q: 'What is a decorator in Python?',
    options: ['A way to add colour to terminal output', 'A function that wraps another function to add behaviour', 'A CSS-like styling system', 'A type of loop'],
    answer: 1,
    explain: '@my_decorator above a function passes that function to my_decorator(). The decorator can run code before/after, log calls, or restrict access.',
  },
  {
    q: 'What does "async def" create?',
    options: ['A multi-threaded function', 'A coroutine that can pause with await without blocking', 'A faster version of a regular function', 'A function that runs in a separate process'],
    answer: 1,
    explain: 'async def creates a coroutine. await inside it yields control back to the event loop while waiting, letting other coroutines run — ideal for I/O-bound tasks.',
  },
  {
    q: 'What does asyncio.gather() do?',
    options: ['Collects all imports at startup', 'Runs multiple coroutines concurrently and waits for all to finish', 'Groups functions into a module', 'Merges two lists'],
    answer: 1,
    explain: 'gather(taskA, taskB, taskC) starts all three at once. Total time ≈ slowest task, not sum of all — a big speedup over running them one-by-one.',
  },
  {
    q: 'What is the purpose of a context manager (with statement)?',
    options: ['To import libraries cleanly', 'To guarantee setup and teardown around a block of code', 'To create a new scope like a function', 'To handle async operations'],
    answer: 1,
    explain: 'with open("f.txt") as f: guarantees the file is closed after the block, even if an error occurs. __enter__ sets up, __exit__ tears down.',
  },
]
