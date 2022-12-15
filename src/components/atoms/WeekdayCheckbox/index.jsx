import { StyledCheckbox } from "./style";

export const WeekdayCheckbox = ({ weekday, isSelected, onClick }) => {
  return (
    <StyledCheckbox isSelected={isSelected} onClick={onClick} >
      {weekday}
    </StyledCheckbox>
  );
};