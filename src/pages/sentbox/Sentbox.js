import React from 'react'
import Link from '@mui/material/Link';
import {Box, Stack, Typography} from '@mui/material';

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
import PageTitle from '../../layouts/PageTitle';
import VirtualizedTable from '../../components/VirtualizedTable';

// const sample = [
//   ['T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', 4.0],
//   ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', 4.3],
//   ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', 6.0],
//   ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', 4.3],
//   ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', 3.9],
// ];
// function createData(id,no, ChangeRequestId, CRTitle, CRDescription, CRRaisedDepartment, CRRaisedDate, CurrentStatus, InternalStatus, ExternalStatus, ParentCRID, Seventy, Priority, TypeofChange, BuildID, ExpectedDeliveryDate, CRRaisedBy, CRCategory, WorkFlow){
//   return{
//      id, no, ChangeRequestId, CRTitle, CRDescription, CRRaisedDepartment, CRRaisedDate, CurrentStatus, InternalStatus, ExternalStatus, ParentCRID, Seventy, Priority, TypeofChange, BuildID, ExpectedDeliveryDate, CRRaisedBy, CRCategory, WorkFlow
//   }
// }

// const columns = [
//     {  label:'S.No', width:170, datakey:'id'},
//     {  label: ' Change Request ID', width: 190, datakey:'ChangeRequestId' },
//     {  label: 'CR Title', width: 200, datakey:'CRTitle'  },
//     {  label: 'CR Description', width: 170,  format: (value) => value.toLocaleString(), datakey:'CRDescription' },
//     {  label: 'CR Raised Department', width: 170, datakey:'CRRaisedDepartment' },
//     {  label: 'CR Raised Date', width: 170,  datakey:'CRRaisedDate'},
//     {  label: 'Current Status', width: 170,  datakey:'CurrentStatus'},
//     {  label: 'Internal Status', width: 170,  datakey:''},
//     {  label: 'External Status', width: 170,  },
//     {  label: 'Parent CR ID', width: 170,  },
//     {  label: 'Seventy', width: 170,  },
//     {  label: 'Priority', width: 170,  },
//     {  label: 'Type Of Change', width: 170,  },
//     {  label: 'Build ID', width: 170,  },
//     {  label: 'Expected Delivery Date', width: 170,  },
//     {  label: 'CR Raised By', width: 170,  },
//     {  label: 'CR Category', width: 170,  },
//     {  label: 'WorkFlow', width: 170,  },
// ]

// // const rows = [
// //     createData(1, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
// //     createData(2, 'T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)', 'NA', 'PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change'),
// // ]
// const rows = Array.from({ length: 100 }, (_, index) => {
//   const randomSelection = sample[Math.floor(Math.random() * sample.length)];
//   return createData(index, ...randomSelection);
// });

const sample = [
  [<Link href='/cms/#/crStatus'>T AP/FMPNL/2022/AP C439/CRM29580</Link>, 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
  // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
];

function createData(id, CRID, CRTitle, CRDesc, CRDept, CRDate, CRStatus, CRInternalStatus, CRExternalStatus, CRParentID, CRSeverity,CRPriority, CRTypeOfChange, CRBuildID, CREDD, CRRaisedBy, CRCategory, CRWorkflow) {
  return {  id, CRID, CRTitle, CRDesc, CRDept, CRDate, CRStatus, CRInternalStatus, CRExternalStatus, CRParentID, CRSeverity,CRPriority, CRTypeOfChange, CRBuildID, CREDD, CRRaisedBy, CRCategory, CRWorkflow };
}

const columns = [
  {
    width: 100,
    label: 'Sl No.',
    dataKey: 'id',
  },
  {
    width: 200,
    label: 'Change Request Id',
    dataKey: 'CRID',
  },
  {
    width: 160,
    label: 'CR Title',
    dataKey: 'CRTitle',
    // numeric: true,
  },
  {
    width: 160,
    label: 'CR Description',
    dataKey: 'CRDesc',
    // numeric: true,
  },
  {
    width: 200,
    label: 'CR Raised Department',
    dataKey: 'CRDept',
    // numeric: true,
  },
  {
    width: 160,
    label: 'CR Raised Date',
    dataKey: 'CRDate',
    // numeric: true,
  },
  {
    width: 180,
    label: 'Current Status',
    dataKey: 'CRStatus',
    // numeric: true,
  },
  {
    width: 160,
    label: 'Internal Status',
    dataKey: 'CRInternalStatus',
    // numeric: true,
  },
  {
    width: 160,
    label: 'External Status',
    dataKey: 'CRExternalStatus',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Parent CR ID',
    dataKey: 'CRParentID',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Severity',
    dataKey: 'CRSeverity',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Priority',
    dataKey: 'CRPriority',
    // numeric: true,
  },
  {
    width: 160,
    label: 'Type Of Change',
    dataKey: 'CRTypeOfChange',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Build ID',
    dataKey: 'CRBuildID',
    // numeric: true,
  },
  {
    width: 180,
    label: 'Expected Delivery Date',
    dataKey: 'CREDD',
    // numeric: true,
  },
  {
    width: 200,
    label: 'CR Raised By',
    dataKey: 'CRRaisedBy',
    // numeric: true,
  },
  {
    width: 160,
    label: 'CR Category',
    dataKey: 'CRCategory',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Workflow',
    dataKey: 'CRWorkflow',
    // numeric: true,
  },
  
  
];

const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index+1, ...randomSelection);
});

const Sentbox = () => {
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    //   setPage(0);
    // };
    const name='Sentbox'
  return (
    <>
    {/* <Box sx={{borderBottom:1, borderColor:'text.secondary'}}>
      <Stack p={2} >
        <Typography variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}}  color='#808080'>Inbox</Typography>
      </Stack>
    </Box> */}
     <Card>
        <CardContent>
        <PageTitle name={name}/>
            {/* <TableContainer>
            <Box sx={{ overflow: "auto" }} >
              <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ gap:'2px', minWidth: column.minWidth}}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {rows.map((row) =>{
                            return(
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '50px' }}>
                                <TableCell component="th" scope="row">{row.SNo}</TableCell>
                                <TableCell align="center"><Link href="/cms/#/crStatus" sx={{ color: '#414fe1', textDecorationColor: '#414fe1' }}>{row.ChangeRequestId} </Link>   </TableCell>
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
          /> */}
          <VirtualizedTable columns={columns} rows={rows}/>
        </CardContent>
      </Card> 
    </>
  )
}

export default Sentbox;
