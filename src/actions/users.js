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

export const handleSaveAnswerToUser = (data) => {
  return (dispatch) => {
    return _saveQuestionAnswer(data).then((res) => {
      dispatch(saveAnswerToUser(data));
    });
  };
}
