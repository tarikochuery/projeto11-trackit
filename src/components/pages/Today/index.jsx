import { useContext } from "react";
import { TodayHabitsContext } from '../../../utils/Providers/TodayHabitsProvider';
import { TodayHabit } from "../../TodayHabit";
import { StyledToday, TodayHabitsContainer, TodayHeaderContainer } from "./style";
import dayjs from 'dayjs';
import { PERCENT_MULTIPLIER, WEEK_DAYS_FULL } from "../../../utils/constants";

export const Today = () => {
  const { todayHabits } = useContext(TodayHabitsContext);

  const getPercentHabitsDone = () => {
    const quantityOfTodayHabits = todayHabits.length;
    const quantityOfTodayHabitsDone = todayHabits.filter(({ done }) => done).length;
    return Math.floor((quantityOfTodayHabitsDone / quantityOfTodayHabits) * PERCENT_MULTIPLIER);
  };

  const counterText = getPercentHabitsDone() > 0 ? `${getPercentHabitsDone()}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda';

  return (
    <StyledToday>
      <TodayHeaderContainer isAnyHabitDone={getPercentHabitsDone() > 0}>
        <h2 data-test='today' >{WEEK_DAYS_FULL[dayjs().day()]}, {dayjs().date()}/{dayjs().month() + 1}</h2>
        <p data-test='today-counter'>{counterText}</p>
      </TodayHeaderContainer>
      <TodayHabitsContainer>
        {todayHabits.map((todayHabit, idx) => <TodayHabit todayHabit={todayHabit} key={idx} />)}
      </TodayHabitsContainer>
    </StyledToday>
  );
};