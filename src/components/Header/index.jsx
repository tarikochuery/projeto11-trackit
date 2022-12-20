import { useContext } from "react";
import { UserContext } from "../../utils/Providers/UserProvider";
import { AvatarContainer, StyledHeader } from "./style";

export const Header = () => {
  const { currentUser: { image, name } } = useContext(UserContext);
  return (
    <StyledHeader data-test='header'>
      <h1>TrackIt</h1>
      <AvatarContainer image={image}>
      </AvatarContainer>
    </StyledHeader>
  );
};