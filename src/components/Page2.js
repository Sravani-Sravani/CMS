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
import VirtualizedTable from './VirtualizedTable';


const options = [
  { label: 'One', id: 1 },
  { label: 'Two', id: 2 },
];

const sample = [
  ['T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
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
      <Card>
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
       

        {/* <Grid container direction="row" rowSpacing={1} columnSpacing={2} justify="flex-end" alignItems="center"> */}
        {/* <Grid item xs={12} sm={3} md={3} lg={2}>
        <Typography >
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
                            <SearchOutlinedIcon size='large' color='text.primary'/>
                        </Button>
                        </Link>
                </Box>
            </Grid>
            </Grid> */}
          <br></br>
          <VirtualizedTable columns={columns} rows={rows}/>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </CardContent>
      </Card>
    </>
  );
}

export default ReferredPatientView;
