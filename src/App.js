import React from "react";
import { useEffect } from "react";
import handleInitialData from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Question from "./components/Question";
import LoadingBar from "react-redux-loading";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      authedUser: state.authedUser,
      questions: state.questions,
      users: state.users
    }
  });
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  console.log(state);
  return (
    <div>
      <LoadingBar />
      <Router>
      {state.users !== {} || state.questions !== {} ? (
        <>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/question/:id" component={Question} />
          </>
          ) : <Redirect to="/login" />}
          </Router>
    </div>
  );
};

export default App;
