import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <Box m={4}>
      <Typography variant="h4">Home</Typography>
      <Box pt={4}>
        <Link to="/quiz">
          <Typography variant="h5">Quiz</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
