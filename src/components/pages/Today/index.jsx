import { useContext } from "react";
import { TodayHabitsContext } from '../../../utils/Providers/TodayHabitsProvider';
import { TodayHabit } from "../../TodayHabit";
import { StyledToday, TodayHabitsContainer, TodayHeaderContainer } from "./style";
import dayjs from 'dayjs';
import { WEEK_DAYS_FULL } from "../../../utils/constants";

export const Today = () => {
  const { todayHabits } = useContext(TodayHabitsContext);

  return (
    <StyledToday>
      <TodayHeaderContainer>
        <h2>{WEEK_DAYS_FULL[dayjs().day()]}, {dayjs().date()}/{dayjs().month() + 1}</h2>
        <p>Nenhum hábito concluído ainda</p>
      </TodayHeaderContainer>
      <TodayHabitsContainer>
        {todayHabits.map((todayHabit, idx) => <TodayHabit todayHabit={todayHabit} key={idx} />)}
      </TodayHabitsContainer>
    </StyledToday>
  );
};