import { LogoContainer, StyledHome, StyledLink } from "./style";
import logo from '../../../assets/logo.svg';
import { StyledForm } from "../../../styles/StyledForm";
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { BUTTON_L } from '../../../styles/buttonSizes';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utils/Providers/UserProvider";

export const Home = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentUser.email) {
      navigate('/hoje');
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isLogged = await login(loginInfo);
    setIsLoading(false);

    isLogged && navigate('/hoje');
  };

  return (
    <StyledHome>
      <LogoContainer>
        <img src={logo} alt="logo TrackIt" />
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name='email'
          type='email'
          value={loginInfo.email}
          required={true}
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
          dataIdentifier='input-email'
          isLoading={isLoading}
        />
        <Input
          name='senha'
          type='password'
          value={loginInfo.password}
          required={true}
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
          dataIdentifier="input-password"
          isLoading={isLoading}
        />
        <Button size={BUTTON_L} type='submit' dataIdentifier="login-btn" isLoading={isLoading} >
          Entrar
        </Button>
        <Link to='/cadastro' data-identifier="sign-up-action">
          <StyledLink>Não tem conta? Cadastre-se!</StyledLink>
        </Link>
      </StyledForm>
    </StyledHome>
  );
};