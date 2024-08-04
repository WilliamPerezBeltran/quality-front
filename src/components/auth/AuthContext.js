import React, { createContext, useState } from "react";
export const AuthContext = createContext({
  userInfo: false,
  setUserInfo: (user) =>
    console.log("Did you forgot to add AuthContext on top of your app?"),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState("");

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
