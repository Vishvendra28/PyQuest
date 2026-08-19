export const CHALLENGES = [
  // ── EASY ────────────────────────────────────────────────────────────────────
  {
    id: 'ch-e1',
    title: 'Sum of Two Numbers',
    difficulty: 'easy',
    xp: 50,
    tags: ['math', 'functions'],
    description: `Write a function called \`solution\` that takes two numbers \`a\` and \`b\` and returns their sum.`,
    examples: [
      { input: 'solution(3, 5)', output: '8' },
      { input: 'solution(-1, 1)', output: '0' },
    ],
    starterCode: `def solution(a, b):
    # your code here
    pass`,
    testCases: [
      { args: [3, 5],   expected: 8   },
      { args: [-1, 1],  expected: 0   },
      { args: [0, 0],   expected: 0   },
      { args: [100, -50], expected: 50 },
    ],
  },
  {
    id: 'ch-e2',
    title: 'Reverse a String',
    difficulty: 'easy',
    xp: 50,
    tags: ['strings'],
    description: `Write a function called \`solution\` that takes a string \`s\` and returns it reversed.`,
    examples: [
      { input: 'solution("hello")', output: '"olleh"' },
      { input: 'solution("Python")', output: '"nohtyP"' },
    ],
    starterCode: `def solution(s):
    # your code here
    pass`,
    testCases: [
      { args: ['hello'],  expected: 'olleh'  },
      { args: ['Python'], expected: 'nohtyP' },
      { args: [''],       expected: ''       },
      { args: ['a'],      expected: 'a'      },
      { args: ['abcd'],   expected: 'dcba'   },
    ],
  },
  {
    id: 'ch-e3',
    title: 'Count Vowels',
    difficulty: 'easy',
    xp: 50,
    tags: ['strings', 'loops'],
    description: `Write a function called \`solution\` that takes a string and returns the number of vowels (a, e, i, o, u — case insensitive).`,
    examples: [
      { input: 'solution("hello")', output: '2' },
      { input: 'solution("PYTHON")', output: '1' },
    ],
    starterCode: `def solution(s):
    # your code here
    pass`,
    testCases: [
      { args: ['hello'],    expected: 2 },
      { args: ['PYTHON'],   expected: 1 },
      { args: ['aeiou'],    expected: 5 },
      { args: ['xyz'],      expected: 0 },
      { args: ['Beautiful'], expected: 5 },
    ],
  },
  {
    id: 'ch-e4',
    title: 'Is Palindrome',
    difficulty: 'easy',
    xp: 50,
    tags: ['strings'],
    description: `Write a function called \`solution\` that returns \`True\` if the string is a palindrome (reads the same forwards and backwards), \`False\` otherwise. Ignore case.`,
    examples: [
      { input: 'solution("racecar")', output: 'True' },
      { input: 'solution("hello")', output: 'False' },
    ],
    starterCode: `def solution(s):
    # your code here
    pass`,
    testCases: [
      { args: ['racecar'], expected: true  },
      { args: ['hello'],   expected: false },
      { args: ['Madam'],   expected: true  },
      { args: ['level'],   expected: true  },
      { args: ['Python'],  expected: false },
    ],
  },
  {
    id: 'ch-e5',
    title: 'List Maximum',
    difficulty: 'easy',
    xp: 50,
    tags: ['lists'],
    description: `Write a function called \`solution\` that takes a list of numbers and returns the largest number. Do not use the built-in \`max()\` function.`,
    examples: [
      { input: 'solution([3, 1, 4, 1, 5, 9])', output: '9' },
      { input: 'solution([-5, -1, -3])', output: '-1' },
    ],
    starterCode: `def solution(nums):
    # your code here — don't use max()
    pass`,
    testCases: [
      { args: [[3, 1, 4, 1, 5, 9]], expected: 9  },
      { args: [[-5, -1, -3]],       expected: -1 },
      { args: [[42]],               expected: 42 },
      { args: [[0, 0, 0]],          expected: 0  },
      { args: [[7, 2, 8, 1]],       expected: 8  },
    ],
  },

  {
    id: 'ch-e6',
    title: 'Even or Odd',
    difficulty: 'easy',
    xp: 50,
    tags: ['math', 'conditions'],
    description: `Write a function called \`solution\` that takes an integer and returns the string \`"even"\` if it is even, or \`"odd"\` if it is odd.`,
    examples: [
      { input: 'solution(4)', output: '"even"' },
      { input: 'solution(7)', output: '"odd"' },
    ],
    starterCode: `def solution(n):
    # your code here
    pass`,
    testCases: [
      { args: [4],   expected: 'even' },
      { args: [7],   expected: 'odd'  },
      { args: [0],   expected: 'even' },
      { args: [-3],  expected: 'odd'  },
      { args: [100], expected: 'even' },
    ],
  },
  {
    id: 'ch-e7',
    title: 'Sum of a List',
    difficulty: 'easy',
    xp: 50,
    tags: ['lists', 'loops'],
    description: `Write a function called \`solution\` that takes a list of numbers and returns their total sum. Do not use the built-in \`sum()\` function.`,
    examples: [
      { input: 'solution([1, 2, 3, 4])', output: '10' },
      { input: 'solution([-1, 1])', output: '0' },
    ],
    starterCode: `def solution(nums):
    # your code here — don't use sum()
    pass`,
    testCases: [
      { args: [[1, 2, 3, 4]], expected: 10  },
      { args: [[-1, 1]],      expected: 0   },
      { args: [[5]],          expected: 5   },
      { args: [[0, 0, 0]],    expected: 0   },
      { args: [[10, -3, 7]],  expected: 14  },
    ],
  },
  {
    id: 'ch-e8',
    title: 'Count Words',
    difficulty: 'easy',
    xp: 50,
    tags: ['strings'],
    description: `Write a function called \`solution\` that takes a sentence string and returns the number of words in it. Words are separated by single spaces.`,
    examples: [
      { input: 'solution("hello world")', output: '2' },
      { input: 'solution("I love Python")', output: '3' },
    ],
    starterCode: `def solution(sentence):
    # your code here
    pass`,
    testCases: [
      { args: ['hello world'],    expected: 2 },
      { args: ['I love Python'],  expected: 3 },
      { args: ['one'],            expected: 1 },
      { args: ['a b c d e'],      expected: 5 },
    ],
  },

  // ── MEDIUM ──────────────────────────────────────────────────────────────────
  {
    id: 'ch-m1',
    title: 'FizzBuzz',
    difficulty: 'medium',
    xp: 100,
    tags: ['loops', 'conditions'],
    description: `Write a function called \`solution\` that takes an integer \`n\` and returns a list of strings from 1 to n where:
- Multiples of 3 → "Fizz"
- Multiples of 5 → "Buzz"
- Multiples of both → "FizzBuzz"
- Otherwise → the number as a string`,
    examples: [
      { input: 'solution(5)', output: '["1", "2", "Fizz", "4", "Buzz"]' },
    ],
    starterCode: `def solution(n):
    result = []
    # your code here
    return result`,
    testCases: [
      { args: [5],  expected: ['1','2','Fizz','4','Buzz'] },
      { args: [15], expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'] },
      { args: [1],  expected: ['1'] },
    ],
  },
  {
    id: 'ch-m2',
    title: 'Two Sum',
    difficulty: 'medium',
    xp: 100,
    tags: ['lists', 'dictionaries'],
    description: `Write a function called \`solution\` that takes a list \`nums\` and a target number. Return the **indices** of the two numbers that add up to the target as a list \`[i, j]\` where \`i < j\`. Assume exactly one solution exists.`,
    examples: [
      { input: 'solution([2, 7, 11, 15], 9)', output: '[0, 1]' },
      { input: 'solution([3, 2, 4], 6)', output: '[1, 2]' },
    ],
    starterCode: `def solution(nums, target):
    # your code here
    pass`,
    testCases: [
      { args: [[2, 7, 11, 15], 9],  expected: [0, 1] },
      { args: [[3, 2, 4], 6],       expected: [1, 2] },
      { args: [[1, 5, 3, 7], 8],    expected: [1, 3] },
      { args: [[0, 4, 3, 0], 0],    expected: [0, 3] },
    ],
  },
  {
    id: 'ch-m3',
    title: 'Fibonacci Sequence',
    difficulty: 'medium',
    xp: 100,
    tags: ['loops', 'math'],
    description: `Write a function called \`solution\` that takes an integer \`n\` and returns a list of the first \`n\` Fibonacci numbers. The sequence starts with [0, 1, 1, 2, 3, 5, ...].`,
    examples: [
      { input: 'solution(6)', output: '[0, 1, 1, 2, 3, 5]' },
      { input: 'solution(1)', output: '[0]' },
    ],
    starterCode: `def solution(n):
    # your code here
    pass`,
    testCases: [
      { args: [1],  expected: [0] },
      { args: [2],  expected: [0, 1] },
      { args: [6],  expected: [0, 1, 1, 2, 3, 5] },
      { args: [10], expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
    ],
  },
  {
    id: 'ch-m4',
    title: 'Anagram Check',
    difficulty: 'medium',
    xp: 100,
    tags: ['strings', 'dictionaries'],
    description: `Write a function called \`solution\` that takes two strings and returns \`True\` if they are anagrams of each other (contain the same letters in any order), \`False\` otherwise. Ignore case and spaces.`,
    examples: [
      { input: 'solution("listen", "silent")', output: 'True' },
      { input: 'solution("hello", "world")', output: 'False' },
    ],
    starterCode: `def solution(s1, s2):
    # your code here
    pass`,
    testCases: [
      { args: ['listen', 'silent'],     expected: true  },
      { args: ['hello', 'world'],       expected: false },
      { args: ['Astronomer', 'Moon starer'], expected: true },
      { args: ['abc', 'cab'],           expected: true  },
      { args: ['rat', 'car'],           expected: false },
    ],
  },
  {
    id: 'ch-m5',
    title: 'Caesar Cipher',
    difficulty: 'medium',
    xp: 100,
    tags: ['strings', 'math'],
    description: `Write a function called \`solution\` that takes a string \`text\` and an integer \`shift\`, and returns the text encoded with a Caesar cipher (shift each letter forward by \`shift\` positions). Keep non-letters unchanged. Preserve case.`,
    examples: [
      { input: 'solution("Hello", 3)', output: '"Khoor"' },
      { input: 'solution("xyz", 3)', output: '"abc"' },
    ],
    starterCode: `def solution(text, shift):
    # your code here
    pass`,
    testCases: [
      { args: ['Hello', 3],   expected: 'Khoor'  },
      { args: ['xyz', 3],     expected: 'abc'    },
      { args: ['Hello, World!', 13], expected: 'Uryyb, Jbeyq!' },
      { args: ['abc', 0],     expected: 'abc'    },
      { args: ['ABC', 1],     expected: 'BCD'    },
    ],
  },

  {
    id: 'ch-m6',
    title: 'Unique Elements',
    difficulty: 'medium',
    xp: 100,
    tags: ['lists', 'sets'],
    description: `Write a function called \`solution\` that takes a list and returns a new list containing only the unique elements, in the order they first appeared.`,
    examples: [
      { input: 'solution([1, 2, 2, 3, 1])', output: '[1, 2, 3]' },
      { input: 'solution(["a", "b", "a"])', output: '["a", "b"]' },
    ],
    starterCode: `def solution(items):
    # your code here
    pass`,
    testCases: [
      { args: [[1, 2, 2, 3, 1]],     expected: [1, 2, 3]     },
      { args: [['a', 'b', 'a']],     expected: ['a', 'b']    },
      { args: [[5, 5, 5]],           expected: [5]           },
      { args: [[1, 2, 3]],           expected: [1, 2, 3]     },
      { args: [[3, 1, 2, 1, 3]],     expected: [3, 1, 2]     },
    ],
  },
  {
    id: 'ch-m7',
    title: 'Sort by Length',
    difficulty: 'medium',
    xp: 100,
    tags: ['lists', 'strings', 'sorting'],
    description: `Write a function called \`solution\` that takes a list of strings and returns them sorted by length (shortest first). Strings of equal length keep their original order.`,
    examples: [
      { input: 'solution(["banana", "apple", "fig", "kiwi"])', output: '["fig", "kiwi", "apple", "banana"]' },
    ],
    starterCode: `def solution(words):
    # your code here
    pass`,
    testCases: [
      { args: [['banana', 'apple', 'fig', 'kiwi']], expected: ['fig', 'kiwi', 'apple', 'banana'] },
      { args: [['b', 'aa', 'ccc']],                 expected: ['b', 'aa', 'ccc']                 },
      { args: [['z', 'yy', 'x', 'ww']],             expected: ['z', 'x', 'yy', 'ww']            },
      { args: [['hello']],                           expected: ['hello']                          },
    ],
  },
  {
    id: 'ch-m8',
    title: 'Binary to Decimal',
    difficulty: 'medium',
    xp: 100,
    tags: ['math', 'strings'],
    description: `Write a function called \`solution\` that takes a binary string (e.g. \`"1010"\`) and returns its decimal integer value. Do not use \`int(s, 2)\`.`,
    examples: [
      { input: 'solution("1010")', output: '10' },
      { input: 'solution("1111")', output: '15' },
    ],
    starterCode: `def solution(binary_str):
    # your code here — don't use int(s, 2)
    pass`,
    testCases: [
      { args: ['1010'], expected: 10  },
      { args: ['1111'], expected: 15  },
      { args: ['0'],    expected: 0   },
      { args: ['1'],    expected: 1   },
      { args: ['11010'], expected: 26 },
    ],
  },
  {
    id: 'ch-m9',
    title: 'Rotate List',
    difficulty: 'medium',
    xp: 100,
    tags: ['lists'],
    description: `Write a function called \`solution\` that takes a list and an integer \`k\`, and returns the list rotated right by \`k\` positions. Elements that fall off the right end wrap around to the front.`,
    examples: [
      { input: 'solution([1, 2, 3, 4, 5], 2)', output: '[4, 5, 1, 2, 3]' },
      { input: 'solution([1, 2, 3], 1)', output: '[3, 1, 2]' },
    ],
    starterCode: `def solution(nums, k):
    # your code here
    pass`,
    testCases: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { args: [[1, 2, 3], 1],       expected: [3, 1, 2]        },
      { args: [[1, 2, 3], 3],       expected: [1, 2, 3]        },
      { args: [[1, 2, 3, 4], 6],    expected: [3, 4, 1, 2]     },
    ],
  },

  // ── HARD ────────────────────────────────────────────────────────────────────
  {
    id: 'ch-h1',
    title: 'Valid Parentheses',
    difficulty: 'hard',
    xp: 200,
    tags: ['stacks', 'strings'],
    description: `Write a function called \`solution\` that takes a string containing only \`(\`, \`)\`, \`{\`, \`}\`, \`[\`, \`]\` and returns \`True\` if the brackets are valid (every opening bracket has a matching closing bracket in the right order).`,
    examples: [
      { input: 'solution("()")', output: 'True' },
      { input: 'solution("([)]")', output: 'False' },
      { input: 'solution("{[]}")', output: 'True' },
    ],
    starterCode: `def solution(s):
    # Hint: use a stack (list)
    pass`,
    testCases: [
      { args: ['()'],     expected: true  },
      { args: ['()[]{}'], expected: true  },
      { args: ['(]'],     expected: false },
      { args: ['([)]'],   expected: false },
      { args: ['{[]}'],   expected: true  },
      { args: [''],       expected: true  },
    ],
  },
  {
    id: 'ch-h2',
    title: 'Flatten Nested List',
    difficulty: 'hard',
    xp: 200,
    tags: ['lists', 'recursion'],
    description: `Write a function called \`solution\` that takes a deeply nested list and returns a flat list with all values. The nesting can be any depth.`,
    examples: [
      { input: 'solution([1, [2, 3], [4, [5, 6]]])', output: '[1, 2, 3, 4, 5, 6]' },
      { input: 'solution([[1], [2], [3]])', output: '[1, 2, 3]' },
    ],
    starterCode: `def solution(nested):
    # Hint: check if each element is a list
    pass`,
    testCases: [
      { args: [[1, [2, 3], [4, [5, 6]]]], expected: [1, 2, 3, 4, 5, 6] },
      { args: [[[1], [2], [3]]],          expected: [1, 2, 3]           },
      { args: [[1, 2, 3]],                expected: [1, 2, 3]           },
      { args: [[[[[42]]]]],               expected: [42]                },
    ],
  },
  {
    id: 'ch-h3',
    title: 'Word Frequency',
    difficulty: 'hard',
    xp: 200,
    tags: ['strings', 'dictionaries'],
    description: `Write a function called \`solution\` that takes a string of words and returns a dictionary with each unique word (lowercase) as a key and its count as the value. Ignore punctuation (.,!?).`,
    examples: [
      { input: 'solution("the cat sat on the mat")', output: '{"the": 2, "cat": 1, "sat": 1, "on": 1, "mat": 1}' },
    ],
    starterCode: `def solution(text):
    # your code here
    pass`,
    testCases: [
      { args: ['the cat sat on the mat'],  expected: { the: 2, cat: 1, sat: 1, on: 1, mat: 1 } },
      { args: ['hello world hello'],       expected: { hello: 2, world: 1 } },
      { args: ['one'],                     expected: { one: 1 } },
      { args: ['Hello, hello!'],           expected: { hello: 2 } },
    ],
  },
  {
    id: 'ch-h4',
    title: 'Binary Search',
    difficulty: 'hard',
    xp: 200,
    tags: ['lists', 'algorithms'],
    description: `Write a function called \`solution\` that takes a **sorted** list of integers and a target value, and returns the index of the target using binary search. Return \`-1\` if the target is not found.`,
    examples: [
      { input: 'solution([1, 3, 5, 7, 9], 5)', output: '2' },
      { input: 'solution([1, 3, 5, 7, 9], 6)', output: '-1' },
    ],
    starterCode: `def solution(nums, target):
    # Hint: use left and right pointers, check the midpoint
    pass`,
    testCases: [
      { args: [[1, 3, 5, 7, 9], 5],  expected: 2  },
      { args: [[1, 3, 5, 7, 9], 6],  expected: -1 },
      { args: [[1, 3, 5, 7, 9], 1],  expected: 0  },
      { args: [[1, 3, 5, 7, 9], 9],  expected: 4  },
      { args: [[2], 2],              expected: 0  },
      { args: [[2], 5],              expected: -1 },
    ],
  },
  {
    id: 'ch-h5',
    title: 'Merge Sorted Lists',
    difficulty: 'hard',
    xp: 200,
    tags: ['lists', 'algorithms'],
    description: `Write a function called \`solution\` that takes two sorted lists of integers and returns a single sorted list containing all elements from both. Do not use \`sorted()\` or \`.sort()\`.`,
    examples: [
      { input: 'solution([1, 3, 5], [2, 4, 6])', output: '[1, 2, 3, 4, 5, 6]' },
      { input: 'solution([1, 2], [3, 4])', output: '[1, 2, 3, 4]' },
    ],
    starterCode: `def solution(a, b):
    # Hint: use two pointers, compare the front of each list
    pass`,
    testCases: [
      { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { args: [[1, 2], [3, 4]],       expected: [1, 2, 3, 4]       },
      { args: [[], [1, 2]],           expected: [1, 2]             },
      { args: [[1], []],              expected: [1]                },
      { args: [[1, 1], [1, 2]],       expected: [1, 1, 1, 2]       },
    ],
  },
  {
    id: 'ch-h6',
    title: 'Roman to Integer',
    difficulty: 'hard',
    xp: 200,
    tags: ['strings', 'math'],
    description: `Write a function called \`solution\` that converts a Roman numeral string to an integer. Symbols: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. A smaller value before a larger one means subtraction (IV=4, IX=9, XL=40, XC=90, CD=400, CM=900).`,
    examples: [
      { input: 'solution("III")', output: '3' },
      { input: 'solution("MCMXCIV")', output: '1994' },
    ],
    starterCode: `def solution(s):
    # your code here
    pass`,
    testCases: [
      { args: ['III'],     expected: 3    },
      { args: ['IV'],      expected: 4    },
      { args: ['IX'],      expected: 9    },
      { args: ['LVIII'],   expected: 58   },
      { args: ['MCMXCIV'], expected: 1994 },
      { args: ['XLII'],    expected: 42   },
    ],
  },
  {
    id: 'ch-h7',
    title: 'Group Anagrams',
    difficulty: 'hard',
    xp: 200,
    tags: ['strings', 'dictionaries', 'sorting'],
    description: `Write a function called \`solution\` that takes a list of strings and groups anagrams together. Return a list of groups (each group is a sorted list of strings). The groups themselves should be sorted by their first element.`,
    examples: [
      { input: 'solution(["eat","tea","tan","ate","nat","bat"])', output: '[["ate","eat","tea"],["bat"],["nat","tan"]]' },
    ],
    starterCode: `def solution(words):
    # Hint: sorted letters of a word make a good dict key
    pass`,
    testCases: [
      { args: [['eat','tea','tan','ate','nat','bat']], expected: [['ate','eat','tea'],['bat'],['nat','tan']] },
      { args: [['a']],                                expected: [['a']]                                    },
      { args: [['ab','ba','cd','dc']],                expected: [['ab','ba'],['cd','dc']]                  },
    ],
  },
]

export const CHALLENGE_DIFFICULTIES = ['easy', 'medium', 'hard']

export function getChallengeById(id) {
  return CHALLENGES.find((c) => c.id === id) ?? null
}

export function getDailyChallenge() {
  const today = new Date().toISOString().slice(0, 10)
  let hash = 0
  for (let i = 0; i < today.length; i++) hash = (hash * 31 + today.charCodeAt(i)) >>> 0
  return CHALLENGES[hash % CHALLENGES.length]
}
