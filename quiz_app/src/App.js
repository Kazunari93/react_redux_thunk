import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import QuizList from "./components/QuizList/QuizList";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Paper>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Box m={3}>
                <Typography variant="h4">Quiz App</Typography>
              </Box>
            </Grid>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" exact component={QuizList} />
          </Grid>
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
