import { createContext, useContext } from "react";
import { useFetchQuiz } from "../hooks/useFetchQuiz";
import PropTypes from "prop-types";

//
const quizContext = createContext();

export const ProvideQuiz = ({ children }) => {
  const {
    data,
    score,
    errorMessage,
    setScore,
    counter,
    setCounter,
    submitAnswer,
    isError,
  } = useFetchQuiz();

  return (
    <quizContext.Provider
      value={{
        data: data,
        counter: counter,
        errorMessage: errorMessage,
        setCounter: setCounter,
        score: score,
        setScore,
        submitAnswer: submitAnswer,
        isError: isError,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export const useProvideQuiz = () => useContext(quizContext);

ProvideQuiz.propTypes = {
  data: PropTypes.array,
  score: PropTypes.number,
  errorMessage: PropTypes.string,
  counter: PropTypes.number,
  isError: PropTypes.string,
};
