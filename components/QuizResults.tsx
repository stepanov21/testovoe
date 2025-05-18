"use client";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRegister: () => void;
  onRestart: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  onRegister,
  onRestart,
}: QuizResultsProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Quiz Results</h2>
      <p className="mb-4 text-gray-800">
        You scored {score} out of {totalQuestions}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={onRegister}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Register Now
        </button>
        <button
          onClick={onRestart}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}