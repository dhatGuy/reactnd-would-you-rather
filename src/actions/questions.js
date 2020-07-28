import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const SAVE_ANSWER = "SAVE_ANSWER";

export const saveAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_ANSWER,
  authedUser,
  qid,
  answer,
});




export const handleSaveAnswer = (info) => {
  return async (dispatch) => {
    await _saveQuestionAnswer(info);
    dispatch(saveAnswer(info));
  };
};
