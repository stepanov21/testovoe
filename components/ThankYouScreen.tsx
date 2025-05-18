"use client";

interface ThankYouScreenProps {
  onRestart: () => void;
}

export default function ThankYouScreen({ onRestart }: ThankYouScreenProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Thank You!</h2>
      <p className="mb-4 text-gray-800">
        Your registration has been submitted successfully.
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Take Quiz Again
      </button>
    </div>
  );
}