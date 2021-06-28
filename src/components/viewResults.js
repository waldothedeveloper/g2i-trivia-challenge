import { Link } from "react-router-dom";

const ViewResults = () => {
  return (
    <div className="flex items-center justify-center space-y-6 text-center">
      <div className="my-12 sm:p-6">
        <h1 className="header pb-12">Ready to see your score?</h1>
        <Link to="/final-score" className="btn">
          View Results
        </Link>
      </div>
    </div>
  );
};

export default ViewResults;
