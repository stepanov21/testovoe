"use client";

import { Question } from "../types/quiz";


interface QuizQuestionProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerClick: (optionIndex: number) => void;
}

export default function QuizQuestion({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerClick,
}: QuizQuestionProps) {
  return (
    <div className="mt-4">
      <div className="mb-4">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${
              index === currentQuestionIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4 text-gray-900">
        {question.text}
      </h2>

      <div className="mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full py-3 px-4 rounded mb-2 font-semibold text-gray-900 ${
              selectedAnswer === index
                ? index === question.correctAnswer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            onClick={() => onAnswerClick(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">
        {currentQuestionIndex + 1}/{totalQuestions}
      </div>
    </div>
  );
}