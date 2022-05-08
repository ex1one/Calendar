import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import React, { FC, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import { isWeekend } from 'date-fns';

interface CalendarProps {
  event: []
}

const EventCalendar: FC <CalendarProps> = ({ event }) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default EventCalendar;
