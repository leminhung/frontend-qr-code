import { INIT_STATE } from "../../constant";
import { getUser, createUser, updateUser, getType } from "../actions";

export default function UserReducers(state = INIT_STATE.user, action) {
  switch (action.type) {
    case getType(getUser.getUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUser.getUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getUser.getUserFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createUser.createUserSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updateUser.updateUserSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}
