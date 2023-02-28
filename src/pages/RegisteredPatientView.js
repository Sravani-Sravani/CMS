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
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


function createData(PatientNumber, PatientName, CardNumber, District, Gender, Age, RegistrationDate) {
  return { PatientNumber, PatientName, CardNumber, District, Gender,Age,RegistrationDate };
}

const columns = [
  { id: 'PatientNumber', label: 'Patient Number', minWidth: 170 },
  { id: 'PatientName', label: 'Patient Name', minWidth: 100 },
  {
    id: 'CardNumber',
    label: 'Card Number',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'District',
    label: 'District',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'Gender',
    label: 'Gender',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'Age',
    label: 'Age',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'RegistrationDate',
    label: 'Registration Date',
    minWidth: 170,
    align: 'left',
  },
];


const rows = [
  createData(1111111,'A', 159, 'test', 'Male',34,'01/02/2023'),
  createData(2111111,'B', 237,'test', 'Male',45,'01/02/2023'),
  createData(3111111,'C', 262, 'test', 'Male',33,'01/02/2023'),
  createData(4111111,'D', 305, 'test', 'Male',34,'01/02/2023'),
  createData(5111111,'E', 356, 'test', 'Male',34,'01/02/2023'),
  createData(3111111,'C', 262, 'test', 'Male',33,'01/02/2023'),
  createData(4111111,'D', 305, 'test', 'Male',34,'01/02/2023'),
  createData(5111111,'E', 356, 'test', 'Male',34,'01/02/2023'),
];


function RegisteredPatientView() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {/* <Header /> */}
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Registered Patient View
          </Typography>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Patient Number"
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Patient Name"
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
                label="Health Card Number"
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
                sx={{ width: "100%", mt: 1 }}
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
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="District" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Registration From Date"
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
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Registration From Date"
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
          </Grid>
        </CardContent>
        <Box
          spacing={2}
          sx={{ flexGrow: 1, spacing: 2, m: 2, pb: 3, float: "right" }}
        >
          <Button sx={{ minWidth: 100, ml: 1 }} variant="contained">
            Search
          </Button>
          <Button sx={{ minWidth: 100, ml: 1 }} variant="outlined">
            Reset
          </Button>
        </Box>
      </Card>

      <Card sx={{ mt: 2 }}>
        <Box sx={{ pr: 3, mb: 1, mt: 1, float: "right" }}>
          <Button
            variant="outlined"
            startIcon={<DownloadForOfflineIcon />}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small"
          >
            Export
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Excel Export</MenuItem>
            <MenuItem onClick={handleClose}>Pdf Export</MenuItem>
          </Menu>
        </Box>
        <CardContent>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <>
                            {column.id=='PatientNumber' ? 
                              <TableCell key={column.id} align={column.align}>
                              <Link underline="hover" color="inherit" href="/registeredPatient">
                                {row.PatientNumber}
                              </Link>
                             </TableCell>
                              :
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            }
                            </>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default RegisteredPatientView;
