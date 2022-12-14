import styled from "styled-components";

export const StyledHabits = styled.div`
  min-height: calc(100vh - 14rem);
  background-color: #e5e5e5;
  margin-top: 7rem;
  padding: 2.2rem 1.8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > p {
    color: #666666;
    font-size: 1.8rem;
  }
`;

export const HabitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & h2 {
    font-size: 2.3rem;
    color: #126BA5;
  }
`;