import { createContext, useReducer } from "react";

export const BuildContext = createContext();

export function buildReducer(state, action) {
  switch (action.type) {
    case "SET_CONTEXT":
      console.log("in set context", action.payload);
      return { ...state, build: action.payload };

    case "ADD_PRODUCT":
      state["build"][action["payload"]["component"]] =
        action["payload"]["product"];
      return state;

    case "RESET":
      window.localStorage.setItem("PC_BUILD_SPECIFICATION", null);
      return { ...state, build: {} };

    default:
      return state;
  }
}

export const BuildContextProvider = ({ children }) => {
  const data = JSON.parse(
    window.localStorage.getItem("PC_BUILD_SPECIFICATION")
  );
  const [state, dispatch] = useReducer(buildReducer, {
    build: data ? data : {},
  });
  return (
    <BuildContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BuildContext.Provider>
  );
};
