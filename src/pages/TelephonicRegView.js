import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

function createData(TelephonicID, PatientName, CardNumber, CallerName, CallerPhoneNo, Hospital, RegistrationDate) {
  return { TelephonicID, PatientName, CardNumber, CallerName, CallerPhoneNo,Hospital,RegistrationDate };
}

const columns = [
  { id: 'TelephonicID', label: 'Telephonic ID', minWidth: 170 },
  { id: 'PatientName', label: 'Patient Name', minWidth: 100 },
  {
    id: 'CardNumber',
    label: 'Card Number',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'CallerName',
    label: 'Caller Name',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'CallerPhoneNo',
    label: 'Caller Phone No',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'Hospital',
    label: 'Hospital',
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
  createData(1111111,'A', 159, 'test', 'test','test','01/02/2023'),
  createData(2111111,'B', 237,'test', 'test','test','01/02/2023'),
  createData(3111111,'C', 262, 'test', 'test','test','01/02/2023'),
  createData(4111111,'D', 305, 'test', 'test','test','01/02/2023'),
  createData(5111111,'E', 356, 'test', 'test','test','01/02/2023'),
  createData(6111111,'A', 159, 'test', 'test','test','01/02/2023'),
  createData(7111111,'B', 237,'test', 'test','test','01/02/2023'),
  createData(8111111,'C', 262, 'test', 'test','test','01/02/2023'),
  createData(9111111,'D', 305, 'test', 'test','test','01/02/2023'),
];


function TelephonicRegView() {
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
      <Card sx={{ m: 0 }}>
        <CardContent>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Telephonic Registered Patients
          </Typography>
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
                label="Telephonic Id"
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
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
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
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

export default TelephonicRegView;
