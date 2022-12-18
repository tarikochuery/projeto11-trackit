import { ButtonsContainer, StyledHabitForm, WeekDaysListContainer } from "./style";
import { Input } from '../atoms/Input';
import { BASE_URL, WEEK_DAYS } from '../../utils/constants';
import { WeekdayCheckbox } from "../atoms/WeekdayCheckbox";
import { Button } from "../atoms/Button";
import { BUTTON_M } from "../../styles/buttonSizes";
import { useContext, useState } from "react";
import { UserContext } from "../../utils/Providers/UserProvider";
import axios from "axios";
import { TodayHabitsContext } from "../../utils/Providers/TodayHabitsProvider";
import dayjs from "dayjs";

export const HabitForm = ({ closeForm, setHasHabitsChanged }) => {
  const { currentUser: { token } } = useContext(UserContext);
  const { setHasTodayHabitsChanged } = useContext(TodayHabitsContext);
  const [habitInfo, setHabitInfo] = useState({ name: '', days: [] });

  const handleClickCheckbox = (weekDay) => {
    const isSelected = habitInfo.days.includes(weekDay);
    if (isSelected) {
      setHabitInfo({ ...habitInfo, days: habitInfo.days.filter(day => day !== weekDay) });
    } else {
      setHabitInfo({ ...habitInfo, days: [...habitInfo.days, weekDay] });
    }
  };

  const createHabit = async (habitInfo) => {
    if (habitInfo.days.length === 0) {
      alert('Preencha pelo menos um dia da semana');
      return;
    }
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const res = await axios.post(`${BASE_URL}/habits`, habitInfo, config);
      let isNewTodayHabit = false;
      closeForm();
      setHasHabitsChanged(prev => !prev);
      habitInfo.days.forEach(day => {
        if (day === dayjs().day()) {
          isNewTodayHabit = true;
          return;
        }
        return;
      });
      if (isNewTodayHabit) {
        console.log('novo hábito de hoje');
        setHasTodayHabitsChanged(prev => !prev);
      }


    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createHabit(habitInfo);
  };

  return (
    <StyledHabitForm onSubmit={handleSubmit}>
      <Input
        name={'nome do hábito'}
        required={true}
        value={habitInfo.name}
        onChange={(e) => setHabitInfo({ ...habitInfo, name: e.target.value })}
      />
      <WeekDaysListContainer>
        {WEEK_DAYS.map((weekDay, idx) =>
          <WeekdayCheckbox
            weekday={weekDay}
            isSelected={habitInfo.days.includes(idx)}
            onClick={() => handleClickCheckbox(idx)}
            key={idx}
          />)}
      </WeekDaysListContainer>
      <ButtonsContainer>
        <p onClick={closeForm} >Cancelar</p>
        <Button type='submit' size={BUTTON_M}>Salvar</Button>
      </ButtonsContainer>
    </StyledHabitForm>
  );
};