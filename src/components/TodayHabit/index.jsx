import { useContext, useState } from "react";
import { Checkbox } from "react-ionicons";
import { TodayHabitsContext } from "../../utils/Providers/TodayHabitsProvider";
import { StyledCurrentSequence, StyledHighestSequence, StyledTodayHabit, TodayHabitInfoContainer } from "./style";

export const TodayHabit = ({ todayHabit: { id, name, done, currentSequence, highestSequence } }) => {
  const { checkHabit, uncheckHabit } = useContext(TodayHabitsContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async () => {
    if (isLoading) return;

    setIsLoading(true);

    if (done) {
      await uncheckHabit(id);
      setIsLoading(false);
    } else {
      await checkHabit(id);
      setIsLoading(false);
    }
  };

  return (
    <StyledTodayHabit>
      <TodayHabitInfoContainer done={done}>
        <h3 data-test='today-habit-name' >{name}</h3>
        <p data-test='today-habit-sequence' >Sequência atual: <StyledCurrentSequence done={done}>{currentSequence} dias</StyledCurrentSequence></p>
        <p data-test='today-habit-record' >Seu recorde: <StyledHighestSequence isHighestSequence={currentSequence > 0 && currentSequence === highestSequence}>{highestSequence} dias</StyledHighestSequence> </p>
      </TodayHabitInfoContainer>
      <Checkbox
        style={{ cursor: 'pointer' }}
        onClick={handleCheckboxClick}
        width={'6.9rem'}
        height={'6.9rem'}
        color={done ? '#8FC549' : '#EBEBEB'}
        data-test='today-habit-check-btn'
      />
    </StyledTodayHabit>
  );
};