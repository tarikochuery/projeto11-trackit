import { TrashOutline } from "react-ionicons";
import { HabitInfoContainer, StyledHabit } from "./style";
import { WeekdayCheckbox } from '../atoms/WeekdayCheckbox';
import { BASE_URL, WEEK_DAYS } from '../../utils/constants';
import { WeekDaysListContainer } from "../HabitForm/style";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../utils/Providers/UserProvider";
import { TodayHabitsContext } from "../../utils/Providers/TodayHabitsProvider";

export const Habit = ({ habitInfo: { name, days, id }, setHasHabitsChanged }) => {
  const { currentUser: { token } } = useContext(UserContext);
  const { setHasTodayHabitsChanged } = useContext(TodayHabitsContext);
  const deleteHabit = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const res = await axios.delete(`${BASE_URL}/habits/${id}`, config);
    console.log(res);
    setHasHabitsChanged(prev => !prev);
    setHasTodayHabitsChanged(prev => !prev);
  };

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('Deseja realmente apagar este hábito?');
    isConfirmed && deleteHabit();
  };

  return (
    <StyledHabit data-test='habit-container'>
      <HabitInfoContainer>
        <p data-test='habit-name' >{name}</p>
        <WeekDaysListContainer>
          {WEEK_DAYS.map((day, idx) => <WeekdayCheckbox dataTest={days.includes(idx) ? 'habit-day' : ''} key={idx} isSelected={days.includes(idx)} weekday={day} />)}
        </WeekDaysListContainer>
      </HabitInfoContainer>
      <TrashOutline data-test='habit-delete-btn' onClick={handleDeleteClick} width={'1.3rem'} height={'1.5rem'} />
    </StyledHabit>
  );
};