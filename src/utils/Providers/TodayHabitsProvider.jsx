import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { UserContext } from "./UserProvider";

export const TodayHabitsContext = createContext({
  todayHabits: [],
  checkHabit: async () => { },
  uncheckHabit: async () => { },
  getTodayHabits: async () => { }
});

export const TodayHabitsProvider = ({ children }) => {
  const [todayHabits, setTodayHabits] = useState([]);
  const [hasHabitsChanged, setHasHabitsChanged] = useState(true);
  const { currentUser: { token } } = useContext(UserContext);

  console.log(todayHabits);

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  useEffect(() => {

    if (!token) return;

    axios.get(`${BASE_URL}/habits/today`, config)
      .then(res => setTodayHabits(res.data))
      .catch(err => alert(err.response.data.message));

  }, [token, hasHabitsChanged]);

  const checkHabit = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
      console.log(res.data);
      setHasHabitsChanged(!hasHabitsChanged);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const uncheckHabit = async (id) => {
    try {
      const res = await axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
      console.log(res.data);
      setHasHabitsChanged(!hasHabitsChanged);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //TODO: Melhorar requisição de conclusão de tarefa

  return (
    <TodayHabitsContext.Provider value={{ todayHabits, checkHabit, uncheckHabit }}>
      {children}
    </TodayHabitsContext.Provider>
  );
};