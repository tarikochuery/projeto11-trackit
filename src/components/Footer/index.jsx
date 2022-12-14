import { ProgressBarContainer, StyledFooter } from "./style";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <Link to='/habitos'>
        Hábitos
      </Link>
      <ProgressBarContainer>
        <CircularProgressbarWithChildren
          background={true}
          styles={{
            background: { fill: '#52B6FF' },
            trail: { stroke: '#52B6FF' },
            path: { stroke: '#ffffff' },
          }}
          value={66}>
          Hoje
        </CircularProgressbarWithChildren>
      </ProgressBarContainer>
      <Link to='/habitos'>
        Histórico
      </Link>
    </StyledFooter>
  );
};