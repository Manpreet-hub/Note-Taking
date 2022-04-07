const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, note: [...state.note, { ...action.payload }] };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        trash: [...state.trash, { ...action.payload }],
        note: state.note.filter((item) => item.id !== action.payload.id),
        pinnedNote: state.pinnedNote.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "MOVE_TO_ARCHIVE":
      return {
        ...state,
        archive: [...state.archive, { ...action.payload }],
        note: state.note.filter((item) => item.id !== action.payload.id),
        pinnedNote: state.pinnedNote.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UNARCHIVE":
      return {
        ...state,
        archive: state.archive.filter(
          (noteItem) => noteItem.id !== action.payload.id
        ),
        note: [...state.note, { ...action.payload }],
      };
    case "RESTORE_NOTE":
      return {
        ...state,
        note: [...state.note, { ...action.payload }],
        trash: state.trash.filter(
          (noteItem) => noteItem.id !== action.payload.id
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        trash: state.trash.filter((noteItem) => noteItem.id !== action.payload),
        pinnedNote: state.trash.filter(
          (noteItem) => noteItem.id !== action.payload
        ),
      };
    case "PINNED_NOTE":
      return {
        ...state,
        pinnedNote: [...state.pinnedNote, { ...action.payload }],
        archive: [...state.archive, { ...action.payload }],
        archive: state.archive.filter(
          (noteItem) => noteItem.id !== action.payload.id
        ),
        note: state.note.filter(
          (noteItem) => noteItem.id !== action.payload.id
        ),
      };
    case "UNPINNED_NOTE":
      return {
        ...state,
        pinnedNote: state.pinnedNote.filter(
          (noteItem) => noteItem.id !== action.payload.id
        ),
        note: [...state.note, { ...action.payload }],
      };
    default:
      return state;
  }
};

export { noteReducer };
