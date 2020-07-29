import { receiveUsers } from "./users";
import { _getUsers, _getQuestions, _saveQuestion } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const handleInitialData = () => {
  return async dispatch => {
    // dispatch(setAuthedUser('johndoe'))
    dispatch(showLoading())
    const users = await _getUsers()
    const questions = await _getQuestions()
    dispatch(receiveQuestions(questions))
    dispatch(receiveUsers(users))
    dispatch(hideLoading())
  }
}
export const SAVE_NEW_QUESTION = "SAVE_NEW_QUESTION";

export const saveNewQuestion = (question) => ({
  type: SAVE_NEW_QUESTION,
  question,
});

export const handleSaveNewQuestion = (question) => {
  return async (dispatch) => {
    dispatch(showLoading());
    const formattedQuestion = await _saveQuestion(question);
    dispatch(saveNewQuestion(formattedQuestion));
    dispatch(hideLoading());
  };
};

export default handleInitialData;
