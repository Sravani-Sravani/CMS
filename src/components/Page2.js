import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CMSReport from './CMSReport';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { Typography, Stack, Box, Grid, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
const options = [
  { label: 'One', id: 1 },
  { label: 'Two', id: 2 },
];

function createData(SNo, ChangeRequestId, CRTitle, CRDescription, CRRaisedDepartment, CRRaisedDate, CurrentStatus, InternalStatus, ExternalStatus, ParentCRID, Seventy, Priority, TypeofChange, BuildID, ExpectedDeliveryDate, CRRaisedBy, CRCategory, WorkFlow) {
  return { SNo, ChangeRequestId, CRTitle, CRDescription, CRRaisedDepartment, CRRaisedDate, CurrentStatus, InternalStatus, ExternalStatus, ParentCRID, Seventy, Priority, TypeofChange, BuildID, ExpectedDeliveryDate, CRRaisedBy, CRCategory, WorkFlow };
}

const columns = [
  { id: 'SNo', label: 'S. No', minWidth: 70 },
  { id: 'ChangeRequestId', label: ' Change Request ID', minWidth: 190, align: 'center' },
  { id: 'CRTitle', label: 'CR Title', minWidth: 100, align: 'center' },
  { id: 'CRDescription', label: 'CR Description', minWidth: 170, align: 'center', format: (value) => value.toLocaleString(), },
  { id: 'CRRaisedDepartment', label: 'CR Raised Department', minWidth: 170, align: 'center', },
  { id: 'CRRaisedDate', label: 'CR Raised Date', minWidth: 170, align: 'center', },
  { id: 'CurrentStatus', label: 'Current Status', minWidth: 170, align: 'center', },
  { id: 'InternalStatus', label: 'Internal Status', minWidth: 170, align: 'center', },
  { id: 'ExternalStatus', label: 'External Status', minWidth: 170, align: 'center', },
  { id: 'ParentCRID', label: 'Parent CR ID', minWidth: 170, align: 'center', },
  { id: 'Seventy', label: 'Seventy', minWidth: 170, align: 'center', },
  { id: 'Priority', label: 'Priority', minWidth: 170, align: 'center', },
  { id: 'TypeofChange', label: 'Type Of Change', minWidth: 170, align: 'center', },
  { id: 'BuildID', label: 'Build ID', minWidth: 170, align: 'center', },
  { id: 'ExpectedDeliveryDate', label: 'Expected Delivery Date', minWidth: 170, align: 'center', },
  { id: 'CRRaisedBy', label: 'CR Raised By', minWidth: 170, align: 'center', },
  { id: 'CRCategory', label: 'CR Category', minWidth: 170, align: 'center', },
  { id: 'WorkFlow', label: 'WorkFlow', minWidth: 170, align: 'center', },
];


const rows = [
  createData(1, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(2, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(3, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(4, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(5, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(6, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(7, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
  createData(8, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),

];


function ReferredPatientView() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [value, setValue] = useState("")
  const [text, setText] = useState("");
  console.log(value)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <CMSReport></CMSReport>
      <br></br>
      <Card sx={{ mt: 2 ,ml: 2}}>
        <Box sx={{ pr: 3, mb: 1, mt: 1, float: "right" }}>
          <Button
            variant="outlined"
            startIcon={<DownloadForOfflineIcon />}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small" sx={{ color: '#3F51B5', border: '1px solid #3F51B5' }}
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
       

        <Grid container direction="row" rowSpacing={1} columnSpacing={2} justify="flex-end" alignItems="center">
        <Grid item xs={12} sm={3} md={3} lg={2}>
        <Typography sx={{ fontSize: 16,fontWeight:'bold' }} color="#3F51B5" gutterBottom>
           Advanced Search : 
          </Typography>
          </Grid>
        <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>
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
                  <TextField {...params} label="CR ID" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>
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
                  <TextField {...params} label="Select" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="crid"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={2.5} md={2.5} lg={2.5}>

<Box item width='auto' py={1}size="small" textAlign="left" ml={2}>
                        <Link to="/dataTable">
                        <Button variant='contained' size='small'>
                            <SearchOutlinedIcon fontSize='medium' color='text.primary'/>
                        </Button>
                        </Link>
                </Box>
</Grid>
        </Grid>
      

   
          <br></br>
          <TableContainer >


            <Box sx={{ overflow: "auto" }}>
              <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <Table stickyHeader aria-label="sticky table" sx={{ maxWidth: 650 }}>
                  <TableHead >
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#3F51B5', color: 'white' }}
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
                          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '50px' }}>
                            <TableCell component="th" scope="row">{row.SNo}</TableCell>
                            <TableCell align="center"><Link href="/#/viewCR" sx={{ color: '#3F51B5', textDecorationColor: '#3F51B5' }}>{row.ChangeRequestId} </Link>   </TableCell>
                            <TableCell align="center">{row.CRTitle}</TableCell>
                            <TableCell align="center">{row.CRDescription}</TableCell>
                            <TableCell align="center">{row.CRRaisedDepartment}</TableCell>
                            <TableCell align="center">{row.CRRaisedDate}</TableCell>
                            <TableCell align="center">{row.CurrentStatus}</TableCell>
                            <TableCell align="center">{row.InternalStatus}</TableCell>
                            <TableCell align="center">{row.ExternalStatus}</TableCell>
                            <TableCell align="center">{row.ParentCRID}</TableCell>
                            <TableCell align="center">{row.Seventy}</TableCell>
                            <TableCell align="center">{row.Priority}</TableCell>
                            <TableCell align="center">{row.TypeofChange}</TableCell>
                            <TableCell align="center">{row.BuildID}</TableCell>
                            <TableCell align="center">{row.ExpectedDeliveryDate}</TableCell>
                            <TableCell align="center">{row.CRRaisedBy}</TableCell>
                            <TableCell align="center">{row.CRCategory}</TableCell>
                            <TableCell align="center">{row.WorkFlow}</TableCell>
                          </TableRow>
                        );

                      })}
                  </TableBody>
                </Table>
              </Box>
            </Box>
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

export default ReferredPatientView;
