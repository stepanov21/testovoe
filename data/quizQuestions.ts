import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "What does the Busy Status Bar indicate?",
    options: [
      "Available for meetings",
      "On a call or recording",
      "Computer is turned off",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "When can Busy Status automatically activate?",
    options: [
      "Only during scheduled meetings",
      "When you're on a call or live stream",
      "Only when manually turned on",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: "What color is the busy status light?",
    options: ["Green", "Yellow", "Red"],
    correctAnswer: 2,
  },
  {
    id: 4,
    text: "What can integrate with Busy Status Bar?",
    options: ["Only web browsers", "Desktop software", "Only mobile apps"],
    correctAnswer: 1,
  },
  {
    id: 5,
    text: "What does the busy light display?",
    options: [
      "Time remaining in call",
      "Status message like 'ON CALL'",
      "User's name",
    ],
    correctAnswer: 1,
  },
];
