import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;

  min-height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 18rem;
  width: 100%;

  & img {
    width: 100%;
  }
`;

export const StyledLink = styled.p`
  font-size: 1.4rem;
  text-decoration: underline;
  color: #52B6FF;
`;