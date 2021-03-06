import React, { FC } from 'react';
import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { IEvent } from '../../models/IEvent';
import styles from './eventModal.module.scss';
import useActions from '../../hooks/useActions';

interface IModalProps {
  events: IEvent[];
  showNotifications: () => void;
  show: boolean;
}

const EventModal: FC <IModalProps> = ({ show, events, showNotifications }) => {
  const { removeEvent } = useActions();

  return (
    <Modal
      open={show}
      onClose={showNotifications}
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
          События
          <CloseIcon
            onClick={showNotifications}
            sx={{
              float: 'right',
              cursor: 'pointer',
              width: '20px',
            }}
          />
        </Typography>
        <Box sx={{ mt: 2 }}>
          {events.length ? (
            <>
              {events.map((ev) => (
                <div
                  className={styles.event}
                  key={ev.description}
                >
                  <p>
                    Дата события:
                    {ev.date}
                  </p>
                  <p>
                    Описание события:
                    {ev.description}
                  </p>
                  <Button
                    onClick={() => removeEvent(ev)}
                    variant="text"
                    endIcon={<DeleteIcon />}
                  >
                    Удалить
                  </Button>
                </div>
              ))}
            </>
          )
            : (<h3>У вас нет новых событий</h3>)}
        </Box>
      </Box>
    </Modal>
  );
};

export default EventModal;
