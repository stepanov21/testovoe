import { FormData, QuizAnswer } from "../types/quiz";

export async function submitQuizResults(
  formData: FormData,
  phoneNumber: string,
  answers: QuizAnswer[],
  score: number
) {
  try {
    const response = await fetch("/api/quiz-results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        phone: phoneNumber,
        answers,
        score,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error submitting quiz results:", error);
    throw error;
  }
}
