import { useProvideQuiz } from "../context/useProvideQuiz";
import PropTypes from "prop-types";

//
const StepsCounter = () => {
  const { data, counter } = useProvideQuiz();

  //
  return (
    counter <= 9 && (
      <nav
        className="mt-5 sm:mt-6 flex items-center justify-center"
        aria-label="Progress"
      >
        <p className="text-sm font-medium text-gray-400">
          {counter + 1} of {data.length}
        </p>
      </nav>
    )
  );
};

export default StepsCounter;

StepsCounter.propTypes = {
  data: PropTypes.array,
  counter: PropTypes.number,
};
