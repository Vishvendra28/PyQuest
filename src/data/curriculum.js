// ─────────────────────────────────────────────────────────────────────────────
// PyQuest Curriculum  —  16 Worlds, 83 Lessons
// Every lesson: tutorial (Learn tab) + challenge (Practice tab)
// Tutorial code uses  # ←  to explain each line  and  # →  to show output
// ─────────────────────────────────────────────────────────────────────────────

export const WORLDS = [

  // ── WORLD 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'variables', name: 'Variables Valley', emoji: '🏔️', color: '#5B8FF9', subtitle: 'Store and name your data', difficulty: 'beginner',
    lessons: [
      {
        id: 'start-0', title: 'Your First Python Program', xp: 10,
        isIntro: true,
        tutorial: [{
          heading: "Press ▶ Run — just see what happens",
          text: "Don't try to understand every part yet. Just run it and watch the result appear. We'll explain exactly what happened right after.",
          code: 'print("Hello, World!")',
          lineHighlights: [
            { lines: [0], note: 'print() is an action. It tells Python: "show this on screen".' },
            { lines: [0], note: '"Hello, World!" is text. In Python, all text lives inside " " quotation marks.' },
          ],
          modifyPrompt: 'Change "Hello, World!" to your own message — like "Hello, I\'m learning Python!" — then press ▶ Run again.',
        }],
        description: 'print() shows text on screen. Text always goes inside "quotes".',
        challenge: 'Use print() to show your own name on screen.',
        nudge: 'Look at the example above. What goes inside the print( ) brackets? Try the same pattern with your own name.',
        hint: 'print("Your Name")',
        starterCode: '# Show your name on screen\nprint()\n',
        test: {},
      },
      {
        id: 'var-1', title: 'What is a Variable?', xp: 20,
        tutorial: [{
          heading: 'Variables are labeled boxes',
          text: 'A variable stores a piece of information and gives it a name. You create one by writing a name, an = sign, then the value. Python remembers it for the rest of your program.',
          code:
`# Variables store information
name = "Alice"      # ← text always goes inside " " quotes
age  = 25           # ← numbers never need quotes
city = "New York"   # ← another text variable

# Show the values on screen with print()
print(name)         # → Alice
print(age)          # → 25
print(city)         # → New York`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'Each line creates a variable — a named box. The = sign means "store this value in the box".' },
            { lines: [6, 7, 8], note: 'print() shows what\'s stored in a variable. The variable name goes inside the ( ) brackets.' },
          ],
          modifyPrompt: 'Change "Alice" to your own name and 25 to your age — then Run to see the output update!',
        }],
        description: 'Variables store values. You name them, Python remembers them.',
        challenge: 'Create a variable called `greeting` set to `"Hello, PyQuest!"` and print it.',
        nudge: 'Think about how the example stored "Alice" in a variable called name. Do the same thing — but call your variable `greeting` and store "Hello, PyQuest!" in it.',
        hint: 'greeting = "Hello, PyQuest!"\nprint(greeting)',
        retrieval: {
          q: 'What does the = sign do in Python?',
          options: ['Compares two values to check if they\'re equal', 'Stores a value inside a variable', 'Prints a value on screen', 'Adds two numbers together'],
          answer: 1,
          explain: '= means "store this value". The value on the right goes into the box named on the left. To compare values, Python uses == (double equals).',
        },
        starterCode: '# Create a variable and print it\ngreeting = \n',
        test: { contains: ['Hello, PyQuest!'] },
      },
      {
        id: 'var-2', title: 'Text Variables (Strings)', xp: 25,
        tutorial: [{
          heading: 'Text is called a "string"',
          text: 'Anything inside quotes is a string — letters, words, sentences, even numbers written as text. You can use " " or \' \' quotes, both work.',
          code:
`# Strings = text in quotes
first_name = "Emma"          # ← double quotes work
last_name  = 'Watson'        # ← single quotes also work
sentence   = "I love Python" # ← spaces are fine inside

# Join two strings with +
full_name = first_name + " " + last_name
print(full_name)             # → Emma Watson
print(sentence)              # → I love Python`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'Strings are text values that live inside " " or \' \' quotes. Both work the same way — pick one and be consistent.' },
            { lines: [6], note: 'The + operator joins two strings together. Notice the " " space — without it the names would be squished together.' },
            { lines: [7, 8], note: 'print() shows the final result. full_name now holds the joined text.' },
          ],
          modifyPrompt: 'Change "Emma" to your first name and "Watson" to your last name — then Run to see your full name!',
        }],
        description: 'Strings are text values. They always need quote marks around them.',
        challenge: 'Create variables `first` and `last` with your first and last name. Print them joined together with a space between.',
        nudge: 'You need two variables — one called `first`, one called `last`. Each stores text in quotes. Then print them joined: first + " " + last.',
        hint: 'first = "Your"\nlast = "Name"\nprint(first + " " + last)',
        retrieval: {
          q: 'Which of these correctly stores text in Python?',
          options: ['name = Alice', 'name = "Alice"', 'name == "Alice"', 'name : Alice'],
          answer: 1,
          explain: 'Text (strings) always need " " or \' \' quote marks around them. Without quotes, Python thinks Alice is a variable name and crashes.',
        },
        starterCode: 'first = \nlast  = \nprint(first + " " + last)\n',
        test: { contains: [' '] },
      },
      {
        id: 'var-3', title: 'Number Variables', xp: 25,
        tutorial: [
          {
            heading: 'Integers — whole numbers',
            text: 'Integers are whole numbers (no decimal point). You can do math with them using +, -, *, and /.',
            code:
`# Integers are whole numbers
apples  = 5          # ← whole number, no quotes
oranges = 3

total = apples + oranges    # ← addition
diff  = apples - oranges    # ← subtraction
prod  = apples * oranges    # ← multiplication

print(total)         # → 8
print(diff)          # → 2
print(prod)          # → 15`,
          lineHighlights: [
            { lines: [1, 2], note: 'Numbers don\'t need quotes — just write the digits directly. Python knows they\'re numbers.' },
            { lines: [4, 5, 6], note: '+ adds, - subtracts, * multiplies. The result gets stored in a new variable.' },
            { lines: [8, 9, 10], note: 'Each print() shows the calculated result.' },
          ],
          modifyPrompt: 'Change apples to 10 and oranges to 4. What does the math give you? Run to find out!',
          },
          {
            heading: 'Floats — decimal numbers',
            text: 'Floats are numbers with a decimal point. Use them for prices, measurements, or anything that needs a fraction.',
            code:
`# Floats have a decimal point
price    = 9.99       # ← decimal number
tax_rate = 0.08       # ← 8% tax
tax      = price * tax_rate

print(price)          # → 9.99
print(tax)            # → 0.7992
print(price + tax)    # → 10.7892`,
          },
        ],
        description: 'Numbers can be integers (whole) or floats (decimal). No quotes needed.',
        challenge: 'Create `price = 50` and `discount = 10`. Calculate and print the final price after discount.',
        nudge: 'You need to subtract discount from price. Store the result in a new variable called `final`, then print it.',
        hint: 'final = price - discount\nprint(final)',
        retrieval: {
          q: 'What is the correct way to store the number 50 in Python?',
          options: ['price = "50"', 'price = 50', 'price = int("50")', 'price == 50'],
          answer: 1,
          explain: 'Numbers never need quotes. price = 50 stores an integer. price = "50" would store text — you couldn\'t do math with it.',
        },
        starterCode: 'price    = 50\ndiscount = 10\n# Calculate final price\n',
        test: { contains: ['40'] },
      },
      {
        id: 'var-4', title: 'True or False (Booleans)', xp: 20,
        tutorial: [{
          heading: 'Booleans are Yes or No answers',
          text: 'A boolean can only be True or False — capital T and capital F. Python uses booleans to make decisions in your code.',
          code:
`# Booleans — only True or False
is_raining = True      # ← capital T
is_sunny   = False     # ← capital F
has_wifi   = True

print(is_raining)      # → True
print(is_sunny)        # → False
print(has_wifi)        # → True

# Comparisons give you a boolean:
print(5 > 3)           # → True  (5 is greater than 3)
print(2 > 10)          # → False (2 is NOT greater than 10)`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'True and False must start with a capital letter. Python is case-sensitive — true (lowercase) would crash.' },
            { lines: [5, 6, 7], note: 'print() shows the boolean value stored in each variable.' },
            { lines: [10, 11], note: 'Comparisons like > automatically produce True or False. Python evaluates the math for you.' },
          ],
          modifyPrompt: 'Change is_raining to False and is_sunny to True — what do the print lines show now?',
        }],
        description: 'Booleans are True or False. Always capitalize them in Python.',
        challenge: 'Create `is_learning = True` and `is_bored = False`. Print both.',
        nudge: 'You need two variables. `is_learning` should be True (capital T) and `is_bored` should be False (capital F). Then print both.',
        hint: 'is_learning = True\nis_bored = False\nprint(is_learning)\nprint(is_bored)',
        retrieval: {
          q: 'How do you write True and False in Python?',
          options: ['true and false (all lowercase)', 'True and False (capital first letter)', '"True" and "False" (in quotes)', 'TRUE and FALSE (all caps)'],
          answer: 1,
          explain: 'Python is case-sensitive. True and False must start with a capital letter. Writing true or TRUE would cause a NameError.',
        },
        starterCode: 'is_learning = \nis_bored    = \nprint(is_learning)\nprint(is_bored)\n',
        test: { contains: ['True', 'False'] },
      },
      {
        id: 'var-none', title: 'The None Value', xp: 20,
        tutorial: [{
          heading: 'None means "nothing" or "empty"',
          text: 'None is a special value in Python that means "there is nothing here." It is different from 0, False, or an empty string — those are real values. None is the complete absence of a value.',
          code:
`# None means "nothing"
empty_box = None       # ← this variable has no value yet
result    = None       # ← we don't know the answer yet

print(empty_box)       # → None
print(type(None))      # → <class 'NoneType'>

# Check if something is None:
if empty_box is None:
    print("The box is empty!")
# → The box is empty!

# Functions that don't return anything give back None:
def say_hi():
    print("Hi!")

x = say_hi()           # → Hi!
print(x)               # → None  (no return value!)`,
        }],
        description: 'None means "no value". Use `is None` to check for it. Functions without return give None.',
        challenge: 'Create a variable `result = None`. Check if it is None and print "No result yet!". Then set it to 42 and print it.',
        hint: 'result = None\nif result is None:\n    print("No result yet!")\nresult = 42\nprint(result)',
        starterCode: 'result = None\nif result is None:\n    print("No result yet!")\nresult = 42\nprint(result)\n',
        test: { contains: ['No result yet!', '42'] },
      },
      {
        id: 'var-type', title: 'Type Conversion', xp: 25,
        tutorial: [
          {
            heading: 'Changing one type into another',
            text: 'Python has built-in functions to convert between types. int() converts to integer, float() to decimal, str() to text, bool() to True/False. This is called "type casting".',
            code:
`# Convert text to number:
age_text = "25"          # ← this is a string, can't do math
age_num  = int(age_text) # ← now it's a proper integer
print(age_num + 1)       # → 26

# Convert number to float:
price    = int(9)
precise  = float(price)
print(precise)           # → 9.0

# Convert number to text (for joining):
score    = 95
message  = "Your score: " + str(score)
print(message)           # → Your score: 95

# Convert to bool:
print(bool(1))           # → True
print(bool(0))           # → False
print(bool("hello"))     # → True
print(bool(""))          # → False (empty string is False!)`,
          },
          {
            heading: 'What makes something True or False?',
            text: 'In Python, some values are "falsy" (they act like False): 0, 0.0, "", [], {}, None. Everything else is "truthy" (acts like True). This matters a lot in if statements.',
            code:
`# Falsy values — all act like False:
print(bool(0))         # → False
print(bool(0.0))       # → False
print(bool(""))        # → False  (empty string)
print(bool([]))        # → False  (empty list)
print(bool(None))      # → False

# Truthy values — all act like True:
print(bool(1))         # → True
print(bool(-5))        # → True
print(bool("hello"))   # → True
print(bool([1,2,3]))   # → True

# Useful shortcut — instead of len(items) > 0:
items = []
if not items:
    print("The list is empty!")  # → The list is empty!`,
          },
        ],
        description: 'int(), float(), str(), bool() convert between types. Empty/zero values are False.',
        challenge: '`price_text = "199"`. Convert it to an integer, add 50 tax, then convert back to string and print "Total: 249".',
        hint: 'price = int(price_text)\ntotal = price + 50\nprint("Total: " + str(total))',
        starterCode: 'price_text = "199"\nprice = int(price_text)\ntotal = price + 50\nprint("Total: " + str(total))\n',
        test: { contains: ['Total: 249'] },
      },
      {
        id: 'var-5', title: 'f-strings — Smart Text', xp: 30,
        tutorial: [{
          heading: 'Put variables inside text with f-strings',
          text: 'An f-string starts with f before the quote. Then you can put any variable inside { } curly braces — Python replaces it with the actual value.',
          code:
`name  = "Sam"
age   = 14
score = 95.5

# f-string: put f before the quote, use { } for variables
print(f"Hello, {name}!")               # → Hello, Sam!
print(f"You are {age} years old.")     # → You are 14 years old.
print(f"Your score is {score}/100")    # → Your score is 95.5/100

# You can even do math inside { }
print(f"Next year you'll be {age+1}")  # → Next year you'll be 15`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'First store values in variables — just like before.' },
            { lines: [5, 6, 7], note: 'The f before the quote activates f-string mode. Curly braces { } are like windows — Python peeks inside and replaces them with the real value.' },
            { lines: [10], note: 'You can even do math inside { }. Python calculates it and puts the answer in.' },
          ],
          modifyPrompt: 'Change "Sam" to your name and 14 to your age — see how f-strings automatically update with your values!',
        }],
        description: 'f-strings let you embed variables directly inside text. Put f before the quote and wrap variables in { }.',
        challenge: 'Variables `name` and `age` are set. Print: `My name is Alex and I am 16 years old.` using an f-string.',
        nudge: 'Start with print(f"..."). Inside the quotes, write your sentence. Where you want a variable to appear, use {name} or {age} with curly braces.',
        hint: 'print(f"My name is {name} and I am {age} years old.")',
        retrieval: {
          q: 'In an f-string, how do you insert a variable\'s value?',
          options: ['With ( ) round brackets: f"Hello (name)"', 'With { } curly braces: f"Hello {name}"', 'With [ ] square brackets: f"Hello [name]"', 'With + concatenation: f"Hello" + name'],
          answer: 1,
          explain: 'Curly braces { } are the "windows" in an f-string. Python looks inside and replaces them with the variable\'s actual value.',
        },
        starterCode: 'name = "Alex"\nage  = 16\n# Use an f-string to print the sentence\n',
        test: { contains: ['My name is', 'and I am', 'years old'] },
      },
      {
        id: 'var-6', title: 'Getting User Input', xp: 35,
        tutorial: [{
          heading: 'input() asks the user to type something',
          text: 'input() pauses your program and waits for the user to type. Whatever they type comes back as a string. Put a message inside input("...") to tell the user what to type.',
          code:
`# input() gets text from the user
name = input("What is your name? ")
# ↑ Python shows the message and waits for typing
# Whatever the user types is stored in 'name'

print(f"Hello, {name}!")
# → Hello, [whatever they typed]!

# input() always gives you a string, even for numbers:
age_text = input("How old are you? ")
age = int(age_text)    # ← convert to number with int()
print(f"Next year: {age + 1}")`,
        }],
        description: 'input() pauses the program and waits for the user to type. It always returns a string.',
        challenge: 'Ask the user for their name. Then print: `Welcome, {name}! Let\'s learn Python!`',
        hint: 'name = input("Enter your name: ")\nprint(f"Welcome, {name}! Let\'s learn Python!")',
        starterCode: '# Ask for the user\'s name\nname = input("Enter your name: ")\n# Now print the welcome message\n',
        test: { contains: ["Welcome,", "Let's learn Python!"], inputs: ['Jordan'] },
      },
    ],
  },

  // ── WORLD 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'operators', name: 'Operators Outpost', emoji: '🧮', color: '#FF7F7F', subtitle: 'Math and logic operations', difficulty: 'beginner',
    lessons: [
      {
        id: 'op-1', title: 'Math Operators', xp: 25,
        tutorial: [{
          heading: 'Python can do all kinds of math',
          text: 'Python has 7 math operators. The special ones: // divides and drops the decimal, % gives the remainder, and ** raises to a power.',
          code:
`a = 17
b = 5

print(a + b)    # → 22  (addition)
print(a - b)    # → 12  (subtraction)
print(a * b)    # → 85  (multiplication)
print(a / b)    # → 3.4 (division — always gives float)
print(a // b)   # → 3   (floor division — drops decimal)
print(a % b)    # → 2   (remainder: 17 = 3×5 + 2)
print(a ** 2)   # → 289 (17 to the power of 2)`,
          lineHighlights: [
            { lines: [0, 1], note: 'These two variables hold the numbers we will do math with.' },
            { lines: [3, 4, 5, 6], note: 'The four basic operators: add, subtract, multiply, divide. / always gives a decimal result.' },
            { lines: [7, 8], note: '// drops the decimal (floor division) and % gives the leftover after dividing.' },
            { lines: [9], note: '** raises a number to a power — here 17² = 289.' },
          ],
        }],
        description: 'Python has +, -, *, /, // (floor divide), % (remainder), ** (power).',
        challenge: '`a = 20`, `b = 6`. Print the result of: a plus b, a times b, a divided by b (floor), and a to the power of 2.',
        hint: 'print(a + b)\nprint(a * b)\nprint(a // b)\nprint(a ** 2)',
        starterCode: 'a = 20\nb = 6\n# Print 4 results\n',
        test: { contains: ['26', '120', '3', '400'] },
      },
      {
        id: 'op-2', title: 'Comparison Operators', xp: 25,
        tutorial: [{
          heading: 'Compare two values — get True or False',
          text: 'Comparison operators check the relationship between two values and always return True or False. Note: == checks equality (two equal signs), = assigns a value (one equal sign).',
          code:
`x = 10
y = 20

print(x == y)   # → False  (is x equal to y?)
print(x != y)   # → True   (is x NOT equal to y?)
print(x < y)    # → True   (is x less than y?)
print(x > y)    # → False  (is x greater than y?)
print(x <= 10)  # → True   (less than OR equal to)
print(x >= 10)  # → True   (greater than OR equal to)`,
          lineHighlights: [
            { lines: [0, 1], note: 'Two variables to compare — every comparison below uses these.' },
            { lines: [3, 4], note: '== checks if values are exactly equal; != checks if they differ. Note: == is not the same as = (which assigns).' },
            { lines: [5, 6], note: '< and > check which side is smaller or larger — always returns True or False.' },
            { lines: [7, 8], note: '<= and >= also allow the values to be equal — True when they match too.' },
          ],
        }],
        description: 'Comparisons (==, !=, <, >, <=, >=) compare two values and give True or False.',
        challenge: 'Set `score = 85`. Print whether score is greater than 50, equal to 85, and not equal to 100.',
        hint: 'print(score > 50)\nprint(score == 85)\nprint(score != 100)',
        starterCode: 'score = 85\n# Print three comparisons\n',
        test: { contains: ['True', 'True', 'True'] },
      },
      {
        id: 'op-3', title: 'Assignment Operators', xp: 25,
        tutorial: [{
          heading: 'Shortcuts for updating a variable',
          text: 'Instead of writing `score = score + 10` every time, Python has shortcut operators. += adds to the current value, -= subtracts, *= multiplies, and /= divides.',
          code:
`score = 100
print(score)      # → 100

score += 50       # same as: score = score + 50
print(score)      # → 150

score -= 20       # same as: score = score - 20
print(score)      # → 130

score *= 2        # same as: score = score * 2
print(score)      # → 260

score //= 5       # same as: score = score // 5
print(score)      # → 52`,
          lineHighlights: [
            { lines: [0, 1], note: 'Start with score = 100 and print it to see the starting value.' },
            { lines: [3, 4], note: '+= adds 50 to whatever score currently holds — no need to write score = score + 50.' },
            { lines: [6, 7], note: '-= subtracts 20 from the current value. Score drops from 150 to 130.' },
            { lines: [9, 10, 12, 13], note: '*= multiplies in place, //= floor-divides in place — same shortcut pattern.' },
          ],
        }],
        description: 'Assignment operators (+=, -=, *=, /=) update a variable in place.',
        challenge: 'Start with `coins = 10`. Add 5, then multiply by 3, then subtract 7. Print the final result.',
        hint: 'coins += 5\ncoins *= 3\ncoins -= 7\nprint(coins)',
        starterCode: 'coins = 10\n# Update coins step by step\n',
        test: { contains: ['38'] },
      },
      {
        id: 'op-4', title: 'Logical Operators', xp: 30,
        tutorial: [{
          heading: 'Combine conditions with and, or, not',
          text: '`and` is True only when BOTH sides are True. `or` is True when AT LEAST ONE side is True. `not` flips True to False and False to True.',
          code:
`age    = 16
has_id = True

# 'and' — both must be True
print(age >= 18 and has_id)   # → False (age fails)

# 'or' — at least one must be True
print(age >= 18 or has_id)    # → True (has_id is True)

# 'not' — flips the value
print(not has_id)             # → False (flips True → False)

# Combine them
is_teen = age >= 13 and age <= 19
print(is_teen)                # → True`,
          lineHighlights: [
            { lines: [0, 1], note: 'Two variables: a number and a boolean (True/False). Both will be used in the checks below.' },
            { lines: [3, 4], note: 'and requires BOTH sides to be True. age >= 18 is False, so the whole thing is False.' },
            { lines: [6, 7], note: 'or only needs ONE side to be True. has_id is True, so the result is True.' },
            { lines: [9, 10, 13, 14, 15], note: 'not flips a boolean. You can also chain operators — here and checks if age is between 13 and 19.' },
          ],
        }],
        description: '`and` needs both to be True. `or` needs at least one. `not` flips the value.',
        challenge: '`temp = 22`, `is_raining = False`. Print True if it\'s warm (temp > 20) AND not raining.',
        hint: 'print(temp > 20 and not is_raining)',
        starterCode: 'temp = 22\nis_raining = False\n# Check warm AND not raining\n',
        test: { contains: ['True'] },
      },
      {
        id: 'op-5', title: 'Order of Operations', xp: 25,
        tutorial: [{
          heading: 'Python follows math order (PEMDAS)',
          text: 'Python calculates in this order: Parentheses first, then Powers, then Multiply/Divide, then Add/Subtract. Use parentheses ( ) to control the order.',
          code:
`# Without parentheses — multiply happens first
result = 2 + 3 * 4
print(result)         # → 14  (not 20!)

# With parentheses — addition happens first
result = (2 + 3) * 4
print(result)         # → 20

# Complex example
total = 100 - 2 ** 3 + 10 / 2
#             ↑ 8        ↑ 5
print(total)          # → 97.0  (100 - 8 + 5)

# Always use () when you're not sure
clear = (100 - 8) + 5
print(clear)          # → 97`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'Without parentheses, * runs before + — Python computes 3 * 4 first, then adds 2. Result: 14.' },
            { lines: [4, 5, 6], note: 'Parentheses force addition first — (2 + 3) = 5, then 5 * 4 = 20. Order matters!' },
            { lines: [8, 9, 10, 11], note: 'A complex expression: ** and / run before - and +. The comment tracks each step.' },
            { lines: [13, 14, 15], note: 'When unsure, use parentheses to make the order obvious — clearer code is better code.' },
          ],
        }],
        description: 'Python follows PEMDAS: Parentheses, Powers, Multiply/Divide, Add/Subtract.',
        challenge: 'Calculate: `(4 + 6) * 3 - 2 ** 2`. Print the result (should be 26).',
        hint: 'result = (4 + 6) * 3 - 2 ** 2\nprint(result)',
        starterCode: '# Calculate and print the result\nresult = \nprint(result)\n',
        test: { contains: ['26'] },
      },
    ],
  },

  // ── WORLD 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'conditions', name: 'Conditions Canyon', emoji: '🏜️', color: '#FFB347', subtitle: 'Make decisions with if/else', difficulty: 'beginner',
    lessons: [
      {
        id: 'cond-1', title: 'The if Statement', xp: 30,
        tutorial: [{
          heading: 'if runs code only when something is True',
          text: 'The if statement checks a condition. If it\'s True, the indented code below runs. If it\'s False, Python skips it. The colon : and indentation (4 spaces) are required.',
          code:
`temperature = 30

if temperature > 25:
    print("It is hot!")       # ← runs because 30 > 25 is True
    print("Drink water.")     # ← also inside the if block

print("This always runs.")    # ← outside the if, always runs

# Now try with a False condition:
points = 5
if points > 100:
    print("You win!")         # ← skipped because 5 > 100 is False`,
          lineHighlights: [
            { lines: [0], note: 'Set the variable — this is the value the if condition will test.' },
            { lines: [2, 3, 4], note: 'The if statement: condition on line 2, then indented code below that only runs when it is True.' },
            { lines: [6], note: 'This line is NOT indented — it lives outside the if block, so it always runs.' },
            { lines: [9, 10, 11], note: '5 > 100 is False, so Python skips the indented print entirely — nothing is printed.' },
          ],
        }],
        description: 'if runs the indented block only when the condition is True.',
        challenge: 'Set `score = 80`. If score is greater than 50, print `"You passed!"`',
        hint: 'if score > 50:\n    print("You passed!")',
        starterCode: 'score = 80\n# Write the if statement\n',
        test: { contains: ['You passed!'] },
      },
      {
        id: 'cond-2', title: 'if / else', xp: 30,
        tutorial: [{
          heading: 'else runs when the condition is False',
          text: '`else` is the "otherwise" block. If the if condition is True, the if block runs. If it\'s False, the else block runs instead. Exactly one of them always runs.',
          code:
`age = 15

if age >= 18:
    print("You can vote.")       # ← runs if age >= 18
else:
    print("Too young to vote.")  # ← runs if age < 18

# With age = 15, output → Too young to vote.

# Another example:
number = 7
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
# → 7 is odd`,
          lineHighlights: [
            { lines: [0], note: 'age = 15 — this will be tested by the if condition below.' },
            { lines: [2, 3, 4, 5], note: 'if and else form a pair — exactly one block always runs. Age 15 fails >= 18, so else runs.' },
            { lines: [10, 11, 12, 13, 14], note: 'Another example: % checks for even/odd. 7 divided by 2 leaves a remainder, so it is odd.' },
          ],
        }],
        description: 'else provides the alternative when the if condition is False.',
        challenge: '`temperature = 15`. Print `"Wear a coat!"` if below 18, else print `"Enjoy the weather!"`',
        hint: 'if temperature < 18:\n    print("Wear a coat!")\nelse:\n    print("Enjoy the weather!")',
        starterCode: 'temperature = 15\n# if / else here\n',
        test: { contains: ['Wear a coat!'] },
      },
      {
        id: 'cond-3', title: 'elif — Multiple Choices', xp: 35,
        tutorial: [{
          heading: 'elif adds more options between if and else',
          text: 'elif means "else if" — check another condition. Python checks them in order and runs the first one that\'s True. Only one block ever runs.',
          code:
`score = 72

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")      # ← this runs (72 >= 70 is True)
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# → Grade: C`,
          lineHighlights: [
            { lines: [0], note: 'score = 72 — this one value will be tested against every condition in order.' },
            { lines: [2, 3, 4, 5], note: 'Python checks if and the first elif first. Both fail for 72, so it keeps moving down.' },
            { lines: [6, 7], note: '72 >= 70 is True — this elif wins and its print runs. Python stops checking the rest.' },
            { lines: [8, 9, 10, 11], note: 'These are all skipped because a match was already found — only one block ever runs.' },
          ],
        }],
        description: 'elif checks additional conditions when the previous ones were False.',
        challenge: '`hour = 14`. Print "Good morning" if hour < 12, "Good afternoon" if hour < 18, else "Good evening".',
        hint: 'if hour < 12:\n    print("Good morning")\nelif hour < 18:\n    print("Good afternoon")\nelse:\n    print("Good evening")',
        starterCode: 'hour = 14\n# Add if / elif / else\n',
        test: { contains: ['Good afternoon'] },
      },
      {
        id: 'cond-4', title: 'Nested Conditions', xp: 35,
        tutorial: [{
          heading: 'if inside if — checking two things',
          text: 'You can put an if inside another if. The inner if only runs when the outer if is already True. Indent each level with 4 more spaces.',
          code:
`has_ticket = True
age = 12

if has_ticket:
    print("You have a ticket!")
    if age >= 13:
        print("You can see the movie.")
    else:
        print("Sorry, this movie is 13+.")
else:
    print("Buy a ticket first!")

# Output:
# → You have a ticket!
# → Sorry, this movie is 13+.`,
          lineHighlights: [
            { lines: [0, 1], note: 'Two variables — each will be checked at a different level of the nested structure.' },
            { lines: [3, 4], note: 'Outer if: has_ticket is True, so we enter this block and print the ticket message.' },
            { lines: [5, 6, 7, 8], note: 'Inner if/else only runs because we are already inside the outer if. Age 12 fails >= 13, so else runs.' },
            { lines: [9, 10], note: 'Outer else is skipped entirely because has_ticket was True — we never reach it.' },
          ],
        }],
        description: 'Nested ifs let you check multiple conditions at different levels.',
        challenge: '`logged_in = True`, `is_admin = False`. If logged in AND admin: print "Welcome admin". If logged in but not admin: print "Welcome user". Else: print "Please log in".',
        hint: 'if logged_in:\n    if is_admin:\n        print("Welcome admin")\n    else:\n        print("Welcome user")\nelse:\n    print("Please log in")',
        starterCode: 'logged_in = True\nis_admin  = False\n# Nested if here\n',
        test: { contains: ['Welcome user'] },
      },
      {
        id: 'cond-5', title: 'One-Line if (Ternary)', xp: 30,
        tutorial: [{
          heading: 'Short if/else on one line',
          text: 'Python lets you write a simple if/else on a single line. The format is: `value_if_true if condition else value_if_false`. Great for simple choices.',
          code:
`age = 20

# Normal if/else:
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Same thing in one line (ternary):
status = "adult" if age >= 18 else "minor"
print(status)          # → adult

# Use it directly in print:
score = 75
print("Pass" if score >= 60 else "Fail")  # → Pass`,
          lineHighlights: [
            { lines: [0], note: 'age = 20 — this value drives both the normal and the one-line version below.' },
            { lines: [2, 3, 4, 5, 6], note: 'The normal if/else takes 4 lines to assign status. It works, but it is verbose.' },
            { lines: [8, 9, 10], note: 'The ternary does the same thing in one line: value_if_true if condition else value_if_false.' },
            { lines: [12, 13, 14], note: 'You can write the ternary directly inside print() — no separate variable needed.' },
          ],
        }],
        description: 'A one-line if/else: `value_if_true if condition else value_if_false`.',
        challenge: '`speed = 120`. Use a one-line if/else to set `result = "Speeding"` if speed > 100, else `"OK"`. Print result.',
        hint: 'result = "Speeding" if speed > 100 else "OK"\nprint(result)',
        starterCode: 'speed = 120\n# One-line if/else\nresult = \nprint(result)\n',
        test: { contains: ['Speeding'] },
      },
    ],
  },

  // ── WORLD 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'loops', name: 'Loops Lagoon', emoji: '🌊', color: '#3FF5A0', subtitle: 'Repeat code automatically', difficulty: 'beginner',
    lessons: [
      {
        id: 'loop-1', title: 'for Loops & range()', xp: 35,
        tutorial: [{
          heading: 'for repeats code a set number of times',
          text: 'A for loop runs the indented code once for each number in range(). range(5) gives 0,1,2,3,4. range(1,6) gives 1,2,3,4,5.',
          code:
`# range(5) → numbers 0,1,2,3,4
for i in range(5):
    print(i)
# → 0  1  2  3  4

print("---")

# range(1, 6) → numbers 1,2,3,4,5
for i in range(1, 6):
    print(i)
# → 1  2  3  4  5

print("---")

# range(0, 10, 2) → every 2nd number
for i in range(0, 10, 2):
    print(i)
# → 0  2  4  6  8`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'range(5) produces 0, 1, 2, 3, 4. The loop variable i gets each number in turn.' },
            { lines: [7, 8, 9], note: 'range(1, 6) starts at 1 instead of 0 — useful when you want natural counting numbers.' },
            { lines: [14, 15, 16], note: 'range(0, 10, 2) adds a step of 2 — it jumps every other number, giving 0, 2, 4, 6, 8.' },
          ],
        }],
        description: 'for loops repeat code. range() generates the numbers to loop over.',
        challenge: 'Print a countdown from 5 to 1 using a for loop. Use range(5, 0, -1).',
        hint: 'for i in range(5, 0, -1):\n    print(i)',
        starterCode: '# Print 5, 4, 3, 2, 1\nfor i in range(5, 0, -1):\n    print(i)\n',
        test: { contains: ['5', '4', '3', '2', '1'] },
      },
      {
        id: 'loop-2', title: 'Loop Over a List', xp: 35,
        tutorial: [{
          heading: 'Loop through every item in a list',
          text: 'You can use a for loop to go through every item in a list, one at a time. The variable (like `fruit`) gets each item in turn.',
          code:
`fruits = ["apple", "banana", "cherry", "mango"]

for fruit in fruits:
    print(fruit)
# → apple
# → banana
# → cherry
# → mango

# Do something with each item:
prices = [5, 12, 3, 8]
total = 0
for price in prices:
    total = total + price
print(f"Total: {total}")   # → Total: 28`,
          lineHighlights: [
            { lines: [0], note: 'A list of four fruits — the for loop will visit each one.' },
            { lines: [2, 3], note: 'Each time the loop runs, fruit gets the next item from the list, then print shows it.' },
            { lines: [10, 11, 12, 13], note: 'total starts at 0 and grows with each price — this is how you add up values in a loop.' },
            { lines: [14], note: 'Print the final total after the loop finishes — all four prices added together.' },
          ],
        }],
        description: 'for loops can iterate over any list, one item at a time.',
        challenge: '`animals = ["cat", "dog", "rabbit"]`. Loop over the list and print each animal.',
        hint: 'for animal in animals:\n    print(animal)',
        starterCode: 'animals = ["cat", "dog", "rabbit"]\n# Loop and print each\n',
        test: { contains: ['cat', 'dog', 'rabbit'] },
      },
      {
        id: 'loop-3', title: 'while Loops', xp: 40,
        tutorial: [{
          heading: 'while keeps looping as long as True',
          text: 'A while loop checks its condition before every repeat. If True, the code runs again. If False, the loop stops. Always make sure the condition eventually becomes False!',
          code:
`count = 1
while count <= 5:
    print(count)
    count += 1        # ← IMPORTANT: must change count or it loops forever!
# → 1  2  3  4  5

# Guessing game style:
lives = 3
while lives > 0:
    print(f"Lives: {lives}")
    lives -= 1
# → Lives: 3
# → Lives: 2
# → Lives: 1`,
          lineHighlights: [
            { lines: [0], note: 'count starts at 1 — this variable is what the while condition tests each time.' },
            { lines: [1], note: 'The condition count <= 5 is checked BEFORE every repetition. When it becomes False, the loop stops.' },
            { lines: [2, 3], note: 'Print count, then increase it. Without count += 1 the condition never changes and the loop runs forever.' },
            { lines: [7, 8, 9, 10], note: 'Another while loop — lives counts down with -=. The loop stops as soon as lives reaches 0.' },
          ],
        }],
        description: 'while loops repeat as long as the condition stays True. Always update the variable!',
        challenge: 'Start `num = 1`. Use a while loop to print num while num <= 10, adding 3 each time (1, 4, 7, 10).',
        hint: 'num = 1\nwhile num <= 10:\n    print(num)\n    num += 3',
        starterCode: 'num = 1\n# while loop here\n',
        test: { contains: ['1', '4', '7', '10'] },
      },
      {
        id: 'loop-4', title: 'break and continue', xp: 35,
        tutorial: [{
          heading: 'break stops the loop, continue skips to next',
          text: '`break` exits the loop immediately. `continue` skips the rest of the current iteration and jumps to the next one.',
          code:
`# break — stop early
for i in range(10):
    if i == 5:
        break             # ← stops when i equals 5
    print(i)
# → 0  1  2  3  4

print("---")

# continue — skip certain values
for i in range(10):
    if i % 2 == 0:
        continue          # ← skip even numbers
    print(i)
# → 1  3  5  7  9`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'When i reaches 5, break exits the loop immediately — no more iterations happen after this.' },
            { lines: [4], note: 'print only runs when break has not triggered — so we only see 0 through 4.' },
            { lines: [10, 11, 12], note: 'continue skips the rest of this iteration and jumps straight to the next number in range.' },
            { lines: [13], note: 'print only runs for numbers that were not skipped — even numbers are skipped, so only odd ones print.' },
          ],
        }],
        description: '`break` exits a loop early. `continue` skips to the next iteration.',
        challenge: 'Loop from 1 to 20 with range. Skip multiples of 3 (use continue). Stop at 15 (use break). Print the rest.',
        hint: 'for i in range(1, 21):\n    if i == 15:\n        break\n    if i % 3 == 0:\n        continue\n    print(i)',
        starterCode: 'for i in range(1, 21):\n    # Skip multiples of 3, stop at 15\n    print(i)\n',
        test: { contains: ['1', '2', '4', '5', '7'] },
      },
      {
        id: 'loop-5', title: 'Nested Loops', xp: 40,
        tutorial: [{
          heading: 'A loop inside a loop',
          text: 'You can put a for loop inside another for loop. The inner loop completes ALL its iterations for every single iteration of the outer loop.',
          code:
`# Multiplication table corner
for row in range(1, 4):         # outer: 1, 2, 3
    for col in range(1, 4):     # inner: 1, 2, 3
        print(row * col, end=" ")
    print()    # ← new line after each row
# → 1 2 3
# → 2 4 6
# → 3 6 9`,
          lineHighlights: [
            { lines: [1], note: 'The outer loop runs 3 times — once for each row value (1, 2, 3).' },
            { lines: [2, 3], note: 'For every outer step, the inner loop runs all 3 col values and prints row * col on the same line.' },
            { lines: [4], note: 'After the inner loop finishes one full row, print() with no text moves to the next line.' },
          ],
        }],
        description: 'Nested loops run the inner loop completely for each step of the outer loop.',
        challenge: 'Print a 3×3 grid of stars (*). Each row has 3 stars separated by spaces.',
        hint: 'for row in range(3):\n    for col in range(3):\n        print("*", end=" ")\n    print()',
        starterCode: '# Print 3 rows of 3 stars each\nfor row in range(3):\n    pass  # replace this\n',
        test: { contains: ['* * *'] },
      },
      {
        id: 'loop-6', title: 'enumerate() and zip()', xp: 40,
        tutorial: [
          {
            heading: 'enumerate() gives index AND value',
            text: 'When looping over a list, enumerate() gives you both the position number (index) and the item at the same time.',
            code:
`fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# → 0: apple
# → 1: banana
# → 2: cherry

# Start counting from 1:
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# → 1. apple
# → 2. banana
# → 3. cherry`,
            lineHighlights: [
              { lines: [0], note: 'A list of fruits — enumerate() will add a position number to each item when looping.' },
              { lines: [2, 3], note: 'enumerate() gives TWO values each loop: the index (starting at 0) and the item itself.' },
              { lines: [8, 9, 10], note: 'start=1 tells enumerate to begin counting at 1 instead of 0 — handy for numbered lists.' },
            ],
          },
          {
            heading: 'zip() loops two lists together',
            text: 'zip() pairs up items from two lists so you can loop over both at the same time.',
            code:
`names  = ["Alice", "Bob", "Carol"]
scores = [95, 82, 78]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
# → Alice: 95
# → Bob: 82
# → Carol: 78`,
            lineHighlights: [
              { lines: [0, 1], note: 'Two separate lists — zip() will pair them up by position: index 0 with 0, index 1 with 1, and so on.' },
              { lines: [3], note: 'zip(names, scores) combines both lists — each loop step unpacks one item from each list.' },
              { lines: [4], note: 'Print both values together — name from the first list, score from the second, perfectly paired.' },
            ],
          },
        ],
        description: 'enumerate() adds an index to your loop. zip() pairs two lists together.',
        challenge: '`items = ["pen","book","ruler"]`, `prices = [1, 5, 2]`. Use zip to print each item with its price: `pen costs 1`.',
        hint: 'for item, price in zip(items, prices):\n    print(f"{item} costs {price}")',
        starterCode: 'items  = ["pen", "book", "ruler"]\nprices = [1, 5, 2]\n# zip and print\n',
        test: { contains: ['pen costs 1', 'book costs 5', 'ruler costs 2'] },
      },
    ],
  },

  // ── WORLD 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'lists', name: 'List Land', emoji: '📋', color: '#BC8CFF', subtitle: 'Collections of items', difficulty: 'beginner',
    lessons: [
      {
        id: 'list-1', title: 'Creating Lists', xp: 30,
        tutorial: [{
          heading: 'Lists hold many values in one variable',
          text: 'A list stores multiple items in order, inside square brackets [ ]. Items are separated by commas. A list can hold strings, numbers, booleans — or a mix.',
          code:
`# Create lists with [ ]
fruits   = ["apple", "banana", "cherry"]
numbers  = [10, 20, 30, 40, 50]
mixed    = ["Alice", 25, True, 3.14]
empty    = []

print(fruits)    # → ['apple', 'banana', 'cherry']
print(numbers)   # → [10, 20, 30, 40, 50]
print(len(fruits))   # → 3  (how many items)
print(len(empty))    # → 0`,
          lineHighlights: [
            { lines: [1, 2, 3, 4], note: 'Each of these creates a list — a named container holding multiple values at once. Notice the square brackets [ ] and commas separating items.' },
            { lines: [6, 7], note: 'print() shows the whole list, including the brackets, exactly as Python stores it.' },
            { lines: [8, 9], note: 'len() counts how many items are in the list — even an empty list returns 0.' },
          ],
        }],
        description: 'Lists hold multiple values in order inside [ ] brackets.',
        challenge: 'Create a list called `colors` with 4 color names. Print the list and its length.',
        hint: 'colors = ["red", "blue", "green", "yellow"]\nprint(colors)\nprint(len(colors))',
        starterCode: 'colors = []\nprint(colors)\nprint(len(colors))\n',
        test: { contains: ['4'] },
      },
      {
        id: 'list-2', title: 'Accessing & Slicing', xp: 35,
        tutorial: [
          {
            heading: 'Access items by their position (index)',
            text: 'Each item in a list has an index (position number) starting from 0. The first item is [0], second is [1]. Use negative numbers to count from the end: [-1] is the last item.',
            code:
`fruits = ["apple", "banana", "cherry", "mango"]
#index:      0         1         2         3

print(fruits[0])    # → apple   (first)
print(fruits[2])    # → cherry  (third)
print(fruits[-1])   # → mango   (last)
print(fruits[-2])   # → cherry  (second from last)`,
            lineHighlights: [
              { lines: [0, 1], note: 'The comment shows each item\'s index number. Counting always starts at 0, not 1.' },
              { lines: [3, 4], note: 'Positive indexes count forward from the start: [0] is first, [2] is third.' },
              { lines: [5, 6], note: 'Negative indexes count backward from the end: [-1] is always the last item.' },
            ],
          },
          {
            heading: 'Slicing — grab a portion of the list',
            text: 'A slice grabs multiple items. list[start:end] gives items from start up to (but not including) end.',
            code:
`nums = [10, 20, 30, 40, 50, 60]

print(nums[1:4])    # → [20, 30, 40]  (index 1,2,3)
print(nums[:3])     # → [10, 20, 30]  (from start to 3)
print(nums[3:])     # → [40, 50, 60]  (from 3 to end)
print(nums[::2])    # → [10, 30, 50]  (every 2nd item)
print(nums[::-1])   # → [60,50,40,30,20,10] (reversed)`,
            lineHighlights: [
              { lines: [0], note: 'This is the list we\'re slicing — six numbers at indexes 0 through 5.' },
              { lines: [2, 3, 4], note: '[start:end] grabs items from start up to (but not including) end. Omitting a side means "from the beginning" or "to the end".' },
              { lines: [5, 6], note: 'A third number [::step] controls the stride. -1 as the step walks the list backward, reversing it.' },
            ],
          },
        ],
        description: 'Access list items with [index]. Slice with [start:end].',
        challenge: '`letters = ["a","b","c","d","e","f"]`. Print the 3rd item, the last item, and items from index 2 to 4.',
        hint: 'print(letters[2])\nprint(letters[-1])\nprint(letters[2:5])',
        starterCode: 'letters = ["a", "b", "c", "d", "e", "f"]\n# Print 3rd item, last item, slice [2:5]\n',
        test: { contains: ['c', 'f'] },
      },
      {
        id: 'list-3', title: 'Modifying Lists', xp: 35,
        tutorial: [{
          heading: 'Add, remove, and change list items',
          text: 'Lists are mutable — you can change them after creating. append() adds to the end, insert() adds at a position, remove() deletes a value, pop() removes by index.',
          code:
`fruits = ["apple", "banana"]

fruits.append("cherry")      # add to end
print(fruits)   # → ['apple', 'banana', 'cherry']

fruits.insert(1, "mango")    # insert at index 1
print(fruits)   # → ['apple', 'mango', 'banana', 'cherry']

fruits.remove("banana")      # remove by value
print(fruits)   # → ['apple', 'mango', 'cherry']

fruits.pop()                 # remove last item
print(fruits)   # → ['apple', 'mango']

fruits[0] = "kiwi"           # change an item
print(fruits)   # → ['kiwi', 'mango']`,
          lineHighlights: [
            { lines: [2, 3], note: 'append() always adds the new item at the very end of the list.' },
            { lines: [5, 6], note: 'insert(1, "mango") puts "mango" at position 1, pushing everything else right.' },
            { lines: [8, 9, 11, 12], note: 'remove() deletes by value; pop() removes the last item. Both shrink the list.' },
            { lines: [14, 15], note: 'Assigning to an index replaces that item in place — the list stays the same length.' },
          ],
        }],
        description: 'Lists can be changed with append(), insert(), remove(), pop().',
        challenge: 'Start with `nums = [1, 2, 3]`. Append 4, insert 0 at position 0, remove 2. Print final list.',
        hint: 'nums.append(4)\nnums.insert(0, 0)\nnums.remove(2)\nprint(nums)',
        starterCode: 'nums = [1, 2, 3]\n# modify the list\nprint(nums)\n',
        test: { contains: ['0', '1', '3', '4'] },
      },
      {
        id: 'list-4', title: 'Useful List Methods', xp: 30,
        tutorial: [{
          heading: 'Built-in tools for working with lists',
          text: 'Python gives you many ready-made methods for lists. sort() orders the list, reverse() flips it, count() counts occurrences, and index() finds where an item is.',
          code:
`nums = [3, 1, 4, 1, 5, 9, 2, 6]

print(min(nums))        # → 1   (smallest)
print(max(nums))        # → 9   (largest)
print(sum(nums))        # → 31  (total)

nums.sort()
print(nums)             # → [1, 1, 2, 3, 4, 5, 6, 9]

nums.reverse()
print(nums)             # → [9, 6, 5, 4, 3, 2, 1, 1]

print(nums.count(1))    # → 2   (how many 1s?)
print(nums.index(5))    # → 2   (where is 5?)`,
          lineHighlights: [
            { lines: [2, 3, 4], note: 'min(), max(), and sum() are global functions that compute statistics about the whole list.' },
            { lines: [6, 7], note: 'sort() rearranges the list itself in ascending order — the original list is changed.' },
            { lines: [9, 10], note: 'reverse() flips the list in place — call it after sort() to get descending order.' },
            { lines: [12, 13], note: 'count() returns how many times a value appears; index() tells you where it lives.' },
          ],
        }],
        description: 'sort(), reverse(), min(), max(), sum(), count(), index() are powerful list tools.',
        challenge: '`scores = [85, 42, 91, 67, 55]`. Print the min, max, and sum. Then sort and print the sorted list.',
        hint: 'print(min(scores))\nprint(max(scores))\nprint(sum(scores))\nscores.sort()\nprint(scores)',
        starterCode: 'scores = [85, 42, 91, 67, 55]\n# min, max, sum, then sort\n',
        test: { contains: ['42', '91', '340'] },
      },
      {
        id: 'list-5', title: 'List Comprehensions', xp: 50,
        tutorial: [
          {
            heading: 'Build a list in one line',
            text: 'A list comprehension creates a new list by applying an expression to each item in another list — in a single, readable line.',
            code:
`# Normal way (4 lines):
squares = []
for n in range(1, 6):
    squares.append(n ** 2)
print(squares)          # → [1, 4, 9, 16, 25]

# Comprehension (1 line — same result):
squares = [n ** 2 for n in range(1, 6)]
print(squares)          # → [1, 4, 9, 16, 25]`,
            lineHighlights: [
              { lines: [1, 2, 3, 4], note: 'The traditional approach: start with an empty list, loop over numbers, and append each result one by one.' },
              { lines: [7, 8], note: 'The comprehension packs that entire loop into one line — expression first, then "for item in iterable".' },
            ],
          },
          {
            heading: 'Add a filter condition',
            text: 'You can add an `if` at the end to only include items that match a condition.',
            code:
`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Only even numbers, doubled:
evens = [n * 2 for n in numbers if n % 2 == 0]
print(evens)     # → [4, 8, 12, 16, 20]

# Words longer than 4 letters, uppercase:
words  = ["hi", "hello", "world", "ok", "python"]
long   = [w.upper() for w in words if len(w) > 4]
print(long)      # → ['HELLO', 'WORLD', 'PYTHON']`,
            lineHighlights: [
              { lines: [3], note: 'The `if n % 2 == 0` part is the filter — only items that pass the test get included.' },
              { lines: [4], note: 'Items that fail the filter (odd numbers) are silently skipped.' },
              { lines: [8, 9], note: 'You can filter and transform strings too — here only long words survive, and they\'re uppercased.' },
            ],
          },
        ],
        description: 'List comprehensions create lists in one line: `[expr for item in list if condition]`.',
        challenge: '`nums = [1..10]` using range. Use a comprehension to make a list of all odd numbers (1,3,5,7,9). Print it.',
        hint: 'odds = [n for n in range(1, 11) if n % 2 != 0]\nprint(odds)',
        starterCode: '# Create list of odd numbers 1-10 with a comprehension\nodds = \nprint(odds)\n',
        test: { contains: ['1, 3, 5, 7, 9'] },
      },
    ],
  },

  // ── WORLD 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'tuples', name: 'Tuple Town', emoji: '📦', color: '#FFD43B', subtitle: 'Fixed, unchangeable collections', difficulty: 'intermediate',
    lessons: [
      {
        id: 'tup-1', title: 'What are Tuples?', xp: 25,
        tutorial: [{
          heading: 'Tuples are lists you cannot change',
          text: 'Tuples use ( ) instead of [ ]. They work like lists — you can access items by index — but you cannot change, add, or remove items after creating them.',
          code:
`# Create a tuple with ( )
colors  = ("red", "green", "blue")
point   = (10, 20)      # x, y coordinate
rgb     = (255, 128, 0) # color value

print(colors)           # → ('red', 'green', 'blue')
print(colors[0])        # → red
print(len(colors))      # → 3

# Trying to change raises an error:
# colors[0] = "pink"   # ← TypeError! Tuples are immutable`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'Tuples use round brackets ( ) instead of square brackets. They can hold any mix of values.' },
            { lines: [5, 6, 7], note: 'You access items the same way as a list — by index with [ ]. len() works too.' },
            { lines: [9, 10], note: 'This is what makes tuples different: any attempt to change a value causes an error. They are permanently fixed.' },
          ],
        }],
        description: 'Tuples store multiple values in ( ) and cannot be changed.',
        challenge: 'Create a tuple `coordinates = (40, 75)` representing latitude and longitude. Print the tuple and each value separately.',
        hint: 'coordinates = (40, 75)\nprint(coordinates)\nprint(coordinates[0])\nprint(coordinates[1])',
        starterCode: 'coordinates = (40, 75)\nprint(coordinates)\nprint(coordinates[0])\nprint(coordinates[1])\n',
        test: { contains: ['(40, 75)', '40', '75'] },
      },
      {
        id: 'tup-2', title: 'Tuple Unpacking', xp: 30,
        tutorial: [{
          heading: 'Unpack a tuple into separate variables',
          text: 'You can assign all tuple values to individual variables in one line. The number of variables must match the number of items.',
          code:
`# Unpack a tuple into variables
person = ("Alice", 25, "London")
name, age, city = person       # ← unpacking

print(name)   # → Alice
print(age)    # → 25
print(city)   # → London

# Swap two variables using tuples:
x = 10
y = 20
x, y = y, x     # ← Python trick!
print(x, y)      # → 20 10`,
          lineHighlights: [
            { lines: [1, 2], note: 'Unpacking assigns all tuple values to separate variables in one line — Python matches them left to right.' },
            { lines: [4, 5, 6], note: 'Each variable now holds its own value, pulled directly from the tuple.' },
            { lines: [9, 10, 11, 12], note: 'The same trick swaps two variables without needing a temporary holder — Python evaluates the right side first.' },
          ],
        }],
        description: 'Tuple unpacking assigns each value to a separate variable in one line.',
        challenge: '`rgb = (255, 165, 0)`. Unpack it into `red, green, blue`. Print each with a label like `Red: 255`.',
        hint: 'red, green, blue = rgb\nprint(f"Red: {red}")\nprint(f"Green: {green}")\nprint(f"Blue: {blue}")',
        starterCode: 'rgb = (255, 165, 0)\n# Unpack and print with labels\n',
        test: { contains: ['Red: 255', 'Green: 165', 'Blue: 0'] },
      },
      {
        id: 'tup-3', title: 'Tuple vs List — When to Use Each', xp: 25,
        tutorial: [{
          heading: 'Lists change. Tuples stay fixed.',
          text: 'Use a list when the data might change (a shopping cart, scores). Use a tuple when the data should stay the same (coordinates, RGB values, days of the week).',
          code:
`# Use LIST for things that change:
shopping_cart = ["apples", "milk"]
shopping_cart.append("bread")    # ← can add items
print(shopping_cart)

# Use TUPLE for fixed data:
days_of_week  = ("Mon","Tue","Wed","Thu","Fri","Sat","Sun")
screen_size   = (1920, 1080)

# Tuples are also faster and use less memory
# You can check if something is in a tuple:
print("Mon" in days_of_week)  # → True
print("Xyz" in days_of_week)  # → False`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'A list makes sense here — a shopping cart changes as you add or remove items.' },
            { lines: [6, 7], note: 'Days of the week and screen dimensions never change, so a tuple is the right choice.' },
            { lines: [11, 12], note: 'The `in` keyword checks membership — it works on both lists and tuples.' },
          ],
        }],
        description: 'Use lists for data that changes, tuples for fixed data.',
        challenge: 'Create a tuple `seasons` with the 4 seasons. Print it, its length, and check if "Summer" is in it.',
        hint: 'seasons = ("Spring", "Summer", "Autumn", "Winter")\nprint(seasons)\nprint(len(seasons))\nprint("Summer" in seasons)',
        starterCode: 'seasons = ("Spring", "Summer", "Autumn", "Winter")\nprint(seasons)\nprint(len(seasons))\nprint("Summer" in seasons)\n',
        test: { contains: ['4', 'True'] },
      },
    ],
  },

  // ── WORLD 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'dicts', name: 'Dictionary Den', emoji: '🗂️', color: '#FF6B9D', subtitle: 'Look up data by key', difficulty: 'intermediate',
    lessons: [
      {
        id: 'dict-1', title: 'Creating Dictionaries', xp: 35,
        tutorial: [{
          heading: 'Dictionaries store key-value pairs',
          text: 'A dictionary maps keys to values, like a real dictionary maps words to definitions. Create with { }, separate key-value pairs with commas, and use : between key and value.',
          code:
`# Dictionary with key: value pairs
person = {
    "name":  "Alice",        # ← key: "name", value: "Alice"
    "age":   25,
    "city":  "London",
    "active": True
}

print(person)
# → {'name': 'Alice', 'age': 25, 'city': 'London', 'active': True}

print(len(person))    # → 4 (number of key-value pairs)`,
          lineHighlights: [
            { lines: [1, 6], note: 'Curly braces { } open and close the dictionary — everything inside is a key:value pair.' },
            { lines: [2, 3, 4, 5], note: 'Each line is one pair: a key (always a string here) followed by a colon, then its value.' },
            { lines: [8, 9], note: 'Printing the dictionary shows all pairs together in one view.' },
            { lines: [11], note: 'len() counts pairs, not individual values — this dict has 4 pairs so it returns 4.' },
          ],
        }],
        description: 'Dictionaries store key:value pairs inside { } curly braces.',
        challenge: 'Create a dict `book` with keys: "title", "author", "year", "pages". Print the whole dictionary.',
        hint: 'book = {\n    "title": "Python Basics",\n    "author": "Alice",\n    "year": 2024,\n    "pages": 300\n}\nprint(book)',
        starterCode: 'book = {\n    "title": ,\n    "author": ,\n    "year": ,\n    "pages": \n}\nprint(book)\n',
        test: { contains: ['title', 'author', 'year', 'pages'] },
      },
      {
        id: 'dict-2', title: 'Accessing & Modifying', xp: 35,
        tutorial: [{
          heading: 'Access and change values using keys',
          text: 'Use dict["key"] to get a value. Use .get() to avoid errors when the key might not exist. Assign to a key to update or add it.',
          code:
`person = {"name": "Alice", "age": 25, "city": "London"}

# Access a value:
print(person["name"])         # → Alice

# Safe access (no error if key missing):
print(person.get("age"))      # → 25
print(person.get("email", "not found"))  # → not found

# Change a value:
person["age"] = 26
print(person["age"])          # → 26

# Add a new key:
person["email"] = "alice@example.com"

# Delete a key:
del person["city"]
print(person)`,
          lineHighlights: [
            { lines: [3], note: 'Square brackets with the key name look up that value — like searching a real dictionary by word.' },
            { lines: [6, 7], note: '.get() is the safe version: it returns None (or a default you choose) instead of crashing when the key does not exist.' },
            { lines: [10, 13], note: 'Assigning to a key updates it if it exists, or creates a brand-new key-value pair if it does not.' },
            { lines: [16, 17], note: 'del removes the key and its value entirely from the dictionary.' },
          ],
        }],
        description: 'Access with ["key"], safely with .get(), update by assigning, delete with del.',
        challenge: '`student = {"name":"Sam","grade":7}`. Change grade to 8, add key "school" = "Oak School". Print both values.',
        hint: 'student["grade"] = 8\nstudent["school"] = "Oak School"\nprint(student["grade"])\nprint(student["school"])',
        starterCode: 'student = {"name": "Sam", "grade": 7}\n# Change and add\nprint(student["grade"])\nprint(student["school"])\n',
        test: { contains: ['8', 'Oak School'] },
      },
      {
        id: 'dict-3', title: 'Dictionary Methods', xp: 35,
        tutorial: [{
          heading: 'Keys, values, and items',
          text: '.keys() gives all keys, .values() gives all values, .items() gives both together. These are great for looping.',
          code:
`person = {"name": "Alice", "age": 25, "city": "London"}

print(person.keys())
# → dict_keys(['name', 'age', 'city'])

print(person.values())
# → dict_values(['Alice', 25, 'London'])

print(person.items())
# → dict_items([('name', 'Alice'), ('age', 25), ('city', 'London')])

# Loop over key-value pairs:
for key, value in person.items():
    print(f"{key}: {value}")`,
          lineHighlights: [
            { lines: [2, 3], note: '.keys() gives you just the labels — useful when you want to check what information the dictionary holds.' },
            { lines: [5, 6], note: '.values() gives you just the data — useful for calculations like summing all scores.' },
            { lines: [8, 9], note: '.items() pairs them back together as tuples — the most useful view for looping.' },
            { lines: [12, 13], note: 'Looping over .items() unpacks each pair into two variables so you can use both the key and value.' },
          ],
        }],
        description: '.keys(), .values(), .items() give you different views of a dictionary.',
        challenge: '`scores = {"Alice":90,"Bob":75,"Carol":88}`. Loop over .items() and print each as "Alice scored 90".',
        hint: 'for name, score in scores.items():\n    print(f"{name} scored {score}")',
        starterCode: 'scores = {"Alice": 90, "Bob": 75, "Carol": 88}\n# Loop and print\n',
        test: { contains: ['Alice scored 90', 'Bob scored 75', 'Carol scored 88'] },
      },
      {
        id: 'dict-4', title: 'Nested Dictionaries', xp: 40,
        tutorial: [{
          heading: 'Dictionaries inside dictionaries',
          text: 'A dictionary value can itself be a dictionary — this lets you represent complex data like a database record.',
          code:
`students = {
    "alice": {"grade": 90, "subject": "Math"},
    "bob":   {"grade": 75, "subject": "Science"},
}

# Access nested values:
print(students["alice"]["grade"])    # → 90
print(students["bob"]["subject"])    # → Science

# Loop over nested dict:
for name, info in students.items():
    print(f"{name}: {info['grade']} in {info['subject']}")`,
          lineHighlights: [
            { lines: [0, 3], note: 'The outer dictionary maps student names to inner dictionaries — each value is itself a { } dict.' },
            { lines: [1, 2], note: 'Each inner dictionary holds the actual data for that student.' },
            { lines: [6, 7], note: 'Chain two [ ] lookups to drill in: first get the student, then get the field you want.' },
            { lines: [10, 11], note: 'Loop with .items() to process every student; `info` is the inner dictionary for that student.' },
          ],
        }],
        description: 'Dictionaries can contain other dictionaries as values.',
        challenge: 'Create `library` with 2 books, each having "author" and "pages". Print the author of the first book.',
        hint: 'library = {\n    "Python Basics": {"author": "Alice", "pages": 300},\n    "Data Science":  {"author": "Bob",   "pages": 450}\n}\nprint(library["Python Basics"]["author"])',
        starterCode: 'library = {\n    "Python Basics": {"author": "Alice", "pages": 300},\n    "Data Science":  {"author": "Bob",   "pages": 450}\n}\n# Print author of "Python Basics"\n',
        test: { contains: ['Alice'] },
      },
      {
        id: 'dict-5', title: 'Dictionary Comprehensions', xp: 45,
        tutorial: [{
          heading: 'Build a dictionary in one line',
          text: 'Like list comprehensions, dictionary comprehensions create a dictionary with a single expression.',
          code:
`# Squares dictionary:
squares = {n: n**2 for n in range(1, 6)}
print(squares)
# → {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Filter: only even numbers
even_sq = {n: n**2 for n in range(1, 11) if n % 2 == 0}
print(even_sq)
# → {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Convert list to dict with index:
fruits = ["apple", "banana", "cherry"]
indexed = {i: fruit for i, fruit in enumerate(fruits)}
print(indexed)
# → {0: 'apple', 1: 'banana', 2: 'cherry'}`,
          lineHighlights: [
            { lines: [1], note: 'The format is {key: value for item in iterable} — the key and value can be any expression.' },
            { lines: [6], note: 'Add `if` at the end to filter which items become key-value pairs.' },
            { lines: [11, 12], note: 'enumerate() hands you both the position (i) and the value — perfect for building an index-based dictionary.' },
          ],
        }],
        description: 'Dict comprehensions: `{key: value for item in iterable if condition}`.',
        challenge: '`words = ["hello","world","python","code"]`. Make a dict of word:length pairs. Print it.',
        hint: 'lengths = {word: len(word) for word in words}\nprint(lengths)',
        starterCode: 'words = ["hello", "world", "python", "code"]\n# Dict comprehension: word → length\nlengths = \nprint(lengths)\n',
        test: { contains: ['hello', '5', 'python', '6'] },
      },
    ],
  },

  // ── WORLD 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'sets', name: 'Set Square', emoji: '🔵', color: '#4ECDC4', subtitle: 'Unique values, no duplicates', difficulty: 'intermediate',
    lessons: [
      {
        id: 'set-1', title: 'What are Sets?', xp: 25,
        tutorial: [{
          heading: 'Sets store unique values — no duplicates',
          text: 'A set uses { } like a dictionary but stores only values, not key-value pairs. Duplicates are automatically removed. Sets are unordered — you can\'t access by index.',
          code:
`# Create a set with { }
fruits = {"apple", "banana", "cherry", "apple"}
#                                        ↑ duplicate!
print(fruits)     # → {'apple', 'banana', 'cherry'}  (apple appears once)

numbers = {1, 2, 3, 2, 1, 4}
print(numbers)    # → {1, 2, 3, 4}  (duplicates removed)

# Create from a list (removes duplicates):
tags = set(["python", "coding", "python", "fun"])
print(tags)       # → {'python', 'coding', 'fun'}

print(len(fruits)) # → 3`,
          lineHighlights: [
            { lines: [1, 2, 3], note: '"apple" appears twice in the input, but the set automatically keeps only one copy.' },
            { lines: [5, 6], note: 'The same deduplication works with numbers — both 1 and 2 appear twice but each shows up once.' },
            { lines: [9, 10], note: 'Wrapping any list in set() is a quick way to strip all duplicates from it.' },
          ],
        }],
        description: 'Sets store unique values in { }. Duplicates are automatically removed.',
        challenge: '`nums = [1,2,3,2,1,4,3,5]`. Convert to a set to remove duplicates. Print the set and its length.',
        hint: 'unique = set(nums)\nprint(unique)\nprint(len(unique))',
        starterCode: 'nums = [1, 2, 3, 2, 1, 4, 3, 5]\nunique = set(nums)\nprint(unique)\nprint(len(unique))\n',
        test: { contains: ['5'] },
      },
      {
        id: 'set-2', title: 'Set Operations', xp: 30,
        tutorial: [{
          heading: 'Union, intersection, difference',
          text: 'Sets support mathematical operations: union (all unique items from both), intersection (items in both), and difference (items in one but not the other).',
          code:
`a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)       # → {1,2,3,4,5,6,7,8}  union (everything)
print(a & b)       # → {4, 5}              intersection (both)
print(a - b)       # → {1, 2, 3}           difference (a not in b)
print(b - a)       # → {6, 7, 8}           difference (b not in a)
print(a ^ b)       # → {1,2,3,6,7,8}       symmetric difference`,
          lineHighlights: [
            { lines: [0, 1], note: 'Two sets that share some values — 4 and 5 appear in both. The operations below work on this overlap.' },
            { lines: [3, 4], note: '| (union) combines everything; & (intersection) keeps only the shared values.' },
            { lines: [5, 6, 7], note: '- removes one set\'s items from the other; ^ keeps items that appear in exactly one set (not both).' },
          ],
        }],
        description: '| = union, & = intersection, - = difference, ^ = symmetric difference.',
        challenge: '`class_a = {"Alice","Bob","Carol"}`, `class_b = {"Bob","Dave","Carol"}`. Print students in both classes.',
        hint: 'both = class_a & class_b\nprint(both)',
        starterCode: 'class_a = {"Alice", "Bob", "Carol"}\nclass_b = {"Bob", "Dave", "Carol"}\n# Students in BOTH classes\n',
        test: { contains: ['Bob', 'Carol'] },
      },
      {
        id: 'set-3', title: 'Modifying Sets', xp: 25,
        tutorial: [{
          heading: 'Add and remove items from a set',
          text: 'add() adds one item, update() adds many, remove() deletes an item (error if missing), discard() deletes safely (no error if missing).',
          code:
`colors = {"red", "blue"}

colors.add("green")
print(colors)     # → {'red', 'blue', 'green'}

colors.update(["yellow", "purple"])
print(colors)     # → {'red', 'blue', 'green', 'yellow', 'purple'}

colors.remove("red")    # ← error if "red" not in set
print(colors)

colors.discard("pink")  # ← no error even if "pink" missing
print("Done!")

print("blue" in colors)  # → True (membership test)`,
          lineHighlights: [
            { lines: [2, 3], note: 'add() inserts a single item — if it is already in the set, nothing changes (no duplicate).' },
            { lines: [5, 6], note: 'update() adds many items at once from any iterable like a list.' },
            { lines: [8, 11], note: 'remove() crashes if the item is not there; discard() is the safe version that silently does nothing.' },
            { lines: [14], note: 'The `in` keyword is the standard way to check if a value exists in a set — very fast.' },
          ],
        }],
        description: 'add(), update(), remove(), discard() modify sets. Use `in` to check membership.',
        challenge: 'Create `animals = {"cat","dog"}`. Add "rabbit", add "bird" and "fish" at once. Remove "dog". Print final set.',
        hint: 'animals.add("rabbit")\nanimals.update(["bird","fish"])\nanimals.remove("dog")\nprint(animals)',
        starterCode: 'animals = {"cat", "dog"}\n# add, update, remove\nprint(animals)\n',
        test: { contains: ['cat', 'rabbit', 'bird', 'fish'] },
      },
    ],
  },

  // ── WORLD 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'strings', name: 'String Street', emoji: '🔤', color: '#F97316', subtitle: 'Master text manipulation', difficulty: 'intermediate',
    lessons: [
      {
        id: 'str-1', title: 'String Basics', xp: 25,
        tutorial: [{
          heading: 'Strings — text inside quotes',
          text: 'You already know strings have quotes. Let\'s explore more: len() tells the length, upper()/lower() change case, and strip() removes extra spaces.',
          code:
`text = "  Hello, World!  "

print(len(text))          # → 18  (spaces count!)
print(text.upper())       # → "  HELLO, WORLD!  "
print(text.lower())       # → "  hello, world!  "
print(text.strip())       # → "Hello, World!"  (removes edges spaces)
print(text.strip().upper())  # → "HELLO, WORLD!"`,
          lineHighlights: [
            { lines: [0], note: 'Creates a string with extra spaces on both sides — we will clean these up below.' },
            { lines: [2], note: 'len() counts every character including the spaces, so it returns 18, not 13.' },
            { lines: [3, 4], note: 'upper() converts every letter to capitals; lower() does the opposite — neither removes spaces.' },
            { lines: [5, 6], note: 'strip() removes spaces from both edges. Chaining .strip().upper() applies two methods in one expression.' },
          ],
        }],
        description: 'Strings have many built-in methods like upper(), lower(), strip(), and len().',
        challenge: '`message = "  python is awesome  "`. Strip spaces, convert to uppercase, and print it.',
        hint: 'message = "  python is awesome  "\nprint(message.strip().upper())',
        starterCode: 'message = "  python is awesome  "\n# strip then uppercase\nprint(message.strip().upper())\n',
        test: { contains: ['PYTHON IS AWESOME'] },
      },
      {
        id: 'str-2', title: 'String Searching', xp: 30,
        tutorial: [{
          heading: 'Find and check text inside strings',
          text: '`in` checks if text exists inside a string. find() returns the position. startswith() and endswith() check the beginning and end.',
          code:
`sentence = "Python is a great programming language"

print("Python" in sentence)          # → True
print("Java" in sentence)            # → False

print(sentence.find("great"))        # → 12  (position)
print(sentence.find("Java"))         # → -1  (not found)

print(sentence.startswith("Python")) # → True
print(sentence.endswith("language")) # → True
print(sentence.count("a"))           # → 5  (how many 'a' letters)`,
          lineHighlights: [
            { lines: [0], note: 'The string we will search inside for the examples below.' },
            { lines: [2, 3], note: 'The `in` keyword checks whether a piece of text exists anywhere in the string — it returns True or False.' },
            { lines: [5, 6], note: 'find() returns the index where the text starts, or -1 when it is not found at all.' },
            { lines: [8, 9, 10], note: 'startswith() and endswith() check the edges. count() tells you how many times a letter or word appears.' },
          ],
        }],
        description: '`in`, find(), startswith(), endswith(), count() search inside strings.',
        challenge: '`email = "user@example.com"`. Check if it contains "@", if it ends with ".com", and print both results.',
        hint: 'print("@" in email)\nprint(email.endswith(".com"))',
        starterCode: 'email = "user@example.com"\n# check @ and .com\nprint("@" in email)\nprint(email.endswith(".com"))\n',
        test: { contains: ['True', 'True'] },
      },
      {
        id: 'str-3', title: 'Replacing & Splitting', xp: 30,
        tutorial: [{
          heading: 'Replace text and split into a list',
          text: 'replace() swaps one piece of text for another. split() breaks a string into a list at every separator. join() is the opposite — it combines a list back into a string.',
          code:
`sentence = "I love cats and cats love me"

new = sentence.replace("cats", "dogs")
print(new)     # → I love dogs and dogs love me

# split() — string to list
words = sentence.split()     # ← splits on spaces by default
print(words)
# → ['I', 'love', 'cats', 'and', 'cats', 'love', 'me']

csv = "apple,banana,cherry"
fruits = csv.split(",")      # ← split on comma
print(fruits)  # → ['apple', 'banana', 'cherry']

# join() — list back to string
joined = " | ".join(fruits)
print(joined)  # → apple | banana | cherry`,
          lineHighlights: [
            { lines: [2, 3], note: 'replace() swaps every occurrence of the first word with the second — it updates the whole string at once.' },
            { lines: [6, 7], note: 'split() with no argument breaks on spaces, turning a sentence into a list of individual words.' },
            { lines: [10, 11, 12], note: 'You can split on any separator — here a comma turns a CSV line into a clean list.' },
            { lines: [15, 16], note: 'join() is the reverse of split: it glues a list into one string, placing the chosen separator between each item.' },
          ],
        }],
        description: 'replace() swaps text. split() makes a list. join() combines a list into a string.',
        challenge: '`csv = "red,green,blue,yellow"`. Split by comma, then join with " and " and print.',
        hint: 'colors = csv.split(",")\nprint(" and ".join(colors))',
        starterCode: 'csv = "red,green,blue,yellow"\ncolors = csv.split(",")\nprint(" and ".join(colors))\n',
        test: { contains: ['red and green and blue and yellow'] },
      },
      {
        id: 'str-4', title: 'String Formatting', xp: 35,
        tutorial: [
          {
            heading: 'f-strings with format spec',
            text: 'Inside f-string curly braces you can control how numbers look: .2f gives 2 decimal places, :>10 right-aligns in 10 characters, :,  adds thousands commas.',
            code:
`pi    = 3.14159265
price = 12345.6789
name  = "Alice"

print(f"Pi is {pi:.2f}")         # → Pi is 3.14
print(f"Pi is {pi:.4f}")         # → Pi is 3.1416
print(f"Price: \${price:,.2f}")   # → Price: $12,345.68

# Alignment
print(f"|{name:<10}|")   # → |Alice     |  left align
print(f"|{name:>10}|")   # → |     Alice|  right align
print(f"|{name:^10}|")   # → |  Alice   |  center`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'Store the numbers and name that we will format in different ways below.' },
            { lines: [4, 5], note: ':.2f and :.4f control decimal places — .2f rounds to 2, .4f keeps 4 digits after the point.' },
            { lines: [6], note: ':, adds thousands commas and :.2f rounds to 2 decimals — combined to display a price neatly.' },
            { lines: [9, 10, 11], note: ':<10, :>10, and :^10 align text in a 10-character-wide field — left, right, and center.' },
          ],
          },
          {
            heading: 'Multiline strings',
            text: 'Triple quotes (""" or \'\'\') let you write strings across multiple lines without needing \\n.',
            code:
`poem = """
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
"""
print(poem)

# Use in print directly:
print("""Line 1
Line 2
Line 3""")`,
          lineHighlights: [
            { lines: [0, 1, 2, 3, 4, 5], note: 'Triple quotes open and close a multiline string — everything inside, including line breaks, is part of the text.' },
            { lines: [6], note: 'Printing the variable shows all the lines exactly as you wrote them.' },
            { lines: [9, 10, 11], note: 'You can also write a multiline string directly inside print() without storing it in a variable first.' },
          ],
          },
        ],
        description: 'f-strings support format specs like :.2f (decimals), :> (align), :, (commas).',
        challenge: '`price = 9999.5`. Print it formatted as a dollar amount with 2 decimal places and comma: `$9,999.50`.',
        hint: 'print(f"${price:,.2f}")',
        starterCode: 'price = 9999.5\n# Format as $9,999.50\nprint(f"${price:,.2f}")\n',
        test: { contains: ['$9,999.50'] },
      },
      {
        id: 'str-5', title: 'String Indexing & Slicing', xp: 30,
        tutorial: [{
          heading: 'Strings work like lists of characters',
          text: 'You can access individual characters with [index] and grab portions with [start:end], just like lists.',
          code:
`word = "Python"
#index  0 1 2 3 4 5

print(word[0])     # → P  (first letter)
print(word[-1])    # → n  (last letter)
print(word[1:4])   # → yth (index 1,2,3)
print(word[:3])    # → Pyt (first 3)
print(word[3:])    # → hon (from 3 to end)
print(word[::-1])  # → nohtyP  (reversed!)

# Loop through characters:
for char in "Hi!":
    print(char)    # → H  i  !`,
          lineHighlights: [
            { lines: [0, 1], note: 'Each character has a numbered position (index) starting at 0 — the comment shows the index for each letter.' },
            { lines: [3, 4], note: 'word[0] gets the first character; word[-1] counts from the end and gives the last character.' },
            { lines: [5, 6, 7, 8], note: 'Slicing with [start:end] extracts a portion. Omitting start means "from the beginning", omitting end means "to the end". [::-1] reverses the string.' },
            { lines: [11, 12], note: 'A for loop steps through every character one at a time — strings are sequences, just like lists.' },
          ],
        }],
        description: 'String characters are accessed by index, just like list items.',
        challenge: '`word = "Wonderful"`. Print the first letter, last letter, and the first 4 letters.',
        hint: 'print(word[0])\nprint(word[-1])\nprint(word[:4])',
        starterCode: 'word = "Wonderful"\nprint(word[0])\nprint(word[-1])\nprint(word[:4])\n',
        test: { contains: ['W', 'l', 'Wond'] },
      },
      {
        id: 'str-6', title: 'Escape Sequences', xp: 25,
        tutorial: [{
          heading: 'Special characters with a backslash',
          text: 'Some characters can\'t be typed directly inside a string — like a new line or a tab. Python uses a backslash (\\) followed by a letter as a "secret code" for these special characters.',
          code:
`# \\n = new line (moves to next line)
print("Line 1\\nLine 2\\nLine 3")
# → Line 1
# → Line 2
# → Line 3

# \\t = tab (big space)
print("Name:\\tAlice")     # → Name:    Alice
print("Age:\\t25")         # → Age:     25

# \\\\ = a real backslash character
print("C:\\\\Users\\\\Alice")  # → C:\\Users\\Alice

# \\' and \\" = quote inside a string
print('It\\'s fine!')       # → It's fine!
print("She said \\"Hello\\"") # → She said "Hello"

# \\n in an f-string:
name = "Sam"
print(f"Hello {name}!\\nWelcome to Python.")
# → Hello Sam!
# → Welcome to Python.`,
          lineHighlights: [
            { lines: [1], note: '\\n is an escape sequence for a new line — Python inserts a line break wherever it appears in the string.' },
            { lines: [7, 8], note: '\\t inserts a tab character, creating a wide gap useful for aligning columns of text.' },
            { lines: [14, 15], note: "\\' and \\\" let you put quote marks inside a string without accidentally ending it early." },
            { lines: [19], note: 'Escape sequences work inside f-strings too — \\n here causes the welcome message to start on a new line.' },
          ],
        }],
        description: '\\n = newline, \\t = tab, \\\\ = backslash, \\\'=single quote, \\"=double quote.',
        challenge: 'Print a receipt with 3 lines: "Item: Coffee\\nPrice: $3.50\\nThank you!" using \\n escape sequences.',
        hint: 'print("Item: Coffee\\nPrice: $3.50\\nThank you!")',
        starterCode: '# Use \\n to print 3 lines at once\nprint("Item: Coffee\\nPrice: $3.50\\nThank you!")\n',
        test: { contains: ['Item: Coffee', 'Price:', 'Thank you!'] },
      },
    ],
  },

  // ── WORLD 10 ────────────────────────────────────────────────────────────────
  {
    id: 'functions', name: 'Functions Forest', emoji: '🌳', color: '#22C55E', subtitle: 'Reusable blocks of code', difficulty: 'intermediate',
    lessons: [
      {
        id: 'fn-1', title: 'Defining Functions', xp: 40,
        tutorial: [{
          heading: 'Functions are reusable blocks of code',
          text: 'A function lets you name a block of code and run it whenever you need it. Define with `def`, give it a name, add parentheses, then a colon. The code inside must be indented.',
          code:
`# Define a function with 'def'
def greet():
    print("Hello!")        # ← runs every time we call the function
    print("Welcome!")

# Call the function (run it):
greet()    # → Hello!  Welcome!
greet()    # → Hello!  Welcome!  (runs again!)

# Functions keep your code DRY (Don't Repeat Yourself)
def print_line():
    print("-" * 20)

print_line()   # → --------------------
print_line()   # → --------------------`,
          lineHighlights: [
            { lines: [1, 2, 3], note: 'def starts the function definition. The indented lines are the body — they run every time you call the function.' },
            { lines: [6, 7], note: 'Calling the function by name with () executes the body. You can call it as many times as you like.' },
            { lines: [10, 11], note: 'A second function — you can define as many as you need, each with its own name and body.' },
            { lines: [13, 14], note: 'Calling print_line() twice reuses the same code without copying it — this is what "DRY" means.' },
          ],
        }],
        description: 'def creates a reusable function. Call it by name with ().',
        challenge: 'Define a function `say_hello` that prints "Hello, PyQuest!" then calls it twice.',
        hint: 'def say_hello():\n    print("Hello, PyQuest!")\nsay_hello()\nsay_hello()',
        starterCode: '# Define the function\ndef say_hello():\n    pass  # replace this\n\nsay_hello()\nsay_hello()\n',
        test: { contains: ['Hello, PyQuest!', 'Hello, PyQuest!'] },
      },
      {
        id: 'fn-2', title: 'Parameters & Arguments', xp: 40,
        tutorial: [{
          heading: 'Pass data into functions with parameters',
          text: 'Parameters are variables in the function definition. Arguments are the actual values you pass when calling the function. They let functions work with different data each time.',
          code:
`# 'name' is the parameter
def greet(name):
    print(f"Hello, {name}!")

# 'Alice' and 'Bob' are arguments
greet("Alice")     # → Hello, Alice!
greet("Bob")       # → Hello, Bob!

# Multiple parameters:
def add(a, b):
    print(a + b)

add(3, 5)          # → 8
add(10, 20)        # → 30`,
          lineHighlights: [
            { lines: [1, 2], note: 'The parameter name in parentheses is a placeholder — it receives whatever value you pass when calling.' },
            { lines: [5, 6], note: 'Arguments are the actual values passed at call time. Each call can send different data.' },
            { lines: [9, 10], note: 'Functions can have multiple parameters — just list them separated by commas inside the parentheses.' },
            { lines: [12, 13], note: 'Each call passes two arguments that match parameters a and b in order.' },
          ],
        }],
        description: 'Parameters receive data. Pass arguments when calling the function.',
        challenge: 'Write a function `power(base, exp)` that prints `base` raised to the power `exp`. Call it with (2, 8) and (3, 3).',
        hint: 'def power(base, exp):\n    print(base ** exp)\npower(2, 8)\npower(3, 3)',
        starterCode: 'def power(base, exp):\n    pass  # replace\n\npower(2, 8)\npower(3, 3)\n',
        test: { contains: ['256', '27'] },
      },
      {
        id: 'fn-3', title: 'Return Values', xp: 45,
        tutorial: [{
          heading: 'return sends a result back',
          text: '`return` sends a value back from the function to whoever called it. You can then store that result in a variable or use it directly.',
          code:
`def add(a, b):
    return a + b      # ← send result back

result = add(3, 5)    # result = 8
print(result)         # → 8

# Use return value directly:
print(add(10, 20))    # → 30

# Return multiple values:
def min_max(nums):
    return min(nums), max(nums)

lo, hi = min_max([5, 2, 8, 1, 9])
print(f"Min: {lo}, Max: {hi}")   # → Min: 1, Max: 9`,
          lineHighlights: [
            { lines: [0, 1], note: 'return sends the computed value back to whoever called the function — without it, the function returns None.' },
            { lines: [3, 4], note: 'Store the returned value in a variable so you can use or print it later.' },
            { lines: [7], note: 'You can also use a return value directly inside another call, like print(), without storing it first.' },
            { lines: [10, 11, 13, 14], note: 'A function can return more than one value separated by a comma — Python unpacks them into separate variables.' },
          ],
        }],
        description: 'return sends a value back from the function to the caller.',
        challenge: 'Write a function `area(length, width)` that returns length × width. Print the area of a 6×4 rectangle.',
        hint: 'def area(length, width):\n    return length * width\nprint(area(6, 4))',
        starterCode: 'def area(length, width):\n    return length * width\n\nprint(area(6, 4))\n',
        test: { contains: ['24'] },
      },
      {
        id: 'fn-3b', title: 'Recursion', xp: 55,
        tutorial: [{
          heading: 'A function that calls itself',
          text: 'Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a **base case** (the stopping condition) and a **recursive case** (the call to itself).',
          code:
`# Factorial: n! = n × (n-1) × (n-2) × ... × 1
def factorial(n):
    if n == 0:          # ← BASE CASE: stop here
        return 1
    return n * factorial(n - 1)   # ← RECURSIVE CASE

print(factorial(5))     # → 120  (5×4×3×2×1)
print(factorial(0))     # → 1

# How it works:
# factorial(3)
#   → 3 * factorial(2)
#       → 2 * factorial(1)
#           → 1 * factorial(0)
#               → 1  ← base case
# = 3 * 2 * 1 * 1 = 6

# Fibonacci with recursion:
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

for i in range(8):
    print(fib(i), end=" ")   # → 0 1 1 2 3 5 8 13`,
          lineHighlights: [
            { lines: [2, 3], note: 'The base case is the stopping condition — when n reaches 0, return 1 immediately without calling factorial again.' },
            { lines: [4], note: 'The recursive case calls factorial itself with a smaller number, working toward the base case one step at a time.' },
            { lines: [9, 10, 11, 12, 13, 14, 15], note: 'This trace shows each call waiting for the next until the base case is hit, then results multiply back up the chain.' },
            { lines: [18, 19, 20, 21], note: 'Fibonacci also uses recursion — each number is the sum of the two before it, with 0 and 1 as base cases.' },
          ],
        }],
        description: 'Recursion: a function calling itself. Always needs a base case to stop. Great for tree-like problems.',
        challenge: 'Write a recursive function `sum_to(n)` that returns 1+2+3+...+n. Base case: sum_to(1) = 1. Print sum_to(10).',
        nudge: 'sum_to(n) = n + sum_to(n-1). What happens when n is 1? That\'s your base case.',
        hint: 'def sum_to(n):\n    if n == 1:\n        return 1\n    return n + sum_to(n - 1)\nprint(sum_to(10))',
        starterCode: 'def sum_to(n):\n    if n == 1:\n        return 1\n    return n + sum_to(n - 1)\n\nprint(sum_to(10))\n',
        test: { contains: ['55'] },
      },
      {
        id: 'fn-4', title: 'Default Arguments', xp: 40,
        tutorial: [{
          heading: 'Default values make arguments optional',
          text: 'Give a parameter a default value with =. If the caller doesn\'t pass that argument, Python uses the default. Put default parameters after required ones.',
          code:
`def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")               # → Hello, Alice!    (uses default)
greet("Bob", "Hi")           # → Hi, Bob!         (overrides default)
greet("Carol", "Good day")   # → Good day, Carol!

# Another example:
def repeat(text, times=1):
    print(text * times)

repeat("Ha")        # → Ha   (times defaults to 1)
repeat("Ha", 3)     # → HaHaHa`,
          lineHighlights: [
            { lines: [0], note: 'greeting="Hello" sets a default value that is used automatically when the caller does not provide that argument.' },
            { lines: [3], note: 'Calling with just one argument uses the default — "Hello" is filled in automatically.' },
            { lines: [4, 5], note: 'Passing a second argument overrides the default — the function uses whatever you provide.' },
            { lines: [8, 11, 12], note: 'Default parameters make arguments optional — repeat("Ha") and repeat("Ha", 3) both work correctly.' },
          ],
        }],
        description: 'Default arguments are used when the caller doesn\'t provide a value.',
        challenge: 'Write `make_coffee(size="medium", sugar=1)`. Print "Making {size} coffee with {sugar} sugar(s)". Call it 3 ways: no args, just size, both.',
        hint: 'def make_coffee(size="medium", sugar=1):\n    print(f"Making {size} coffee with {sugar} sugar(s)")\nmake_coffee()\nmake_coffee("large")\nmake_coffee("small", 0)',
        starterCode: 'def make_coffee(size="medium", sugar=1):\n    print(f"Making {size} coffee with {sugar} sugar(s)")\n\nmake_coffee()\nmake_coffee("large")\nmake_coffee("small", 0)\n',
        test: { contains: ['medium', 'large', 'small'] },
      },
      {
        id: 'fn-5', title: '*args and **kwargs', xp: 50,
        tutorial: [
          {
            heading: '*args — any number of arguments',
            text: '`*args` lets you pass any number of positional arguments. Inside the function they become a tuple.',
            code:
`def total(*nums):
    result = 0
    for n in nums:
        result += n
    return result

print(total(1, 2))           # → 3
print(total(1, 2, 3, 4, 5)) # → 15
print(total(10))             # → 10`,
          lineHighlights: [
            { lines: [0], note: 'The * before nums means "collect all positional arguments into a tuple called nums" — any count works.' },
            { lines: [1, 2, 3, 4], note: 'Loop through the tuple to process each argument — this works no matter how many were passed.' },
            { lines: [6, 7, 8], note: 'You can call the function with 1, 2, or 5 arguments — it handles them all the same way.' },
          ],
          },
          {
            heading: '**kwargs — named keyword arguments',
            text: '`**kwargs` lets you pass any number of named arguments. Inside, they become a dictionary.',
            code:
`def profile(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

profile(name="Alice", age=25, city="London")
# → name: Alice
# → age: 25
# → city: London`,
          lineHighlights: [
            { lines: [0], note: 'The ** before details means "collect all named keyword arguments into a dictionary called details".' },
            { lines: [1, 2], note: 'Iterating with .items() gives each key-value pair, just like a regular dictionary loop.' },
            { lines: [4], note: 'Pass any number of named arguments — each name becomes a key and each value becomes the matching value in the dictionary.' },
          ],
          },
        ],
        description: '*args collects many positional args as a tuple. **kwargs collects named args as a dict.',
        challenge: 'Write `sum_all(*nums)` that returns the sum of any number of arguments. Print sum_all(1,2,3,4,5).',
        hint: 'def sum_all(*nums):\n    return sum(nums)\nprint(sum_all(1, 2, 3, 4, 5))',
        starterCode: 'def sum_all(*nums):\n    return sum(nums)\n\nprint(sum_all(1, 2, 3, 4, 5))\n',
        test: { contains: ['15'] },
      },
      {
        id: 'fn-6', title: 'Lambda Functions', xp: 45,
        tutorial: [{
          heading: 'lambda — tiny one-line functions',
          text: 'A lambda is a mini function written in one line. Great for short, simple operations. Format: `lambda params: expression`.',
          code:
`# Normal function:
def square(n):
    return n ** 2

# Same as lambda:
square = lambda n: n ** 2
print(square(5))      # → 25

# Lambda with two parameters:
add = lambda a, b: a + b
print(add(3, 4))      # → 7

# Lambdas are useful with sort():
words = ["banana", "apple", "cherry", "kiwi"]
words.sort(key=lambda w: len(w))   # sort by length
print(words)
# → ['kiwi', 'apple', 'banana', 'cherry']`,
          lineHighlights: [
            { lines: [1, 2, 5], note: 'A lambda is a compact way to write the same function — both square definitions do exactly the same thing.' },
            { lines: [9, 10], note: 'Lambdas can take multiple parameters — list them before the colon, separated by commas.' },
            { lines: [14, 15], note: 'The real power of lambdas: passing a tiny function as the key= argument to sort() without writing a full def.' },
          ],
        }],
        description: 'lambda creates a small anonymous function in one line.',
        challenge: 'Create a lambda `multiply` that takes two numbers and returns their product. Print multiply(6, 7).',
        hint: 'multiply = lambda a, b: a * b\nprint(multiply(6, 7))',
        starterCode: 'multiply = lambda a, b: a * b\nprint(multiply(6, 7))\n',
        test: { contains: ['42'] },
      },
      {
        id: 'fn-7', title: 'Variable Scope — Where Variables Live', xp: 45,
        tutorial: [
          {
            heading: 'Local scope — inside the function only',
            text: 'A variable created inside a function is "local" — it only exists inside that function. The outside world can\'t see it. This keeps functions self-contained and safe.',
            code:
`def greet():
    message = "Hello!"    # ← local variable (lives inside greet only)
    print(message)        # → Hello!  (works inside the function)

greet()
# print(message)          # ← NameError! message doesn't exist out here

# Each function call has its OWN local variables:
def double(n):
    result = n * 2        # ← local result
    return result

print(double(5))          # → 10
print(double(7))          # → 14`,
          lineHighlights: [
            { lines: [1], note: 'message is created inside greet — it is a local variable that only exists while the function is running.' },
            { lines: [5], note: 'Trying to use message outside would cause a NameError — local variables are invisible to the outside world.' },
            { lines: [8, 9, 10], note: 'Each call to double gets its own fresh result variable — they never interfere with each other.' },
            { lines: [12, 13], note: 'Both calls work independently, each producing its own answer inside its own local scope.' },
          ],
          },
          {
            heading: 'Global scope — visible everywhere',
            text: 'A variable created outside all functions is "global" — the whole program can see it. But to CHANGE a global variable inside a function, you must use the `global` keyword.',
            code:
`score = 0            # ← global variable

def add_points(pts):
    global score     # ← tells Python: use the global 'score'
    score += pts     # ← now this changes the global one

add_points(10)
add_points(5)
print(score)         # → 15

# Without 'global', Python makes a NEW local variable:
def broken_add(pts):
    score += pts     # ← UnboundLocalError! Python is confused
# Don't do this — always use 'global' if you need to change it`,
          lineHighlights: [
            { lines: [0], note: 'A variable at the top level is global — every part of your program can read it.' },
            { lines: [3, 4], note: 'The global keyword tells Python to modify the existing global score instead of creating a new local one.' },
            { lines: [6, 7, 8], note: 'After two calls, the global score has accumulated both additions, ending at 15.' },
            { lines: [11, 12], note: 'Without global, Python sees score += pts as a local assignment and errors because score has no local value yet.' },
          ],
          },
        ],
        description: 'Variables inside functions are local. Use `global` to modify a variable from outside.',
        challenge: 'Create a global `count = 0`. Write a function `increment()` that adds 1 to count. Call it 3 times and print count.',
        hint: 'count = 0\ndef increment():\n    global count\n    count += 1\nincrement()\nincrement()\nincrement()\nprint(count)',
        starterCode: 'count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()\nincrement()\nincrement()\nprint(count)\n',
        test: { contains: ['3'] },
      },
      {
        id: 'fn-8', title: 'nonlocal and Closures', xp: 50,
        tutorial: [
          {
            heading: 'nonlocal — reach the enclosing function',
            text: 'When a function is defined inside another function, `nonlocal` lets the inner function modify the outer function\'s variables. This is the middle ground between local and global.',
            code:
`def make_counter():
    count = 0             # ← belongs to make_counter

    def increment():
        nonlocal count    # ← reach the outer function's count
        count += 1
        print(count)

    return increment      # ← return the inner function

counter = make_counter()
counter()    # → 1
counter()    # → 2
counter()    # → 3   (count keeps its value between calls!)`,
          lineHighlights: [
            { lines: [1], note: 'count lives in make_counter — it is not global, but it is also not local to increment.' },
            { lines: [4, 5], note: 'nonlocal lets increment reach one level up and modify make_counter\'s count variable.' },
            { lines: [8], note: 'Returning the inner function hands it to the caller — the outer function finishes, but count lives on.' },
            { lines: [10, 11, 12, 13], note: 'Each counter() call increments the same count because the returned function remembers its enclosing scope.' },
          ],
          },
          {
            heading: 'Closures — functions that remember',
            text: 'A closure is a function that "remembers" the variables from where it was created, even after the outer function has finished. This is a powerful Python pattern.',
            code:
`def make_multiplier(n):
    def multiply(x):
        return x * n      # ← n is "remembered" from make_multiplier
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # → 10  (remembers n=2)
print(triple(5))   # → 15  (remembers n=3)
print(double(7))   # → 14  (still n=2)`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'multiply uses n from its enclosing make_multiplier — even after make_multiplier finishes, n is remembered.' },
            { lines: [3], note: 'Returning the inner function creates a closure — a function packaged together with the variable it needs.' },
            { lines: [5, 6], note: 'Each call to make_multiplier creates a separate closure with its own private copy of n.' },
            { lines: [8, 9, 10], note: 'double always remembers n=2 and triple always n=3 — they are independent despite sharing the same code.' },
          ],
          },
        ],
        description: '`nonlocal` modifies an outer function\'s variable. Closures "remember" their creation context.',
        challenge: 'Write `make_greeter(greeting)` that returns a function. The returned function takes a name and prints "{greeting}, {name}!". Make a "Hello" greeter and a "Hi" greeter.',
        hint: 'def make_greeter(greeting):\n    def greet(name):\n        print(f"{greeting}, {name}!")\n    return greet\nhello = make_greeter("Hello")\nhi = make_greeter("Hi")\nhello("Alice")\nhi("Bob")',
        starterCode: 'def make_greeter(greeting):\n    def greet(name):\n        print(f"{greeting}, {name}!")\n    return greet\n\nhello = make_greeter("Hello")\nhi    = make_greeter("Hi")\nhello("Alice")\nhi("Bob")\n',
        test: { contains: ['Hello, Alice!', 'Hi, Bob!'] },
      },
    ],
  },

  // ── WORLD 11 ────────────────────────────────────────────────────────────────
  {
    id: 'classes', name: 'Class City', emoji: '🏙️', color: '#8B5CF6', subtitle: 'Build your own data types', difficulty: 'advanced',
    lessons: [
      {
        id: 'cls-1', title: 'What are Classes?', xp: 50,
        tutorial: [{
          heading: 'Classes are blueprints for objects',
          text: 'A class defines what something IS (its properties) and what it can DO (its methods). It\'s like a cookie cutter — you define it once, then make many cookies (objects) from it.',
          code:
`# Define a class
class Dog:
    def __init__(self, name, breed):   # ← called when creating a Dog
        self.name  = name              # ← store name on this object
        self.breed = breed

    def bark(self):                    # ← a method (function in a class)
        print(f"{self.name} says: Woof!")

# Create objects (instances):
dog1 = Dog("Rex", "Labrador")
dog2 = Dog("Bella", "Poodle")

print(dog1.name)    # → Rex
dog1.bark()         # → Rex says: Woof!
dog2.bark()         # → Bella says: Woof!`,
          lineHighlights: [
            { lines: [0, 1], note: 'class Dog: defines the blueprint for all Dog objects. Nothing is created yet — just the design.' },
            { lines: [2, 3, 4], note: '__init__ runs automatically when you create a Dog. self.name stores the name on this specific dog object.' },
            { lines: [6, 7], note: 'bark is a method — a function that belongs to the class. self always refers to whichever dog called it.' },
            { lines: [10, 11, 14, 15], note: 'Dog("Rex", "Labrador") creates a real object from the blueprint. dog1 and dog2 are independent — changing one does not affect the other.' },
          ],
        }],
        description: 'Classes are blueprints. __init__ sets up the object. self refers to the current object.',
        challenge: 'Create a `Car` class with `make` and `model`. Add a `describe()` method that prints "I drive a {make} {model}". Create one Car and call describe().',
        hint: 'class Car:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n    def describe(self):\n        print(f"I drive a {self.make} {self.model}")\n\nmy_car = Car("Toyota", "Camry")\nmy_car.describe()',
        starterCode: 'class Car:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n    def describe(self):\n        pass  # fill in\n\nmy_car = Car("Toyota", "Camry")\nmy_car.describe()\n',
        test: { contains: ['Toyota', 'Camry'] },
      },
      {
        id: 'cls-2', title: 'Methods and self', xp: 50,
        tutorial: [{
          heading: 'Methods can change the object\'s data',
          text: 'Methods can read and update the object\'s attributes. `self` always refers to the specific object the method is called on.',
          code:
`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner   = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited \${amount}. Balance: \${self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew \${amount}. Balance: \${self.balance}")
        else:
            print("Insufficient funds!")

acc = BankAccount("Alice", 100)
acc.deposit(50)       # → Deposited $50. Balance: $150
acc.withdraw(30)      # → Withdrew $30. Balance: $120
acc.withdraw(200)     # → Insufficient funds!`,
          lineHighlights: [
            { lines: [1, 2, 3], note: '__init__ sets up the account with an owner and a starting balance. balance=0 is a default — you can create an account with no money.' },
            { lines: [5, 6, 7], note: 'deposit updates self.balance with +=. Using self means the change is saved on this specific account object.' },
            { lines: [9, 10, 11, 12, 13, 14], note: 'withdraw checks the balance first before touching any money — a guard clause prevents overdrawing.' },
            { lines: [16, 17, 18, 19], note: 'Each method call on acc changes that specific account\'s balance. acc is the object; deposit and withdraw are its methods.' },
          ],
        }],
        description: 'Methods read and modify self attributes. They always take self as the first parameter.',
        challenge: 'Create a `Counter` class with value=0. Add `increment()` (+1), `decrement()` (-1), and `show()` (print value). Test all three.',
        hint: 'class Counter:\n    def __init__(self):\n        self.value = 0\n    def increment(self): self.value += 1\n    def decrement(self): self.value -= 1\n    def show(self): print(self.value)\n\nc = Counter()\nc.increment()\nc.increment()\nc.decrement()\nc.show()',
        starterCode: 'class Counter:\n    def __init__(self):\n        self.value = 0\n    def increment(self):\n        pass\n    def decrement(self):\n        pass\n    def show(self):\n        pass\n\nc = Counter()\nc.increment()\nc.increment()\nc.decrement()\nc.show()\n',
        test: { contains: ['1'] },
      },
      {
        id: 'cls-3', title: 'Inheritance', xp: 55,
        tutorial: [{
          heading: 'Child classes inherit from parent classes',
          text: 'Inheritance lets a new class reuse everything from an existing class and add or override features. Write `class Child(Parent):` to inherit.',
          code:
`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print(f"{self.name} makes a sound.")

class Dog(Animal):        # ← Dog inherits from Animal
    def speak(self):      # ← overrides the parent method
        print(f"{self.name} says Woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says Meow!")

animals = [Dog("Rex"), Cat("Whiskers"), Animal("Fish")]
for a in animals:
    a.speak()
# → Rex says Woof!
# → Whiskers says Meow!
# → Fish makes a sound.`,
          lineHighlights: [
            { lines: [0, 1, 2, 3, 4], note: 'Animal is the parent class. It defines __init__ and a default speak() that every animal inherits for free.' },
            { lines: [6, 7, 8], note: 'class Dog(Animal) means Dog inherits everything from Animal. The new speak() replaces (overrides) the parent\'s version for Dogs specifically.' },
            { lines: [10, 11, 12], note: 'Cat also inherits from Animal and overrides speak() with its own message — same pattern as Dog.' },
            { lines: [14, 15, 16], note: 'All three objects share the same a.speak() call. Python picks the right method based on the object\'s type — this is called polymorphism.' },
          ],
        }],
        description: 'Inheritance: `class Child(Parent)` gets all parent attributes and methods.',
        challenge: 'Create `Shape` with `color` attribute. Create `Circle(Shape)` with `radius`. Add `area()` to Circle (3.14 * r²). Create a red circle, print its area.',
        hint: 'class Shape:\n    def __init__(self, color):\n        self.color = color\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        super().__init__(color)\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\nc = Circle("red", 5)\nprint(c.area())',
        starterCode: 'class Shape:\n    def __init__(self, color):\n        self.color = color\n\nclass Circle(Shape):\n    def __init__(self, color, radius):\n        super().__init__(color)\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\nc = Circle("red", 5)\nprint(c.area())\n',
        test: { contains: ['78.5'] },
      },
      {
        id: 'cls-3b', title: 'Multiple Inheritance & MRO', xp: 55,
        tutorial: [{
          heading: 'A class can inherit from more than one parent',
          text: 'Python lets a class inherit from multiple parents. When the same method exists in multiple parents, Python uses the **Method Resolution Order (MRO)** — a left-to-right search — to decide which one to call.',
          code:
`class Flyable:
    def move(self):
        print("Flying through the air!")

class Swimmable:
    def move(self):
        print("Swimming through the water!")

# Multiple inheritance — list parents left to right:
class Duck(Flyable, Swimmable):
    def quack(self):
        print("Quack!")

d = Duck()
d.move()     # → Flying through the air!  (Flyable is first)
d.quack()    # → Quack!

# MRO shows the lookup order:
print(Duck.__mro__)
# → (<class 'Duck'>, <class 'Flyable'>, <class 'Swimmable'>, <class 'object'>)

# super() follows MRO — use it to call the next class in the chain:
class A:
    def hello(self): print("A")

class B(A):
    def hello(self): super().hello(); print("B")

class C(A):
    def hello(self): super().hello(); print("C")

class D(B, C):   # MRO: D → B → C → A
    def hello(self): super().hello(); print("D")

D().hello()   # → A  C  B  D`,
          lineHighlights: [
            { lines: [0, 4, 9], note: 'Flyable and Swimmable both define move(). Duck inherits from both by listing them in parentheses — multiple inheritance.' },
            { lines: [13, 14], note: 'd.move() calls Flyable\'s version because Flyable is listed first. Left-to-right order decides the winner when both parents have the same method.' },
            { lines: [17, 18, 19], note: '__mro__ reveals the exact lookup order Python uses. Duck → Flyable → Swimmable → object. Python checks each in sequence.' },
            { lines: [25, 26, 28, 29, 31, 32, 34], note: 'super() follows the full MRO chain, not just the immediate parent. D().hello() prints A then C then B then D — the chain runs in MRO order.' },
          ],
        }],
        description: 'Multiple inheritance: list parents in () left to right. MRO defines which method wins. super() follows the MRO chain.',
        challenge: 'Create `JSONMixin` with `to_json()` that prints the object\'s `__dict__` as a string. Create `User(JSONMixin)` with name and age. Call to_json() on a User.',
        nudge: 'JSONMixin needs a to_json method that uses self.__dict__ to get all attributes as a dict. User just needs __init__ with name and age.',
        hint: 'class JSONMixin:\n    def to_json(self):\n        import json\n        print(json.dumps(self.__dict__))\n\nclass User(JSONMixin):\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nUser("Alice", 25).to_json()',
        starterCode: 'class JSONMixin:\n    def to_json(self):\n        import json\n        print(json.dumps(self.__dict__))\n\nclass User(JSONMixin):\n    def __init__(self, name, age):\n        self.name = name\n        self.age  = age\n\nUser("Alice", 25).to_json()\n',
        test: { contains: ['Alice', '25'] },
      },
      {
        id: 'cls-4', title: '__str__ and __repr__', xp: 45,
        tutorial: [{
          heading: 'Make your objects print nicely',
          text: '__str__ controls what print() shows. __repr__ controls the developer representation. Define __str__ to make your object readable.',
          code:
`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age  = age

    def __str__(self):
        return f"Person({self.name}, age {self.age})"

    def __repr__(self):
        return f"Person(name={self.name!r}, age={self.age!r})"

p = Person("Alice", 25)
print(p)          # → Person(Alice, age 25)  ← uses __str__
print(str(p))     # → Person(Alice, age 25)
print(repr(p))    # → Person(name='Alice', age=25)  ← uses __repr__`,
          lineHighlights: [
            { lines: [5, 6], note: '__str__ is what print() shows. Write it to be human-readable — the goal is clarity for whoever runs the program.' },
            { lines: [8, 9], note: '__repr__ is for developers. The !r adds quotes around strings, making the output copy-pasteable and unambiguous.' },
            { lines: [11, 12, 13, 14], note: 'print(p) calls __str__ automatically. repr(p) calls __repr__. Python picks the right one depending on the context.' },
          ],
        }],
        description: '__str__ defines how your object looks when printed.',
        challenge: 'Create a `Book` class with `title` and `author`. Add __str__ that returns `"Title by Author"`. Print a Book object.',
        hint: 'class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    def __str__(self):\n        return f"{self.title} by {self.author}"\n\nb = Book("Python 101", "Alice")\nprint(b)',
        starterCode: 'class Book:\n    def __init__(self, title, author):\n        self.title  = title\n        self.author = author\n    def __str__(self):\n        return f"{self.title} by {self.author}"\n\nb = Book("Python 101", "Alice")\nprint(b)\n',
        test: { contains: ['Python 101 by Alice'] },
      },
      {
        id: 'cls-5', title: 'Class vs Instance Variables', xp: 50,
        tutorial: [{
          heading: 'Class variables are shared; instance variables are personal',
          text: 'An instance variable (set with self.) belongs to ONE object. A class variable (set directly in the class body) is shared by ALL objects of that class. Mixing them up causes real bugs.',
          code:
`class Student:
    school = "Python Academy"   # ← class variable: SHARED by all students

    def __init__(self, name, grade):
        self.name  = name       # ← instance variable: personal to each student
        self.grade = grade

s1 = Student("Alice", 90)
s2 = Student("Bob",   75)

# Instance variables are different per object:
print(s1.name)          # → Alice
print(s2.name)          # → Bob

# Class variable is the SAME for all:
print(s1.school)        # → Python Academy
print(s2.school)        # → Python Academy

# Change the class variable — affects ALL:
Student.school = "CodeSchool"
print(s1.school)        # → CodeSchool
print(s2.school)        # → CodeSchool`,
          lineHighlights: [
            { lines: [0, 1], note: 'school is a class variable — it lives directly in the class body and is shared by every Student ever created.' },
            { lines: [3, 4, 5], note: 'self.name and self.grade are instance variables — each student gets their own personal copy set in __init__.' },
            { lines: [11, 12, 15, 16], note: 's1.name and s2.name are different per object (Alice vs Bob), but s1.school and s2.school are the exact same value.' },
            { lines: [19, 20, 21], note: 'Changing Student.school updates it for ALL instances at once. One change, everyone is affected.' },
          ],
        }],
        description: 'Class variables are shared across all instances. Instance variables (self.x) are per-object.',
        challenge: 'Create a `Dog` class with class variable `species = "Canis lupus"` and instance variable `name`. Create 2 dogs and print both names and the shared species.',
        hint: 'class Dog:\n    species = "Canis lupus"\n    def __init__(self, name):\n        self.name = name\nd1 = Dog("Rex")\nd2 = Dog("Bella")\nprint(d1.name, d2.name)\nprint(d1.species)',
        starterCode: 'class Dog:\n    species = "Canis lupus"\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog("Rex")\nd2 = Dog("Bella")\nprint(d1.name, d2.name)\nprint(d1.species)\n',
        test: { contains: ['Rex', 'Bella', 'Canis lupus'] },
      },
      {
        id: 'cls-6', title: '@property — Smart Attributes', xp: 55,
        tutorial: [{
          heading: '@property lets you use methods like attributes',
          text: '@property turns a method into something you access like a variable (no parentheses needed). Use it to compute a value on the fly, or to protect an attribute from invalid values.',
          code:
`class Circle:
    def __init__(self, radius):
        self._radius = radius      # ← _ means "don't change directly"

    @property
    def radius(self):
        return self._radius        # ← getter: read the radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius can't be negative!")
        self._radius = value       # ← setter: validate before saving

    @property
    def area(self):
        return 3.14 * self._radius ** 2   # ← computed on the fly

c = Circle(5)
print(c.radius)    # → 5     (no parentheses — feels like a variable!)
print(c.area)      # → 78.5

c.radius = 10      # ← calls the setter (validates first)
print(c.area)      # → 314.0`,
          lineHighlights: [
            { lines: [2], note: '_radius with a leading underscore is a convention meaning "private — access this through the property, not directly."' },
            { lines: [4, 5, 6], note: '@property turns radius() into a getter. You write c.radius (no parentheses), but Python is actually calling the method behind the scenes.' },
            { lines: [8, 9, 10, 11, 12], note: '@radius.setter validates the value before saving. Assigning c.radius = -1 would trigger this and raise an error.' },
            { lines: [14, 15, 16, 22, 23], note: 'area is a read-only computed property — it recalculates from _radius every time you read it, so it is always up to date after a change.' },
          ],
        }],
        description: '@property makes a method behave like a variable. Add a setter for validation.',
        challenge: 'Create `Rectangle` with width and height. Add a `@property area` that returns width × height. Create one and print its area.',
        hint: 'class Rectangle:\n    def __init__(self, w, h):\n        self.width = w\n        self.height = h\n    @property\n    def area(self):\n        return self.width * self.height\nr = Rectangle(6, 4)\nprint(r.area)',
        starterCode: 'class Rectangle:\n    def __init__(self, w, h):\n        self.width  = w\n        self.height = h\n    @property\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(6, 4)\nprint(r.area)\n',
        test: { contains: ['24'] },
      },
      {
        id: 'cls-7', title: '@staticmethod and @classmethod', xp: 50,
        tutorial: [
          {
            heading: '@staticmethod — a helper that needs no self',
            text: 'A static method belongs to the class but doesn\'t need the object (no `self`). Use it for utility functions that are related to the class but don\'t use any instance data.',
            code:
`class MathHelper:
    @staticmethod
    def add(a, b):
        return a + b       # ← no self needed at all

    @staticmethod
    def is_even(n):
        return n % 2 == 0

# Call directly on the class — no object needed:
print(MathHelper.add(3, 5))      # → 8
print(MathHelper.is_even(4))     # → True`,
            lineHighlights: [
              { lines: [1, 2, 3], note: '@staticmethod means this function belongs to the class for organisation, but it has no self — it does not touch any object data.' },
              { lines: [5, 6, 7], note: 'is_even is also static — a pure utility that only needs its own arguments to do its job.' },
              { lines: [9, 10, 11], note: 'Static methods are called on the class name directly. No object creation needed — just MathHelper.add(3, 5).' },
            ],
          },
          {
            heading: '@classmethod — alternative constructors',
            text: 'A class method receives the CLASS itself (cls) instead of an object (self). The most common use is creating "alternative constructors" — different ways to create an object.',
            code:
`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age  = age

    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2025 - birth_year   # ← compute age from year
        return cls(name, age)     # ← create the object

    def __str__(self):
        return f"{self.name} (age {self.age})"

p1 = Person("Alice", 25)
p2 = Person.from_birth_year("Bob", 2000)
print(p1)    # → Alice (age 25)
print(p2)    # → Bob (age 25)`,
            lineHighlights: [
              { lines: [5, 6], note: '@classmethod receives cls (the class itself) instead of self (an object). This lets it build and return a new object.' },
              { lines: [7, 8], note: 'from_birth_year does the maths first, then calls cls(name, age) — which is the same as calling Person(name, age).' },
              { lines: [13, 14, 15, 16], note: 'p1 uses the normal __init__ route with age directly. p2 uses the alternative constructor — same end result, different starting info.' },
            ],
          },
        ],
        description: '@staticmethod is a helper with no self. @classmethod receives the class and is used for alternative constructors.',
        challenge: 'Create a `Temperature` class storing Celsius. Add `@staticmethod celsius_to_fahrenheit(c)` that returns c*9/5+32. Test it.',
        hint: 'class Temperature:\n    @staticmethod\n    def celsius_to_fahrenheit(c):\n        return c * 9/5 + 32\nprint(Temperature.celsius_to_fahrenheit(100))',
        starterCode: 'class Temperature:\n    @staticmethod\n    def celsius_to_fahrenheit(c):\n        return c * 9/5 + 32\n\nprint(Temperature.celsius_to_fahrenheit(100))\nprint(Temperature.celsius_to_fahrenheit(0))\n',
        test: { contains: ['212.0', '32.0'] },
      },
      {
        id: 'cls-8', title: 'dataclasses — Auto-write __init__', xp: 45,
        tutorial: [{
          heading: '@dataclass generates boilerplate automatically',
          text: 'Writing __init__ with 10 attributes is tedious. The @dataclass decorator reads your type-annotated class variables and automatically generates __init__, __repr__, and __eq__ for you.',
          code:
`from dataclasses import dataclass, field

@dataclass
class Point:
    x: float    # ← type annotation (required for dataclass)
    y: float

p = Point(3.0, 4.0)     # ← __init__ generated automatically
print(p)                 # → Point(x=3.0, y=4.0)  (__repr__ generated)
print(p.x, p.y)          # → 3.0  4.0

# Two points with same values are equal (__eq__ generated):
p2 = Point(3.0, 4.0)
print(p == p2)           # → True

# Default values:
@dataclass
class Student:
    name: str
    grade: int = 0        # ← default value
    courses: list = field(default_factory=list)  # ← mutable default

s = Student("Alice")
print(s)     # → Student(name='Alice', grade=0, courses=[])`,
          lineHighlights: [
            { lines: [2, 3, 4, 5], note: '@dataclass reads the type-annotated fields and automatically writes __init__, __repr__, and __eq__ — no boilerplate code needed.' },
            { lines: [7, 8, 9], note: 'Point(3.0, 4.0) works because @dataclass generated __init__. print(p) shows a readable form because it generated __repr__.' },
            { lines: [12, 13], note: 'p == p2 is True because @dataclass generated __eq__ that compares all field values. Without it, == just checks if they are the same object.' },
            { lines: [19, 20], note: 'grade: int = 0 sets a simple default. courses uses field(default_factory=list) because lists must not be shared across all instances.' },
          ],
        }],
        description: '@dataclass auto-generates __init__, __repr__, __eq__ from annotated fields.',
        challenge: 'Create a @dataclass `Book` with fields `title: str`, `author: str`, `pages: int = 0`. Create a book and print it.',
        hint: 'from dataclasses import dataclass\n@dataclass\nclass Book:\n    title: str\n    author: str\n    pages: int = 0\nb = Book("Python", "Alice", 300)\nprint(b)',
        starterCode: 'from dataclasses import dataclass\n\n@dataclass\nclass Book:\n    title:  str\n    author: str\n    pages:  int = 0\n\nb = Book("Python Mastery", "Alice", 400)\nprint(b)\n',
        test: { contains: ['Python Mastery', 'Alice', '400'] },
      },
      {
        id: 'cls-9', title: 'Operator Overloading', xp: 55,
        tutorial: [{
          heading: 'Make your objects work with +, ==, <, len()',
          text: 'Dunder (double-underscore) methods let you define what happens when Python operators are used on your objects. This is called "operator overloading."',
          code:
`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):        # v1 + v2
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, scalar):       # v * 3
        return Vector(self.x * scalar, self.y * scalar)

    def __eq__(self, other):         # v1 == v2
        return self.x == other.x and self.y == other.y

    def __len__(self):               # len(v)
        return int((self.x**2 + self.y**2) ** 0.5)

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)    # → Vector(4, 6)
print(v1 * 3)     # → Vector(3, 6)
print(v1 == v2)   # → False
print(len(v2))    # → 5`,
          lineHighlights: [
            { lines: [8, 9], note: '__add__ defines what the + operator does. When you write v1 + v2, Python calls v1.__add__(v2) automatically.' },
            { lines: [11, 12, 14, 15], note: '__mul__ handles * and __eq__ handles ==. Each dunder method maps directly to a Python operator or built-in.' },
            { lines: [17, 18], note: '__len__ defines what len() returns. Here it computes the vector\'s geometric length using the Pythagorean theorem.' },
            { lines: [22, 23, 24, 25], note: 'All four operator calls work naturally because the matching dunder methods are defined. Python looks them up behind the scenes.' },
          ],
        }],
        description: '__add__, __mul__, __eq__, __len__ etc. let your objects use Python operators.',
        challenge: 'Create a `Money` class with `amount`. Override __add__ to add two Money objects and __str__ to show "$amount". Test: Money(10) + Money(25).',
        hint: 'class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n    def __str__(self):\n        return f"${self.amount}"\nprint(Money(10) + Money(25))',
        starterCode: 'class Money:\n    def __init__(self, amount):\n        self.amount = amount\n    def __add__(self, other):\n        return Money(self.amount + other.amount)\n    def __str__(self):\n        return f"${self.amount}"\n\nprint(Money(10) + Money(25))\n',
        test: { contains: ['$35'] },
      },
      {
        id: 'cls-9b', title: 'Abstract Base Classes', xp: 55,
        tutorial: [{
          heading: 'ABCs force subclasses to implement required methods',
          text: 'An Abstract Base Class (ABC) defines a contract: any class that inherits from it **must** implement the abstract methods or Python raises an error. It\'s how you define interfaces in Python.',
          code:
`from abc import ABC, abstractmethod

class Shape(ABC):           # ← inherit from ABC
    @abstractmethod
    def area(self):         # ← subclasses MUST implement this
        pass

    @abstractmethod
    def perimeter(self):
        pass

    def describe(self):     # ← normal method (inherited as-is)
        print(f"Area: {self.area():.2f}, Perimeter: {self.perimeter():.2f}")

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14159 * self.r ** 2
    def perimeter(self):
        return 2 * 3.14159 * self.r

class Square(Shape):
    def __init__(self, s):
        self.s = s
    def area(self):      return self.s ** 2
    def perimeter(self): return 4 * self.s

Circle(5).describe()   # → Area: 78.54, Perimeter: 31.42
Square(4).describe()   # → Area: 16.00, Perimeter: 16.00

# Shape()  ← would raise TypeError: Can't instantiate abstract class`,
          lineHighlights: [
            { lines: [2, 3, 4, 5], note: 'class Shape(ABC) makes it abstract. @abstractmethod on area() means every subclass MUST provide its own area() or Python raises an error.' },
            { lines: [7, 8, 9, 11, 12], note: 'perimeter() is also abstract (required for all subclasses), but describe() is a normal method that all shapes inherit for free.' },
            { lines: [14, 17, 18, 19, 20], note: 'Circle provides both area() and perimeter(), so it is a valid concrete class — you can create Circle objects.' },
            { lines: [28, 29, 31], note: 'Both shapes share the same describe() call. Shape() alone would crash — abstract classes exist only to be inherited, not created directly.' },
          ],
        }],
        description: 'ABC + @abstractmethod enforces that all subclasses implement specific methods.',
        challenge: 'Create abstract class `Animal(ABC)` with @abstractmethod `sound()`. Create `Dog` and `Cat` that implement it. Loop over [Dog(), Cat()] and call sound().',
        nudge: 'from abc import ABC, abstractmethod. Animal inherits ABC. sound() has @abstractmethod decorator and pass body. Dog and Cat define their own sound().',
        hint: 'from abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self): pass\nclass Dog(Animal):\n    def sound(self): print("Woof!")\nclass Cat(Animal):\n    def sound(self): print("Meow!")\nfor a in [Dog(), Cat()]:\n    a.sound()',
        starterCode: 'from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self):\n        pass\n\nclass Dog(Animal):\n    def sound(self):\n        print("Woof!")\n\nclass Cat(Animal):\n    def sound(self):\n        print("Meow!")\n\nfor a in [Dog(), Cat()]:\n    a.sound()\n',
        test: { contains: ['Woof!', 'Meow!'] },
      },
    ],
  },

  // ── WORLD 12 ────────────────────────────────────────────────────────────────
  {
    id: 'errors', name: 'Error Empire', emoji: '⚠️', color: '#EF4444', subtitle: 'Handle mistakes gracefully', difficulty: 'intermediate',
    lessons: [
      {
        id: 'err-1', title: 'Understanding Errors', xp: 30,
        tutorial: [{
          heading: 'Errors tell you exactly what went wrong',
          text: 'Python errors have a type and a message. SyntaxError means you wrote code Python can\'t understand. NameError means a variable doesn\'t exist. TypeError means the wrong kind of data was used.',
          code:
`# Common error types:

# NameError — variable doesn't exist
# print(x)   ← would give: NameError: name 'x' is not defined

# TypeError — wrong type
# print("Age: " + 25)  ← can't add str and int

# IndexError — index out of range
# lst = [1,2,3]; print(lst[10])   ← IndexError

# ZeroDivisionError — divide by zero
# print(10 / 0)  ← ZeroDivisionError

# The correct versions:
x = 42
print("Age:", 25)          # use , not +
lst = [1, 2, 3]
print(lst[2])              # valid index
print(10 / 2)              # valid division`,
          lineHighlights: [
            { lines: [2, 3], note: 'NameError: you used a variable before creating it. Python has no idea what x is if you never assigned it.' },
            { lines: [5, 6], note: 'TypeError: mixing types that can\'t work together. The + operator can join two strings or add two numbers, but not one of each.' },
            { lines: [8, 9, 11, 12], note: 'IndexError: you asked for an index beyond the list\'s length. ZeroDivisionError: dividing by zero is undefined in maths.' },
            { lines: [14, 15, 16, 17, 18, 19], note: 'These are the fixed versions — each one avoids the error by using valid data or the right approach.' },
          ],
        }],
        description: 'SyntaxError, NameError, TypeError, IndexError, ZeroDivisionError are the most common errors.',
        challenge: 'Print the type of 42, "hello", [1,2,3], and True using the type() function.',
        hint: 'print(type(42))\nprint(type("hello"))\nprint(type([1,2,3]))\nprint(type(True))',
        starterCode: 'print(type(42))\nprint(type("hello"))\nprint(type([1, 2, 3]))\nprint(type(True))\n',
        test: { contains: ["<class 'int'>", "<class 'str'>"] },
      },
      {
        id: 'err-2', title: 'try / except', xp: 40,
        tutorial: [{
          heading: 'try/except catches errors gracefully',
          text: 'Wrap risky code in `try`. If an error happens, `except` catches it and runs alternative code instead of crashing the program.',
          code:
`# Without try/except — program crashes on error:
# result = 10 / 0   ← ZeroDivisionError, stops everything

# With try/except — handles it gracefully:
try:
    result = 10 / 0
    print("Result:", result)
except ZeroDivisionError:
    print("Oops! Can't divide by zero.")
# → Oops! Can't divide by zero.

# Catch multiple error types:
try:
    num = int("abc")    # ← ValueError
except ValueError:
    print("That's not a valid number!")
except TypeError:
    print("Wrong type!")`,
          lineHighlights: [
            { lines: [0, 1], note: 'Without try/except the whole program stops at the error line. Nothing after it runs.' },
            { lines: [4, 5, 6], note: 'Code inside try is the risky part. If an error occurs, Python jumps to except immediately — line 6 (print Result) never runs.' },
            { lines: [7, 8], note: 'except ZeroDivisionError catches only that specific error type and runs its block instead of crashing.' },
            { lines: [12, 13, 14, 15, 16, 17], note: 'Chain multiple except blocks for different error types. Python checks them in order and runs the first one that matches.' },
          ],
        }],
        description: '`try` wraps risky code. `except` handles errors so the program doesn\'t crash.',
        challenge: 'Ask the user for a number. Use try/except to handle ValueError if they type something that\'s not a number.',
        hint: 'try:\n    n = int(input("Enter a number: "))\n    print(f"You entered: {n}")\nexcept ValueError:\n    print("That is not a number!")',
        starterCode: 'try:\n    n = int(input("Enter a number: "))\n    print(f"You entered: {n}")\nexcept ValueError:\n    print("That is not a number!")\n',
        test: { contains: ['You entered:'], inputs: ['42'] },
      },
      {
        id: 'err-3', title: 'else, finally, raise', xp: 45,
        tutorial: [{
          heading: 'else runs on success, finally always runs',
          text: '`else` after try/except runs only if NO error occurred. `finally` always runs, error or not — great for cleanup. `raise` lets you create your own errors.',
          code:
`def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: division by zero")
    else:
        print(f"Result: {result}")  # ← only if no error
    finally:
        print("Division attempted.") # ← always runs

divide(10, 2)
# → Result: 5.0
# → Division attempted.

divide(10, 0)
# → Error: division by zero
# → Division attempted.

# raise your own error:
def check_age(age):
    if age < 0:
        raise ValueError("Age can't be negative!")
    print(f"Age is {age}")`,
          lineHighlights: [
            { lines: [5, 6], note: 'else runs only when no error occurred in try. It is the clean "success" path — cleaner than putting success code inside try itself.' },
            { lines: [7, 8], note: 'finally always runs, error or not. Use it for cleanup like closing files or releasing resources.' },
            { lines: [10, 14, 15, 16], note: 'divide(10,2) triggers else + finally. divide(10,0) triggers except + finally. finally appears in both outcomes.' },
            { lines: [19, 20, 21], note: 'raise lets you create and throw your own errors from inside your code. Any caller that does not catch it will see the program stop with your message.' },
          ],
        }],
        description: '`else` runs when no error. `finally` always runs. `raise` creates custom errors.',
        challenge: 'Write a function `safe_divide(a, b)` that returns a/b, prints "Cannot divide by zero" on error, and always prints "Done." in finally.',
        hint: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        print("Cannot divide by zero")\n    finally:\n        print("Done.")\nprint(safe_divide(10, 2))\nsafe_divide(5, 0)',
        starterCode: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        print("Cannot divide by zero")\n    finally:\n        print("Done.")\n\nprint(safe_divide(10, 2))\nsafe_divide(5, 0)\n',
        test: { contains: ['5.0', 'Done.', 'Cannot divide by zero'] },
      },
      {
        id: 'err-4', title: 'Custom Exception Classes', xp: 50,
        tutorial: [{
          heading: 'Create your own error types',
          text: 'You can create custom exceptions by inheriting from the built-in Exception class (or any other exception). Custom exceptions make your code clearer — the error name itself explains what went wrong.',
          code:
`# Create custom exceptions by inheriting from Exception:
class InsufficientFundsError(Exception):
    pass

class AgeError(ValueError):           # ← inherits from ValueError
    def __init__(self, age, message):
        self.age = age
        super().__init__(message)     # ← pass message to parent

# Use custom exceptions just like built-in ones:
def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(
            f"Need \${amount} but only \${balance} available"
        )
    return balance - amount

try:
    withdraw(100, 200)
except InsufficientFundsError as e:
    print(f"Error: {e}")
# → Error: Need $200 but only $100 available`,
          lineHighlights: [
            { lines: [1, 2], note: 'Creating a custom exception is just a class that inherits from Exception. An empty pass body is enough — the class name itself carries the meaning.' },
            { lines: [4, 5, 6, 7], note: 'AgeError stores extra data (the bad age) and passes the message up to the parent Exception with super().__init__().' },
            { lines: [11, 12, 13, 14], note: 'raise InsufficientFundsError(...) works exactly like raise ValueError(...). Custom exceptions are first-class citizens in Python.' },
            { lines: [17, 18, 19, 20], note: 'except InsufficientFundsError catches only your custom type. "as e" lets you read the error message and print it.' },
          ],
        }],
        description: 'Custom exceptions: inherit from Exception, raise them with raise, catch with except.',
        challenge: 'Create `NegativeNumberError(ValueError)`. Write `check_positive(n)` that raises it if n < 0. Test with -5 inside try/except.',
        hint: 'class NegativeNumberError(ValueError):\n    pass\ndef check_positive(n):\n    if n < 0:\n        raise NegativeNumberError(f"{n} is negative!")\n    return n\ntry:\n    check_positive(-5)\nexcept NegativeNumberError as e:\n    print(f"Caught: {e}")',
        starterCode: 'class NegativeNumberError(ValueError):\n    pass\n\ndef check_positive(n):\n    if n < 0:\n        raise NegativeNumberError(f"{n} is negative!")\n    return n\n\ntry:\n    check_positive(-5)\nexcept NegativeNumberError as e:\n    print(f"Caught: {e}")\n',
        test: { contains: ['Caught:', 'negative'] },
      },
      {
        id: 'err-5', title: 'Error Chaining — raise X from Y', xp: 50,
        tutorial: [{
          heading: 'Chain exceptions to preserve the original cause',
          text: '`raise NewError from original` links two exceptions together — so you can wrap a low-level error in a higher-level one without losing the original context. Use `from None` to silence the original.',
          code:
`# Without chaining — context is lost:
def load_config(path):
    try:
        with open(path) as f:
            return f.read()
    except FileNotFoundError as e:
        raise RuntimeError("Config file missing") from e  # ← chains!

try:
    load_config("settings.json")
except RuntimeError as e:
    print(f"Error: {e}")
    print(f"Caused by: {e.__cause__}")
# → Error: Config file missing
# → Caused by: [Errno 2] No such file or directory: 'settings.json'

# raise X from None — suppress the original:
def parse_number(s):
    try:
        return int(s)
    except ValueError:
        raise ValueError(f"Expected a number, got: {s!r}") from None

try:
    parse_number("abc")
except ValueError as e:
    print(e)   # → Expected a number, got: 'abc'  (no traceback noise)`,
          lineHighlights: [
            { lines: [5, 6], note: '"raise RuntimeError from e" chains the new error to the original. Python remembers that the RuntimeError was caused by the FileNotFoundError.' },
            { lines: [10, 11, 12], note: 'e.__cause__ holds the original FileNotFoundError. Chaining gives you a friendly message AND the full technical detail about what caused it.' },
            { lines: [20, 21], note: '"from None" deliberately breaks the chain — you raise a clean new error without attaching the noisy original traceback.' },
            { lines: [23, 24, 25, 26], note: 'The caller only sees the friendly ValueError message. The internal error from int("abc") is suppressed — cleaner output for end users.' },
          ],
        }],
        description: '`raise X from Y` chains exceptions. `from None` suppresses the original. `e.__cause__` holds the chained exception.',
        challenge: 'Write `read_int(s)` that tries int(s) and raises ValueError("Not a valid integer: ...") from None if it fails. Test with "hello".',
        nudge: 'try: int(s). In except ValueError: raise ValueError(f"Not a valid integer: {s!r}") from None.',
        hint: 'def read_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        raise ValueError(f"Not a valid integer: {s!r}") from None\ntry:\n    read_int("hello")\nexcept ValueError as e:\n    print(e)',
        starterCode: 'def read_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        raise ValueError(f"Not a valid integer: {s!r}") from None\n\ntry:\n    read_int("hello")\nexcept ValueError as e:\n    print(e)\n',
        test: { contains: ['Not a valid integer', 'hello'] },
      },
    ],
  },

  // ── WORLD 13 ────────────────────────────────────────────────────────────────
  {
    id: 'modules', name: 'Module Meadow', emoji: '🌿', color: '#10B981', subtitle: "Use Python's built-in tools", difficulty: 'intermediate',
    lessons: [
      {
        id: 'mod-1', title: 'Importing Modules', xp: 35,
        tutorial: [{
          heading: 'Modules add extra tools to Python',
          text: 'Python comes with hundreds of extra modules (like toolboxes) that you can import. Use `import module_name` then `module_name.function()`. Or use `from module import function` to import just one thing.',
          code:
`import math

print(math.pi)              # → 3.141592653589793
print(math.sqrt(16))        # → 4.0
print(math.floor(3.9))      # → 3
print(math.ceil(3.1))       # → 4
print(math.pow(2, 10))      # → 1024.0

# Import just one thing:
from math import sqrt, pi
print(sqrt(25))             # → 5.0  (no math. prefix needed)
print(round(pi, 4))         # → 3.1416`,
          lineHighlights: [
            { lines: [0], note: 'import math loads the math module — a toolbox of mathematical functions built into Python.' },
            { lines: [2, 3, 4, 5, 6], note: 'math.pi, math.sqrt(), math.floor() etc. use dot notation: module name, dot, then function name.' },
            { lines: [8, 9], note: '`from math import sqrt, pi` pulls just those names so you can use them without the math. prefix.' },
            { lines: [10, 11], note: 'Now sqrt(25) and pi work on their own — no module prefix needed because they were imported directly.' },
          ],
        }],
        description: '`import module` loads extra tools. `from module import fn` imports specific functions.',
        challenge: 'Import math. Print the square root of 144, pi rounded to 2 decimal places, and 2 to the power of 8.',
        hint: 'import math\nprint(math.sqrt(144))\nprint(round(math.pi, 2))\nprint(math.pow(2, 8))',
        starterCode: 'import math\nprint(math.sqrt(144))\nprint(round(math.pi, 2))\nprint(math.pow(2, 8))\n',
        test: { contains: ['12.0', '3.14', '256.0'] },
      },
      {
        id: 'mod-2', title: 'random Module', xp: 35,
        tutorial: [{
          heading: 'The random module generates random values',
          text: 'random.random() gives a float between 0 and 1. random.randint(a,b) gives a random integer between a and b (inclusive). random.choice() picks a random item from a list.',
          code:
`import random

print(random.random())            # → 0.37454... (random float 0-1)
print(random.randint(1, 10))      # → random int 1 to 10
print(random.randint(1, 6))       # → simulate dice roll

fruits = ["apple", "banana", "cherry"]
print(random.choice(fruits))      # → random fruit

# Shuffle a list in place:
cards = ["A", "2", "3", "4", "5"]
random.shuffle(cards)
print(cards)   # → shuffled order`,
          lineHighlights: [
            { lines: [0], note: 'import random loads the random module — your source for all things unpredictable.' },
            { lines: [2, 3, 4], note: 'random.random() gives a float 0–1; randint(a, b) gives a whole number between a and b inclusive.' },
            { lines: [6, 7], note: 'random.choice(list) picks one random element from any list.' },
            { lines: [9, 10, 11, 12], note: 'random.shuffle(list) reorders the list in place — the original list is changed, nothing is returned.' },
          ],
        }],
        description: 'random module: random(), randint(), choice(), shuffle() for randomness.',
        challenge: 'Simulate rolling two dice and print the sum. (Use random.randint(1,6) twice.)',
        hint: 'import random\ndie1 = random.randint(1, 6)\ndie2 = random.randint(1, 6)\nprint(f"Dice: {die1} + {die2} = {die1+die2}")',
        starterCode: 'import random\ndie1 = random.randint(1, 6)\ndie2 = random.randint(1, 6)\nprint(f"Dice: {die1} + {die2} = {die1+die2}")\n',
        test: { contains: ['Dice:'] },
      },
      {
        id: 'mod-3', title: 'datetime Module', xp: 35,
        tutorial: [{
          heading: 'datetime works with dates and times',
          text: 'The datetime module lets you work with dates, times, and the difference between them.',
          code:
`from datetime import datetime, date, timedelta

# Current date and time:
now = datetime.now()
print(now)               # → 2024-01-15 14:30:00.123456

# Specific date:
birthday = date(2000, 6, 15)
print(birthday)          # → 2000-06-15
print(birthday.year)     # → 2000

# Format a date as text:
print(now.strftime("%d %B %Y"))  # → 15 January 2024

# Date arithmetic:
tomorrow = date.today() + timedelta(days=1)
print(tomorrow)`,
          lineHighlights: [
            { lines: [0], note: 'from datetime import pulls in the three classes we need: datetime for full timestamps, date for just dates, timedelta for durations.' },
            { lines: [2, 3, 4], note: 'datetime.now() captures the current moment — date and time together — as a datetime object.' },
            { lines: [7, 8, 9], note: 'date(year, month, day) creates a specific date; .year, .month, .day pull out individual parts.' },
            { lines: [11, 12, 15, 16], note: 'strftime() formats a date as text; timedelta(days=1) adds one day — datetime arithmetic just works.' },
          ],
        }],
        description: 'datetime module handles dates, times, and time arithmetic.',
        challenge: 'Print today\'s date using date.today(). Format it nicely with strftime as "DD Month YYYY".',
        hint: 'from datetime import date\ntoday = date.today()\nprint(today.strftime("%d %B %Y"))',
        starterCode: 'from datetime import date\ntoday = date.today()\nprint(today)\nprint(today.strftime("%d %B %Y"))\n',
        test: { contains: ['2'] },
      },
      {
        id: 'mod-4', title: 'os and sys Modules', xp: 35,
        tutorial: [{
          heading: 'os and sys interact with the operating system',
          text: 'os gives you file system operations. sys gives you information about the Python interpreter itself.',
          code:
`import os
import sys

# os — operating system info:
print(os.getcwd())         # current directory
print(os.path.join("folder", "file.txt"))   # safe path joining

# Check if something exists:
print(os.path.exists("C:/"))     # → True (on Windows)

# sys — interpreter info:
print(sys.version)         # Python version
print(sys.platform)        # 'win32', 'linux', 'darwin'

# List environment variables (first 3):
env_keys = list(os.environ.keys())[:3]
print(env_keys)`,
          lineHighlights: [
            { lines: [0, 1], note: 'import os and import sys load two standard library modules for interacting with the operating system and the Python interpreter.' },
            { lines: [3, 4, 5], note: 'os.getcwd() returns your current directory; os.path.join() builds file paths safely across Windows, Mac, and Linux.' },
            { lines: [7, 8], note: 'os.path.exists() checks whether a file or folder actually exists before you try to open it.' },
            { lines: [10, 11, 12], note: 'sys.version tells you the Python version; sys.platform identifies the operating system your code is running on.' },
          ],
        }],
        description: 'os module handles file paths and directories. sys gives Python runtime info.',
        challenge: 'Import sys and print the Python version. Import os and print the current working directory.',
        hint: 'import sys, os\nprint(sys.version)\nprint(os.getcwd())',
        starterCode: 'import sys\nimport os\nprint(sys.version)\nprint(os.getcwd())\n',
        test: { contains: ['3.'] },
      },
      {
        id: 'mod-5', title: '__name__ == "__main__"', xp: 35,
        tutorial: [{
          heading: 'The most important 1 line in Python scripts',
          text: 'Every Python file has a special variable called __name__. When you RUN a file directly, __name__ is "__main__". When a file is IMPORTED by another file, __name__ is the file\'s name. This lets you control what code runs when.',
          code:
`# Imagine this is saved as: calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# This block ONLY runs when you run calculator.py directly.
# It does NOT run when another file imports calculator.
if __name__ == "__main__":
    print("Testing calculator...")
    print(add(3, 5))         # → 8
    print(subtract(10, 4))   # → 6
    print("All tests passed!")

# When another file does: import calculator
# only add() and subtract() become available.
# The test block is SKIPPED.

# You will see this in EVERY professional Python script.
print(f"This file's __name__ is: {__name__}")`,
          lineHighlights: [
            { lines: [2, 3, 5, 6], note: 'add() and subtract() are reusable functions that will be available whether this file is run directly or imported by another file.' },
            { lines: [8, 9, 10], note: '`if __name__ == "__main__":` is the guard — it only passes when Python is running this file directly, not importing it.' },
            { lines: [11, 12, 13, 14], note: 'Everything inside this block is skipped when another file does `import calculator` — only the functions are exported.' },
            { lines: [20, 21], note: 'Printing __name__ shows you what Python actually sets it to — "__main__" when run directly, or the module name when imported.' },
          ],
        }],
        description: '`if __name__ == "__main__":` runs code only when the file is executed directly, not when imported.',
        challenge: 'Write a function `greet(name)` that returns "Hello, {name}!". Under the `if __name__ == "__main__":` guard, call it and print the result.',
        hint: 'def greet(name):\n    return f"Hello, {name}!"\n\nif __name__ == "__main__":\n    print(greet("World"))',
        starterCode: 'def greet(name):\n    return f"Hello, {name}!"\n\nif __name__ == "__main__":\n    print(greet("World"))\n',
        test: { contains: ['Hello, World!'] },
      },
      {
        id: 'mod-6', title: 'functools — lru_cache and partial', xp: 45,
        tutorial: [
          {
            heading: 'lru_cache — remember previous results',
            text: '`@lru_cache` is a decorator that saves the results of expensive function calls. If you call the function again with the same arguments, it returns the saved result instantly instead of re-calculating.',
            code:
`from functools import lru_cache
import time

# Without cache — recalculates every time
def fib_slow(n):
    if n < 2:
        return n
    return fib_slow(n-1) + fib_slow(n-2)

# With cache — saves results, MUCH faster
@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

print(fib(10))    # → 55
print(fib(30))    # → 832040  (instant — cached!)
print(fib(40))    # → 102334155  (instant!)

# See cache statistics:
print(fib.cache_info())`,
            lineHighlights: [
              { lines: [0], note: 'from functools import lru_cache — LRU stands for Least Recently Used; it stores results and evicts the oldest ones when the cache is full.' },
              { lines: [3, 4, 5, 6, 7], note: 'fib_slow() recalculates every sub-problem from scratch — calling fib_slow(40) makes billions of redundant calculations.' },
              { lines: [9, 10, 11, 12, 13, 14], note: '@lru_cache wraps fib() so each unique input is computed only once and the result is stored for instant reuse.' },
              { lines: [16, 17, 18, 21], note: 'fib(40) returns instantly with the cache; cache_info() shows how many times a saved result was reused (hits).' },
            ],
          },
          {
            heading: 'partial — pre-fill arguments',
            text: '`functools.partial` creates a new function from an existing one with some arguments already filled in. Great for reusing functions with fixed settings.',
            code:
`from functools import partial

def power(base, exponent):
    return base ** exponent

# Create specialised versions:
square = partial(power, exponent=2)   # ← exponent always 2
cube   = partial(power, exponent=3)   # ← exponent always 3

print(square(5))    # → 25
print(cube(3))      # → 27

# Another example:
def greet(greeting, name):
    print(f"{greeting}, {name}!")

say_hello = partial(greet, "Hello")
say_hello("Alice")  # → Hello, Alice!
say_hello("Bob")    # → Hello, Bob!`,
            lineHighlights: [
              { lines: [0], note: 'from functools import partial — partial lets you bake in one or more arguments to create a specialized version of any function.' },
              { lines: [2, 3], note: 'power(base, exponent) is the general function that partial will specialize.' },
              { lines: [5, 6, 7], note: 'partial(power, exponent=2) locks exponent=2 forever, creating a new square function that only needs base.' },
              { lines: [12, 13, 14, 16, 17, 18], note: 'say_hello = partial(greet, "Hello") locks the greeting — now say_hello("Alice") only needs a name.' },
            ],
          },
        ],
        description: '@lru_cache speeds up functions by caching results. partial() pre-fills function arguments.',
        challenge: 'Use @lru_cache on a function `factorial(n)` that returns n! (n * factorial(n-1)). Print factorial(10).',
        hint: 'from functools import lru_cache\n@lru_cache(maxsize=None)\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\nprint(factorial(10))',
        starterCode: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\nprint(factorial(10))\n',
        test: { contains: ['3628800'] },
      },
    ],
  },

  // ── WORLD 14 ────────────────────────────────────────────────────────────────
  {
    id: 'files', name: 'File Forest', emoji: '📁', color: '#78716C', subtitle: 'Read and write files', difficulty: 'intermediate',
    lessons: [
      {
        id: 'file-1', title: 'Reading Files', xp: 40,
        tutorial: [{
          heading: 'open() lets you read files',
          text: 'Use `with open(filename, "r") as f:` to open a file for reading. read() gets all the text. readlines() gets a list of lines. The `with` block closes the file automatically.',
          code:
`# Writing a file first so we can read it:
with open("sample.txt", "w") as f:
    f.write("Line 1: Hello\\n")
    f.write("Line 2: World\\n")
    f.write("Line 3: Python\\n")

# Reading it back:
with open("sample.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line:
with open("sample.txt", "r") as f:
    for line in f:
        print(line.strip())   # strip() removes \\n`,
          lineHighlights: [
            { lines: [0, 1, 2, 3, 4], note: 'with open("w") opens the file for writing; everything inside the block writes to it; Python closes the file automatically when the block ends.' },
            { lines: [6, 7, 8, 9], note: 'with open("r") opens for reading; f.read() returns the entire file contents as one big string.' },
            { lines: [11, 12, 13, 14], note: 'Iterating over a file object gives one line at a time; .strip() removes the trailing newline character from each line.' },
          ],
        }],
        description: '`with open(file, "r")` reads files safely. read() or iterate line by line.',
        challenge: 'Create a file "hello.txt" with 3 lines of text. Then read and print each line.',
        hint: 'with open("hello.txt", "w") as f:\n    f.write("Line1\\nLine2\\nLine3\\n")\nwith open("hello.txt", "r") as f:\n    for line in f:\n        print(line.strip())',
        starterCode: 'with open("hello.txt", "w") as f:\n    f.write("Line1\\nLine2\\nLine3\\n")\n\nwith open("hello.txt", "r") as f:\n    for line in f:\n        print(line.strip())\n',
        test: { contains: ['Line1', 'Line2', 'Line3'] },
      },
      {
        id: 'file-2', title: 'Writing Files', xp: 40,
        tutorial: [{
          heading: 'Write and append to files',
          text: '"w" mode creates or overwrites a file. "a" mode appends to existing content without deleting it. writelines() writes a list of strings.',
          code:
`# "w" — write (creates new or overwrites):
with open("log.txt", "w") as f:
    f.write("Start of log\\n")

# "a" — append (adds to existing):
with open("log.txt", "a") as f:
    f.write("Second entry\\n")
    f.write("Third entry\\n")

# writelines() — write a list:
lines = ["Alpha\\n", "Beta\\n", "Gamma\\n"]
with open("alphabet.txt", "w") as f:
    f.writelines(lines)

# Verify:
with open("log.txt") as f:
    print(f.read())`,
          lineHighlights: [
            { lines: [0, 1, 2], note: '"w" mode creates a brand-new file or completely erases an existing one — be careful not to lose data.' },
            { lines: [4, 5, 6, 7], note: '"a" (append) mode adds to the end of an existing file without deleting anything that is already there.' },
            { lines: [9, 10, 11, 12], note: 'writelines() writes a list of strings at once; each string must include its own \\n if you want separate lines.' },
            { lines: [14, 15, 16], note: 'Reading back confirms all three entries were saved — "w" created the first line, "a" added the other two.' },
          ],
        }],
        description: '"w" overwrites, "a" appends. writelines() writes a list at once.',
        challenge: 'Write a file "scores.txt" with 3 scores on separate lines. Then read and print all lines.',
        hint: 'with open("scores.txt", "w") as f:\n    f.writelines(["95\\n", "82\\n", "78\\n"])\nwith open("scores.txt") as f:\n    print(f.read())',
        starterCode: 'with open("scores.txt", "w") as f:\n    f.writelines(["95\\n", "82\\n", "78\\n"])\n\nwith open("scores.txt") as f:\n    print(f.read())\n',
        test: { contains: ['95', '82', '78'] },
      },
      {
        id: 'file-3', title: 'JSON Files', xp: 45,
        tutorial: [{
          heading: 'JSON — save and load Python data as text',
          text: 'JSON is a text format that can store Python dicts and lists. json.dumps() converts Python to JSON text. json.loads() converts JSON text back to Python. json.dump()/load() work directly with files.',
          code:
`import json

# Python dict → JSON text:
person = {"name": "Alice", "age": 25, "skills": ["Python", "Math"]}
json_text = json.dumps(person, indent=2)
print(json_text)

# Save to file:
with open("person.json", "w") as f:
    json.dump(person, f, indent=2)

# Load from file:
with open("person.json", "r") as f:
    loaded = json.load(f)

print(loaded["name"])     # → Alice
print(loaded["skills"])   # → ['Python', 'Math']`,
          lineHighlights: [
            { lines: [0], note: 'import json provides the tools to convert between Python objects (dicts, lists) and JSON text.' },
            { lines: [2, 3, 4, 5], note: 'json.dumps() converts a Python dict to a JSON string — the "s" stands for string; indent=2 adds readable indentation.' },
            { lines: [7, 8, 9], note: 'json.dump() (no "s") writes directly to a file object — you do not need to convert to a string first.' },
            { lines: [11, 12, 13, 15, 16], note: 'json.load() reads a JSON file back into a Python dict — you get back the same structure you started with.' },
          ],
        }],
        description: 'json.dump() saves Python data to a file. json.load() reads it back.',
        challenge: 'Save a dict `{"game":"PyQuest","level":5,"score":1200}` as JSON to "game.json". Load it back and print the score.',
        hint: 'import json\ndata = {"game":"PyQuest","level":5,"score":1200}\nwith open("game.json","w") as f:\n    json.dump(data, f)\nwith open("game.json") as f:\n    loaded = json.load(f)\nprint(loaded["score"])',
        starterCode: 'import json\ndata = {"game": "PyQuest", "level": 5, "score": 1200}\nwith open("game.json", "w") as f:\n    json.dump(data, f)\nwith open("game.json") as f:\n    loaded = json.load(f)\nprint(loaded["score"])\n',
        test: { contains: ['1200'] },
      },
      {
        id: 'file-4', title: 'pathlib — Modern File Paths', xp: 45,
        tutorial: [{
          heading: 'pathlib treats paths as objects, not strings',
          text: '`pathlib.Path` gives you a smarter way to work with file paths. Instead of joining strings with "/" or "\\\\", you use `/` to join paths and get rich methods like `.read_text()`, `.exists()`, `.stem`, `.suffix`.',
          code:
`from pathlib import Path

# Create a path object (doesn't need to exist yet):
p = Path("notes.txt")

# Write and read with one line:
p.write_text("Hello from pathlib!")
content = p.read_text()
print(content)             # → Hello from pathlib!

# Path properties:
print(p.name)              # → notes.txt  (filename)
print(p.stem)              # → notes      (name without extension)
print(p.suffix)            # → .txt       (extension)
print(p.exists())          # → True

# Join paths with / operator:
folder = Path("data")
config = folder / "config.json"
print(config)              # → data/config.json

# Iterate directory contents:
# for f in Path(".").iterdir():
#     print(f.name)`,
          lineHighlights: [
            { lines: [0, 2, 3], note: 'Path("notes.txt") creates a path object — the file does not need to exist yet; it is just a smart reference.' },
            { lines: [5, 6, 7, 8], note: 'write_text() and read_text() replace open/write/close with a single method call — much cleaner.' },
            { lines: [10, 11, 12, 13, 14], note: '.name gives the full filename, .stem strips the extension, .suffix is just the extension, .exists() checks if the file is on disk.' },
            { lines: [16, 17, 18, 19], note: 'The / operator joins path parts safely on any OS — no string concatenation, no worrying about slashes.' },
          ],
        }],
        description: 'pathlib.Path: use / to join, .read_text()/.write_text() to I/O, .exists()/.stem/.suffix for inspection.',
        challenge: 'Use pathlib to write "PyQuest is fun!" to "test.txt", then read it back and print it.',
        nudge: 'from pathlib import Path. p = Path("test.txt"). p.write_text(...). Then p.read_text().',
        hint: 'from pathlib import Path\np = Path("test.txt")\np.write_text("PyQuest is fun!")\nprint(p.read_text())',
        starterCode: 'from pathlib import Path\n\np = Path("test.txt")\np.write_text("PyQuest is fun!")\nprint(p.read_text())\n',
        test: { contains: ['PyQuest is fun!'] },
      },
    ],
  },

  // ── WORLD 15 ────────────────────────────────────────────────────────────────
  {
    id: 'advanced', name: 'Advanced Alley', emoji: '🚀', color: '#F59E0B', subtitle: 'Power tools and patterns', difficulty: 'advanced',
    lessons: [
      {
        id: 'adv-1', title: 'Generators', xp: 55,
        tutorial: [{
          heading: 'Generators produce values one at a time',
          text: 'A generator uses `yield` instead of `return`. It produces values lazily — one at a time as needed — using far less memory than a list when dealing with many items.',
          code:
`# Normal function — builds entire list in memory:
def make_squares_list(n):
    return [i**2 for i in range(n)]

# Generator — produces one value at a time:
def make_squares_gen(n):
    for i in range(n):
        yield i**2        # ← pause and send i**2

# Use a generator:
gen = make_squares_gen(5)
print(next(gen))   # → 0
print(next(gen))   # → 1
print(next(gen))   # → 4

# Loop over all generated values:
for val in make_squares_gen(5):
    print(val)
# → 0  1  4  9  16`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'The regular function builds the whole list at once and stores it all in memory — fine for 5 items, wasteful for a million.' },
            { lines: [4, 5, 6, 7], note: 'A generator uses yield instead of return — it pauses after each value and waits until the next one is requested.' },
            { lines: [9, 10, 11, 12, 13], note: 'next(gen) resumes the generator from where it paused and retrieves the next value on demand.' },
            { lines: [15, 16, 17], note: 'A for loop works seamlessly with generators — Python calls next() behind the scenes until the generator is exhausted.' },
          ],
        }],
        description: 'Generators use `yield` to produce values one at a time, saving memory.',
        challenge: 'Write a generator `countdown(n)` that yields n, n-1, ... down to 1. Print all values from countdown(5).',
        hint: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\nfor val in countdown(5):\n    print(val)',
        starterCode: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor val in countdown(5):\n    print(val)\n',
        test: { contains: ['5', '4', '3', '2', '1'] },
      },
      {
        id: 'adv-1b', title: 'yield from — Generator Delegation', xp: 55,
        tutorial: [{
          heading: 'yield from delegates to another generator',
          text: '`yield from iterable` yields every item from an iterable (list, generator, etc.) one at a time — like an automated `for` loop with `yield`. It\'s the clean way to compose or chain generators.',
          code:
`# Without yield from — verbose:
def chain_verbose(a, b):
    for item in a:
        yield item
    for item in b:
        yield item

# With yield from — clean:
def chain(a, b):
    yield from a      # ← yield every item from a
    yield from b      # ← then every item from b

for val in chain([1, 2, 3], [4, 5, 6]):
    print(val, end=" ")   # → 1 2 3 4 5 6

print()

# Chain generators — flatten a nested structure:
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)  # ← recurse into sub-lists
        else:
            yield item

data = [1, [2, 3], [4, [5, 6]], 7]
print(list(flatten(data)))   # → [1, 2, 3, 4, 5, 6, 7]`,
          lineHighlights: [
            { lines: [0, 1, 2, 3, 4, 5], note: 'The verbose version loops through each iterable separately and yields items one by one — repetitive and noisy.' },
            { lines: [7, 8, 9, 10], note: '`yield from a` replaces the entire for/yield loop with one line — it delegates yielding to the sub-iterable.' },
            { lines: [12, 13], note: 'chain([1,2,3], [4,5,6]) produces 1 2 3 4 5 6 in order — yield from makes this trivial to express.' },
            { lines: [17, 18, 19, 20, 21, 22, 23], note: 'flatten() uses yield from recursively — when it hits a sub-list, it dives into it instead of yielding the list as one item.' },
          ],
        }],
        description: '`yield from iterable` yields all items one by one. Ideal for composing and flattening generators.',
        challenge: 'Write a generator `interleave(a, b)` that yields from a then from b. Use it to combine [10,20,30] and [40,50]. Print all values.',
        nudge: 'def interleave(a, b): yield from a, then yield from b. Then loop over interleave([10,20,30],[40,50]) and print each.',
        hint: 'def interleave(a, b):\n    yield from a\n    yield from b\nfor v in interleave([10,20,30],[40,50]):\n    print(v)',
        starterCode: 'def interleave(a, b):\n    yield from a\n    yield from b\n\nfor v in interleave([10, 20, 30], [40, 50]):\n    print(v)\n',
        test: { contains: ['10', '20', '30', '40', '50'] },
      },
      {
        id: 'adv-2', title: 'Decorators', xp: 60,
        tutorial: [
          {
            heading: 'Decorators wrap functions to add behaviour',
            text: 'A decorator is a function that takes another function and adds something before or after it runs. Use the @decorator syntax to apply one.',
            code:
`def shout(func):
    def wrapper(*args, **kwargs):
        print(">>> Starting! <<<")
        result = func(*args, **kwargs)     # ← call original function
        print(">>> Done! <<<")
        return result
    return wrapper

@shout          # ← apply the decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# → >>> Starting! <<<
# → Hello, Alice!
# → >>> Done! <<<`,
            lineHighlights: [
              { lines: [0, 1, 5, 6], note: 'shout(func) is the decorator — it receives the original function and returns a new wrapper function.' },
              { lines: [2, 3, 4], note: 'wrapper runs extra code before and after calling the original function via func(*args, **kwargs).' },
              { lines: [8, 9, 10], note: '@shout is shorthand for `greet = shout(greet)` — it replaces greet with the wrapped version.' },
              { lines: [12], note: 'Calling greet("Alice") now runs wrapper, which adds the "Starting/Done" messages around the original greeting.' },
            ],
          },
          {
            heading: '@functools.wraps — preserve the function\'s identity',
            text: 'Decorators hide the wrapped function\'s `__name__` and `__doc__`. Use `@functools.wraps(func)` inside your wrapper to copy them across — essential for debugging and documentation tools.',
            code:
`import functools

# Without @wraps — identity lost:
def bad_dec(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@bad_dec
def greet(): "Say hello"
print(greet.__name__)   # → wrapper  ← wrong!
print(greet.__doc__)    # → None     ← lost!

# With @wraps — identity preserved:
def good_dec(func):
    @functools.wraps(func)         # ← copies name + docstring
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@good_dec
def greet(): "Say hello"
print(greet.__name__)   # → greet   ← correct
print(greet.__doc__)    # → Say hello`,
            lineHighlights: [
              { lines: [2, 3, 4, 5, 6], note: 'bad_dec wraps the function but the wrapper never copies the original name or docstring — they are silently lost.' },
              { lines: [8, 9, 10, 11], note: 'After @bad_dec, greet.__name__ shows "wrapper" and __doc__ is None — the function has lost its identity.' },
              { lines: [13, 14, 15], note: '@functools.wraps(func) copies the original function\'s __name__, __doc__, and other metadata onto wrapper.' },
              { lines: [20, 21, 22, 23], note: 'Now greet.__name__ correctly reports "greet" and __doc__ is preserved — debugging tools and docs work correctly.' },
            ],
          },
        ],
        description: 'Decorators add behaviour around a function using the @decorator syntax.',
        challenge: 'Create a `logger` decorator that prints "Function called" before and "Function done" after. Apply it to a function `add(a, b)` that prints a+b.',
        hint: 'def logger(func):\n    def wrapper(*args, **kwargs):\n        print("Function called")\n        result = func(*args, **kwargs)\n        print("Function done")\n        return result\n    return wrapper\n\n@logger\ndef add(a, b):\n    print(a + b)\n\nadd(3, 4)',
        starterCode: 'def logger(func):\n    def wrapper(*args, **kwargs):\n        print("Function called")\n        result = func(*args, **kwargs)\n        print("Function done")\n        return result\n    return wrapper\n\n@logger\ndef add(a, b):\n    print(a + b)\n\nadd(3, 4)\n',
        test: { contains: ['Function called', '7', 'Function done'] },
      },
      {
        id: 'adv-3', title: 'Context Managers', xp: 50,
        tutorial: [
          {
            heading: 'with statements manage setup and teardown',
            text: 'The `with` statement guarantees that cleanup code runs, even if an error occurs. You already used it with files. You can make your own context managers using __enter__ and __exit__.',
            code:
`# File context manager (you've used this):
with open("test.txt", "w") as f:
    f.write("Hello!")
# ← file is automatically closed here

# Custom context manager:
class Timer:
    def __enter__(self):
        print("Timer started")
        return self

    def __exit__(self, *args):
        print("Timer stopped")

with Timer() as t:
    print("Doing work...")
# → Timer started
# → Doing work...
# → Timer stopped`,
            lineHighlights: [
              { lines: [0, 1, 2, 3], note: 'with open() is the classic context manager — Python calls __enter__ to open and __exit__ to close, even if an error occurs.' },
              { lines: [6, 7, 8, 9], note: '__enter__ runs when the with block opens; returning self makes the Timer available as the "as t" variable.' },
              { lines: [11, 12], note: '__exit__ runs when the block ends — it is guaranteed to run even if an exception is raised inside the with block.' },
              { lines: [14, 15], note: 'Using Timer() in a with block calls __enter__ at the top and __exit__ at the bottom automatically.' },
            ],
          },
          {
            heading: '@contextmanager — write one with a generator',
            text: 'Writing a class with __enter__/__exit__ is verbose. `contextlib.contextmanager` lets you write a context manager as a generator function — code before `yield` is setup, code after is teardown.',
            code:
`from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Opening {name}")   # ← setup (like __enter__)
    try:
        yield name             # ← the value available as "as name"
    finally:
        print(f"Closing {name}")  # ← teardown (like __exit__)

with managed_resource("database") as res:
    print(f"Using {res}")
# → Opening database
# → Using database
# → Closing database

# Real-world example — temporary directory:
@contextmanager
def temp_value(d, key, value):
    old = d.get(key)
    d[key] = value
    try:
        yield
    finally:
        if old is None: del d[key]
        else: d[key] = old

config = {"debug": False}
with temp_value(config, "debug", True):
    print(config["debug"])   # → True
print(config["debug"])       # → False`,
            lineHighlights: [
              { lines: [0, 2, 3], note: '@contextmanager turns a plain generator function into a context manager — no class with __enter__/__exit__ needed.' },
              { lines: [4, 5, 6], note: 'Code before yield is the setup (like __enter__); the yielded value becomes available as the "as" variable.' },
              { lines: [7, 8], note: 'The finally block is the teardown (like __exit__) — it runs whether the body succeeded or raised an exception.' },
              { lines: [10, 11], note: 'Using it looks identical to any other with block — Python calls the generator machinery behind the scenes.' },
            ],
          },
        ],
        description: '`with` blocks guarantee cleanup. Implement __enter__ and __exit__ for custom ones.',
        challenge: 'Create a context manager `Loud` that prints "STARTING" on enter and "FINISHED" on exit. Use it with a `with` block.',
        hint: 'class Loud:\n    def __enter__(self):\n        print("STARTING")\n        return self\n    def __exit__(self, *args):\n        print("FINISHED")\n\nwith Loud():\n    print("Working...")',
        starterCode: 'class Loud:\n    def __enter__(self):\n        print("STARTING")\n        return self\n    def __exit__(self, *args):\n        print("FINISHED")\n\nwith Loud():\n    print("Working...")\n',
        test: { contains: ['STARTING', 'Working...', 'FINISHED'] },
      },
      {
        id: 'adv-4', title: 'Comprehensions — All Types', xp: 50,
        tutorial: [{
          heading: 'List, dict, set, and generator comprehensions',
          text: 'Python has four types of comprehension — one for each major collection type. They all follow the same pattern: expression + for + optional if.',
          code:
`nums = range(1, 11)

# List comprehension:
squares = [n**2 for n in nums]
print(squares)            # → [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Dict comprehension:
sq_dict = {n: n**2 for n in nums}
print(sq_dict[5])         # → 25

# Set comprehension (unique values):
remainders = {n % 3 for n in nums}
print(remainders)         # → {0, 1, 2}

# Generator expression (no [ ] — lazy):
gen = (n**2 for n in nums)
print(sum(gen))           # → 385`,
          lineHighlights: [
            { lines: [2, 3, 4], note: '[expr for item in iterable] builds a list — the square brackets are the signal that it is a list comprehension.' },
            { lines: [6, 7, 8], note: '{key: value for item in iterable} builds a dict — the colon separating key and value is what makes it a dict, not a set.' },
            { lines: [10, 11, 12], note: '{expr for item in iterable} builds a set — curly braces with one expression (no colon); duplicates are automatically removed.' },
            { lines: [14, 15, 16], note: '(expr for item in iterable) is a generator expression — lazy, uses almost no memory; only computes each value when asked.' },
          ],
        }],
        description: '[list], {dict}, {set}, and (generator) comprehensions all follow the same pattern.',
        challenge: 'From `words = ["hello","world","hi","python","ok"]`, create a set of word lengths and a dict of word:length. Print both.',
        hint: 'words = ["hello","world","hi","python","ok"]\nlengths_set = {len(w) for w in words}\nlengths_dict = {w: len(w) for w in words}\nprint(lengths_set)\nprint(lengths_dict)',
        starterCode: 'words = ["hello", "world", "hi", "python", "ok"]\nlengths_set  = {len(w) for w in words}\nlengths_dict = {w: len(w) for w in words}\nprint(lengths_set)\nprint(lengths_dict)\n',
        test: { contains: ['2', '5', '6', 'hello', 'python'] },
      },
      {
        id: 'adv-5', title: 'map(), filter(), reduce()', xp: 55,
        tutorial: [{
          heading: 'Functional tools for transforming data',
          text: 'map() applies a function to every item. filter() keeps only items where the function returns True. reduce() accumulates all items into a single value.',
          code:
`from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map — apply a function to every item:
doubled = list(map(lambda n: n * 2, nums))
print(doubled)     # → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# filter — keep items where function is True:
evens = list(filter(lambda n: n % 2 == 0, nums))
print(evens)       # → [2, 4, 6, 8, 10]

# reduce — accumulate to one value:
total = reduce(lambda a, b: a + b, nums)
print(total)       # → 55  (1+2+3+...+10)`,
          lineHighlights: [
            { lines: [0], note: 'reduce() is not a built-in — you must import it from functools; map() and filter() are built-ins.' },
            { lines: [4, 5, 6], note: 'map(func, iterable) applies the function to every item — wrap in list() to see the results, otherwise you get a lazy map object.' },
            { lines: [8, 9, 10], note: 'filter(func, iterable) keeps only the items where the function returns True — here it keeps even numbers.' },
            { lines: [12, 13, 14], note: 'reduce(func, iterable) repeatedly applies the function to pairs: (1+2)=3, then (3+3)=6, then (6+4)=10... until one value remains.' },
          ],
        }],
        description: 'map() transforms. filter() selects. reduce() accumulates to one value.',
        challenge: '`prices = [100, 250, 75, 300, 150]`. Use filter to get prices > 100, then map to add 10% tax. Print the result.',
        hint: 'from functools import reduce\nprices = [100, 250, 75, 300, 150]\nover100 = list(filter(lambda p: p > 100, prices))\nwith_tax = list(map(lambda p: p * 1.1, over100))\nprint(with_tax)',
        starterCode: 'from functools import reduce\nprices = [100, 250, 75, 300, 150]\nover100  = list(filter(lambda p: p > 100, prices))\nwith_tax = list(map(lambda p: p * 1.1, over100))\nprint(with_tax)\n',
        test: { contains: ['275.0', '330.0', '165.0'] },
      },
    ],
  },

  // ── WORLD 16 ────────────────────────────────────────────────────────────────
  {
    id: 'libraries', name: 'Library Lands', emoji: '📚', color: '#6366F1', subtitle: 'Specialized Python modules', difficulty: 'advanced',
    lessons: [
      {
        id: 'lib-1', title: 'itertools', xp: 55,
        tutorial: [{
          heading: 'itertools — powerful iteration tools',
          text: 'itertools is a built-in module with tools for efficient looping. chain() connects multiple iterables, product() gives all combinations, and cycle() repeats forever.',
          code:
`import itertools

# chain — combine multiple iterables:
a = [1, 2, 3]
b = ['a', 'b', 'c']
for item in itertools.chain(a, b):
    print(item, end=' ')
# → 1 2 3 a b c

print()

# product — all combinations:
for pair in itertools.product([1,2], ['x','y']):
    print(pair, end=' ')
# → (1,'x') (1,'y') (2,'x') (2,'y')

print()

# islice — take first N items:
counter = itertools.count(0)   # 0,1,2,3...
first5  = list(itertools.islice(counter, 5))
print(first5)    # → [0, 1, 2, 3, 4]`,
          lineHighlights: [
            { lines: [0], note: 'import itertools loads a collection of memory-efficient looping tools — all return iterators, not lists.' },
            { lines: [2, 3, 4, 5, 6, 7], note: 'itertools.chain(a, b) glues two iterables together end-to-end without building a new combined list.' },
            { lines: [11, 12, 13, 14], note: 'itertools.product([1,2], ["x","y"]) generates every possible pairing — like two nested for loops in one line.' },
            { lines: [18, 19, 20, 21], note: 'count(0) counts forever; islice(counter, 5) safely takes only the first 5 — crucial for infinite iterators.' },
          ],
        }],
        description: 'itertools provides chain(), product(), cycle(), islice() and more for efficient iteration.',
        challenge: 'Use itertools.product to print all pairs from [1,2,3] and ["a","b"]. Should give 6 pairs.',
        hint: 'import itertools\nfor pair in itertools.product([1,2,3], ["a","b"]):\n    print(pair)',
        starterCode: 'import itertools\nfor pair in itertools.product([1, 2, 3], ["a", "b"]):\n    print(pair)\n',
        test: { contains: ["(1, 'a')", "(3, 'b')"] },
      },
      {
        id: 'lib-2', title: 'collections Module', xp: 55,
        tutorial: [{
          heading: 'collections has specialised container types',
          text: 'Counter counts occurrences. defaultdict gives a default value for missing keys. deque is a fast double-ended queue. namedtuple creates readable tuples.',
          code:
`from collections import Counter, defaultdict, deque, namedtuple

# Counter — count items:
text   = "python is awesome and python rules"
counts = Counter(text.split())
print(counts)
print(counts["python"])    # → 2

# defaultdict — no KeyError:
dd = defaultdict(int)      # default is 0
dd["missing"] += 5
print(dd["missing"])       # → 5
print(dd["new"])           # → 0 (no error!)

# namedtuple — readable tuples:
Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)            # → 10 20`,
          lineHighlights: [
            { lines: [0], note: 'from collections imports four specialized container types that extend Python\'s built-in dict, list, and tuple.' },
            { lines: [2, 3, 4, 5, 6], note: 'Counter(iterable) counts how many times each item appears — like a tally sheet; access counts like a dict.' },
            { lines: [8, 9, 10, 11, 12], note: 'defaultdict(int) means any missing key automatically gets value 0 — no KeyError ever raised on first access.' },
            { lines: [14, 15, 16, 17], note: 'namedtuple creates tuples where fields have names: p.x is clearer than p[0] and just as fast.' },
          ],
        }],
        description: 'Counter, defaultdict, deque, namedtuple are in the collections module.',
        challenge: '`text = "apple banana apple cherry banana apple"`. Use Counter to count words. Print the 2 most common.',
        hint: 'from collections import Counter\ntext = "apple banana apple cherry banana apple"\ncounts = Counter(text.split())\nprint(counts.most_common(2))',
        starterCode: 'from collections import Counter\ntext = "apple banana apple cherry banana apple"\ncounts = Counter(text.split())\nprint(counts.most_common(2))\n',
        test: { contains: ['apple', '3'] },
      },
      {
        id: 'lib-3', title: 'Regular Expressions', xp: 60,
        tutorial: [{
          heading: 're module — pattern matching in text',
          text: 'Regular expressions (regex) are patterns for searching text. re.search() finds a match. re.findall() finds all matches. re.sub() replaces matches.',
          code:
`import re

text = "My phone is 123-456-7890 and email is alice@example.com"

# search — find first match:
phone = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)
if phone:
    print(phone.group())    # → 123-456-7890

# findall — find all numbers:
all_nums = re.findall(r"\\d+", text)
print(all_nums)             # → ['123', '456', '7890']

# match email pattern:
email = re.search(r"[\\w.]+@[\\w.]+", text)
print(email.group())        # → alice@example.com

# sub — replace pattern:
clean = re.sub(r"\\d{3}-\\d{3}-\\d{4}", "XXX-XXX-XXXX", text)
print(clean)`,
          lineHighlights: [
            { lines: [0], note: 'import re loads Python\'s regular expression module — regex patterns let you search text by shape, not exact content.' },
            { lines: [4, 5, 6, 7], note: 're.search() scans the whole string for the first match; .group() extracts the matched text from the result.' },
            { lines: [9, 10, 11], note: 're.findall() returns ALL non-overlapping matches as a list — useful when multiple matches exist in the text.' },
            { lines: [17, 18, 19], note: 're.sub() replaces every match with a replacement string — great for redacting sensitive info like phone numbers.' },
          ],
        }],
        description: 're.search(), re.findall(), re.sub() find and replace patterns in strings.',
        challenge: '`text = "Prices: $10, $250, $3.99"`. Use re.findall to extract all numbers (\\d+\\.?\\d*). Print them.',
        hint: 'import re\ntext = "Prices: $10, $250, $3.99"\nnums = re.findall(r"\\d+\\.?\\d*", text)\nprint(nums)',
        starterCode: 'import re\ntext = "Prices: $10, $250, $3.99"\nnums = re.findall(r"\\d+\\.?\\d*", text)\nprint(nums)\n',
        test: { contains: ['10', '250', '3.99'] },
      },
      {
        id: 'lib-4', title: 'Type Hints', xp: 45,
        tutorial: [{
          heading: 'Type hints make code easier to understand',
          text: 'Type hints tell you (and your editor) what types a function expects and returns. Python doesn\'t enforce them at runtime but they greatly improve readability.',
          code:
`# Without hints — what types go in/out?
def add(a, b):
    return a + b

# With hints — crystal clear:
def add(a: int, b: int) -> int:
    return a + b

def greet(name: str) -> str:
    return f"Hello, {name}!"

def average(nums: list) -> float:
    return sum(nums) / len(nums)

print(add(3, 5))             # → 8
print(greet("Alice"))        # → Hello, Alice!
print(average([1,2,3,4,5]))  # → 3.0`,
          lineHighlights: [
            { lines: [0, 1, 2], note: 'Without hints, you have to read the function body to guess what types add() accepts — unhelpful for larger codebases.' },
            { lines: [4, 5, 6], note: 'param: type annotates each input; -> type at the end declares the return type — crystal clear to any reader.' },
            { lines: [8, 9, 11, 12], note: 'Hints work with any type: str, float, list, dict, or your own classes — use whatever describes the data best.' },
            { lines: [14, 15, 16], note: 'Python ignores hints at runtime — they are for humans and editor tools (like autocomplete), not the interpreter.' },
          ],
        }],
        description: 'Type hints (param: type → return_type) document what a function expects and returns.',
        challenge: 'Write `square(n: int) -> int` that returns n squared. And `make_greeting(name: str) -> str` that returns "Hi, {name}!". Print both.',
        hint: 'def square(n: int) -> int:\n    return n ** 2\ndef make_greeting(name: str) -> str:\n    return f"Hi, {name}!"\nprint(square(7))\nprint(make_greeting("World"))',
        starterCode: 'def square(n: int) -> int:\n    return n ** 2\n\ndef make_greeting(name: str) -> str:\n    return f"Hi, {name}!"\n\nprint(square(7))\nprint(make_greeting("World"))\n',
        test: { contains: ['49', 'Hi, World!'] },
      },
      {
        id: 'lib-5', title: 'Final Project — Quiz Game', xp: 100,
        tutorial: [
          {
            heading: 'Put it all together!',
            text: 'This final lesson combines everything: classes, loops, dictionaries, functions, and f-strings. Study the quiz game below, then build your own version.',
            code:
`# A mini quiz game combining many Python concepts

questions = [
    {"q": "What keyword defines a function?",  "a": "def"},
    {"q": "What loop runs a set number of times?", "a": "for"},
    {"q": "What stores key-value pairs?",          "a": "dict"},
]

score = 0
for i, item in enumerate(questions, 1):
    print(f"Q{i}: {item['q']}")
    answer = input("Your answer: ").strip().lower()
    if answer == item["a"]:
        print("Correct! +1")
        score += 1
    else:
        print(f"Wrong. Answer: {item['a']}")

print(f"\\nFinal score: {score}/{len(questions)}")`,
            lineHighlights: [
              { lines: [2, 3, 4, 5, 6], note: 'A list of dicts stores each question and its answer neatly — easy to read and easy to add more questions.' },
              { lines: [8, 9, 10], note: 'enumerate(questions, 1) gives both the question number and the dict so you can print "Q1:", "Q2:" etc.' },
              { lines: [11, 12, 13, 14], note: 'input() gets the player\'s answer; .strip().lower() trims whitespace and makes matching case-insensitive.' },
              { lines: [18], note: 'The f-string formats the final score using len(questions) so the total auto-updates if you add more questions.' },
            ],
          },
          {
            heading: 'Now build your own!',
            text: 'Create a quiz game about Python with at least 3 questions. Use a list of dicts, a for loop, input(), if/else, and f-strings.',
            code:
`# Template — customise the questions!
my_questions = [
    {"q": "Your question here?", "a": "answer"},
    {"q": "Another question?",   "a": "answer"},
    {"q": "One more question?",  "a": "answer"},
]

score = 0
for i, item in enumerate(my_questions, 1):
    print(f"Q{i}: {item['q']}")
    ans = input("Answer: ").strip().lower()
    if ans == item["a"]:
        print("Correct!")
        score += 1
    else:
        print(f"Nope! Answer was: {item['a']}")

print(f"Score: {score}/{len(my_questions)}")`,
            lineHighlights: [
              { lines: [1, 2, 3, 4, 5], note: 'Replace the placeholder questions and answers with your own — the structure stays exactly the same.' },
              { lines: [7, 8, 9], note: 'enumerate(my_questions, 1) numbers questions from 1 so the output shows "Q1:", "Q2:", not "Q0:".' },
              { lines: [10, 11, 12, 13], note: 'input() pauses until the user types; .strip().lower() normalises their answer so "Def" matches "def".' },
              { lines: [17], note: 'len(my_questions) adapts automatically — add a 4th question and the denominator updates without changing this line.' },
            ],
          },
        ],
        description: 'Build a complete Python quiz game combining classes, loops, dicts, and functions.',
        challenge: 'Build a quiz with 3 Python questions. The user answers each. Print "Correct!" or "Wrong!" and show the final score.',
        hint: 'Use the template in the Learn tab — add your 3 questions and test it!',
        starterCode:
`questions = [
    {"q": "What keyword defines a function?",      "a": "def"},
    {"q": "What loop runs a set number of times?", "a": "for"},
    {"q": "What stores key-value pairs?",           "a": "dict"},
]

score = 0
for i, item in enumerate(questions, 1):
    print(f"Q{i}: {item['q']}")
    ans = input("Answer: ").strip().lower()
    if ans == item["a"]:
        print("Correct!")
        score += 1
    else:
        print(f"Wrong! Answer: {item['a']}")

print(f"Score: {score}/{len(questions)}")
`,
        test: { contains: ['Score:'], inputs: ['def', 'for', 'dict'] },
      },
      {
        id: 'lib-6', title: 'any(), all(), sorted() with key', xp: 45,
        tutorial: [
          {
            heading: 'any() and all() — check multiple conditions at once',
            text: '`any()` returns True if AT LEAST ONE item in a list is truthy. `all()` returns True only if EVERY item is truthy. Both are shortcuts for long chains of `or` / `and`.',
            code:
`scores = [85, 92, 78, 95, 88]

# any() — is at least one score above 90?
print(any(s > 90 for s in scores))    # → True  (92 and 95 qualify)

# all() — are ALL scores above 70?
print(all(s > 70 for s in scores))    # → True  (all qualify)

# all() — are all scores above 90?
print(all(s > 90 for s in scores))    # → False  (85, 78, 88 fail)

# Practical example — validate a password:
password = "Secret123"
has_upper = any(c.isupper() for c in password)
has_digit = any(c.isdigit() for c in password)
print(f"Valid: {has_upper and has_digit}")  # → Valid: True`,
            lineHighlights: [
              { lines: [2, 3], note: 'any(condition for item in iterable) returns True as soon as one item passes — it stops checking the rest early.' },
              { lines: [5, 6], note: 'all(condition for item) returns True only if every single item passes — it stops at the very first failure.' },
              { lines: [8, 9], note: 'all() returns False here because 85, 78, and 88 are below 90 — not all scores qualify.' },
              { lines: [11, 12, 13, 14, 15], note: 'any() shines for validation: checking that a password has at least one uppercase letter and one digit.' },
            ],
          },
          {
            heading: 'sorted() with a key function',
            text: '`sorted()` sorts without changing the original. The `key=` argument lets you sort by any criterion — length, a field, a calculation. It\'s one of the most powerful built-ins.',
            code:
`words = ["banana", "apple", "kiwi", "cherry", "fig"]

# Sort alphabetically (default):
print(sorted(words))
# → ['apple', 'banana', 'cherry', 'fig', 'kiwi']

# Sort by word LENGTH:
print(sorted(words, key=len))
# → ['fig', 'kiwi', 'apple', 'banana', 'cherry']

# Sort by last character:
print(sorted(words, key=lambda w: w[-1]))

# Sort a list of dicts by a field:
people = [{"name":"Carol","age":30},{"name":"Alice","age":25},{"name":"Bob","age":28}]
by_age  = sorted(people, key=lambda p: p["age"])
by_name = sorted(people, key=lambda p: p["name"])
print([p["name"] for p in by_age])   # → ['Alice', 'Bob', 'Carol']`,
            lineHighlights: [
              { lines: [2, 3, 4], note: 'sorted() without a key sorts alphabetically and returns a NEW list — the original words list is not changed.' },
              { lines: [6, 7, 8], note: 'key=len tells sorted() to rank each word by its character count — the shortest word goes first.' },
              { lines: [10, 11], note: 'key=lambda w: w[-1] sorts by the last character — lambda creates a tiny throwaway function right inline.' },
              { lines: [13, 14, 15, 16, 17], note: 'key=lambda p: p["age"] sorts a list of dicts by the value of one field — this pattern works for any field.' },
            ],
          },
        ],
        description: 'any() checks if anything is True. all() checks if everything is True. sorted(key=) sorts by any rule.',
        challenge: '`nums = [4, 7, 2, 9, 1, 8, 3]`. Use any() to check if any is > 8. Use all() to check if all > 0. Sort descending with sorted(reverse=True).',
        hint: 'print(any(n > 8 for n in nums))\nprint(all(n > 0 for n in nums))\nprint(sorted(nums, reverse=True))',
        starterCode: 'nums = [4, 7, 2, 9, 1, 8, 3]\nprint(any(n > 8 for n in nums))\nprint(all(n > 0 for n in nums))\nprint(sorted(nums, reverse=True))\n',
        test: { contains: ['True', 'True', '9, 8, 7'] },
      },
      {
        id: 'lib-7', title: 'isinstance(), getattr(), hasattr()', xp: 45,
        tutorial: [
          {
            heading: 'isinstance() — check what type something is',
            text: '`isinstance(value, Type)` checks if a value is of a certain type, including inherited types. It\'s safer than `type(x) == int` because it respects inheritance.',
            code:
`# isinstance() — type checking
print(isinstance(42, int))        # → True
print(isinstance(3.14, float))    # → True
print(isinstance("hi", str))      # → True
print(isinstance([], list))       # → True

# Check multiple types at once:
def process(value):
    if isinstance(value, (int, float)):
        print(f"Number: {value * 2}")
    elif isinstance(value, str):
        print(f"Text: {value.upper()}")

process(5)       # → Number: 10
process("hello") # → Text: HELLO

# Works with inheritance:
class Animal: pass
class Dog(Animal): pass
d = Dog()
print(isinstance(d, Dog))     # → True
print(isinstance(d, Animal))  # → True (Dog IS an Animal)`,
            lineHighlights: [
              { lines: [0, 1, 2, 3, 4], note: 'isinstance(value, Type) checks if a value is of a given type — returns True or False; safer than type(x) == int.' },
              { lines: [6, 7, 8, 9, 10, 11], note: 'Pass a tuple of types to check against multiple at once — isinstance(value, (int, float)) accepts either.' },
              { lines: [13, 14], note: 'process() behaves differently depending on type — this pattern is called type-based dispatch.' },
              { lines: [16, 17, 18, 19, 20, 21], note: 'isinstance() respects inheritance — a Dog instance is also an Animal, so both checks return True.' },
            ],
          },
          {
            heading: 'getattr(), hasattr(), setattr() — dynamic attributes',
            text: 'These built-ins let you access or set object attributes using a string name — powerful when you don\'t know the attribute name until runtime.',
            code:
`class Config:
    host = "localhost"
    port = 8080
    debug = True

cfg = Config()

# hasattr — does the attribute exist?
print(hasattr(cfg, "host"))      # → True
print(hasattr(cfg, "password"))  # → False

# getattr — get attribute by name string:
setting = "port"
print(getattr(cfg, setting))     # → 8080

# getattr with a default:
print(getattr(cfg, "timeout", 30))  # → 30 (doesn't exist, use default)

# setattr — set attribute by name:
setattr(cfg, "timeout", 60)
print(cfg.timeout)               # → 60`,
            lineHighlights: [
              { lines: [7, 8, 9], note: 'hasattr(obj, "name") safely checks if an attribute exists before you try to access it — no AttributeError risk.' },
              { lines: [11, 12, 13], note: 'getattr(obj, name_string) reads an attribute using a variable name — powerful when you don\'t know the name until runtime.' },
              { lines: [15, 16], note: 'The third argument to getattr() is a fallback default — returned instead of raising AttributeError when the attribute is missing.' },
              { lines: [18, 19, 20], note: 'setattr(obj, "name", value) adds or changes an attribute dynamically — equivalent to cfg.timeout = 60 but using a string name.' },
            ],
          },
        ],
        description: 'isinstance() checks types. hasattr/getattr/setattr read and write attributes by name.',
        challenge: '`x = 42`. Use isinstance to check if it\'s an int. Use getattr on a simple object to get an attribute by its string name.',
        hint: 'print(isinstance(42, int))\nclass T:\n    value = 99\nt = T()\nprint(getattr(t, "value"))',
        starterCode: 'print(isinstance(42, int))\nprint(isinstance("hello", str))\nprint(isinstance(3.14, (int, float)))\n\nclass Config:\n    debug = True\n    port  = 8080\n\ncfg = Config()\nprint(getattr(cfg, "port"))\nprint(hasattr(cfg, "debug"))\n',
        test: { contains: ['True', '8080'] },
      },
      {
        id: 'lib-8', title: 'Extended Unpacking and Walrus :=', xp: 45,
        tutorial: [
          {
            heading: 'Extended unpacking with *',
            text: 'You can use * in an unpacking assignment to capture "the rest" of the items into a list. This works with any iterable.',
            code:
`# * captures the "rest" as a list
first, *rest = [1, 2, 3, 4, 5]
print(first)    # → 1
print(rest)     # → [2, 3, 4, 5]

# First and last, middle in between:
head, *middle, tail = [10, 20, 30, 40, 50]
print(head)     # → 10
print(middle)   # → [20, 30, 40]
print(tail)     # → 50

# Skip items you don't need:
name, *_, last_score = ["Alice", 85, 90, 78, 95]
print(name)        # → Alice
print(last_score)  # → 95`,
            lineHighlights: [
              { lines: [0, 1, 2, 3], note: '`*rest` after first absorbs everything that remains into a list — Python figures out how many items it gets.' },
              { lines: [5, 6, 7, 8, 9], note: 'You can pin both ends: head and tail take one item each, *middle gets everything in between.' },
              { lines: [11, 12, 13, 14], note: '`*_` (underscore) is a convention for "I want to capture these but I don\'t care about them" — only name and last_score matter here.' },
            ],
          },
          {
            heading: 'Walrus operator := — assign and use in one line',
            text: 'The walrus operator `:=` (Python 3.8+) assigns a value AND uses it in the same expression. It\'s very useful in while loops and if conditions.',
            code:
`# Walrus in a while loop — read chunks until empty:
# (Simulating with a list here)
data = [10, 20, 30, 0, 40]
index = 0

while (value := data[index]) != 0:
    print(f"Processing: {value}")
    index += 1
# → Processing: 10
# → Processing: 20
# → Processing: 30

# Walrus in an if — compute and check at once:
numbers = [1, -3, 5, -2, 8]
if (neg := [n for n in numbers if n < 0]):
    print(f"Found {len(neg)} negatives: {neg}")
# → Found 2 negatives: [-3, -2]`,
          },
        ],
        description: '`first, *rest = list` captures remaining items. `:=` assigns inside an expression.',
        challenge: '`scores = [95, 87, 72, 61, 88]`. Unpack into first score, last score, and middle scores with *. Print all three.',
        hint: 'first, *middle, last = scores\nprint(first)\nprint(middle)\nprint(last)',
        starterCode: 'scores = [95, 87, 72, 61, 88]\nfirst, *middle, last = scores\nprint(f"First: {first}")\nprint(f"Middle: {middle}")\nprint(f"Last: {last}")\n',
        test: { contains: ['First: 95', 'Last: 88'] },
      },
      {
        id: 'lib-9', title: 'enum — Named Constants', xp: 45,
        tutorial: [{
          heading: 'enum.Enum gives names to fixed sets of values',
          text: 'An `Enum` is a set of named, constant values. Instead of magic strings like `"PENDING"` scattered through your code, you define them once in an Enum and get autocomplete, comparisons, and clear error messages.',
          code:
`from enum import Enum, auto

class Status(Enum):
    PENDING  = 1
    ACTIVE   = 2
    CLOSED   = 3

# Access by name or value:
s = Status.ACTIVE
print(s)            # → Status.ACTIVE
print(s.name)       # → ACTIVE
print(s.value)      # → 2

# Compare:
print(s == Status.ACTIVE)   # → True
print(s == Status.CLOSED)   # → False

# Iterate all members:
for status in Status:
    print(status.name, status.value)

# auto() generates values automatically:
class Direction(Enum):
    NORTH = auto()   # → 1
    SOUTH = auto()   # → 2
    EAST  = auto()   # → 3
    WEST  = auto()   # → 4

print(Direction.NORTH.value)   # → 1`,
          lineHighlights: [
            { lines: [0], note: 'Import Enum and auto() from the built-in enum module' },
            { lines: [2, 3, 4, 5], note: 'Define Status enum — each name is a constant with a fixed integer value' },
            { lines: [8, 9, 10, 11], note: 'Access members by name; .name gives the label, .value gives the number' },
            { lines: [14, 15], note: 'Compare enum members with == — each member is a unique singleton' },
            { lines: [18, 19], note: 'Iterate over all members in definition order' },
            { lines: [22, 23, 24, 25, 26], note: 'auto() assigns 1, 2, 3… automatically — no manual numbering needed' },
            { lines: [28], note: 'NORTH was first, so auto() gave it the value 1' },
          ],
        }],
        description: 'enum.Enum defines named constants. Access by .name/.value, compare with ==, iterate all members.',
        challenge: 'Create an `Enum` called `Season` with SPRING, SUMMER, AUTUMN, WINTER using auto(). Print all seasons with their values.',
        nudge: 'from enum import Enum, auto. class Season(Enum): each name = auto(). Then loop over Season and print name + value.',
        hint: 'from enum import Enum, auto\nclass Season(Enum):\n    SPRING = auto()\n    SUMMER = auto()\n    AUTUMN = auto()\n    WINTER = auto()\nfor s in Season:\n    print(s.name, s.value)',
        starterCode: 'from enum import Enum, auto\n\nclass Season(Enum):\n    SPRING = auto()\n    SUMMER = auto()\n    AUTUMN = auto()\n    WINTER = auto()\n\nfor s in Season:\n    print(s.name, s.value)\n',
        test: { contains: ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER', '1', '4'] },
      },
      {
        id: 'lib-10', title: 'Testing with pytest', xp: 60,
        tutorial: [{
          heading: 'Write tests to prove your code works',
          text: 'Testing means writing code that **verifies** your code. `assert` checks that a condition is true — if it\'s false, it raises AssertionError. In a real project you\'d run `pytest`, which discovers and runs all functions starting with `test_` automatically.',
          code:
`# The function under test:
def add(a, b):
    return a + b

def is_even(n):
    return n % 2 == 0

# Test functions — names start with test_:
def test_add_positive():
    assert add(2, 3) == 5          # passes ✓

def test_add_negative():
    assert add(-1, -1) == -2       # passes ✓

def test_add_zero():
    assert add(0, 5) == 5          # passes ✓

def test_is_even():
    assert is_even(4) == True
    assert is_even(3) == False
    assert is_even(0) == True

# Run all tests manually (pytest would do this automatically):
tests = [test_add_positive, test_add_negative, test_add_zero, test_is_even]
for t in tests:
    try:
        t()
        print(f"✓ {t.__name__}")
    except AssertionError as e:
        print(f"✗ {t.__name__} FAILED: {e}")`,
          lineHighlights: [
            { lines: [1, 2, 4, 5], note: 'The real functions being tested — add() and is_even()' },
            { lines: [8, 9], note: 'Test functions must start with test_ — pytest discovers them automatically' },
            { lines: [9], note: 'assert checks a condition; if False it raises AssertionError and fails the test' },
            { lines: [11, 12, 14, 15], note: 'One test per case — positive, negative, zero — keeps failures easy to diagnose' },
            { lines: [17, 18, 19, 20], note: 'Multiple asserts in one test — all must pass for the test to pass' },
            { lines: [23, 24, 25, 26, 27, 28, 29], note: 'Manual test runner: catch AssertionError and print pass or fail' },
          ],
        }],
        description: '`assert` verifies conditions. Functions named `test_*` are auto-discovered by pytest. Test edge cases: zero, negatives, empty inputs.',
        challenge: 'Write a function `multiply(a, b)` and 3 test functions: test zero, test positive, test negative. Run all tests and print pass/fail.',
        nudge: 'Define multiply(a, b) returning a*b. Write test_zero: assert multiply(0, 5) == 0. test_positive: assert multiply(3,4)==12. test_negative: assert multiply(-2,3)==-6.',
        hint: 'def multiply(a, b): return a * b\ndef test_zero(): assert multiply(0, 5) == 0\ndef test_positive(): assert multiply(3, 4) == 12\ndef test_negative(): assert multiply(-2, 3) == -6\nfor t in [test_zero, test_positive, test_negative]:\n    try: t(); print(f"✓ {t.__name__}")\n    except AssertionError: print(f"✗ {t.__name__}")',
        starterCode: 'def multiply(a, b):\n    return a * b\n\ndef test_zero():\n    assert multiply(0, 5) == 0\n\ndef test_positive():\n    assert multiply(3, 4) == 12\n\ndef test_negative():\n    assert multiply(-2, 3) == -6\n\nfor t in [test_zero, test_positive, test_negative]:\n    try:\n        t()\n        print(f"✓ {t.__name__}")\n    except AssertionError:\n        print(f"✗ {t.__name__} FAILED")\n',
        test: { contains: ['✓ test_zero', '✓ test_positive', '✓ test_negative'] },
      },
    ],
  },

  // ── WORLD 17 ────────────────────────────────────────────────────────────────
  {
    id: 'async', name: 'Async Avenue', emoji: '⚡', color: '#06B6D4', subtitle: 'Write concurrent, non-blocking code', difficulty: 'advanced',
    lessons: [
      {
        id: 'async-1', title: 'Why Async? The Problem it Solves', xp: 45,
        tutorial: [{
          heading: 'Waiting is wasted time — async fixes that',
          text: 'Normal (synchronous) Python does one thing at a time and waits for each to finish. If you request data from 3 websites one-by-one, you wait for each. Async lets Python START all 3 requests, then handle each result as it arrives — much faster for tasks that involve waiting.',
          code:
`import time

# SYNCHRONOUS — waits for each task fully:
def fetch_slow(name, seconds):
    print(f"Starting {name}...")
    time.sleep(seconds)          # ← blocks everything!
    print(f"Done {name}")

start = time.time()
fetch_slow("Task A", 2)
fetch_slow("Task B", 2)
fetch_slow("Task C", 2)
total = time.time() - start
print(f"Total time: {total:.1f}s")   # → Total time: 6.0s

# ASYNC version (next lesson) would take ~2s total
# because all 3 tasks run at the same time!`,
          lineHighlights: [
            { lines: [3, 4, 5, 6], note: 'Synchronous function — time.sleep() blocks the entire program while it waits' },
            { lines: [5], note: 'This single line freezes everything: no other code can run during the sleep' },
            { lines: [8, 9, 10, 11], note: 'Three calls back-to-back — each must fully finish before the next starts' },
            { lines: [12, 13], note: 'Total is 6s because we waited 2+2+2 seconds in sequence' },
            { lines: [15, 16], note: 'Async runs all 3 at once — total would be ~2s, not 6s' },
          ],
        }],
        description: 'Synchronous code waits for each task. Async code handles many waiting tasks simultaneously.',
        challenge: 'Run the synchronous code and observe it takes ~6 seconds. Read the comment about what async would do differently.',
        hint: 'import time\nstart = time.time()\nfor task in ["A","B","C"]:\n    time.sleep(0.1)\nprint(f"Done in {time.time()-start:.1f}s")',
        starterCode: 'import time\n\nstart = time.time()\nfor task in ["A", "B", "C"]:\n    print(f"Working on {task}...")\n    time.sleep(0.1)   # simulate 0.1s of waiting\n    print(f"Done {task}")\n\nprint(f"Total: {time.time()-start:.1f}s")\n',
        test: { contains: ['Done A', 'Done B', 'Done C'] },
      },
      {
        id: 'async-2', title: 'async def and await', xp: 55,
        tutorial: [{
          heading: 'async def declares a coroutine. await pauses and yields.',
          text: '`async def` defines a coroutine — a function that can pause. `await` pauses that function until the awaited task finishes, but other code can run during that pause. In the browser (Pyodide) use `await main()` at the top level — in regular Python scripts you would write `asyncio.run(main())`.',
          code:
`import asyncio

# async def — defines a coroutine:
async def greet(name, delay):
    print(f"Hello {name}!")
    await asyncio.sleep(delay)   # ← pause WITHOUT blocking others
    print(f"Goodbye {name}!")

async def main():
    # Run greetings one at a time (still fast here):
    await greet("Alice", 0.1)
    await greet("Bob",   0.1)

# In the browser: top-level await works directly
await main()
# → Hello Alice!
# → Goodbye Alice!
# → Hello Bob!
# → Goodbye Bob!`,
          lineHighlights: [
            { lines: [3], note: 'async def makes greet a coroutine — it can pause and resume' },
            { lines: [5], note: 'await asyncio.sleep() pauses THIS coroutine but lets other code run during the wait' },
            { lines: [8, 10, 11], note: 'main() is also async — it awaits greet() one at a time here' },
            { lines: [13], note: 'Top-level await works in the browser (Pyodide) — regular scripts use asyncio.run(main())' },
          ],
        }],
        description: '`async def` defines a coroutine. `await` pauses it. In the browser use `await main()` at the top level.',
        challenge: 'Write `async def say_after(word, delay)` that awaits asyncio.sleep(delay) then prints the word. In main(), await it twice. Run with `await main()` at the top level.',
        hint: 'import asyncio\nasync def say_after(word, delay):\n    await asyncio.sleep(delay)\n    print(word)\nasync def main():\n    await say_after("Hello", 0.1)\n    await say_after("World", 0.1)\nawait main()',
        starterCode: 'import asyncio\n\nasync def say_after(word, delay):\n    await asyncio.sleep(delay)\n    print(word)\n\nasync def main():\n    await say_after("Hello", 0.1)\n    await say_after("World", 0.1)\n\nawait main()\n',
        test: { contains: ['Hello', 'World'] },
      },
      {
        id: 'async-3', title: 'asyncio.gather() — Run Tasks Together', xp: 60,
        tutorial: [{
          heading: 'gather() runs multiple coroutines at the same time',
          text: '`asyncio.gather()` starts several coroutines simultaneously and waits for all of them to finish. This is where async really shines — instead of 6 seconds (3 × 2s), everything finishes in 2 seconds.',
          code:
`import asyncio
import time

async def fetch(name, delay):
    print(f"Starting {name}...")
    await asyncio.sleep(delay)   # ← simulate waiting (e.g. web request)
    print(f"Done {name}!")
    return f"{name} result"

async def main():
    start = time.time()

    # gather() runs all 3 at the SAME TIME:
    results = await asyncio.gather(
        fetch("Task A", 0.3),
        fetch("Task B", 0.3),
        fetch("Task C", 0.3),
    )
    elapsed = time.time() - start
    print(f"All done in {elapsed:.1f}s")  # → ~0.3s not ~0.9s!
    print(results)

await main()`,
          lineHighlights: [
            { lines: [3, 4, 5, 6, 7], note: 'fetch() is an async function that simulates waiting and returns a result' },
            { lines: [10, 11, 12, 13, 14], note: 'gather() starts ALL THREE at the same time — they run concurrently' },
            { lines: [15, 16], note: 'Elapsed is ~0.3s total, not 0.9s — all three ran simultaneously' },
            { lines: [17], note: 'gather() returns a list of all results in the same order as the arguments' },
          ],
        }],
        description: 'asyncio.gather() runs multiple coroutines in parallel and returns all their results.',
        challenge: 'Use asyncio.gather() to run 3 coroutines that each print a number after a short sleep. All should finish at nearly the same time.',
        hint: 'import asyncio\nasync def print_num(n):\n    await asyncio.sleep(0.1)\n    print(n)\nasync def main():\n    await asyncio.gather(print_num(1), print_num(2), print_num(3))\nawait main()',
        starterCode: 'import asyncio\n\nasync def print_num(n):\n    await asyncio.sleep(0.1)\n    print(n)\n\nasync def main():\n    await asyncio.gather(\n        print_num(1),\n        print_num(2),\n        print_num(3),\n    )\n\nawait main()\n',
        test: { contains: ['1', '2', '3'] },
      },
      {
        id: 'async-4', title: 'async for and async with', xp: 55,
        tutorial: [
          {
            heading: 'async for — iterate over async data streams',
            text: 'Just like regular `for` loops over lists, `async for` iterates over async iterables — like reading lines from a network stream one at a time without blocking.',
            code:
`import asyncio

# Async generator — yields one value at a time with pauses:
async def count_up(n):
    for i in range(n):
        await asyncio.sleep(0.05)  # ← simulate async data arriving
        yield i                    # ← async generator uses yield

async def main():
    async for number in count_up(5):    # ← async for loop
        print(number)
    # → 0  1  2  3  4

await main()`,
            lineHighlights: [
              { lines: [3, 4, 5, 6], note: 'async def + yield = async generator; produces values one at a time with pauses' },
              { lines: [5], note: 'await inside the generator pauses it without blocking the event loop' },
              { lines: [6], note: 'yield sends each value out — the generator resumes from here on the next iteration' },
              { lines: [9, 10], note: 'async for consumes the async generator, waiting for each value to arrive' },
            ],
          },
          {
            heading: 'async with — async context managers',
            text: '`async with` is the async version of `with`. It\'s used with resources that need async setup/teardown, like database connections or HTTP sessions.',
            code:
`import asyncio

class AsyncResource:
    async def __aenter__(self):
        print("Opening connection...")
        await asyncio.sleep(0.05)      # ← simulate async open
        return self

    async def __aexit__(self, *args):
        await asyncio.sleep(0.05)      # ← simulate async close
        print("Connection closed.")

    async def fetch(self):
        return "data from server"

async def main():
    async with AsyncResource() as res:
        data = await res.fetch()
        print(f"Got: {data}")

await main()
# → Opening connection...
# → Got: data from server
# → Connection closed.`,
            lineHighlights: [
              { lines: [3, 4, 5, 6], note: '__aenter__ runs when entering async with — like __enter__ but async' },
              { lines: [8, 9, 10], note: '__aexit__ runs on exit, even if an error occurred — cleanup goes here' },
              { lines: [15, 16, 17, 18], note: 'async with opens the resource, runs the block, then closes it automatically' },
              { lines: [16], note: 'The value returned by __aenter__ is bound to res — use it inside the block' },
            ],
          },
        ],
        description: '`async for` iterates async generators. `async with` manages async context managers.',
        challenge: 'Write an async generator `ticker(n)` that yields 0..n-1 with a sleep. Use `async for` to print each value.',
        hint: 'import asyncio\nasync def ticker(n):\n    for i in range(n):\n        await asyncio.sleep(0.05)\n        yield i\nasync def main():\n    async for val in ticker(4):\n        print(val)\nawait main()',
        starterCode: 'import asyncio\n\nasync def ticker(n):\n    for i in range(n):\n        await asyncio.sleep(0.05)\n        yield i\n\nasync def main():\n    async for val in ticker(4):\n        print(val)\n\nawait main()\n',
        test: { contains: ['0', '1', '2', '3'] },
      },
    ],
  },

  // ── WORLD 18 ────────────────────────────────────────────────────────────────
  {
    id: 'testing', name: 'Testing Terrain', emoji: '🧪', color: '#84CC16', subtitle: 'Prove your code works with tests', difficulty: 'intermediate',
    lessons: [
      {
        id: 'test-1', title: 'Why We Test', xp: 30,
        tutorial: [{
          heading: 'Tests prove your code works — and keep it working',
          text: 'A test is code that checks your code. Every professional Python developer writes tests. Without tests, every change to your code might break something and you wouldn\'t know until a user complains.',
          code:
`# This function has a bug — can you spot it?
def is_palindrome(word):
    return word == word[::-1]

# Without tests — you might not notice edge cases:
print(is_palindrome("racecar"))   # → True   ✓
print(is_palindrome("hello"))     # → False  ✓
print(is_palindrome("Racecar"))   # → False  ✗ (should be True?)
print(is_palindrome(""))          # → True   (is empty string a palindrome?)

# Tests DOCUMENT expected behaviour:
# - "racecar" is a palindrome
# - "hello" is not
# - Case sensitivity: your choice, but make it explicit
# - Empty string: define what you expect

# A test is just: run the function, check the result:
result = is_palindrome("racecar")
assert result == True, f"Expected True but got {result}"
print("Test passed!")`,
        }],
        description: 'Tests verify your code works and prevent future breakage. The assert statement is the simplest test.',
        challenge: 'Write a function `double(n)` that returns n*2. Then write 3 assert statements testing it with 0, 5, and -3. Print "All tests passed!" at the end.',
        hint: 'def double(n):\n    return n * 2\nassert double(0) == 0\nassert double(5) == 10\nassert double(-3) == -6\nprint("All tests passed!")',
        starterCode: 'def double(n):\n    return n * 2\n\nassert double(0)  == 0,  "double(0) should be 0"\nassert double(5)  == 10, "double(5) should be 10"\nassert double(-3) == -6, "double(-3) should be -6"\nprint("All tests passed!")\n',
        test: { contains: ['All tests passed!'] },
      },
      {
        id: 'test-2', title: 'assert Statements', xp: 35,
        tutorial: [{
          heading: 'assert checks a condition and crashes loudly if wrong',
          text: '`assert condition, "message"` checks that the condition is True. If it\'s False, Python raises an AssertionError with your message. This is how you write manual tests and add safety checks.',
          code:
`# Basic assert:
x = 10
assert x > 0, "x should be positive"
print("x is positive")     # → x is positive  (assert passed)

# Failed assert — raises AssertionError:
# assert x > 100, "x should be > 100"
# → AssertionError: x should be > 100

# Testing a function with asserts:
def add(a, b):
    return a + b

# These all pass — program continues:
assert add(2, 3)  == 5,  "2+3 should be 5"
assert add(-1, 1) == 0,  "-1+1 should be 0"
assert add(0, 0)  == 0,  "0+0 should be 0"

print("All add() tests passed!")

# Test types too:
result = add(2, 3)
assert isinstance(result, int), "result should be int"`,
        }],
        description: '`assert condition, "message"` tests expectations and gives clear errors when they fail.',
        challenge: 'Write `clamp(value, min_val, max_val)` that returns value limited to [min_val, max_val]. Write 4 asserts covering normal, below min, above max, and at boundary.',
        hint: 'def clamp(v, lo, hi):\n    return max(lo, min(hi, v))\nassert clamp(5, 0, 10) == 5\nassert clamp(-3, 0, 10) == 0\nassert clamp(15, 0, 10) == 10\nassert clamp(0, 0, 10) == 0\nprint("Passed!")',
        starterCode: 'def clamp(v, lo, hi):\n    return max(lo, min(hi, v))\n\nassert clamp(5,   0, 10) == 5,  "5 is in range"\nassert clamp(-3,  0, 10) == 0,  "-3 clamps to 0"\nassert clamp(15,  0, 10) == 10, "15 clamps to 10"\nassert clamp(0,   0, 10) == 0,  "0 is at lower bound"\nprint("All tests passed!")\n',
        test: { contains: ['All tests passed!'] },
      },
      {
        id: 'test-3', title: 'unittest — Proper Test Classes', xp: 50,
        tutorial: [{
          heading: 'unittest is Python\'s built-in testing framework',
          text: '`unittest` organises tests into classes. Each test method starts with `test_`. It automatically runs all tests and gives you a clear pass/fail report. This is how professional Python code is tested.',
          code:
`import unittest

# The function we want to test:
def fahrenheit_to_celsius(f):
    return (f - 32) * 5 / 9

# Test class — inherits from unittest.TestCase:
class TestTemperature(unittest.TestCase):

    def test_boiling_point(self):
        result = fahrenheit_to_celsius(212)
        self.assertEqual(result, 100.0)   # ← check equality

    def test_freezing_point(self):
        result = fahrenheit_to_celsius(32)
        self.assertEqual(result, 0.0)

    def test_body_temperature(self):
        result = fahrenheit_to_celsius(98.6)
        self.assertAlmostEqual(result, 37.0, places=1)  # ← ~equal

    def test_negative(self):
        self.assertTrue(fahrenheit_to_celsius(0) < 0)  # ← is True

# Run the tests:
unittest.main(argv=[""], exit=False)`,
        }],
        description: 'unittest.TestCase organises tests as methods. assertEqual, assertTrue, assertAlmostEqual check results.',
        challenge: 'Write a `Calculator` class with `add(a,b)` and `divide(a,b)`. Write a TestCase with at least 3 tests, including one that checks divide-by-zero raises ZeroDivisionError.',
        hint: 'import unittest\nclass Calculator:\n    def add(self, a, b): return a+b\n    def divide(self, a, b): return a/b\nclass TestCalc(unittest.TestCase):\n    def setUp(self): self.c = Calculator()\n    def test_add(self): self.assertEqual(self.c.add(3,4), 7)\n    def test_divide(self): self.assertAlmostEqual(self.c.divide(10,4), 2.5)\n    def test_zero(self):\n        with self.assertRaises(ZeroDivisionError):\n            self.c.divide(5, 0)\nunittest.main(argv=[""], exit=False)',
        starterCode: 'import unittest\n\nclass Calculator:\n    def add(self, a, b):\n        return a + b\n    def divide(self, a, b):\n        return a / b\n\nclass TestCalc(unittest.TestCase):\n    def setUp(self):\n        self.c = Calculator()\n    def test_add(self):\n        self.assertEqual(self.c.add(3, 4), 7)\n    def test_divide(self):\n        self.assertAlmostEqual(self.c.divide(10, 4), 2.5)\n    def test_zero_division(self):\n        with self.assertRaises(ZeroDivisionError):\n            self.c.divide(5, 0)\n\nunittest.main(argv=[""], exit=False)\n',
        test: { contains: ['OK'] },
      },
      {
        id: 'test-4', title: 'Test-Driven Development (TDD)', xp: 55,
        tutorial: [{
          heading: 'Write the test BEFORE the code',
          text: 'Test-Driven Development (TDD) means: write a failing test first, then write just enough code to make it pass, then clean up. It sounds backwards but it forces you to think clearly about what your code should do before you write it.',
          code:
`import unittest

# STEP 1: Write the test first (it will fail — that's expected!)
class TestStack(unittest.TestCase):

    def test_push_and_pop(self):
        s = Stack()
        s.push(1)
        s.push(2)
        self.assertEqual(s.pop(), 2)   # LIFO — last in, first out

    def test_is_empty(self):
        s = Stack()
        self.assertTrue(s.is_empty())
        s.push("hello")
        self.assertFalse(s.is_empty())

    def test_peek(self):
        s = Stack()
        s.push(42)
        self.assertEqual(s.peek(), 42) # peek doesn't remove
        self.assertFalse(s.is_empty()) # still has the item

# STEP 2: Write the minimum code to pass the tests:
class Stack:
    def __init__(self):
        self._data = []
    def push(self, item):
        self._data.append(item)
    def pop(self):
        return self._data.pop()
    def peek(self):
        return self._data[-1]
    def is_empty(self):
        return len(self._data) == 0

unittest.main(argv=[""], exit=False)`,
        }],
        description: 'TDD: write a failing test, make it pass, refactor. Tests define what the code must do.',
        challenge: 'Use TDD to build a `Queue` class (FIFO). Write tests for enqueue, dequeue, and is_empty first, then implement the class.',
        hint: 'class Queue:\n    def __init__(self): self._d = []\n    def enqueue(self, x): self._d.append(x)\n    def dequeue(self): return self._d.pop(0)\n    def is_empty(self): return len(self._d) == 0',
        starterCode: 'import unittest\n\nclass TestQueue(unittest.TestCase):\n    def test_enqueue_dequeue(self):\n        q = Queue()\n        q.enqueue(1)\n        q.enqueue(2)\n        self.assertEqual(q.dequeue(), 1)  # FIFO\n    def test_empty(self):\n        q = Queue()\n        self.assertTrue(q.is_empty())\n\nclass Queue:\n    def __init__(self):   self._d = []\n    def enqueue(self, x): self._d.append(x)\n    def dequeue(self):    return self._d.pop(0)\n    def is_empty(self):   return len(self._d) == 0\n\nunittest.main(argv=[""], exit=False)\n',
        test: { contains: ['OK'] },
      },
    ],
  },

  // ── WORLD 19 ────────────────────────────────────────────────────────────────
  {
    id: 'realworld', name: 'Real World Ridge', emoji: '🌐', color: '#D946EF', subtitle: 'Python in real projects and production', difficulty: 'advanced',
    lessons: [
      {
        id: 'rw-1', title: 'Virtual Environments and pip', xp: 40,
        tutorial: [{
          heading: 'The first thing you do on every real Python project',
          text: 'A virtual environment is an isolated Python installation for your project. It lets you install packages without affecting other projects. Every professional Python developer creates one before starting a project.',
          code:
`# Run these commands in your TERMINAL (not in Python):

# Step 1: Create a virtual environment named 'venv':
# python -m venv venv

# Step 2: Activate it:
# Windows:   venv\\Scripts\\activate
# Mac/Linux: source venv/bin/activate

# Step 3: Your prompt changes to show (venv)
# (venv) C:\\myproject>

# Step 4: Install packages with pip:
# pip install requests
# pip install numpy pandas

# Step 5: Save what you installed:
# pip freeze > requirements.txt

# Step 6: Anyone can recreate your environment:
# pip install -r requirements.txt

# Step 7: Deactivate when done:
# deactivate

# Why it matters:
# Project A needs requests 2.28
# Project B needs requests 2.31
# Without venv — CONFLICT
# With venv — each project has its OWN version!

print("Virtual environments keep projects clean!")
print("Always create one before starting a project.")`,
        }],
        description: 'Virtual environments isolate project dependencies. pip installs packages. requirements.txt records them.',
        challenge: 'Print the steps to set up a Python project from scratch: create venv, activate it, install a package, and freeze requirements.',
        hint: 'steps = ["python -m venv venv","venv\\\\Scripts\\\\activate","pip install requests","pip freeze > requirements.txt"]\nfor i, s in enumerate(steps, 1):\n    print(f"{i}. {s}")',
        starterCode: 'steps = [\n    "python -m venv venv",\n    "venv\\\\Scripts\\\\activate (Windows)",\n    "pip install requests",\n    "pip freeze > requirements.txt"\n]\nfor i, step in enumerate(steps, 1):\n    print(f"Step {i}: {step}")\n',
        test: { contains: ['Step 1', 'Step 2', 'Step 3', 'Step 4'] },
      },
      {
        id: 'rw-2', title: 'pathlib — Modern File Paths', xp: 45,
        tutorial: [{
          heading: 'pathlib handles file paths the Pythonic way',
          text: '`pathlib.Path` represents file paths as objects, not strings. It works the same on Windows, Mac, and Linux — no more worrying about backslashes vs forward slashes.',
          code:
`from pathlib import Path

# Create a Path object:
p = Path(".")                # ← current directory
print(p.resolve())            # → full absolute path

# Build paths safely (works on all OS):
home    = Path.home()
docs    = home / "Documents"   # ← / operator joins paths!
myfile  = docs / "notes.txt"
print(myfile)                   # → /home/user/Documents/notes.txt

# Inspect a path:
p = Path("data/results.csv")
print(p.name)        # → results.csv
print(p.stem)        # → results  (no extension)
print(p.suffix)      # → .csv
print(p.parent)      # → data

# Check existence:
print(p.exists())    # → True/False
print(p.is_file())   # → True/False
print(p.is_dir())    # → True/False

# Create directories:
Path("output/reports").mkdir(parents=True, exist_ok=True)`,
        }],
        description: 'pathlib.Path handles file paths as objects. / joins paths. .name, .stem, .suffix inspect them.',
        challenge: 'Create a Path for "data/output.txt". Print its name, stem, suffix, and parent.',
        hint: 'from pathlib import Path\np = Path("data/output.txt")\nprint(p.name)\nprint(p.stem)\nprint(p.suffix)\nprint(p.parent)',
        starterCode: 'from pathlib import Path\n\np = Path("data/output.txt")\nprint(p.name)\nprint(p.stem)\nprint(p.suffix)\nprint(p.parent)\n',
        test: { contains: ['output.txt', 'output', '.txt', 'data'] },
      },
      {
        id: 'rw-3', title: 'csv Module — Real Data Files', xp: 45,
        tutorial: [
          {
            heading: 'CSV — the most common data format in the world',
            text: 'CSV (Comma-Separated Values) is what Excel, databases, and almost every data tool exports. Python\'s `csv` module reads and writes them cleanly.',
            code:
`import csv

# WRITE a CSV file:
rows = [
    ["Name",  "Age", "City"],        # ← header row
    ["Alice", 25,    "London"],
    ["Bob",   30,    "Paris"],
    ["Carol", 28,    "Berlin"],
]
with open("people.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

# READ it back:
with open("people.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
# → ['Name', 'Age', 'City']
# → ['Alice', '25', 'London']
# → ['Bob', '30', 'Paris']`,
          },
          {
            heading: 'DictReader — read CSV as dictionaries',
            text: 'DictReader reads each row as a dictionary with column names as keys. Much easier to work with than raw lists.',
            code:
`import csv

# DictWriter — write using dicts:
people = [
    {"name": "Alice", "score": 95},
    {"name": "Bob",   "score": 87},
]
with open("scores.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "score"])
    writer.writeheader()
    writer.writerows(people)

# DictReader — read as dicts:
with open("scores.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['name']}: {row['score']}")
# → Alice: 95
# → Bob: 87`,
          },
        ],
        description: 'csv.reader/writer handle CSV files. DictReader/DictWriter use column names as keys.',
        challenge: 'Write a CSV file "fruits.csv" with columns "fruit" and "price". Add 3 rows. Read it back with DictReader and print each row.',
        hint: 'import csv\ndata = [{"fruit":"apple","price":1.2},{"fruit":"banana","price":0.5},{"fruit":"cherry","price":3.0}]\nwith open("fruits.csv","w",newline="") as f:\n    w = csv.DictWriter(f, fieldnames=["fruit","price"])\n    w.writeheader(); w.writerows(data)\nwith open("fruits.csv") as f:\n    for row in csv.DictReader(f):\n        print(row)',
        starterCode: 'import csv\n\ndata = [\n    {"fruit": "apple",  "price": 1.2},\n    {"fruit": "banana", "price": 0.5},\n    {"fruit": "cherry", "price": 3.0},\n]\n\nwith open("fruits.csv", "w", newline="") as f:\n    writer = csv.DictWriter(f, fieldnames=["fruit", "price"])\n    writer.writeheader()\n    writer.writerows(data)\n\nwith open("fruits.csv", "r") as f:\n    for row in csv.DictReader(f):\n        print(row)\n',
        test: { contains: ['apple', 'banana', 'cherry'] },
      },
      {
        id: 'rw-4', title: 'logging — Professional Output', xp: 45,
        tutorial: [{
          heading: 'logging replaces print() in real applications',
          text: 'In production software, nobody uses print() — they use the `logging` module. Logging lets you set severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), write to files, and turn debug messages on/off without changing code.',
          code:
`import logging
import sys

# Route logging to stdout so it shows here (normally goes to stderr):
logging.basicConfig(
    level=logging.DEBUG,
    format="%(levelname)s: %(message)s",
    stream=sys.stdout        # ← key: print to stdout not stderr
)

# Five severity levels (lowest → highest):
logging.debug("Detailed info for debugging")
logging.info("Normal events — app started, user logged in")
logging.warning("Something unexpected but not breaking")
logging.error("Something failed — but app still runs")
logging.critical("Serious failure — app may crash")

# → DEBUG: Detailed info for debugging
# → INFO: Normal events — app started, user logged in
# → WARNING: Something unexpected but not breaking
# → ERROR: Something failed — but app still runs
# → CRITICAL: Serious failure — app may crash

# In production: set level=logging.WARNING
# → only WARNING, ERROR, CRITICAL appear
# → DEBUG and INFO are silenced automatically!`,
        }],
        description: 'logging has 5 levels: DEBUG < INFO < WARNING < ERROR < CRITICAL. Set level to filter output.',
        challenge: 'Set up logging at DEBUG level. Log one message of each type: debug, info, warning, error. Change level to WARNING and observe only 2 messages show.',
        hint: 'import logging, sys\nlogging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s", stream=sys.stdout)\nlogging.debug("debug msg")\nlogging.info("info msg")\nlogging.warning("warning msg")\nlogging.error("error msg")',
        starterCode: 'import logging\nimport sys\n\nlogging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s", stream=sys.stdout)\n\nlogging.debug("Starting process")\nlogging.info("User logged in")\nlogging.warning("Low disk space")\nlogging.error("File not found")\n',
        test: { contains: ['DEBUG', 'WARNING', 'ERROR'] },
      },
      {
        id: 'rw-5', title: 'argparse — Command-Line Tools', xp: 50,
        tutorial: [{
          heading: 'argparse makes Python scripts accept arguments',
          text: 'When you run a Python script from the terminal, you often want to pass arguments: `python greet.py --name Alice --times 3`. The `argparse` module handles all of that for you — including help messages.',
          code:
`import argparse

# Create a parser:
parser = argparse.ArgumentParser(description="A greeting tool")

# Add arguments:
parser.add_argument("--name",  type=str, default="World",
                    help="Name to greet")
parser.add_argument("--times", type=int, default=1,
                    help="How many times to greet")
parser.add_argument("--shout", action="store_true",
                    help="Print in uppercase")

# Parse the arguments:
args = parser.parse_args(["--name", "Alice", "--times", "3"])
# (In real script: args = parser.parse_args() — reads from command line)

# Use the arguments:
message = f"Hello, {args.name}!"
if args.shout:
    message = message.upper()
for _ in range(args.times):
    print(message)
# → Hello, Alice!
# → Hello, Alice!
# → Hello, Alice!`,
        }],
        description: 'argparse lets scripts accept --flag arguments from the command line with built-in help.',
        challenge: 'Create a parser with --start (int, default 1) and --end (int, default 10) arguments. Print all numbers from start to end.',
        hint: 'import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument("--start", type=int, default=1)\nparser.add_argument("--end",   type=int, default=10)\nargs = parser.parse_args(["--start","3","--end","7"])\nfor n in range(args.start, args.end+1):\n    print(n)',
        starterCode: 'import argparse\n\nparser = argparse.ArgumentParser(description="Number range printer")\nparser.add_argument("--start", type=int, default=1)\nparser.add_argument("--end",   type=int, default=5)\n\nargs = parser.parse_args(["--start", "3", "--end", "7"])\nfor n in range(args.start, args.end + 1):\n    print(n)\n',
        test: { contains: ['3', '4', '5', '6', '7'] },
      },
    ],
  },

  // ── WORLD 20 ────────────────────────────────────────────────────────────────
  {
    id: 'bitwise', name: 'Binary Bay', emoji: '🔢', color: '#64748B', subtitle: 'Bits, bytes, and low-level operations', difficulty: 'advanced',
    lessons: [
      {
        id: 'bit-1', title: 'Binary, Octal, Hexadecimal', xp: 40,
        tutorial: [
          {
            heading: 'Numbers can be written in different bases',
            text: 'Humans use base-10 (0-9). Computers use base-2 (binary: 0,1). Programmers also use base-16 (hex: 0-9, A-F). Python lets you write numbers in all three with special prefixes.',
            code:
`# Binary — prefix 0b:
a = 0b1010    # ← same as decimal 10
b = 0b1100    # ← same as decimal 12
print(a)      # → 10
print(b)      # → 12

# Hexadecimal — prefix 0x:
color = 0xFF0000  # ← red in HTML color codes
print(color)      # → 16711680  (decimal)

# Octal — prefix 0o:
perm  = 0o755   # ← Unix file permissions
print(perm)     # → 493  (decimal)

# Convert between bases:
n = 255
print(bin(n))   # → 0b11111111  (binary)
print(hex(n))   # → 0xff        (hexadecimal)
print(oct(n))   # → 0o377       (octal)

# Format as binary in a string:
print(f"{n:08b}")  # → 11111111  (8-digit binary)`,
          },
        ],
        description: '0b = binary, 0x = hex, 0o = octal. bin(), hex(), oct() convert numbers.',
        challenge: 'Print 42 in binary, hex, and octal using bin(), hex(), and oct(). Also print binary with format spec: f"{42:08b}".',
        hint: 'print(bin(42))\nprint(hex(42))\nprint(oct(42))\nprint(f"{42:08b}")',
        starterCode: 'print(bin(42))\nprint(hex(42))\nprint(oct(42))\nprint(f"{42:08b}")\n',
        test: { contains: ['0b101010', '0x2a', '0o52', '00101010'] },
      },
      {
        id: 'bit-2', title: 'Bitwise Operators', xp: 50,
        tutorial: [{
          heading: 'Operate directly on the bits of a number',
          text: 'Bitwise operators work on individual bits (0s and 1s). They\'re used in networking, image processing, cryptography, flags, and performance-critical code.',
          code:
`a = 0b1100   # 12 in decimal
b = 0b1010   # 10 in decimal

# & (AND) — bit is 1 only if BOTH are 1:
print(bin(a & b))   # → 0b1000  (8)

# | (OR) — bit is 1 if EITHER is 1:
print(bin(a | b))   # → 0b1110  (14)

# ^ (XOR) — bit is 1 if they are DIFFERENT:
print(bin(a ^ b))   # → 0b0110  (6)

# ~ (NOT) — flip all bits:
print(~a)            # → -13

# << (left shift) — multiply by 2 repeatedly:
print(1 << 3)        # → 8  (1 shifted left 3 = 2³)

# >> (right shift) — divide by 2 repeatedly:
print(16 >> 2)       # → 4  (16 ÷ 4)

# Practical: check if a number is even using &:
print(7 & 1)         # → 1  (odd)
print(8 & 1)         # → 0  (even)`,
        }],
        description: '& AND, | OR, ^ XOR, ~ NOT, << left shift, >> right shift operate on individual bits.',
        challenge: '`x = 0b10110101`. Use & with 0b00001111 to get the lower 4 bits. Print the result in decimal and binary.',
        hint: 'x = 0b10110101\nlower = x & 0b00001111\nprint(lower)\nprint(bin(lower))',
        starterCode: 'x     = 0b10110101\nlower = x & 0b00001111   # mask: keep only lower 4 bits\nprint(lower)\nprint(bin(lower))\n',
        test: { contains: ['5', '0b101'] },
      },
      {
        id: 'bit-3', title: 'copy Module — Shallow vs Deep', xp: 40,
        tutorial: [{
          heading: 'Copying lists and objects — watch out for surprises',
          text: 'When you assign a list to a new variable, you get a REFERENCE to the same list — not a new one. Changing one changes both. The `copy` module solves this.',
          code:
`import copy

# Assignment — both names point to THE SAME list:
original = [1, 2, 3]
alias    = original          # ← NOT a copy!
alias.append(4)
print(original)              # → [1, 2, 3, 4]  ← also changed!

# Shallow copy — copies the outer list but NOT nested lists:
orig_2d  = [[1, 2], [3, 4]]
shallow  = copy.copy(orig_2d)
shallow[0].append(99)
print(orig_2d)               # → [[1, 2, 99], [3, 4]]  ← inner still shared!

# Deep copy — copies EVERYTHING recursively:
orig_3   = [[1, 2], [3, 4]]
deep     = copy.deepcopy(orig_3)
deep[0].append(99)
print(orig_3)                # → [[1, 2], [3, 4]]  ← untouched!
print(deep)                  # → [[1, 2, 99], [3, 4]]`,
        }],
        description: 'Assignment copies a reference. copy.copy() is shallow. copy.deepcopy() truly duplicates everything.',
        challenge: 'Create a nested list `data = [[1,2],[3,4]]`. Make a deepcopy. Modify the copy. Show the original is unchanged.',
        hint: 'import copy\ndata = [[1,2],[3,4]]\nbackup = copy.deepcopy(data)\nbackup[0].append(99)\nprint(data)\nprint(backup)',
        starterCode: 'import copy\n\ndata   = [[1, 2], [3, 4]]\nbackup = copy.deepcopy(data)\n\nbackup[0].append(99)\n\nprint("Original:", data)\nprint("Copy:    ", backup)\n',
        test: { contains: ['Original: [[1, 2], [3, 4]]'] },
      },
      {
        id: 'bit-4', title: 'statistics and decimal Modules', xp: 40,
        tutorial: [
          {
            heading: 'statistics — built-in math for data',
            text: 'Python\'s `statistics` module gives you mean, median, mode, standard deviation and more — no external libraries needed.',
            code:
`import statistics

scores = [85, 92, 78, 95, 88, 72, 91, 85]

print(statistics.mean(scores))      # → 85.75  (average)
print(statistics.median(scores))    # → 86.5   (middle value)
print(statistics.mode(scores))      # → 85     (most common)
print(statistics.stdev(scores))     # → 7.57   (std deviation)
print(statistics.variance(scores))  # → 57.36  (variance)

# pstdev for population (not sample):
print(statistics.pstdev(scores))    # → 7.09`,
          },
          {
            heading: 'decimal — exact money calculations',
            text: 'Floating-point numbers are not exact. For money, use `decimal.Decimal`. It stores numbers as exact decimal fractions, not binary approximations.',
            code:
`# Floating-point surprise:
print(0.1 + 0.2)          # → 0.30000000000000004  ← WRONG!
print(0.1 + 0.2 == 0.3)   # → False  ← very wrong for money!

from decimal import Decimal

# Decimal is exact:
a = Decimal("0.1")
b = Decimal("0.2")
print(a + b)              # → 0.3   ← correct!
print(a + b == Decimal("0.3"))  # → True

# Real money calculation:
price    = Decimal("19.99")
quantity = 3
total    = price * quantity
print(total)              # → 59.97   (exact, not 59.97000000001)`,
          },
        ],
        description: 'statistics gives mean/median/mode/stdev. decimal.Decimal is exact for money calculations.',
        challenge: '`data = [10, 20, 30, 40, 50]`. Print mean, median, and stdev. Also show why Decimal("0.1") + Decimal("0.2") is better than 0.1 + 0.2.',
        hint: 'import statistics\nfrom decimal import Decimal\ndata = [10,20,30,40,50]\nprint(statistics.mean(data))\nprint(statistics.median(data))\nprint(statistics.stdev(data))\nprint(0.1+0.2)\nprint(Decimal("0.1")+Decimal("0.2"))',
        starterCode: 'import statistics\nfrom decimal import Decimal\n\ndata = [10, 20, 30, 40, 50]\nprint(statistics.mean(data))\nprint(statistics.median(data))\nprint(round(statistics.stdev(data), 2))\n\nprint(0.1 + 0.2)                    # floating-point error\nprint(Decimal("0.1") + Decimal("0.2"))  # exact\n',
        test: { contains: ['30', '14.14', '0.3'] },
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_LESSONS = WORLDS.flatMap((w) =>
  w.lessons.map((l) => ({ ...l, worldId: w.id, worldName: w.name, worldColor: w.color, worldEmoji: w.emoji }))
)

export function getLessonById(id)    { return ALL_LESSONS.find((l) => l.id === id) ?? null }
export function getNextLesson(id)    { const i = ALL_LESSONS.findIndex((l) => l.id === id); return i >= 0 && i < ALL_LESSONS.length - 1 ? ALL_LESSONS[i + 1] : null }
export function isLessonUnlocked(id, done) { const i = ALL_LESSONS.findIndex((l) => l.id === id); return i === 0 || done.has(ALL_LESSONS[i - 1].id) }

export function xpToLevel(xp) {
  const t = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200]
  let level = 1
  for (let i = 0; i < t.length; i++) { if (xp >= t[i]) level = i + 1; else break }
  const cur = t[level-1] ?? 0, next = t[level] ?? cur + 500
  return { level, progress: Math.min((xp-cur)/(next-cur), 1), xpForNext: Math.max(next-xp, 0) }
}
