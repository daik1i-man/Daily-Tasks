import { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();

export default function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const allCookies = document.cookie;

    const userDataCookie = allCookies.split(';').find(cookie => cookie.trim().startsWith('userData'));

    if (userDataCookie) {
      setUser(true);
    } else {
      setUser(false);
      console.log("User not found!");
    }
  }, [user])

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
