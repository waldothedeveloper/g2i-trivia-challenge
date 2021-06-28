import React, { lazy } from "react";
import { useProvideQuiz } from "../context/useProvideQuiz";
import PropTypes from "prop-types";

const ErrorDialog = lazy(() => import("./ErrorDialog"));
const QuizCards = lazy(() => import("./quiz-cards"));
const StepsCounter = lazy(() => import("./stepsCounter"));
const QuizDialog = lazy(() => import("./quizDialog"));

const QuizScreen = () => {
  const { isError } = useProvideQuiz();

  //
  return isError ? (
    <ErrorDialog />
  ) : (
    <QuizDialog>
      <QuizCards />
      <StepsCounter />
    </QuizDialog>
  );
};

export default QuizScreen;

QuizScreen.propTypes = {
  isError: PropTypes.string,
};
