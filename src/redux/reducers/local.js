import actions from "./../constants/actions";

const initialState = {
  likes: []
}

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case actions.LOCALSTORAGE_DATA:
      return {
        ...state,
        ...data
      }
    case actions.LOCALSTORAGE_MODIFY: {
      debugger;
      return {
        ...state,
        ...data
      }
    }
    default:
      return state
  }
}