import { StyledButton } from "./style";

export const Button = ({ size, type, children, isLoading = false }) => {
  return (
    <StyledButton disabled={isLoading} size={size} isLoading={isLoading} type={type}>
      {isLoading ? 'Carregando...' : children}
    </StyledButton>
  );
};