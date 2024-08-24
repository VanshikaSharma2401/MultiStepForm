import React from 'react';
import { TextField } from '@mui/material';

const Step2 = ({ data, onChange, errors }) => {
  return (
    <div>
      <TextField
        label="Address Line 1"
        name="addressLine1"
        value={data.addressLine1}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.addressLine1}
        helperText={errors.addressLine1}
      />
      <TextField
        label="Address Line 2"
        name="addressLine2"
        value={data.addressLine2}
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={data.city}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        label="State"
        name="state"
        value={data.state}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField
        label="Zip Code"
        name="zipCode"
        value={data.zipCode}
        onChange={onChange}
        fullWidth
        margin="normal"
        required
        error={!!errors.zipCode}
        helperText={errors.zipCode}
      />
    </div>
  );
};

export default Step2;
