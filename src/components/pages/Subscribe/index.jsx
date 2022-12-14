import { LogoContainer, StyledHome, StyledLink } from "../Home/style";
import logo from '../../../assets/logo.svg';
import { StyledForm } from "../../../styles/StyledForm";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { BUTTON_L } from "../../../styles/buttonSizes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

export const Subscribe = () => {
  const [subscribeInfo, setSubscribeInfo] = useState({
    email: '',
    name: '',
    image: '',
    password: ''
  });

  const subscribe = async (subscribeInfo) => {
    console.log(subscribeInfo);
    const res = await axios.post(`${BASE_URL}/auth/sign-up`, subscribeInfo);
    console.log(res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe(subscribeInfo);
  };

  return (
    <StyledHome>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <StyledForm onSubmit={handleSubmit} >
        <Input
          type="email"
          name='email'
          value={subscribeInfo.email}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, email: e.target.value })}
        />
        <Input
          type="password"
          name='senha'
          value={subscribeInfo.password}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, password: e.target.value })}
        />
        <Input
          type="text"
          name='nome'
          value={subscribeInfo.name}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, name: e.target.value })}
        />
        <Input
          type="url"
          name='foto'
          value={subscribeInfo.image}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, image: e.target.value })}
        />
        <Button size={BUTTON_L} type='submit'>
          Cadastrar
        </Button>
      </StyledForm>
      <Link to='/'>
        <StyledLink>Já tem uma conta? Faça Login!</StyledLink>
      </Link>
    </StyledHome>
  );
};