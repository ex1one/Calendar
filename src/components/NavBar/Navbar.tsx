<<<<<<< HEAD
import React, { useState } from 'react';
import {
  AppBar, Badge, Box, Button, Modal, Toolbar, Typography,
} from '@mui/material';
import { IconButton } from '@material-ui/core';
import { AccountCircle, NotificationsNone } from '@mui/icons-material';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import EventModal from './EventModal';

const Navbar = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const { events } = useTypedSelector((state) => state.event);
  const [show, setShow] = useState<boolean>(false);

  const showNotifications = () => {
    setShow((state) => !state);
  };
=======
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
>>>>>>> 9a3e35e (Creating authorization)

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
<<<<<<< HEAD
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
=======
              <div style={{ color: 'inherit', fontSize: '20px', marginRight: 20 }}>
                {user.username}
              </div>
              <Button
                onClick={() => dispatch(logout() as unknown as AnyAction)}
>>>>>>> 9a3e35e (Creating authorization)
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
