import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants";

export const UserContext = createContext({
  currentUser: {
    name: '',
    email: '',
    image: '',
    token: ''
  },
  login: ''
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    image: '',
    token: ''
  });

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