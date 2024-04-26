import { useContext, createContext, useEffect } from "react";

const UserAuthContext = createContext(null);

const UserAuthContextProvider = ({ children }) => {

  /* 
  ? in this context we will check users session with cookies and specific tokens, otherwise we will redirect to login page
   */

  
  useEffect(() => {}, []);
  return (
    <UserAuthContext.Provider
    // value={}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
