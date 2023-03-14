import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { CardHeader, FormLabel, Input } from '@mui/material';
import { border } from '@mui/system';
import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';

import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import DataTable2 from './DataGrid';
import { ThemeProvider } from '@emotion/react';
import PageTitle from '../../layouts/PageTitle';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: 'black',
}));
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
          "&$error": {
            color: "#db3131",
          },
          
        },
      },
    },
  },
});


export default function CRDetails() {
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [text, setText] = React.useState("Default Text");

  const name= 'Change Request Details';
  const cardTitle = 'Remark Details';
  return (
    <>
    <Card sx={{width:"100%"}}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <Typography sx={{bgcolor:'#3F51B5',color:'white',textAlign:'center'}}>Change Request Details</Typography> */}
        <PageTitle name={name}/>
       
        

        <CardContent>
        
        <Grid
            container
            direction="row"
            rowSpacing={1}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
           
            
          >
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CRID</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>AP/Trust Operations/2021/</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Application Type</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Dr.YSR Arogyasri Portal</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Organization Type</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Dr. YSR Arogyasri Health Care Trust</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Source Department</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Trust Operation</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Type</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>NEW</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Title</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Reopening of cases which was EO rejected</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Type of Change</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Others</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>WorkFlow Category</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Supporting Document</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>
              {/* <TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /> */}
                    <Typography><Link href="/">img.jpg</Link></Typography>
                    </Grid>
           
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Severity</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Medium</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}> <FormLabel id="demo-row-radio-buttons-group-label" sx={{mt:1,color:"black",fontWeight:"bold"}} required>Build ID</FormLabel></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>CRID</Grid>
     
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Expected Delivery Date</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>06/06/2023</Grid>
            
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Current Status</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Production Deployment Completed</Grid>
       
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Description</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}><TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /></Grid>
            </Grid>
            {/* <Button variant="contained" size='small' sx={{   float: "right",mt:2 }}>Back</Button> */}
            </CardContent>
        
        </Card>
        <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon/>} size='small' sx={{ mr:2, mb:2 }}>Back</Button>
        
        <Card>
        {/* <Typography sx={{color:'white', bgcolor: '#3F51B5',textAlign:'center' }}>Remark Details</Typography> */}
        <PageTitle name={cardTitle}/>
        <Grid sx={{ marginTop: 2, marginLeft: 4, marginRight: 4, marginBottom: 2 }}>
          <DataTable2/>
          </Grid>
        </Card>
        
        <Stack
            container
            direction="row"
            spacing={1}
            columnSpacing={2}
            justifyContent="center"
            alignItems="center"
          >


            {/* <Button variant="contained" size='small' >Close</Button>
            <Button variant="contained" size='small' >Previous Remarks</Button> */}
        </Stack>
        
        {/* </ThemeProvider> */}
        
    </>
    );
  }