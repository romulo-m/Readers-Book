import React from "react";
import UseStorage from "../utils/UseStorage";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
  const { token, setToken } = UseStorage("token");
  return (
    <UserContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
