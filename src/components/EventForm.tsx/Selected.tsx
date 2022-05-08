import React, { useState } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';

const Selected = () => {
  const [user, setUser] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Для кого</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={user}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="User">User</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="Ilya">Ilya</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selected;
