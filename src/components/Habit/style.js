import styled from "styled-components";

export const StyledHabit = styled.div`
  width: 100%;
  min-width: 34rem;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 1.4rem;

  display: flex;
  justify-content: space-between;
`;

export const HabitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > p {
    font-size: 2rem;
    color: #666666;
  }
`;