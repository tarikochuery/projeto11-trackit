import { HabitsHeader, StyledHabits } from "./style";
import { Button } from '../../atoms/Button';
import { BUTTON_S } from '../../../styles/buttonSizes';
import { HabitForm } from "../../HabitForm";
import { useContext, useEffect, useState } from "react";
import { Habit } from "../../Habit";
import axios from "axios";
import { UserContext } from "../../../utils/Providers/UserProvider";
import { BASE_URL } from "../../../utils/constants";

export const Habits = () => {
  const [hasHabitsChanged, setHasHabitsChanged] = useState(true);
  const { currentUser: { token } } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    axios.get(`${BASE_URL}/habits`, config)
      .then(res => setHabits(res.data));
  }, [hasHabitsChanged]);

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <StyledHabits>
      <HabitsHeader>
        <h2>Meus Hábitos</h2>
        <Button size={BUTTON_S} onClick={() => setIsFormOpen(true)} >
          +
        </Button>
      </HabitsHeader>
      {isFormOpen && <HabitForm setHasHabitsChanged={setHasHabitsChanged} closeForm={closeForm} />}
      {habits?.length <= 0
        ?
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        :
        habits.map(habit => <Habit habitInfo={habit} key={habit.id} setHasHabitsChanged={setHasHabitsChanged} />)
      }
    </StyledHabits>
  );
};