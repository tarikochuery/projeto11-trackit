import { ProgressBarContainer, StyledFooter } from "./style";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodayHabitsContext } from "../../utils/Providers/TodayHabitsProvider";
import { PERCENT_MULTIPLIER } from "../../utils/constants";

export const Footer = () => {
  const { todayHabits } = useContext(TodayHabitsContext);

  const getPercentHabitsDone = () => {
    const quantityOfTodayHabits = todayHabits.length;
    const quantityOfTodayHabitsDone = todayHabits.filter(({ done }) => done).length;
    return (quantityOfTodayHabitsDone / quantityOfTodayHabits) * PERCENT_MULTIPLIER;
  };

  return (
    <StyledFooter data-test='menu'>
      <Link to='/habitos' data-test='habit-link'>
        Hábitos
      </Link>
      <Link data-test='today-link' to='/hoje'>
        <ProgressBarContainer>
          <CircularProgressbarWithChildren
            background={true}
            backgroundPadding={6}
            styles={{
              background: { fill: '#52B6FF', padding: '10px' },
              trail: { stroke: '#52B6FF' },
              path: { stroke: '#ffffff' },
            }}
            value={getPercentHabitsDone()}>
            <p>Hoje</p>
          </CircularProgressbarWithChildren>
        </ProgressBarContainer>
      </Link>
      <Link to='/historico'>
        Histórico
      </Link>
    </StyledFooter>
  );
};