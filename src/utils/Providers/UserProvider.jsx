import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants";
import { usePersistedState } from "../hooks/usePersistedState";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = usePersistedState({
    name: '',
    email: '',
    image: '',
    token: ''
  }, 'user');

  const login = async (loginInfo) => {
    try {
      const { data: { name, email, image, token } } = await axios.post(`${BASE_URL}/auth/login`, loginInfo);
      setCurrentUser({
        name,
        email,
        image,
        token
      });
      return true;
    } catch (error) {
      alert(error.response.data.message);
      return false;
    }

  };

  return (
    <UserContext.Provider value={{
      currentUser,
      login
    }}>
      {children}
    </UserContext.Provider>
  );

};