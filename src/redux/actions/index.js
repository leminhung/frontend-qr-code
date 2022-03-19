import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getUser = createActions({
  getUserRequest: undefined,
  getUserSuccess: (payload) => payload,
  getUserFailure: (err) => err,
});

export const createUser = createActions({
  createUserRequest: (payload) => payload,
  createUserSuccess: (payload) => payload,
  createUserFailure: (err) => err,
});

export const updateUser = createActions({
  updateUserRequest: (payload) => payload,
  updateUserSuccess: (payload) => payload,
  updateUserFailure: (err) => err,
});
