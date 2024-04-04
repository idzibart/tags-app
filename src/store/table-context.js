import { createContext, useReducer, useContext } from "react";

export const SortContext = createContext();

const initialState = {
  sortDirection: {
    id: "desc",
    name: "desc",
    count: "desc",
  },
};

function sortReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SORT":
      const { field } = action.payload;
      const direction = state.sortDirection[field] === "asc" ? "desc" : "asc";
      return {
        ...state,
        sortDirection: {
          ...state.sortDirection,
          [field]: direction,
        },
      };
    default:
      return state;
  }
}

export const SortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortReducer, initialState);
  return (
    <SortContext.Provider value={{ state, dispatch }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
};
