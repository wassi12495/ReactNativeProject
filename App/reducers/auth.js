import { TEST } from "../actions/types";

const initialState = {
  currentUser: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return state;
    default:
      return state;
  }
};
