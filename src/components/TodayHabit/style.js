import styled from "styled-components";

export const StyledTodayHabit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 34rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

export const TodayHabitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    margin-bottom: 0.7rem;
    font-size: 2rem;
    color: #666666;
  }

  & > p {
    font-size: 1.3rem;
    color: #666666;
  }

  & > p > span {
    color: ${props => props.done ? '#8FC549' : '#666666'};
  }
`;