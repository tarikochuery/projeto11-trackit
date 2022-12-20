import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { UserContext } from "./UserProvider";

export const TodayHabitsContext = createContext({
  todayHabits: [],
  checkHabit: async () => { },
  uncheckHabit: async () => { },
  setHasTodayHabitsChanged: (prev) => { }
});

export const TodayHabitsProvider = ({ children }) => {
  const [todayHabits, setTodayHabits] = useState([]);
  const [hasHabitsChanged, setHasTodayHabitsChanged] = useState(true);
  const { currentUser: { token } } = useContext(UserContext);

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  useEffect(() => {

    if (!token) return;

    axios.get(`${BASE_URL}/habits/today`, config)
      .then(res => {
        setTodayHabits(res.data);
      })
      .catch(err => alert(err.response.data.message));

  }, [token, hasHabitsChanged]);

  const checkHabit = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
      setHasTodayHabitsChanged(!hasHabitsChanged);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const uncheckHabit = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
      setHasTodayHabitsChanged(!hasHabitsChanged);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //TODO: Melhorar lógica para quando apenas um hábito do dia atual for criado, aparecer nos hábitos de hoje.

  return (
    <TodayHabitsContext.Provider value={{ todayHabits, checkHabit, uncheckHabit, setHasTodayHabitsChanged }}>
      {children}
    </TodayHabitsContext.Provider>
  );
};