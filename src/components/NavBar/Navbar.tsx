import React, { useState } from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography,
} from '@mui/material';
import { IconButton } from '@material-ui/core';
import { AccountCircle, NotificationsNone } from '@mui/icons-material';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import EventModal from '../EventModal/EventModal';

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const { events } = useTypedSelector((state) => state.event);
  const [show, setShow] = useState<boolean>(false);

  const showNotifications = () => {
    setShow((state) => !state);
  };

  return (
    <AppBar>
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
                onClick={showNotifications}
                color="inherit"
              >
                <Badge
                  badgeContent={events.length}
                  color="error"
                >
                  <NotificationsNone />
                </Badge>
              </IconButton>
              <EventModal showNotifications={showNotifications} events={events} show={show} />
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
