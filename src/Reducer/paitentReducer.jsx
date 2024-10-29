const initialState = {
  details: {
    name: "Fuad",
    sex: "Male",
  },

  dataLoad: {
    year: "",
    month: "",
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

    case "LOAD_DATA_BY_MONTH":
      return {
        ...state,
        dataLoad: {
          year: action.payload.year,
          month: action.payload.month,
        },
      };

      break;

    default:
      return state;
  }
};

export { initialState, paitentReducer };
