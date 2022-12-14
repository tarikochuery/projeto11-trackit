import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 7rem;
  padding: 1rem 1.8rem;
  background: #126BA5;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  font-family: 'Playball', sans-serif;
  font-size: 3rem;
  color: #ffffff;
  max-width: 37.5rem;
  margin: 0 auto;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.1rem;
  height: 5.1rem;
  border-radius: 50%;
  background: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
`;