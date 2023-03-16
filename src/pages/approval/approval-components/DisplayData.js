import Approval from '../Approval'
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
import VirtualizedTable from '../../../components/VirtualizedTable';


const sample = [
  [<Link href='cms/#/crStatus'>T AP/FMPNL/2022/AP C439/CRM29580</Link>, 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
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
    label: 'CRDescription',
    dataKey: 'CRDesc',
    // numeric: true,
  },
  {
    width: 160,
    label: 'CR Raised Department',
    dataKey: 'CRDept',
    // numeric: true,
  },
  {
    width: 120,
    label: 'CR Raised Date',
    dataKey: 'CRDate',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Current Status',
    dataKey: 'CRStatus',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Internal Status',
    dataKey: 'CRInternalStatus',
    // numeric: true,
  },
  {
    width: 120,
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
    width: 120,
    label: 'Type Of Change',
    dataKey: 'CRTypeOfChange',
    numeric: true,
  },
  {
    width: 120,
    label: 'Build ID',
    dataKey: 'CRBuildID',
    numeric: true,
  },
  {
    width: 120,
    label: 'Expected Delivery Date',
    dataKey: 'CREDD',
    numeric: true,
  },
  {
    width: 120,
    label: 'CR Raised By',
    dataKey: 'CRRaisedBy',
    numeric: true,
  },
  {
    width: 120,
    label: 'CR Category',
    dataKey: 'CRCategory',
    numeric: true,
  },
  {
    width: 120,
    label: 'Workflow',
    dataKey: 'CRWorkflow',
    numeric: true,
  },
  
  
];

const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});


const DisplayData=()=>{
  //   const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  return (
    <>
      <Approval/>
      <br></br>

      <Card sx={{ mt: 2 }}>
        <CardContent>
            <VirtualizedTable columns={columns} rows={rows}/>
        </CardContent>
      </Card>
    </>
  )
}

export default DisplayData
