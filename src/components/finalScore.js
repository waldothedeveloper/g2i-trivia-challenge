import { Link } from "react-router-dom";
import { useProvideQuiz } from "../context/useProvideQuiz";
import QuizDialog from "./quizDialog";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

//
const FinalScore = () => {
  const { data, score, setCounter, setScore } = useProvideQuiz();

  //
  return (
    <QuizDialog>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold py-6 bg-clip-text text-transparent bg-color">
            You scored:
          </h1>
          <p className="font-bold text-2xl bg-clip-text text-transparent bg-color">
            {score} / {data.length}
          </p>
        </div>

        <ul className="divide-y divide-gray-200 max-h-96 overflow-y-scroll ">
          {data.map((elem) => (
            <li
              key={elem.question}
              className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <div className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {elem.category}
                    </p>
                    {/* TODO: REMOVE THE INNER-HTML THING, AVOID XSS ATTACKS */}
                    <p
                      className="text-sm text-gray-500 truncate"
                      dangerouslySetInnerHTML={{ __html: elem.question }}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                  {elem.userAnsweredCorrectly !== true ? (
                    <div className="mx-auto flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                      <XIcon
                        className="h-4 w-4 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                      <CheckIcon
                        className="h-4 w-4 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-1">
                <p className="line-clamp-2 text-sm text-gray-600">
                  {elem.preview}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="btn-results"
            onClick={() => {
              setCounter(0);
              setScore(0);
            }}
          >
            PLAY AGAIN ?
          </Link>
        </div>
      </div>
    </QuizDialog>
  );
};

export default FinalScore;

FinalScore.propTypes = {
  score: PropTypes.number,
  data: PropTypes.array,
};
