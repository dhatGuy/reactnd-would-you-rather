import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_USERS = 'GET_USERS';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';

export function saveAnswerToUser({authedUser, qid, answer}) {
  return {
    type: SAVE_ANSWER_TO_USER,
    authedUser,
    qid,
    answer
  }
}

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER';

export function saveQuestionToUser(question) {
  return {
    type: SAVE_QUESTION_TO_USER,
    question
  }
}

const handleSaveQuestionToUser = () => {
  return dispatch=> {
    
  }
}
export const handleSaveAnswerToUser = (data) => {
  return async (dispatch) => {
    await _saveQuestionAnswer(data);
    dispatch(saveAnswerToUser(data));
  };
}
