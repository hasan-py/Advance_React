const iState = {
  data: {
    address: "Bangladesh",
    phone: 86786786,
  },
  name: "Hasan",
  wishes: ["eat", "code"],
};

const reducer = (state = iState, action) => {
  switch (action.type) {
    case "C":
      return {
        ...state,
        name: action.pyload,
      };
    default:
      return state;
  }
};

export default reducer;
