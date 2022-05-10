import React, { FC, SetStateAction, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  DesktopDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { IEvent } from '../../../models/IEvent';
import formatDate from '../../../utils/Date/date';

interface IDateProps {
  setUserEvent: React.Dispatch<SetStateAction<IEvent>>;
}

const EventDatePicker: FC <IDateProps> = ({ setUserEvent }) => {
  const [dataPicker, setDataPicker] = useState<Date | null>(new Date());

  const selectDate = (date: Date | null) => {
    setDataPicker(date);

    if (date) {
      setUserEvent((state) => ({ ...state, date: formatDate(date) }));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Дата события"
        value={dataPicker}
        minDate={new Date('2017-01-01')}
        onChange={selectDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default EventDatePicker;
