import styled from "styled-components";

export const StyledCheckbox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  border: 0.1rem solid ${props => props.isSelected ? '#cfcfcf' : '#d5d5d5'};
  background: ${props => props.isSelected ? '#CFCFCF' : '#ffffff'};
  color: ${props => props.isSelected ? '#ffffff' : '#DBDBDB'};

  display: flex;
  align-items: center;
  justify-content: center;
`;