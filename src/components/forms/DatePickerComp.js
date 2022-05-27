import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({label,value,setValue,error,helperText}) {
  if(value===''){
    value = null
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          let val_obj = {target:{
            value:newValue
          }}
          setValue(val_obj);
        }}
        renderInput={(params) => <TextField {...params}  error={error} helperText={helperText} />}
      />
    </LocalizationProvider>
  );
}
