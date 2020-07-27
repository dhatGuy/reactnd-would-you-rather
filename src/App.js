import React from "react";
import { useEffect } from "react";
import handleInitialData from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Question from "./components/Question";
import LoadingBar from "react-redux-loading";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav";

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

  return (
    <div>
      <LoadingBar />
      <Router>
      {state.authedUser !== null ? (
        <>
        <Nav />
          <Route path="/" exact component={Dashboard} />
          <Route path="/question/:id" component={Question} />
          </>
          ) : <Route path="/login" component={Login} /> 
          }
          
          </Router>
    </div>
  );
};

export default App;
