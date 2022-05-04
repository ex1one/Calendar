import React from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { RouteNames } from '../routes';
import useTypedSelector from '../hooks/useTypedSelector';

const Navbar = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuth
          ? (
            <>
              <Typography
                sx={{ flexGrow: 1 }}
              >
                Ваш аккаунт
              </Typography>
              <div style={{ color: 'inherit' }}>
                Имя пользователя
              </div>
              <Button
                variant="outlined"
                color="inherit"
              >
                Выйти
              </Button>
            </>
          )
          : (
            <>
              <Typography
                sx={{ flexGrow: 1 }}
              >
                Регистрация
              </Typography>
              <Button
                href={RouteNames.LOGIN}
                variant="outlined"
                color="inherit"
              >
                Войти
              </Button>
            </>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
