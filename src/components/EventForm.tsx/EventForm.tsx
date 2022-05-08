import React, { FC, useState } from 'react';
import {
  Box, Button, FormControl, Stack, TextField,
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Selected from './Selected';

const EventForm: FC = () => {
  const [value, setValue] = useState('');
  const [dataPicker, setDataPicker] = useState<Date | null>(new Date());

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
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
      <Selected />
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
