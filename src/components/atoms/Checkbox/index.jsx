import { StyledCheckbox } from "./style";

export const Checkbox = ({ weekday, isSelected, onClick }) => {
  return (
    <StyledCheckbox isSelected={isSelected} onClick={onClick} >
      {weekday}
    </StyledCheckbox>
  );
};