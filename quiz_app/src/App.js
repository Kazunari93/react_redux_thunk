import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import QuizList from "./components/QuizList/QuizList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Quiz App</h1>
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={QuizList} />
      </div>
    </Router>
  );
}

export default App;
