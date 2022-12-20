import styled from "styled-components";

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  background-color: transparent;
  margin-top: 7rem;
  min-height: calc(100vh - 14rem);
  padding: 2.8rem 1.5rem 0;

  & > h2 {
    font-size: 2.3rem;
    color: #126BA5;
  }

  & > p {
    color: #666666;
    font-size: 1.8rem;
  }
`;