import React, { useState } from 'react';
import { Box, Typography,Stack, Grid, TextField, MenuItem,Button, Card, CardContent} from "@mui/material";
import Pagination from '@mui/material/Pagination';

import { borderColor } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { LocalizationProvider } from '@mui/lab';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from '@mui/material/Container';
import Title from './Title';
import { Link } from 'react-router-dom';
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
      
      <Card>
        <CardContent>
          <Title />
          <Grid container columnSpacing={1} direction='row' justify="flex-end" alignItems="center">
            <Grid xs={12} sm={4} item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="CR raised From Date"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%" }}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={4}  item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=" CR raised To Date"
                  inputFormat="DD/MM/YYYY"
                  value={value1}
                  onChange={(newValue1) => {
                    setValue1(newValue1);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%"}}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Application Type" />
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
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Parent Organization" />
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
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Department" />
                )}
              />
            </Grid>
          </Grid>
            {/* <Grid xs={12} sm={3}></Grid> */}
            {/* <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // flexDirection: 'column'
            }} xs={12} sm={12} mb={6} fullWidth item>
              <Button variant='contained' onClick={onSubmit} >Submit</Button>
            </Grid> */}
        </CardContent>
      </Card>
      <Stack direction="row"
            justifyContent="right"
            alignItems="center"
            spacing={1}>
            <Link to="/dataTable">
              <Button variant='contained' size='large'>
                <SearchOutlinedIcon color='text.primary'/>
             </Button>
            </Link>
          </Stack>
    </>
  )
}

export default Form
