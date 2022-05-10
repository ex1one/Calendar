import React, { useEffect, useState } from 'react';
import {
  Box, Button, Grid, Modal, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EventCalendar from '../../components/Calendar/EventCalendar';
import EventForm from '../../components/EventForm.tsx/EventForm';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Event = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { fetchGuests, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

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
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          backgroundColor: '#eee',
          border: '1px solid #000',
          boxShadow: 24,
          p: 4,
        }}
        >
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
