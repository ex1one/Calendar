import React from 'react';
import { Container } from '@mui/material';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => (
  <Container sx={{
    display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center',
  }}
  >
    <LoginForm />
  </Container>
);

export default Login;
