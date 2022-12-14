import { HabitsHeader, StyledHabits } from "./style";
import { Button } from '../../atoms/Button';
import { BUTTON_S } from '../../../styles/buttonSizes';
import { HabitForm } from "../../HabitForm";
import { useState } from "react";

export const Habits = () => {
  const [habits, setHabits] = useState([{
    id: 1,
    name: "Nome do hábito",
    days: [1, 3, 5]
  },
  {
    id: 2,
    name: "Nome do hábito 2",
    days: [1, 3, 4, 6]
  }]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      {isFormOpen && <HabitForm closeForm={closeForm} />}
      {habits.length <= 0
        ?
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        :
        <p>Lista de hábitos</p>
      }
    </StyledHabits>
  );
};