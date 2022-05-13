import React, {
  FC, SetStateAction, useEffect, useState,
} from 'react';
import {
  Button, Stack, TextField,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Selected from './Select/Selected';
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import EventDatePicker from './DatePicker/EventDatePicker';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

interface EventFormProps {
  guests: IUser[],
  close: React.Dispatch<SetStateAction<boolean>>
}

const EventForm: FC <EventFormProps> = ({ guests, close }) => {
  const { user } = useTypedSelector((state) => state.auth);
  const { createEvent } = useActions();
  const [value, setValue] = useState('');
  const [userEvent, setUserEvent] = useState({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  useEffect(() => {
    setUserEvent({ ...userEvent, author: user.username });
  }, []);

  const addNewEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createEvent(userEvent);
    close((state) => !state);
  };

  const [dataPicker, setDataPicker] = useState<Date | null>(new Date());

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <Selected userEvent={userEvent} setUserEvent={setUserEvent} guests={guests} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Дата события"
          value={dataPicker}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setDataPicker(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
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
