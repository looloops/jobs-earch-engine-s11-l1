import { SET_QUERY } from "../actions";

const initialState = {
  data: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
