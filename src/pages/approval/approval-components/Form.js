import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, MenuItem,Button, Card, CardContent} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { borderColor } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { LocalizationProvider } from '@mui/lab';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const options = [
  { label: 'One', id: 1 },
  { label: 'Two', id: 2 },
];
const Form = () => {
  const [value, setValue] = React.useState(null);
  const [value1,setValue1]=React.useState(null);

  const onSubmit =(e)=>{
    e.preventDefault();
    alert('Submitted')
  }
  return (
    <>
      <Card >
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={5} direction='row' justify="flex-end" alignItems="center">
            <Grid xs={12} sm={6} item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="CR raised From Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%", mt: 1 }}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={6}  item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=" CR raised To Date"
                  inputFormat="MM/DD/YYYY"
                  value={value1}
                  onChange={(newValue1) => {
                    setValue1(newValue1);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%", mt: 1 }}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={6} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Section" />
                )}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Section" />
                )}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Section" />
                )}
              />
            </Grid>
            <Grid xs={4} sm={6} item>
              <Button variant='contained' onClick={onSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Form
