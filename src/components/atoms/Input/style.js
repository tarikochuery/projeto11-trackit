import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 30.3rem;
  padding: 1.1rem;
  border: 0.1rem solid #D5D5D5;
  border-radius: 0.5rem;
  ${props => props.isLoading && 'background-color: #F2F2F2;'}
  
`;

export const StyledInput = styled.input`
  font-size: 2rem;
  width: 100%;
  outline: none;
  border: none;
  
  &::placeholder{
    color: #DBDBDB;
  }

  &:disabled{
    background-color: #F2F2F2;
  }
`;