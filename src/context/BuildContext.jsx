import { createContext, useReducer } from "react";

export const BuildContext = createContext();

export function buildReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      state["build"][action["payload"]["component"]] =
        action["payload"]["product"];
      return state;
    default:
      return state;
  }
}

export const BuildContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(buildReducer, { build: {} });
  return (
    <BuildContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BuildContext.Provider>
  );
};
