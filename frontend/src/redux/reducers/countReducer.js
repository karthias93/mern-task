import { UPDATE_COUNT } from "../actions/actionTypes"

const initialState = {
  count: 0
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return { count: state.count+1 };
    default:
      return state;
  }
}

export default countReducer;