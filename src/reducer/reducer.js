const INTIAL_STATE = { todos: ["first to do"] };

function reducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "remove":
      return state;

    default:
      return state;
  }
}

export default reducer;
