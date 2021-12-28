const iState = [];
const crudReducer = (state = iState, action) => {
  switch (action.type) {
    case "ADD_USER":
      state = [...state, action.payload];
      return state;
    case "EDIT_USER":
      return state;
    case "DELETE_USER":
      const data = state.filter((dt, i) => i !== action.payload);
      return data;
    case "UPDATE_USER":
      state[action.payload.id].name = action.payload.dt.name;
      state[action.payload.id].email = action.payload.dt.email;
      state[action.payload.id].number = action.payload.dt.number;
      return state;

    default:
      return state;
  }
};
export default crudReducer;
