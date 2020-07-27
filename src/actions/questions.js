import { _saveQuestionAnswer } from "../utils/_DATA";

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
  return (dispatch) => {
    return _saveQuestionAnswer(info).then((data) => {
      dispatch(saveAnswer(info));
    });
  };
};
