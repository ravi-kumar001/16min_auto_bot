const questions: { id: number, question: string, answer: number | string, difficulty: string, category: string }[] = [
    {
        "id": 1,
        "question": "Which planet is known as the Red Planet?",
        "answer": "Mars",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 2,
        "question": "A farmer has 13 sheep and all but 6 run away. How many are left?",
        "answer": 6,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 3,
        "question": "What is the chemical symbol for water?",
        "answer": "H2O",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 4,
        "question": "Who was the first President of the United States?",
        "answer": "George Washington",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 5,
        "question": "A farmer has 10 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 7,
        "question": "Which gas do plants absorb from the atmosphere?",
        "answer": "Carbon dioxide",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 8,
        "question": "What is the capital of Japan?",
        "answer": "Tokyo",
        "difficulty": "hard",
        "category": "General Knowledge"
    },
    {
        "id": 9,
        "question": "What is the largest planet in our Solar System?",
        "answer": "Jupiter",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 10,
        "question": "What is the smallest planet in our Solar?",
        "answer": "Jupiter",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 11,
        "question": "What is the pm of us?",
        "answer": "Jupiter",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 12,
        "question": "What is the national flower of India?",
        "answer": "Lotus",
        "difficulty": "medium",
        "category": "General Knowledge"
    },
    {
        "id": 13,
        "question": "Which organ is responsible for pumping blood throughout the body?",
        "answer": "Heart",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 14,
        "question": "Which continent is known as the 'Dark Continent'?",
        "answer": "Africa",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 15,
        "question": "What is the boiling point of water in Celsius?",
        "answer": "100 degrees Celsius",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 16,
        "question": "Which country is the largest by area?",
        "answer": "Russia",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 17,
        "question": "Which country is the smallest by area in the world?",
        "answer": "Russia",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 18,
        "question": "A farmer has 28 sheep and all but 6 run away. How many are left?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 19,
        "question": "What part of the plant conducts photosynthesis?",
        "answer": "Leaves",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 20,
        "question": "A farmer has 23 sheep and all but 15 run away. How many are left?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 21,
        "question": "Which is the longest river in the world?",
        "answer": "Nile",
        "difficulty": "hard",
        "category": "General Knowledge"
    },
    {
        "id": 22,
        "question": "A farmer has 14 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 23,
        "question": "Who discovered gravity?",
        "answer": "Isaac Newton",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 24,
        "question": "Who wrote the Indian National Anthem?",
        "answer": "Rabindranath Tagore",
        "difficulty": "hard",
        "category": "General Knowledge"
    },
    {
        "id": 25,
        "question": "Which planet has the most moons?",
        "answer": "Saturn",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 26,
        "question": "What is the hardest natural substance on Earth?",
        "answer": "Diamond",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 27,
        "question": "Who was the first man to walk on the moon?",
        "answer": "Neil Armstrong",
        "difficulty": "hard",
        "category": "General Knowledge"
    },
    {
        "id": 28,
        "question": "What is the most abundant gas in Earth's atmosphere?",
        "answer": "Nitrogen",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 29,
        "question": "What is the chemical formula of soft water?",
        "answer": "Nitrogen",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 30,
        "question": "Who invented the light bulb?",
        "answer": "Thomas Edison",
        "difficulty": "hard",
        "category": "General Knowledge"
    },
    {
        "id": 31,
        "question": "What is the freezing point of water in Fahrenheit?",
        "answer": "32 degrees Fahrenheit",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 32,
        "question": "Who is known as the Father of the Nation in India?",
        "answer": "Mahatma Gandhi",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 33,
        "question": "A farmer has 25 sheep and all but 1 run away. How many are left?",
        "answer": 1,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 34,
        "question": "Which vitamin is produced when the skin is exposed to sunlight?",
        "answer": "Vitamin D",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 35,
        "question": "Which vitamin is produced when the skin is exposed to dark or cold?",
        "answer": "Vitamin D",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 36,
        "question": "Who invented the telephone?",
        "answer": "Alexander Graham Bell",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 37,
        "question": "Which part of the human body is affected by pneumonia?",
        "answer": "Lungs",
        "difficulty": "easy",
        "category": "General Science"
    },
    {
        "id": 38,
        "question": "What is the currency of Japan?",
        "answer": "Yen",
        "difficulty": "easy",
        "category": "General Knowledge"
    },
    {
        "id": 39,
        "question": "Which gas is essential for human respiration?",
        "answer": "Oxygen",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 40,
        "question": "Which planet is closest to the Sun?",
        "answer": "Mercury",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 41,
        "question": "Which planet is farest to the Sun or our solar system?",
        "answer": "Mercury",
        "difficulty": "hard",
        "category": "General Science"
    },
    {
        "id": 42,
        "question": "A farmer has 18 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 43,
        "question": "A farmer has 12 sheep and all but 7 run away. How many are left?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 44,
        "question": "A farmer has 12 sheep and all but 7 run away. How many are right?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 45,
        "question": "A clock shows the time as 9:45. What is the angle between the hour and minute hands?",
        "answer": "22.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 46,
        "question": "A farmer has 25 sheep and all but 16 run away. How many are left?",
        "answer": 16,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 47,
        "question": "What comes next in the sequence: 2 ? 10 14 18?",
        "answer": 6,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 48,
        "question": "Find the missing number: 5 9 13 ? 21?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 49,
        "question": "Find the missing number: 5 ? 15 20?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 50,
        "question": "What comes next in the sequence: 4 9 14 ? 24?",
        "answer": 19,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 51,
        "question": "A farmer has 11 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 52,
        "question": "What comes next in the sequence: 9 12 ? 18?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 53,
        "question": "Which programming is most popular",
        "answer": 15,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 54,
        "question": "A farmer has 13 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 55,
        "question": "What comes next in the sequence: 2 ? 10 14 18?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 56,
        "question": "distance of meriana trench",
        "answer": 6,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 57,
        "question": "Find the missing number: 10 14 ? 22 26 30?",
        "answer": 18,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 58,
        "question": "Find the missing number: 10 14 ? 22 26 30?",
        "answer": 18,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 59,
        "question": "RPA full form",
        "answer": 18,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 60,
        "question": "SDLC difinition",
        "answer": 23,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 61,
        "question": "What comes next in the sequence: 3 ? 9 12?",
        "answer": 6,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 62,
        "question": "What is black hole",
        "answer": 6,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 63,
        "question": "Find the missing number: 7 12 17 ? 27?",
        "answer": 22,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 64,
        "question": "What comes next in the sequence: 3 ? 9 12?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 65,
        "question": "What comes next in the sequence: 10 14 ? 22 26?",
        "answer": 18,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 67,
        "question": "A farmer has 17 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 68,
        "question": "A clock shows the time as 6:00. What is the angle between the hour and minute hands?",
        "answer": "180.0 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 69,
        "question": "A farmer has 13 sheep and all but 5 run away. How many are left?",
        "answer": 5,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 70,
        "question": "What comes next in the sequence: 3 5 ? 9 11?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 71,
        "question": "A bag contains 26 balls of which 7 are red and 19 are blue. What is the probability of picking a red ball?",
        "answer": "7/26",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 72,
        "question": "Find the missing number: 10 12 14 ? 18?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 73,
        "question": "A bag contains 28 balls of which 8 are red and 20 are blue. What is the probability of picking a red ball?",
        "answer": "8/28",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 74,
        "question": "A bag contains 29 balls of which 11 are red and 18 are blue. What is the probability of picking a red ball?",
        "answer": "11/29",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 75,
        "question": "A bag contains 24 balls of which 11 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "11/24",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 76,
        "question": "India vs pak which is better country?",
        "answer": "11/24",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 77,
        "question": "A bag contains 30 balls of which 8 are red and 22 are blue. What is the probability of picking a red ball?",
        "answer": "8/30",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 78,
        "question": "A bag contains 20 balls of which 3 are red and 17 are blue. What is the probability of picking a red ball?",
        "answer": "3/20",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 79,
        "question": "A farmer has 18 sheep and all but 13 run away. How many are left?",
        "answer": 13,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 81,
        "question": "A farmer has 28 sheep and all but 23 run away. How many are left?",
        "answer": 23,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 83,
        "question": "A clock shows the time as 2:00. What is the angle between the hour and minute hands?",
        "answer": "60.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 84,
        "question": "A clock shows the time as 8:00. What is the angle between the hour and minute hands?",
        "answer": "240.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 85,
        "question": "Find the missing number: 2 ? 10 14?",
        "answer": 6,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 86,
        "question": "What comes next in the sequence: 5 7 ? 11?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 87,
        "question": "What comes next in the sequence: 4 7 10 ? 16?",
        "answer": 13,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 88,
        "question": "A bag contains 30 balls of which 13 are red and 17 are blue. What is the probability of picking a red ball?",
        "answer": "13/30",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 89,
        "question": "A farmer has 13 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 90,
        "question": "A clock shows the time as 12:45. What is the angle between the hour and minute hands?",
        "answer": "247.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 91,
        "question": "Find the missing number: 2 ? 10 14?",
        "answer": 6,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 92,
        "question": "A bag contains 12 balls of which 1 are red and 11 are blue. What is the probability of picking a red ball?",
        "answer": "1/12",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 93,
        "question": "A clock shows the time as 11:45. What is the angle between the hour and minute hands?",
        "answer": "82.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 94,
        "question": "A clock shows the time as 3:30. What is the angle between the hour and minute hands?",
        "answer": "75.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 95,
        "question": "A bag contains 17 balls of which 4 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "4/17",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 96,
        "question": "Find the missing number: 3 5 ? 9?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 97,
        "question": "A clock shows the time as 5:00. What is the angle between the hour and minute hands?",
        "answer": "150.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 98,
        "question": "A farmer has 22 sheep and all but 13 run away. How many are left?",
        "answer": 13,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 99,
        "question": "A clock shows the time as 6:15. What is the angle between the hour and minute hands?",
        "answer": "97.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 100,
        "question": "A bag contains 24 balls of which 6 are red and 18 are blue. What is the probability of picking a red ball?",
        "answer": "6/24",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 101,
        "question": "Find the missing number: 10 ? 16 19?",
        "answer": 13,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 103,
        "question": "A bag contains 19 balls of which 4 are red and 15 are blue. What is the probability of picking a red ball?",
        "answer": "4/19",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 104,
        "question": "What comes next in the sequence: 5 7 ? 11 13?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 106,
        "question": "What comes next in the sequence: 3 5 7 ? 11 13?",
        "answer": 9,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 108,
        "question": "A bag contains 14 balls of which 7 are red and 7 are blue. What is the probability of picking a red ball?",
        "answer": "7/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 109,
        "question": "A farmer has 24 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 111,
        "question": "A bag contains 19 balls of which 9 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "9/19",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 112,
        "question": "What comes next in the sequence: 6 10 14 ? 22 26?",
        "answer": 18,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 114,
        "question": "A farmer has 25 sheep and all but 18 run away. How many are left?",
        "answer": 18,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 116,
        "question": "A farmer has 22 sheep and all but 14 run away. How many are left?",
        "answer": 14,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 118,
        "question": "A bag contains 11 balls of which 2 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "2/11",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 120,
        "question": "Find the missing number: 4 6 ? 10?",
        "answer": 8,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 122,
        "question": "Find the missing number: 5 10 15 ? 25?",
        "answer": 20,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 123,
        "question": "A bag contains 17 balls of which 4 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "4/17",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 124,
        "question": "A bag contains 24 balls of which 11 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "11/24",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 125,
        "question": "Find the missing number: 3 ? 7 9 11?",
        "answer": 5,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 128,
        "question": "Find the missing number: 5 10 ? 20 25?",
        "answer": 15,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 129,
        "question": "What comes next in the sequence: 2 ? 8 11?",
        "answer": 5,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 130,
        "question": "A bag contains 16 balls of which 2 are red and 14 are blue. What is the probability of picking a red ball?",
        "answer": "2/16",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 132,
        "question": "A clock shows the time as 9:15. What is the angle between the hour and minute hands?",
        "answer": "187.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 133,
        "question": "A farmer has 17 sheep and all but 10 run away. How many are left?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 134,
        "question": "A clock shows the time as 10:15. What is the angle between the hour and minute hands?",
        "answer": "217.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 135,
        "question": "Find the missing number: 4 7 ? 13?",
        "answer": 10,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 137,
        "question": "A clock shows the time as 2:15. What is the angle between the hour and minute hands?",
        "answer": "22.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 138,
        "question": "A farmer has 30 sheep and all but 14 run away. How many are left?",
        "answer": 14,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 139,
        "question": "A clock shows the time as 4:15. What is the angle between the hour and minute hands?",
        "answer": "37.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 140,
        "question": "A bag contains 23 balls of which 7 are red and 16 are blue. What is the probability of picking a red ball?",
        "answer": "7/23",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 141,
        "question": "Find the missing number: 8 13 ? 23 28?",
        "answer": 18,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 142,
        "question": "A bag contains 28 balls of which 7 are red and 21 are blue. What is the probability of picking a red ball?",
        "answer": "7/28",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 143,
        "question": "A clock shows the time as 11:00. What is the angle between the hour and minute hands?",
        "answer": "330.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 144,
        "question": "A bag contains 25 balls of which 6 are red and 19 are blue. What is the probability of picking a red ball?",
        "answer": "6/25",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 145,
        "question": "A clock shows the time as 11:00. What is the angle between the hour and minute hands?",
        "answer": "330.0 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 146,
        "question": "What comes next in the sequence: 10 ? 18 22?",
        "answer": 14,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 150,
        "question": "A clock shows the time as 3:30. What is the angle between the hour and minute hands?",
        "answer": "75.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 151,
        "question": "Find the missing number: 7 ? 17 22?",
        "answer": 12,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 152,
        "question": "A bag contains 14 balls of which 5 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "5/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 153,
        "question": "A bag contains 18 balls of which 4 are red and 14 are blue. What is the probability of picking a red ball?",
        "answer": "4/18",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 154,
        "question": "A farmer has 26 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 155,
        "question": "A farmer has 24 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 157,
        "question": "What comes next in the sequence: 9 ? 13 15?",
        "answer": 11,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 158,
        "question": "Find the missing number: 4 7 10 ? 16?",
        "answer": 13,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 160,
        "question": "Find the missing number: 8 12 ? 20?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 162,
        "question": "What comes next in the sequence: 2 4 6 8 ? 12?",
        "answer": 10,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 163,
        "question": "A farmer has 24 sheep and all but 16 run away. How many are left?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 164,
        "question": "What comes next in the sequence: 6 ? 10 12?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 165,
        "question": "A bag contains 14 balls of which 5 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "5/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 166,
        "question": "What comes next in the sequence: 5 10 ? 20 25 30?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 167,
        "question": "What comes next in the sequence: 4 6 ? 10 12?",
        "answer": 8,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 169,
        "question": "A clock shows the time as 8:00. What is the angle between the hour and minute hands?",
        "answer": "240.0 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 170,
        "question": "A clock shows the time as 7:15. What is the angle between the hour and minute hands?",
        "answer": "127.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 171,
        "question": "A clock shows the time as 2:00. What is the angle between the hour and minute hands?",
        "answer": "60.0 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 172,
        "question": "A farmer has 16 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 173,
        "question": "What comes next in the sequence: 5 9 13 ? 21 25?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 175,
        "question": "A farmer has 24 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 176,
        "question": "A bag contains 21 balls of which 8 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "8/21",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 177,
        "question": "A bag contains 24 balls of which 6 are red and 18 are blue. What is the probability of picking a red ball?",
        "answer": "6/24",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 178,
        "question": "Find the missing number: 10 12 ? 16?",
        "answer": 14,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 179,
        "question": "Find the missing number: 7 11 15 ? 23 27?",
        "answer": 19,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 181,
        "question": "A farmer has 18 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 182,
        "question": "A clock shows the time as 1:30. What is the angle between the hour and minute hands?",
        "answer": "135.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 183,
        "question": "A farmer has 26 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 184,
        "question": "Find the missing number: 10 12 14 ? 18?",
        "answer": 16,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 185,
        "question": "A farmer has 26 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 186,
        "question": "A farmer has 27 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 187,
        "question": "A bag contains 24 balls of which 11 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "11/24",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 188,
        "question": "Find the missing number: 1 6 11 ? 21?",
        "answer": 16,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 190,
        "question": "A clock shows the time as 2:00. What is the angle between the hour and minute hands?",
        "answer": "60.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 191,
        "question": "A bag contains 27 balls of which 3 are red and 24 are blue. What is the probability of picking a red ball?",
        "answer": "3/27",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 192,
        "question": "A clock shows the time as 9:15. What is the angle between the hour and minute hands?",
        "answer": "187.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 193,
        "question": "What comes next in the sequence: 7 10 ? 16 19?",
        "answer": 13,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 194,
        "question": "What comes next in the sequence: 7 10 13 ? 19 22?",
        "answer": 16,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 195,
        "question": "What comes next in the sequence: 3 6 ? 12?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 196,
        "question": "A bag contains 14 balls of which 5 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "5/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 197,
        "question": "Find the missing number: 2 6 ? 14?",
        "answer": 10,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 198,
        "question": "Find the missing number: 5 10 ? 20?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 199,
        "question": "Find the missing number: 2 ? 8 11?",
        "answer": 5,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 200,
        "question": "A clock shows the time as 4:00. What is the angle between the hour and minute hands?",
        "answer": "120.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 201,
        "question": "A clock shows the time as 3:45. What is the angle between the hour and minute hands?",
        "answer": "157.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 202,
        "question": "What comes next in the sequence: 5 9 13 ? 21?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 204,
        "question": "A farmer has 28 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 205,
        "question": "A bag contains 16 balls of which 4 are red and 12 are blue. What is the probability of picking a red ball?",
        "answer": "4/16",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 206,
        "question": "A clock shows the time as 12:15. What is the angle between the hour and minute hands?",
        "answer": "82.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 208,
        "question": "A bag contains 12 balls of which 4 are red and 8 are blue. What is the probability of picking a red ball?",
        "answer": "4/12",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 209,
        "question": "A bag contains 28 balls of which 3 are red and 25 are blue. What is the probability of picking a red ball?",
        "answer": "3/28",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 210,
        "question": "A farmer has 26 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 211,
        "question": "What comes next in the sequence: 4 ? 12 16 20?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 212,
        "question": "A bag contains 29 balls of which 1 are red and 28 are blue. What is the probability of picking a red ball?",
        "answer": "1/29",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 213,
        "question": "A farmer has 11 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 214,
        "question": "What comes next in the sequence: 3 6 9 ? 15?",
        "answer": 12,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 215,
        "question": "Find the missing number: 7 12 17 ? 27?",
        "answer": 22,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 216,
        "question": "A farmer has 13 sheep and all but 6 run away. How many are left?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 218,
        "question": "A farmer has 10 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 219,
        "question": "What comes next in the sequence: 3 5 7 ? 11?",
        "answer": 9,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 220,
        "question": "What comes next in the sequence: 3 5 7 ? 11?",
        "answer": 9,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 221,
        "question": "A farmer has 13 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 222,
        "question": "Find the missing number: 7 12 ? 22?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 223,
        "question": "A farmer has 20 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 224,
        "question": "A bag contains 10 balls of which 5 are red and 5 are blue. What is the probability of picking a red ball?",
        "answer": "5/10",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 225,
        "question": "A bag contains 21 balls of which 4 are red and 17 are blue. What is the probability of picking a red ball?",
        "answer": "4/21",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 227,
        "question": "A clock shows the time as 5:15. What is the angle between the hour and minute hands?",
        "answer": "67.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 228,
        "question": "A farmer has 19 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 229,
        "question": "A bag contains 14 balls of which 4 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "4/14",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 230,
        "question": "John is 4 times as old as Jane. 4 years ago, he was 6 times her age. How old is Jane now?",
        "answer": 10,
        "difficulty": "easy",
        "category": "Age Problems"
    },
    {
        "id": 231,
        "question": "What comes next in the sequence: 5 9 ? 17 21 25?",
        "answer": 13,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 233,
        "question": "Find the missing number: 10 13 16 ? 22 25?",
        "answer": 19,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 234,
        "question": "A farmer has 10 sheep and all but 7 run away. How many are left?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 235,
        "question": "A bag contains 24 balls of which 9 are red and 15 are blue. What is the probability of picking a red ball?",
        "answer": "9/24",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 236,
        "question": "Find the missing number: 6 10 ? 18?",
        "answer": 14,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 237,
        "question": "A farmer has 23 sheep and all but 7 run away. How many are left?",
        "answer": 7,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 238,
        "question": "What comes next in the sequence: 8 ? 16 20 24 28?",
        "answer": 12,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 239,
        "question": "A clock shows the time as 3:15. What is the angle between the hour and minute hands?",
        "answer": "7.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 240,
        "question": "A clock shows the time as 12:00. What is the angle between the hour and minute hands?",
        "answer": "0.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 241,
        "question": "A bag contains 18 balls of which 1 are red and 17 are blue. What is the probability of picking a red ball?",
        "answer": "1/18",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 242,
        "question": "A farmer has 16 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 245,
        "question": "A bag contains 14 balls of which 1 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "1/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 246,
        "question": "A bag contains 11 balls of which 1 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "1/11",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 248,
        "question": "A clock shows the time as 12:45. What is the angle between the hour and minute hands?",
        "answer": "247.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 251,
        "question": "A farmer has 24 sheep and all but 19 run away. How many are left?",
        "answer": 19,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 252,
        "question": "What comes next in the sequence: 3 6 9 12 ? 18?",
        "answer": 15,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 253,
        "question": "What comes next in the sequence: 8 11 14 ? 20 23?",
        "answer": 17,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 254,
        "question": "A bag contains 25 balls of which 7 are red and 18 are blue. What is the probability of picking a red ball?",
        "answer": "7/25",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 255,
        "question": "A bag contains 23 balls of which 4 are red and 19 are blue. What is the probability of picking a red ball?",
        "answer": "4/23",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 256,
        "question": "A clock shows the time as 5:00. What is the angle between the hour and minute hands?",
        "answer": "150.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 257,
        "question": "A bag contains 20 balls of which 4 are red and 16 are blue. What is the probability of picking a red ball?",
        "answer": "4/20",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 259,
        "question": "Find the missing number: 3 ? 7 9 11?",
        "answer": 5,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 260,
        "question": "A bag contains 15 balls of which 7 are red and 8 are blue. What is the probability of picking a red ball?",
        "answer": "7/15",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 261,
        "question": "A clock shows the time as 5:45. What is the angle between the hour and minute hands?",
        "answer": "97.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 262,
        "question": "Find the missing number: 9 11 13 ? 17?",
        "answer": 15,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 263,
        "question": "A clock shows the time as 9:15. What is the angle between the hour and minute hands?",
        "answer": "187.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 264,
        "question": "A farmer has 13 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 265,
        "question": "A farmer has 10 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 266,
        "question": "A farmer has 12 sheep and all but 10 run away. How many are left?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 267,
        "question": "A clock shows the time as 7:15. What is the angle between the hour and minute hands?",
        "answer": "127.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 268,
        "question": "A farmer has 22 sheep and all but 17 run away. How many are left?",
        "answer": 17,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 269,
        "question": "A clock shows the time as 11:00. What is the angle between the hour and minute hands?",
        "answer": "330.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 270,
        "question": "What comes next in the sequence: 2 5 ? 11 14?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 271,
        "question": "What comes next in the sequence: 2 5 8 ? 14?",
        "answer": 11,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 272,
        "question": "A clock shows the time as 12:00. What is the angle between the hour and minute hands?",
        "answer": "0.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 273,
        "question": "Find the missing number: 5 7 ? 11?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 274,
        "question": "A clock shows the time as 5:45. What is the angle between the hour and minute hands?",
        "answer": "97.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 275,
        "question": "A bag contains 15 balls of which 5 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "5/15",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 277,
        "question": "A bag contains 11 balls of which 1 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "1/11",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 278,
        "question": "Find the missing number: 10 13 ? 19 22 25?",
        "answer": 16,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 280,
        "question": "A farmer has 20 sheep and all but 1 run away. How many are left?",
        "answer": 1,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 281,
        "question": "A clock shows the time as 2:45. What is the angle between the hour and minute hands?",
        "answer": "187.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 282,
        "question": "Find the missing number: 4 6 ? 10 12 14?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 284,
        "question": "Find the missing number: 3 5 ? 9?",
        "answer": 7,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 285,
        "question": "A clock shows the time as 7:30. What is the angle between the hour and minute hands?",
        "answer": "45.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 286,
        "question": "What comes next in the sequence: 4 ? 8 10?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 287,
        "question": "A bag contains 12 balls of which 5 are red and 7 are blue. What is the probability of picking a red ball?",
        "answer": "5/12",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 288,
        "question": "A farmer has 15 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 289,
        "question": "What comes next in the sequence: 10 ? 18 22 26?",
        "answer": 14,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 292,
        "question": "A farmer has 22 sheep and all but 16 run away. How many are left?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 293,
        "question": "Find the missing number: 6 9 ? 15?",
        "answer": 12,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 295,
        "question": "A farmer has 22 sheep and all but 17 run away. How many are left?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 296,
        "question": "Find the missing number: 5 9 ? 17?",
        "answer": 13,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 297,
        "question": "What comes next in the sequence: 1 5 9 13 ? 21?",
        "answer": 17,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 298,
        "question": "A farmer has 13 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 299,
        "question": "s20 starting date?",
        "answer": 11,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 300,
        "question": "In what year did the Berlin Wall fall?",
        "answer": "1989",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 301,
        "question": "Who was the first Emperor of Rome?",
        "answer": "Augustus",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 302,
        "question": "Which document begins with 'We the People'?",
        "answer": "The United States Constitution",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 303,
        "question": "What was the name of the ship on which the Pilgrims traveled to North America in 1620?",
        "answer": "Mayflower",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 304,
        "question": "Who was the British Prime Minister at the start of World War II?",
        "answer": "Neville Chamberlain",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 305,
        "question": "Which ancient civilization built Machu Picchu?",
        "answer": "The Inca",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 306,
        "question": "What year did India gain independence from Britain?",
        "answer": "1947",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 307,
        "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
        "answer": "Amelia Earhart",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 308,
        "question": "What was the primary language of the Roman Empire?",
        "answer": "Latin",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 309,
        "question": "Which war was fought between the North and South regions in the United States from 1861 to 1865?",
        "answer": "The American Civil War",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 310,
        "question": "Who devised the theory of relativity published in 1905?",
        "answer": "Albert Einstein",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 311,
        "question": "Which empire was ruled by Genghis Khan?",
        "answer": "The Mongol Empire",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 312,
        "question": "What ancient wonder was located in the city of Alexandria?",
        "answer": "The Lighthouse of Alexandria",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 313,
        "question": "Who was the first President of South Africa elected in a fully representative democratic election?",
        "answer": "Nelson Mandela",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 314,
        "question": "What treaty ended World War I?",
        "answer": "The Treaty of Versailles",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 315,
        "question": "Which queen ruled England and Ireland from 1558 until 1603, overseeing a golden age of cultural growth?",
        "answer": "Elizabeth I",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 316,
        "question": "What was the name of the U.S. project to develop the atomic bomb during World War II?",
        "answer": "The Manhattan Project",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 317,
        "question": "Which civilization built the pyramids at Giza?",
        "answer": "Ancient Egyptians",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 318,
        "question": "In which year did the French Revolution begin?",
        "answer": "1789",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 319,
        "question": "Who was the longest-reigning British monarch before Queen Elizabeth II?",
        "answer": "Queen Victoria",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 320,
        "question": "What was the name of the trade route connecting China to the Mediterranean?",
        "answer": "The Silk Road",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 321,
        "question": "Which Russian leader initiated the policy of glasnost and perestroika?",
        "answer": "Mikhail Gorbachev",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 322,
        "question": "What empire was centered in the region of modern-day Turkey and lasted from the 14th century to 1922?",
        "answer": "The Ottoman Empire",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 323,
        "question": "Who painted the ceiling of the Sistine Chapel?",
        "answer": "Michelangelo",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 324,
        "question": "Which explorer is credited with the first circumnavigation of the Earth (completed by his crew after his death)?",
        "answer": "Ferdinand Magellan",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 325,
        "question": "What year did the Titanic sink?",
        "answer": "1912",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 326,
        "question": "Who was known as the 'Mad Monk' in Russian history, influencing the last Tsar?",
        "answer": "Grigori Rasputin",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 327,
        "question": "Which battle in 1066 changed the course of English history?",
        "answer": "The Battle of Hastings",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 328,
        "question": "Who was the lead scientist on the Apollo 11 mission to land humans on the Moon?",
        "answer": "Wernher von Braun",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 329,
        "question": "Which fierce warrior society in ancient Japan was known for their code of honor, bushido?",
        "answer": "The Samurai",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 330,
        "question": "Which treaty, signed in 1494, divided the New World between Spain and Portugal?",
        "answer": "The Treaty of Tordesillas",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 331,
        "question": "Who was the first person to reach the South Pole?",
        "answer": "Roald Amundsen",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 332,
        "question": "What event is commonly marked as the start of the Great Depression in the United States?",
        "answer": "The Stock Market Crash of 1929",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 333,
        "question": "Which English king signed the Magna Carta in 1215?",
        "answer": "King John",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 334,
        "question": "What major event occurred on July 20, 1969?",
        "answer": "Apollo 11 Moon landing",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 335,
        "question": "Which empire’s capital was at Tenochtitlán?",
        "answer": "The Aztec Empire",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 336,
        "question": "Who led Indian nonviolent resistance against British rule, famously using civil disobedience?",
        "answer": "Mahatma Gandhi",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 337,
        "question": "What was the Renaissance?",
        "answer": "A cultural revival of art, literature, and learning in Europe from the 14th to 17th centuries",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 338,
        "question": "Which naval battle in 1805 established British naval supremacy during the Napoleonic Wars?",
        "answer": "The Battle of Trafalgar",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 339,
        "question": "Who wrote the Declaration of Independence?",
        "answer": "Thomas Jefferson",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 340,
        "question": "What event began on October 29, 1929, known as Black Tuesday?",
        "answer": "The Stock Market Crash that triggered the Great Depression",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 341,
        "question": "Which war was sparked by the assassination of Archduke Franz Ferdinand in 1914?",
        "answer": "World War I",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 342,
        "question": "Who was the Egyptian queen famous for her alliances with Julius Caesar and Mark Antony?",
        "answer": "Cleopatra",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 343,
        "question": "Which event marked the end of the Middle Ages and the beginning of the early modern period?",
        "answer": "The fall of Constantinople in 1453",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 344,
        "question": "Who was the first Chancellor of the German Empire in 1871?",
        "answer": "Otto von Bismarck",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 345,
        "question": "What was the Spanish flu pandemic year range?",
        "answer": "1918–1919",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 346,
        "question": "Which U.S. President issued the Emancipation Proclamation?",
        "answer": "Abraham Lincoln",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 347,
        "question": "Which Asian country was formerly known as Siam until 1939?",
        "answer": "Thailand",
        "difficulty": "medium",
        "category": "History"
    },
    {
        "id": 348,
        "question": "Who discovered penicillin in 1928?",
        "answer": "Alexander Fleming",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 349,
        "question": "What wall did Hadrian build across Britain around AD 122?",
        "answer": "Hadrian’s Wall",
        "difficulty": "hard",
        "category": "History"
    },
    {
        "id": 350,
        "question": "Which city hosted the first modern Olympic Games in 1896?",
        "answer": "Athens",
        "difficulty": "easy",
        "category": "History"
    },
    {
        "id": 351,
        "question": "A bag contains 15 balls of which 2 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "2/15",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 352,
        "question": "A farmer has 24 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 353,
        "question": "What comes next in the sequence: 4 8 12 ? 20 24?",
        "answer": 16,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 354,
        "question": "A bag contains 22 balls of which 3 are red and 19 are blue. What is the probability of picking a red ball?",
        "answer": "3/22",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 356,
        "question": "A bag contains 11 balls of which 2 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "2/11",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 358,
        "question": "Find the missing number: 6 11 ? 21?",
        "answer": 16,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 360,
        "question": "A bag contains 19 balls of which 6 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "6/19",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 361,
        "question": "What comes next in the sequence: 5 7 ? 11?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 362,
        "question": "Find the missing number: 7 10 13 ? 19?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 363,
        "question": "A clock shows the time as 1:15. What is the angle between the hour and minute hands?",
        "answer": "52.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 364,
        "question": "A farmer has 14 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 365,
        "question": "Find the missing number: 2 ? 8 11 14?",
        "answer": 5,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 366,
        "question": "Find the missing number: 8 ? 16 20 24?",
        "answer": 12,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 367,
        "question": "A clock shows the time as 8:30. What is the angle between the hour and minute hands?",
        "answer": "75.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 368,
        "question": "A bag contains 24 balls of which 5 are red and 19 are blue. What is the probability of picking a red ball?",
        "answer": "5/24",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 370,
        "question": "A clock shows the time as 6:15. What is the angle between the hour and minute hands?",
        "answer": "97.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 373,
        "question": "A farmer has 18 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 374,
        "question": "Find the missing number: 9 ? 13 15?",
        "answer": 11,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 376,
        "question": "Find the missing number: 8 ? 16 20?",
        "answer": 12,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 377,
        "question": "Find the missing number: 4 9 ? 19 24 29?",
        "answer": 14,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 378,
        "question": "A farmer has 10 sheep and all but 4 run away. How many are left?",
        "answer": 4,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 379,
        "question": "What comes next in the sequence: 9 12 ? 18 21?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 380,
        "question": "What comes next in the sequence: 4 ? 10 13?",
        "answer": 7,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 381,
        "question": "A farmer has 13 sheep and all but 12 run away. How many are left?",
        "answer": 12,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 382,
        "question": "Find the missing number: 5 8 ? 14 17?",
        "answer": 11,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 383,
        "question": "What comes next in the sequence: 3 ? 11 15?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 384,
        "question": "A bag contains 23 balls of which 9 are red and 14 are blue. What is the probability of picking a red ball?",
        "answer": "9/23",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 385,
        "question": "What comes next in the sequence: 6 ? 14 18 22 26?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 386,
        "question": "A farmer has 19 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 387,
        "question": "A farmer has 25 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 388,
        "question": "A bag contains 13 balls of which 6 are red and 7 are blue. What is the probability of picking a red ball?",
        "answer": "6/13",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 389,
        "question": "Find the missing number: 2 ? 8 11 14 17?",
        "answer": 5,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 390,
        "question": "Find the missing number: 7 10 ? 16?",
        "answer": 13,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 391,
        "question": "A clock shows the time as 10:15. What is the angle between the hour and minute hands?",
        "answer": "217.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 392,
        "question": "A bag contains 17 balls of which 2 are red and 15 are blue. What is the probability of picking a red ball?",
        "answer": "2/17",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 393,
        "question": "What comes next in the sequence: 7 ? 13 16 19?",
        "answer": 10,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 394,
        "question": "Find the missing number: 6 11 16 ? 26 31?",
        "answer": 21,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 395,
        "question": "A bag contains 26 balls of which 6 are red and 20 are blue. What is the probability of picking a red ball?",
        "answer": "6/26",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 396,
        "question": "A farmer has 27 sheep and all but 23 run away. How many are left?",
        "answer": 23,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 397,
        "question": "A bag contains 27 balls of which 12 are red and 15 are blue. What is the probability of picking a red ball?",
        "answer": "12/27",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 400,
        "question": "A farmer has 26 sheep and all but 13 run away. How many are left?",
        "answer": 13,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 402,
        "question": "A clock shows the time as 4:00. What is the angle between the hour and minute hands?",
        "answer": "120.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 403,
        "question": "A farmer has 17 sheep and all but 13 run away. How many are left?",
        "answer": 13,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 404,
        "question": "A farmer has 24 sheep and all but 6 run away. How many are left?",
        "answer": 6,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 406,
        "question": "What comes next in the sequence: 6 10 ? 18 22 26?",
        "answer": 14,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 407,
        "question": "What comes next in the sequence: 9 ? 13 15?",
        "answer": 11,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 408,
        "question": "A farmer has 29 sheep and all but 25 run away. How many are left?",
        "answer": 25,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 409,
        "question": "A bag contains 29 balls of which 3 are red and 26 are blue. What is the probability of picking a red ball?",
        "answer": "3/29",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 410,
        "question": "What comes next in the sequence: 8 10 ? 14?",
        "answer": 12,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 411,
        "question": "What comes next in the sequence: 4 ? 10 13 16?",
        "answer": 7,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 412,
        "question": "Find the missing number: 1 6 11 ? 21?",
        "answer": 16,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 413,
        "question": "Find the missing number: 10 ? 14 16 18?",
        "answer": 12,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 414,
        "question": "A bag contains 26 balls of which 12 are red and 14 are blue. What is the probability of picking a red ball?",
        "answer": "12/26",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 415,
        "question": "A farmer has 24 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 416,
        "question": "Find the missing number: 9 11 13 ? 17?",
        "answer": 15,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 417,
        "question": "Find the missing number: 7 ? 15 19?",
        "answer": 11,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 418,
        "question": "What comes next in the sequence: 6 9 12 ? 18?",
        "answer": 15,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 419,
        "question": "What comes next in the sequence: 5 10 15 20 ? 30?",
        "answer": 25,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 420,
        "question": "Find the missing number: 5 7 ? 11 13?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Patterns"
    },
    {
        "id": 422,
        "question": "A clock shows the time as 9:00. What is the angle between the hour and minute hands?",
        "answer": "270.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 423,
        "question": "A farmer has 11 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 424,
        "question": "A clock shows the time as 4:30. What is the angle between the hour and minute hands?",
        "answer": "45.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 425,
        "question": "A farmer has 27 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 426,
        "question": "What comes next in the sequence: 1 6 11 16 ? 26?",
        "answer": 21,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 427,
        "question": "A clock shows the time as 10:45. What is the angle between the hour and minute hands?",
        "answer": "52.5 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 428,
        "question": "A bag contains 16 balls of which 4 are red and 12 are blue. What is the probability of picking a red ball?",
        "answer": "4/16",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 429,
        "question": "A bag contains 18 balls of which 2 are red and 16 are blue. What is the probability of picking a red ball?",
        "answer": "2/18",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 430,
        "question": "A bag contains 14 balls of which 2 are red and 12 are blue. What is the probability of picking a red ball?",
        "answer": "2/14",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 431,
        "question": "A bag contains 15 balls of which 2 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "2/15",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 432,
        "question": "What comes next in the sequence: 8 10 ? 14?",
        "answer": 12,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 433,
        "question": "What comes next in the sequence: 10 ? 14 16 18?",
        "answer": 12,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 434,
        "question": "A farmer has 28 sheep and all but 23 run away. How many are left?",
        "answer": 23,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 435,
        "question": "Find the missing number: 5 ? 13 17 21?",
        "answer": 9,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 436,
        "question": "A bag contains 15 balls of which 4 are red and 11 are blue. What is the probability of picking a red ball?",
        "answer": "4/15",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 437,
        "question": "A farmer has 27 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 438,
        "question": "A clock shows the time as 6:15. What is the angle between the hour and minute hands?",
        "answer": "97.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 439,
        "question": "A bag contains 27 balls of which 3 are red and 24 are blue. What is the probability of picking a red ball?",
        "answer": "3/27",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 441,
        "question": "A bag contains 16 balls of which 8 are red and 8 are blue. What is the probability of picking a red ball?",
        "answer": "8/16",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 442,
        "question": "A bag contains 11 balls of which 4 are red and 7 are blue. What is the probability of picking a red ball?",
        "answer": "4/11",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 443,
        "question": "What comes next in the sequence: 10 12 14 ? 18 20?",
        "answer": 16,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 444,
        "question": "What comes next in the sequence: 7 ? 13 16 19 22?",
        "answer": 10,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 445,
        "question": "What comes next in the sequence: 4 9 14 ? 24?",
        "answer": 19,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 446,
        "question": "A clock shows the time as 11:00. What is the angle between the hour and minute hands?",
        "answer": "330.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 448,
        "question": "A clock shows the time as 5:30. What is the angle between the hour and minute hands?",
        "answer": "15.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 449,
        "question": "A bag contains 11 balls of which 5 are red and 6 are blue. What is the probability of picking a red ball?",
        "answer": "5/11",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 450,
        "question": "What comes next in the sequence: 4 ? 14 19?",
        "answer": 9,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 451,
        "question": "A farmer has 26 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 452,
        "question": "A clock shows the time as 6:30. What is the angle between the hour and minute hands?",
        "answer": "15.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 453,
        "question": "What comes next in the sequence: 10 15 ? 25?",
        "answer": 20,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 454,
        "question": "A clock shows the time as 5:15. What is the angle between the hour and minute hands?",
        "answer": "67.5 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 455,
        "question": "A bag contains 26 balls of which 4 are red and 22 are blue. What is the probability of picking a red ball?",
        "answer": "4/26",
        "difficulty": "medium",
        "category": "Probability"
    },
    {
        "id": 456,
        "question": "A farmer has 28 sheep and all but 25 run away. How many are left?",
        "answer": 25,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 457,
        "question": "A clock shows the time as 10:00. What is the angle between the hour and minute hands?",
        "answer": "300.0 degrees",
        "difficulty": "medium",
        "category": "Clock Problems"
    },
    {
        "id": 458,
        "question": "A clock shows the time as 12:15. What is the angle between the hour and minute hands?",
        "answer": "82.5 degrees",
        "difficulty": "easy",
        "category": "Clock Problems"
    },
    {
        "id": 459,
        "question": "A farmer has 23 sheep and all but 6 run away. How many are left?",
        "answer": 6,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 460,
        "question": "A clock shows the time as 6:00. What is the angle between the hour and minute hands?",
        "answer": "180.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 461,
        "question": "A bag contains 27 balls of which 13 are red and 14 are blue. What is the probability of picking a red ball?",
        "answer": "13/27",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 462,
        "question": "A bag contains 19 balls of which 6 are red and 13 are blue. What is the probability of picking a red ball?",
        "answer": "6/19",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 464,
        "question": "Find the missing number: 7 12 ? 22 27 32?",
        "answer": 17,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 466,
        "question": "A bag contains 25 balls of which 10 are red and 15 are blue. What is the probability of picking a red ball?",
        "answer": "10/25",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 467,
        "question": "What comes next in the sequence: 2 6 10 ? 18?",
        "answer": 14,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 468,
        "question": "What comes next in the sequence: 7 9 ? 13?",
        "answer": 11,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 470,
        "question": "Find the missing number: 2 ? 8 11?",
        "answer": 5,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 471,
        "question": "John is 3 times as old as Jane. 9 years ago, he was 5 times her age. How old is Jane now?",
        "answer": 18,
        "difficulty": "easy",
        "category": "Age Problems"
    },
    {
        "id": 472,
        "question": "A farmer has 10 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 473,
        "question": "Find the missing number: 9 ? 17 21 25 29?",
        "answer": 13,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 474,
        "question": "A farmer has 17 sheep and all but 11 run away. How many are left?",
        "answer": 11,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 475,
        "question": "What comes next in the sequence: 9 13 ? 21?",
        "answer": 17,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 476,
        "question": "A bag contains 15 balls of which 6 are red and 9 are blue. What is the probability of picking a red ball?",
        "answer": "6/15",
        "difficulty": "hard",
        "category": "Probability"
    },
    {
        "id": 477,
        "question": "What comes next in the sequence: 10 12 ? 16 18 20?",
        "answer": 14,
        "difficulty": "hard",
        "category": "Number Series"
    },
    {
        "id": 478,
        "question": "What comes next in the sequence: 1 ? 5 7 9 11?",
        "answer": 3,
        "difficulty": "easy",
        "category": "Number Series"
    },
    {
        "id": 479,
        "question": "What comes next in the sequence: 7 ? 13 16?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Number Series"
    },
    {
        "id": 480,
        "question": "A farmer has 18 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 481,
        "question": "Find the missing number: 1 ? 9 13?",
        "answer": 5,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 482,
        "question": "A farmer has 16 sheep and all but 5 run away. How many are left?",
        "answer": 5,
        "difficulty": "easy",
        "category": "Tricky Questions"
    },
    {
        "id": 484,
        "question": "Find the missing number: 6 8 ? 12 14 16?",
        "answer": 10,
        "difficulty": "medium",
        "category": "Patterns"
    },
    {
        "id": 487,
        "question": "A bag contains 17 balls of which 7 are red and 10 are blue. What is the probability of picking a red ball?",
        "answer": "7/17",
        "difficulty": "easy",
        "category": "Probability"
    },
    {
        "id": 488,
        "question": "A farmer has 11 sheep and all but 2 run away. How many are left?",
        "answer": 2,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 489,
        "question": "Find the missing number: 9 13 ? 21 25?",
        "answer": 17,
        "difficulty": "hard",
        "category": "Patterns"
    },
    {
        "id": 491,
        "question": "A farmer has 26 sheep and all but 18 run away. How many are left?",
        "answer": 18,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 492,
        "question": "A clock shows the time as 11:00. What is the angle between the hour and minute hands?",
        "answer": "330.0 degrees",
        "difficulty": "hard",
        "category": "Clock Problems"
    },
    {
        "id": 496,
        "question": "A farmer has 26 sheep and all but 9 run away. How many are left?",
        "answer": 9,
        "difficulty": "medium",
        "category": "Tricky Questions"
    },
    {
        "id": 497,
        "question": "A farmer has 16 sheep and all but 7 run away. How many are left?",
        "answer": 7,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 498,
        "question": "A farmer has 15 sheep and all but 8 run away. How many are left?",
        "answer": 8,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 499,
        "question": "A farmer has 27 sheep and all but 3 run away. How many are left?",
        "answer": 3,
        "difficulty": "hard",
        "category": "Tricky Questions"
    },
    {
        "id": 500,
        "question": "What comes next in the sequence: 8 12 16 ? 24?",
        "answer": 20,
        "difficulty": "easy",
        "category": "Number Series"
    }
]

export default questions;