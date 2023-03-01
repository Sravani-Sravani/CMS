import * as React from 'react';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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

  return (
    <>
      <CMSReport></CMSReport>
      <br></br>
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
            size="small" sx={{ color: '#414fe1', border: '1px solid #414fe1' }}
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
              <TableHead >
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#414fe1', color: 'white' }}
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
                        <TableCell align="center"><Link href="/#/cri" sx={{ color: '#414fe1', textDecorationColor: '#414fe1' }}>{row.ChangeRequestId} </Link>   </TableCell>
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
