import React, { lazy } from "react";
import PropTypes from "prop-types";
import { useProvideQuiz } from "../context/useProvideQuiz";
import { VotingButton } from "./VotingButton";

const ViewResults = lazy(() => import("./viewResults.js"));

const QuizCards = () => {
  const { data, counter, submitAnswer } = useProvideQuiz();

  return data.length > 1 && counter !== 10 ? (
    <div className="flex flex-col overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {data[counter].category}
            </p>

            <p
              className="mt-3 text-base text-gray-500"
              dangerouslySetInnerHTML={{ __html: data[counter].question }}
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-evenly">
          {/* button for true answers */}
          <VotingButton bool={true} fn={submitAnswer} counter={data[counter]} />
          {/* button for false answers */}
          <VotingButton
            bool={false}
            fn={submitAnswer}
            counter={data[counter]}
          />
        </div>
      </div>
    </div>
  ) : (
    <ViewResults />
  );
};

export default QuizCards;

QuizCards.propTypes = {
  data: PropTypes.array,
  counter: PropTypes.number,
};
