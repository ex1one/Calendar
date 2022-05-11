import React, { FC, SetStateAction } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

interface SelectProps {
  guests: IUser[],
  userEvent: IEvent;
  setUserEvent: React.Dispatch<SetStateAction<IEvent>>
}

const Selected: FC <SelectProps> = ({ guests, userEvent, setUserEvent }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setUserEvent((state) => ({ ...state, guest: event.target.value }));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="demo-select-small"
      >
        Для кого
      </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={userEvent.guest}
        label="Age"
        onChange={handleChange}
      >
        {guests.map((guest) => (
          <MenuItem key={guest.username} value={guest.username}>{guest.username}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selected;
