import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  

const CMSReport = () => {
    const [value, setValue] = React.useState(null);
    const [value1,setValue1]=React.useState(null);
    const clearForm=()=>{
      setValue("");
    };
    
  return (
    <>
      <Card sx={{ mt: 2, ml: 2, backgroundColor: '#F5F5F5' }} spacing={4}>
        <CardContent>
          <Typography sx={{ fontSize: 22,fontWeight:'bold' }} color="#414fe1" gutterBottom>
            CMS Section Wise Report
          </Typography>
          <Grid
            container
            direction="row"
            rowSpacing={1}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
                  <TextField  {...params} label="Application Type" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
                  <TextField {...params} label="Parent Organization" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
                  <TextField {...params} label="Department" />
                )}
              />
               
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
                  <TextField {...params} label="WorkFlow Category"/>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
           
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="crid"
                label="CR Id"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={4}>
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
                  <TextField {...params} label="State" />
                )}
              />
            </Grid>
            
            
          </Grid>
          <Stack direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>
          <Button sx={{ minWidth: 100, ml: 1,backgroundColor:'#414fe1',":hover":{backgroundColor:'#414fe1',color:'white',fontWeight:'bold'}}} variant="contained">
          <Link href="/#/page2" sx={{textDecorationColor:'none',color:'white',fontWeight:'bold'}}> Generate Report</Link>
          </Button>
          <Button type="reset" onClick={clearForm} sx={{ minWidth: 100, ml: 1,color:'#414fe1',border:'1px solid #414fe1',fontWeight:'bold'}} variant="outlined">
            Reset
          </Button>
          </Stack>
        </CardContent>
       
           
      
      </Card>

    </>
  )
}

export default CMSReport
