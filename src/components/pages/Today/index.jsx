import { useContext } from "react";
import { TodayHabitsContext } from '../../../utils/Providers/TodayHabitsProvider';
import { TodayHabit } from "../../TodayHabit";
import { StyledToday, TodayHabitsContainer, TodayHeaderContainer } from "./style";

export const Today = () => {
  const { todayHabits } = useContext(TodayHabitsContext);

  return (
    <StyledToday>
      <TodayHeaderContainer>
        <h2>Segunda, 17/05</h2>
        <p>Nenhum hábito concluído ainda</p>
      </TodayHeaderContainer>
      <TodayHabitsContainer>
        {todayHabits.map((todayHabit, idx) => <TodayHabit todayHabit={todayHabit} key={idx} />)}
      </TodayHabitsContainer>
    </StyledToday>
  );
};