import { StyledInput, StyledInputContainer } from "./style";

export const Input = ({ name, value, onChange, isLoading = false, type = 'text' }) => {
  return (
    <StyledInputContainer isLoading={isLoading}>
      <label>
        <StyledInput type={type} disabled={isLoading} placeholder={name} id={name} value={value} onChange={onChange} />
      </label>
    </StyledInputContainer>
  );
};
