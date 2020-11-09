import * as React from "react";
import { createContext, useContext, useState } from "react";

const DEFAULT_USER_CONTEXT = {
  currentUser: [],
  setCurrentUser: () => {},
  userList: [],
  setUserList: () => {},
};

const UserContext = createContext(DEFAULT_USER_CONTEXT);
const { useEffect } = React;

export const useUserInfo = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    updateUserList(userList);
  }, [currentUser]);

  const updateUserList = (newUsers) => {
    const tempUserList = [...newUsers];
    if (currentUser) {
      const currentUserIndex = tempUserList.findIndex((user) => user.id === currentUser.id);
      if (currentUserIndex > -1) {
        tempUserList.splice(currentUserIndex, 1);
      }
    }
    setUserList(tempUserList);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        userList,
        setCurrentUser,
        setUserList: updateUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
