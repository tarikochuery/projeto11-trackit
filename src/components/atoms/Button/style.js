import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  max-width: ${props => props.size};
  color: #ffffff;
  background-color: #52B6FF;
  border-radius: 0.5rem;
  border: none;
  padding: 1.1rem;
  font-size: 2.1rem;
  opacity: ${props => props.isLoading ? 0.7 : 1};
  cursor: pointer;

  &:disabled{
    cursor: not-allowed;
  }
`;