import React from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography,
} from '@mui/material';
import { IconButton } from '@material-ui/core';
import { AccountCircle, NotificationsNone } from '@mui/icons-material';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

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
              <IconButton
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <NotificationsNone />
                </Badge>
              </IconButton>
              <IconButton
                edge="start"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                {user.username}
                <AccountCircle />
              </IconButton>
              <Button
                onClick={logout}
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
