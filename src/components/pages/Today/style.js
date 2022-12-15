import styled from "styled-components";

export const StyledToday = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  margin-top: 7rem;
  padding: 2.8rem 1.8rem;
  min-height: calc(100vh - 14rem);
  background-color: #e5e5e5;
  width: 100%;
`;

export const TodayHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    color: #126BA5;
    font-size: 2.3rem;
  }

  & > p {
    color: #BABABA;
    font-size: 1.8rem;
  }
`;

export const TodayHabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;