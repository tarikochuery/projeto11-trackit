import { StyledCheckbox } from "./style";

export const WeekdayCheckbox = ({ weekday, isSelected, onClick, dataTest }) => {
  return (
    <StyledCheckbox isSelected={isSelected} onClick={onClick} data-test={dataTest}>
      {weekday}
    </StyledCheckbox>
  );
};