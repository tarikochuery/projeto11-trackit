import styled from "styled-components";

export const StyledHabitForm = styled.form`
  background: #FFFFFF;
  border-radius: 5px;
  width: 100%;
  max-width: 34rem;
  padding: 1.8rem;

  display: flex;
  flex-direction: column;
`;

export const WeekDaysListContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.8rem;
  margin-bottom: 2.9rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
  align-self: flex-end;

  & > p {
    color: #52B6FF;
    cursor: pointer;
    font-size: 1.6rem;
  }
`;