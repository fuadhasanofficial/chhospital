/* eslint-disable react/prop-types */
// componet by fuad hasan
import React, { createContext, useReducer } from "react";
import { initialState, paitentReducer } from "../Reducer/paitentReducer";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paitentReducer, initialState);
  const authInfo = { state, dispatch };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
