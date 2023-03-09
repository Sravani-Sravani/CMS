import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useFormik } from "formik";
import styled from "styled-components";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import noImage from "../assets/images/noImage.jpg";
const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
function CreateRequest1() {
    const options = [
        { label: 'One', id: 1 },
        { label: 'Two', id: 2 },
      ];
   
    return(
        <>
        <Card>
            <CardContent>
            <Typography variant="h4"  color="text.secondary" gutterBottom>
            Create Request
          </Typography>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
                <Grid item xs={12} sm={4} md={3} lg={3} required>
               <Autocomplete
                  disablePortal
                  
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Application Type"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Parent Organisation"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Department"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Sub Department"/>}
                />
            </Grid>
                </Grid>
                
                <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={2} md={2} lg={2} >
            <FormLabel id="demo-row-radio-buttons-group-label"  required>
                  Change Request Type:
                </FormLabel>
            </Grid>
            <Grid item  xs={12} sm={10} md={10} lg={10}>
              <FormControl  >
                
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="New Requirement"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Existing Requirement"
                  />
                  
                </RadioGroup>
              </FormControl>
            </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
           
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": {color: 'green'},//styles the label
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "orange" },
                  },
                }}
                multiline
                required
                fullWidth
                id="email"
                label="CR Title(max 1000 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                
                multiline
                required
                fullWidth
                id="email"
                label="CR Description(max 4000 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
                <Grid item xs={12} sm={4} md={3} lg={3}>
               <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="CR Module"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Type of Change"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  onChange={(event, value) => console.log(value)}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Workflow Category"/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
        
                label="Mobile Number"
                id="combo-box-demo"
                name="email"
                autoComplete="email"
                size="small"
                sx={{ mt:0 }}
              />
            </Grid>
            </Grid>
                
                <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={2} md={2} lg={2}>
            <FormLabel id="demo-row-radio-buttons-group-label" >
                  Supporting Documents:
                </FormLabel>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10}>
                <Button  component="label" sx={{bgcolor: "white", color: "black",textTransform: 'none'}}><input  type="file"  style={{ fontSize:"15px" }}  multiple /></Button>   
            </Grid>
            </Grid>
            </CardContent>
        </Card>
        <Box
        
        sx={{   float: "right" }}
      >
        <Button  variant="outlined" sx={{mr:2}}>
          Reset
        </Button>
        <Button  variant="contained">
        Create Change Request
        </Button>
      </Box>
        </>
    )
}
export default CreateRequest1;