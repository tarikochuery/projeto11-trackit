import { LogoContainer, StyledHome, StyledLink } from "./style";
import logo from '../../../assets/logo.svg';
import { StyledForm } from "../../../styles/StyledForm";
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { BUTTON_L } from '../../../styles/buttonSizes';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export const Home = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const login = async (loginInfo) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, loginInfo);
    console.log(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginInfo);
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
          onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
        />
        <Input
          name='senha'
          type='password'
          value={loginInfo.password}
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
        />
        <Button size={BUTTON_L} type='submit' >
          Entrar
        </Button>
        <Link to='/cadastro'>
          <StyledLink>Não tem conta? Cadastre-se!</StyledLink>
        </Link>
      </StyledForm>
    </StyledHome>
  );
};