
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { getlocalStorage, setlocalStorage } from "../../utils/localStorage ";

export const Authprovider = ({ children }) => {
  const [Data, setData] = useState();
  useEffect(() => {
    setlocalStorage()
    const {  employees } = getlocalStorage();
    setData({ employees });
  }, []);
  
  return (
    <>
      <AuthContext.Provider value={[Data , setData]}>{children}</AuthContext.Provider>
    </>
  );

  
};
