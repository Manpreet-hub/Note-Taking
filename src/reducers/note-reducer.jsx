const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, note: [...state.note, { ...action.payload }] };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        trash: [...state.trash, { ...action.payload }],
        note: state.note.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { noteReducer };
