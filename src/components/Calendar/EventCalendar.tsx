import {
  LocalizationProvider, PickersDay, StaticDatePicker,
} from '@mui/x-date-pickers';
import React, { FC, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Badge, Grid, TextField,
} from '@mui/material';
import { isWeekend } from 'date-fns';
import { IEvent } from '../../models/IEvent';
import formatDate from '../../utilities/formatedDate';

interface CalendarProps {
  events: IEvent[]
}

const EventCalendar: FC <CalendarProps> = ({ events }) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Grid>
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
          renderDay={(day, _value, DayComponentProps) => {
            const formattedDate = formatDate(day);
            const currentDayEvent = events.filter((ev) => ev.date === formattedDate);
            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={currentDayEvent.map((ev) => <p key={ev.description}>{ev.description}</p>)}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </Grid>
  );
};

export default EventCalendar;
