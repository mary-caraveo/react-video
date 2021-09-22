const reducer = (state, action) => {
  const itemId = state.myList.find((items) => items.id === action.payload.id);
  switch (action.type) {
    case "SET_FAVORITE":
      if (itemId) return state;
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
