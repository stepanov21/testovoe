export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
  }
  
  export interface FormData {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface QuizAnswer {
    question: string;
    selectedAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
  }