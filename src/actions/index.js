import { receiveUsers } from "./users";
import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const handleInitialData = () => {
  return async dispatch => {
    const users = await _getUsers()
    const questions = await _getQuestions()
    dispatch(showLoading())
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(setAuthedUser("johndoe"))
    dispatch(hideLoading())
  }
}

export default handleInitialData;
