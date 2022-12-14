import { ButtonsContainer, StyledHabitForm, WeekDaysListContainer } from "./style";
import { Input } from '../atoms/Input';
import { BASE_URL, WEEK_DAYS } from '../../utils/constants';
import { Checkbox } from "../atoms/Checkbox";
import { Button } from "../atoms/Button";
import { BUTTON_M } from "../../styles/buttonSizes";
import { useContext, useState } from "react";
import { UserContext } from "../../utils/Providers/UserProvider";
import axios from "axios";

export const HabitForm = ({ closeForm }) => {
  const { currentUser: { token } } = useContext(UserContext);
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
      closeForm();

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
          <Checkbox
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