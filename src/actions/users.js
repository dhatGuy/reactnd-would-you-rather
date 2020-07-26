export const RECEIVE_USERS = 'GET_USERS';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}


