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

function TelephonicRegistration() {

  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];

  const [value, setValue] = React.useState(null);
  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Telephonic Patient Registration
          </Typography>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Card Type
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Employee Card"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Pensioner Card"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Journalist Card"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="New Born Baby"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Family Head"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Number"
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Button variant="contained">Retrieve</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Patient Details
          </Typography>
          <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Grid
                container
                direction="row"
                rowSpacing={0}
                columnSpacing={2}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Name"
                    name="email"
                    autoComplete="email"
                    size="small"                  
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
                      <TextField {...params} label="Gender" />
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
                      <TextField {...params} label="Martial Status" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  {/* <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Date of Birth"
                    name="email"
                    autoComplete="email"
                    size="small"
                  /> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of Birth"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField size="small" fullWidth {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Age"
                    name="email"
                    autoComplete="email"
                    size="small"
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
                      <TextField {...params} label="Relationship" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Designation"
                    name="email"
                    autoComplete="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Contact Number"
                    name="email"
                    autoComplete="email"
                    size="small"
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
                    renderInput={(params) => <TextField {...params} label="Slab" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3} sx={{mt:1.5}}>
              <img src={noImage} width="170px" />
            </Grid>
          </Grid>
          <h5>Card Address</h5>
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="House Number"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Street"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="State" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="District" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Mandal/Municipality" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Mandal" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="City/Town/Village" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Pincode"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>

          <h5>Communication Address</h5>
          {/* <span>If card address and Communication address are same</span> */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="If card address and Communication address are same"
          />
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="House Number"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Street"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="State" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="District" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Mandal/Municipality" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Mandal" />
                )}
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="City/Town/Village" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Pincode"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Caller Details
          </Typography>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Hospital" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Caller Name"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Designation"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Phone Number"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>
          <h5>Diagnosis</h5>
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Diagnosis Type" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Diagnosis Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Main Category Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Main Category Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Category Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Sub Category Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Sub Category Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Disease Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Disease Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Disease Anatomical Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Disease Anatomical Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Provisional Approval Details
          </Typography>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  <TextField {...params} label="Scheme" />
                )}
              />
            </Grid>
          </Grid>
          <h5>Therapy</h5>
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Category Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="ICD Category Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ICD Category Code"
                name="email"
                autoComplete="email"
                size="small"
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
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="IDC Procedure Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="IDC Procedure Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Indication for Telephonic Intimation"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>      

      <Card sx={{mt: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Provisional Approval Authority Details
          </Typography>
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name of the Doctor"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Designation"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Phone Number"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Date and Time of Intimation"
                name="email"
                autoComplete="email"
                size="small"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Remarks"
                value="This is a provisional approval given for [................][enter the procedure] therapy(ies) for [................][enter the diagnosis] based on the indication stated by the treating doctor over phone. The Preauthorization has to be raised within 72 hrs with complete clinical and documentary evidence from this telephonic information ID only."
                name="email"
                autoComplete="email"
                size="small"
                multiline
                maxRows={4}
                variant="standard"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box
        spacing={2}
        sx={{ flexGrow: 1, spacing: 2, mt: 2, pb: 3, float: "right" }}
      >
        <Button sx={{ minWidth: 100, ml: 1 }} variant="contained">
          Submit
        </Button>
        <Button sx={{ minWidth: 100, ml: 1 }} variant="outlined">
          Reset
        </Button>
      </Box>
    </>
  );
}

export default TelephonicRegistration;