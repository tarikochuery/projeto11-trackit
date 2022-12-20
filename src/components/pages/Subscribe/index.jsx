import { LogoContainer, StyledHome, StyledLink } from "../Home/style";
import logo from '../../../assets/logo.svg';
import { StyledForm } from "../../../styles/StyledForm";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { BUTTON_L } from "../../../styles/buttonSizes";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (subscribeInfo) => {
    try {
      setIsLoading(true);
      const res = await axios.post(`${BASE_URL}/auth/sign-up`, subscribeInfo);
      console.log(res.data);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }

    setIsLoading(false);
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
          isLoading={isLoading}
          required={true}
          value={subscribeInfo.email}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, email: e.target.value })}
          dataIdentifier="email-input"
        />
        <Input
          type="password"
          name='senha'
          isLoading={isLoading}
          required={true}
          value={subscribeInfo.password}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, password: e.target.value })}
          dataIdentifier="password-input"
        />
        <Input
          type="text"
          name='nome'
          required={true}
          isLoading={isLoading}
          value={subscribeInfo.name}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, name: e.target.value })}
          dataIdentifier="user-name-input"
        />
        <Input
          type="url"
          name='foto'
          required={true}
          isLoading={isLoading}
          value={subscribeInfo.image}
          onChange={(e) => setSubscribeInfo({ ...subscribeInfo, image: e.target.value })}
          dataIdentifier="user-image-input"
        />
        <Button size={BUTTON_L} type='submit' dataIdentifier='signup-btn' isLoading={isLoading} >
          Cadastrar
        </Button>
      </StyledForm>
      <Link data-identifier="login-link" to='/'>
        <StyledLink>Já tem uma conta? Faça Login!</StyledLink>
      </Link>
    </StyledHome>
  );
};