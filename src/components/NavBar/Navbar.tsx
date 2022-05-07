import React from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import { logout } from '../../store/reducers/auth/action-creators';

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

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
              <div style={{ color: 'inherit', fontSize: '20px', marginRight: 20 }}>
                {user.username}
              </div>
              <Button
                onClick={() => dispatch(logout() as unknown as AnyAction)}
                variant="outlined"
                color="inherit"
              >
                Выйти
              </Button>
            </>
          )
          : (
            <Typography
              sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
            >
              Авторизация
            </Typography>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
