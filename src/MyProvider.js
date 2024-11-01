import React, { useState } from "react";
import MyContext, { AuthContext } from "./CreateContext";
import ErrorBoundary from "./ErrorBoundary";

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Default Value");
  return (
    <>
      <MyContext.Provider value={{ value, setValue }}>
           
      <ErrorBoundary>
             {children}
      </ErrorBoundary>
      
   
      </MyContext.Provider>
    </>
  );
};

export default MyProvider;




export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
