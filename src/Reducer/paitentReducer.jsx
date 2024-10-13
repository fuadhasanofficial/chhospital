const initialState = {
  details: {
    name: "Fuad",
    sex: "Male",
  },
};

const paitentReducer = (state, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
      break;

    case "FUAD":
      return {
        ...state,
      };

      break;

    default:
      return state;
  }
};

export { initialState, paitentReducer };
