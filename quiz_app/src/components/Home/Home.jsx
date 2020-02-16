import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/quiz">
        <h2>Quiz</h2>
      </Link>
    </div>
  );
};

export default Home;
