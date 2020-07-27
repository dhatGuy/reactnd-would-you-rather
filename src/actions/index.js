import { receiveUsers } from "./users";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const handleInitialData = () => {
  return async dispatch => {
    // dispatch(setAuthedUser("johndoe"))
    dispatch(showLoading())
    const users = await _getUsers()
    const questions = await _getQuestions()
    dispatch(receiveQuestions(questions))
    dispatch(receiveUsers(users))
    dispatch(hideLoading())
  }
}

export default handleInitialData;
