import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export const useFetchQuiz = (
  url = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);

  const submitAnswer = (event, elem, answer) => {
    if (event) event.persist();

    // get current idx
    const currentQuestion = data.findIndex((question) => question === elem);
    const newData = data;

    // update score if user answered correctly
    if (elem.correct_answer === answer) {
      setScore((prevCounter) => prevCounter + 1);
      // add a 'confirmation' that helps later to display the correct answers
      newData[currentQuestion].userAnsweredCorrectly = true;
      setData(newData);
    } else {
      newData[currentQuestion].userAnsweredCorrectly = false;
      setData(newData);
    }

    // update counter
    if (data.length !== counter) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url)
          .then((response) => response.json())
          .catch((err) => {
            setErrorMessage(`Something went wrong: ${err}`);
          });
        setData(data.results);
      } catch (error) {
        setIsError(error);
      }
    };
    // we're going to fetch new quizzes every time we start playing again
    if (counter === 0) {
      fetchData();
    }
  }, [url, counter]);

  return {
    data,
    score,
    errorMessage,
    setScore,
    counter,
    setCounter,
    submitAnswer,
    isError,
  };
};

useFetchQuiz.propTypes = {
  data: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired,
};
