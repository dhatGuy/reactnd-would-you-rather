import React from "react";
import { useEffect } from "react";
import handleInitialData from "./actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import Question from "./components/Question";
import  LoadingBar from "react-redux-loading";
import Dashboard from "./components/Dashboard";

const App = (props) => {
  const dispatch = useDispatch();
  const authedUser = useSelector(state=> state.authedUser)
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {authedUser !== null ? <Dashboard /> : ""}
    </div>
  );
};

export default App;
