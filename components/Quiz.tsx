"use client";

import { useState } from "react";
import { questions } from "../data/quizQuestions";
import { submitQuizResults } from "../service/quizService";
import { QuizAnswer } from "../types/quiz";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import RegistrationForm from "./RegistrationForm";
import ThankYouScreen from "./ThankYouScreen";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const handleAnswerClick = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);

    // Record the user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newUserAnswers);

    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setShowRegistrationForm(false);
    setFormSubmitted(false);
    setUserAnswers(Array(questions.length).fill(-1));
  };

  const handleProceedToRegistration = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmit = async (formData: FormData, phoneNumber: string) => {
    try {
      // Prepare answers in the correct format
      const formattedAnswers: QuizAnswer[] = questions.map((q, index) => ({
        question: q.text,
        selectedAnswer:
          userAnswers[index] >= 0 ? q.options[userAnswers[index]] : null,
        correctAnswer: q.options[q.correctAnswer],
        isCorrect: userAnswers[index] === q.correctAnswer,
      }));

      // Log for debugging
      console.log("Submitting form data:", {
        ...formData,
        phone: phoneNumber,
        answers: formattedAnswers,
        score,
      });

      // In a real application, uncomment this to submit to the backend
      await submitQuizResults(formData, phoneNumber, formattedAnswers, score);

      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (could show an error message to the user)
    } finally {
      setFormSubmitted(true);
    }
  };

  if (formSubmitted) {
    return <ThankYouScreen onRestart={resetQuiz} />;
  }

  if (showRegistrationForm) {
    return (
      <RegistrationForm onSubmit={handleFormSubmit} onCancel={resetQuiz} />
    );
  }

  if (showResults) {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        onRegister={handleProceedToRegistration}
        onRestart={resetQuiz}
      />
    );
  }

  return (
    <QuizQuestion
      question={questions[currentQuestion]}
      currentQuestionIndex={currentQuestion}
      totalQuestions={questions.length}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
    />
  );
}
