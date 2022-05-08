import React, { useEffect } from 'react';
import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EventCalendar from '../../components/Calendar/EventCalendar';
import EventForm from '../../components/EventForm.tsx/EventForm';
import useActions from '../../hooks/useActions';

const Event = () => {
  const [open, setOpen] = React.useState(false);
  const { fetchGuests } = useActions();

  useEffect(() => {
    fetchGuests();
  }, []);

  const handleClick = () => {
    setOpen((state) => !state);
  };
  return (
    <Box>
      <EventCalendar event={[]} />
      <Button onClick={handleClick}>Добавить событтие</Button>
      <Modal
        open={open}
        onClose={handleClick}
      >
        <Box sx={{
          position: 'absolute' as const,
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
            <EventForm />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Event;
