export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Number Guessing Game',
    emoji: '🎯',
    difficulty: 'beginner',
    xp: 150,
    time: '15 min',
    description: `Build a game where the computer picks a random number between 1 and 100 and the player tries to guess it. Give hints like "Too high!" or "Too low!" and count how many guesses it takes.`,
    features: [
      'Use random.randint() to pick a secret number',
      'Loop until the player guesses correctly',
      'Print hints after each wrong guess',
      'Show total guesses at the end',
    ],
    starterCode: `import random

secret = random.randint(1, 100)
attempts = 0

print("I'm thinking of a number between 1 and 100!")

# Your game loop here
`,
    testHint: 'Run it and try guessing! No automatic test — just make it fun to play.',
    freeform: true,
  },
  {
    id: 'proj-2',
    title: 'To-Do List App',
    emoji: '📝',
    difficulty: 'beginner',
    xp: 150,
    time: '20 min',
    description: `Build a command-line to-do list where users can add tasks, view all tasks, mark them done, and quit. Store tasks in a list.`,
    features: [
      'Menu with options: add / view / done / quit',
      'Store tasks as a list of dicts with "task" and "done" keys',
      'Mark a task done by its number',
      'Show ✅ for done tasks and ⬜ for pending',
    ],
    starterCode: `tasks = []

def show_menu():
    print("\\n=== TO-DO LIST ===")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark done")
    print("4. Quit")

# Your app logic here
`,
    testHint: 'Run it and interact with the menu. No automatic test — test it yourself!',
    freeform: true,
  },
  {
    id: 'proj-3',
    title: 'Simple Calculator',
    emoji: '🔢',
    difficulty: 'beginner',
    xp: 150,
    time: '15 min',
    description: `Build a calculator that handles +, -, *, / operations. Keep asking for calculations until the user types "quit".`,
    features: [
      'Ask for two numbers and an operator',
      'Handle division by zero gracefully',
      'Keep running in a loop until "quit"',
      'Show the result after each calculation',
    ],
    starterCode: `def calculate(a, op, b):
    # Your calculation logic here
    pass

print("Simple Calculator (type 'quit' to exit)")

# Your main loop here
`,
    testHint: 'Try different operations including dividing by zero.',
    freeform: true,
  },
  {
    id: 'proj-4',
    title: 'Password Generator',
    emoji: '🔐',
    difficulty: 'intermediate',
    xp: 200,
    time: '20 min',
    description: `Build a tool that generates secure random passwords. Let the user choose the length and whether to include uppercase letters, numbers, and symbols.`,
    features: [
      'Ask for desired password length',
      'Let user toggle: uppercase / numbers / symbols',
      'Use random.choices() to build the password',
      'Show the generated password and a strength rating',
    ],
    starterCode: `import random
import string

def generate_password(length, use_upper=True, use_digits=True, use_symbols=True):
    # Build the character pool
    chars = string.ascii_lowercase
    # Add more character types here

    # Generate and return the password
    pass

# Your main program here
`,
    testHint: 'Generate a few passwords and check they only contain the allowed characters.',
    freeform: true,
  },
  {
    id: 'proj-5',
    title: 'Word Counter',
    emoji: '📊',
    difficulty: 'intermediate',
    xp: 200,
    time: '25 min',
    description: `Build a text analysis tool. The user pastes or types text, and the program shows: word count, character count, most common words, and average word length.`,
    features: [
      'Count total words and characters',
      'Find the top 5 most frequent words (ignore short words like "the", "a")',
      'Calculate average word length',
      'Show results in a nice formatted report',
    ],
    starterCode: `def analyze_text(text):
    words = text.lower().split()

    # Count words
    word_count = len(words)

    # Your analysis here

    return {
        "words": word_count,
        # add more keys
    }

text = input("Paste your text: ")
results = analyze_text(text)

# Print a nice report
`,
    testHint: 'Try it with a paragraph from a book or article.',
    freeform: true,
  },
  {
    id: 'proj-6',
    title: 'Quiz Game',
    emoji: '🧠',
    difficulty: 'intermediate',
    xp: 250,
    time: '30 min',
    description: `Build a multiple-choice quiz game. Store 5+ questions with answers, shuffle them, ask one at a time, and show the final score with a performance message.`,
    features: [
      'Store questions as a list of dicts with question, options, and answer',
      'Shuffle the questions each game',
      'Accept A/B/C/D answers (case insensitive)',
      'Show score and a fun message at the end',
    ],
    starterCode: `import random

questions = [
    {
        "q": "What does print() do in Python?",
        "options": ["A. Deletes text", "B. Shows text on screen", "C. Reads a file", "D. Calculates math"],
        "answer": "B"
    },
    # Add more questions here
]

def run_quiz(questions):
    score = 0
    random.shuffle(questions)
    # Your quiz logic here
    return score

score = run_quiz(questions)
`,
    testHint: 'Play through the whole quiz and check your score adds up correctly.',
    freeform: true,
  },
]

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) ?? null
}
