const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "ADD_NOTE":
      return { ...state, note: [...state.note, { ...action.payload }] };

    default:
      return state;
  }
};

export { noteReducer };
