import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Loader } from "./components/loader";
import { ProvideQuiz } from "./context/useProvideQuiz";

const Home = lazy(() => import("./components/home"));
const QuizScreen = lazy(() => import("./components/quiz-screen"));
const FinalScore = lazy(() => import("./components/finalScore"));

function App() {
  //
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <ProvideQuiz>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={QuizScreen} />
            <Route exact path="/final-score" component={FinalScore} />
          </ProvideQuiz>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
