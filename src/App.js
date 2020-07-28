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
import NewQuestion from "./components/NewQuestion";

const App = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      authedUser: state.authedUser,
      questions: state.questions,
      users: state.users,
    };
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
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/question/:id" component={Question} />
          </>
        ) : (
          <>
            <Login />
            {/* <Redirect to="/login" /> */}
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
