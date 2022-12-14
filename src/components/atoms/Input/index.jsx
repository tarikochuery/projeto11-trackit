import { StyledInput, StyledInputContainer } from "./style";

export const Input = ({ name, value, onChange, isLoading = false, type = 'text', required = false, dataIdentifier }) => {
  return (
    <StyledInputContainer isLoading={isLoading}>
      <label>
        <StyledInput
          data-identifier={dataIdentifier}
          required={required}
          type={type}
          disabled={isLoading}
          placeholder={name}
          id={name}
          value={value}
          onChange={onChange} />
      </label>
    </StyledInputContainer>
  );
};
