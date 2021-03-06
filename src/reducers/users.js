import { RECEIVE_USERS, SAVE_ANSWER_TO_USER } from "../actions/users";
import { SAVE_NEW_QUESTION } from "../actions";

export const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
      case SAVE_NEW_QUESTION:
        const {author, id} = action.question
        return {
          ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state;
  }
};
