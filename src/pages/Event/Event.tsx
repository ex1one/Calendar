import React, { useEffect, useState } from 'react';
import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@material-ui/core';
import EventCalendar from '@components/Calendar/EventCalendar';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import EventForm from '../../components/EventForm/EventForm';
import styles from './event.module.scss';
import selectors from '../../store/selectors/selectors';

const Event = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { fetchGuests, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(selectors.event);
  const { user } = useTypedSelector(selectors.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const handleClick = () => {
    setOpen((state) => !state);
  };

  return (
    <Grid>
      <EventCalendar events={events} />
      <Button onClick={handleClick}>Добавить событие</Button>
      <Modal
        open={open}
        onClose={handleClick}
      >
        <Box className={styles.Box}>
          <Typography variant="h6" component="h2">
            Добавить событие
            <CloseIcon
              onClick={handleClick}
              sx={{
                float: 'right',
                cursor: 'pointer',
                width: '20px',
              }}
            />
          </Typography>
          <Box sx={{ mt: 2 }}>
            <EventForm close={setOpen} guests={guests} />
          </Box>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Event;
