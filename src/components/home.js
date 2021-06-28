import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = () => {
  return (
    <div className="bg-gray-50 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-bold text-transparent bg-clip-text bg-color tracking-wide uppercase">
            Can you score 100%?
          </h2>
          <p className="mt-1 header">Welcome to the Trivia Challenge!</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            You will be presented with 10 True or False questions.
          </p>
          <Link to="/quiz" className="btn mt-12">
            BEGIN!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  counter: PropTypes.number,
  score: PropTypes.number,
};
