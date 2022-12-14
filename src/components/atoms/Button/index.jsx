import { ThreeDots } from "react-loader-spinner";
import { StyledButton } from "./style";

export const Button = ({ size, type, children, isLoading = false }) => {
  return (
    <StyledButton disabled={isLoading} size={size} isLoading={isLoading} type={type}>
      {isLoading ? <ThreeDots width={51} height={13} color='#ffffff' /> : children}
    </StyledButton>
  );
};