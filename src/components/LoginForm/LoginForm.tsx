import React, { useEffect, useState } from 'react';
import {
  Avatar, Button, Grid, Paper, TextField,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { CircularProgress } from '@material-ui/core';
import useTypedSelector from '../../hooks/useTypedSelector';
import styles from './loginForm.module.scss';
import useActions from '../../hooks/useActions';
import selectors from '../../store/selectors/selectors';

const LoginForm = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string | number>('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const { error, isLoading } = useTypedSelector(selectors.auth);
  const { login } = useActions();

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (event.target.name) {
      case 'username':
        return setUserNameDirty(true);
      case 'password':
        return setPasswordDirty(true);
      default:
        return false;
    }
  };

  useEffect(() => {
    if ((userName && password) !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [userName, password]);

  const submit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <form onSubmit={submit}>
      <Grid>
        <Paper
          sx={{
            padding: 5, height: '100%', width: 450, margin: '20px auto',
          }}
          elevation={5}
        >
          <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ backgroundColor: '#1bbd7e' }}><LockOutlined /></Avatar>
            <h2>Авторизация</h2>
          </Grid>
          <TextField
            name="username"
            label="Имя пользователя"
            placeholder="Введите имя пользователя"
            onBlur={(event) => blurHandler(event)}
            fullWidth
            onChange={(event) => setUserName(event.target.value)}
            error={userNameDirty && userName === ''}
            helperText={userNameDirty && userName === '' ? 'Имя пользователя не может быть пустым' : ''}
          />
          <TextField
            sx={{ margin: '8px 0' }}
            label="Пароль"
            placeholder="Введите пароль"
            name="password"
            type="password"
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            error={passwordDirty && password === ''}
            helperText={passwordDirty && password === '' ? 'Пароль не должен быть пустым' : ''}
          />
          {isLoading ? <CircularProgress /> : <div className={styles.error}>{error}</div>}
          <Button
            sx={{ height: '40px', background: 'primary' }}
            disabled={!formValid}
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
          >
            Войти
          </Button>
        </Paper>
      </Grid>
    </form>
  );
};

export default LoginForm;
