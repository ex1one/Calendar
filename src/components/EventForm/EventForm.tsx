import React, {
  FC, SetStateAction, useEffect, useState,
} from 'react';
import {
  Button, Stack, TextField,
} from '@mui/material';
import MySelect from '../Select/MySelect';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import EventDatePicker from '../DatePicker/EventDatePicker';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import selectors from '../../store/selectors/selectors';

interface EventFormProps {
  guests: IUser[],
  close: React.Dispatch<SetStateAction<boolean>>
}

const EventForm: FC <EventFormProps> = ({ guests, close }) => {
  const { user } = useTypedSelector(selectors.auth);
  const { createEvent } = useActions();
  const [value, setValue] = useState('');
  const [userEvent, setUserEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  });

  useEffect(() => {
    setUserEvent({ ...userEvent, author: user.username });
  }, []);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createEvent(userEvent);
    close((state) => !state);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
    setUserEvent({ ...userEvent, description: event.target.value });
  };

  return (
    <form onSubmit={submit}>
      <TextField
        name="event"
        label="Описание события"
        placeholder="Событие"
        fullWidth
        onChange={changeHandler}
        sx={{ marginBottom: 1 }}
      />
      <EventDatePicker setUserEvent={setUserEvent} />
      <MySelect userEvent={userEvent} setUserEvent={setUserEvent} guests={guests} />
      <Stack spacing={2} sx={{ marginTop: 1 }}>
        <Button
          sx={{ height: 30 }}
          color="primary"
          variant="contained"
          type="submit"
          disabled={!value}
        >
          Добавить
        </Button>
      </Stack>
    </form>
  );
};

export default EventForm;
