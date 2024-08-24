import React from 'react';
import { TextField } from '@mui/material';

const Step1 = ({ data, onChange, errors }) => {
  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        type="email"
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Phone"
        name="phone"
        value={data.phone}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </div>
  );
};

export default Step1;
