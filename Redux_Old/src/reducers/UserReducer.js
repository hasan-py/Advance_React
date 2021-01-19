const UserReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, { name: action.payload }];
    case "REMOVE_USER":
      return state.filter((item, index) => action.index !== index);
    case "EDIT_USER":
      state.filter((item, index) => {
        if (action.payload.index === index) {
          item.name = action.payload.name;
        }
      });
      return state;
    default:
      return state;
  }
};

export default UserReducer;
