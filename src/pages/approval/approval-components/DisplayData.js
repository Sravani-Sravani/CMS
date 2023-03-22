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
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VirtualizedTable from '../../../components/table/VirtualizedTable';
// import { useDownloadExcel } from 'react-export-table-to-excel'
import { Grid } from '@mui/material';
import { CSVLink } from 'react-csv';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { useState } from 'react';
// import { Stack } from '@mui/system';
import Modal1 from '../../../components/modal/Modal1'


const DisplayData=()=>{
  const [openModal, setOpenModal] = useState(false);
  const sample = [
    [<Link href='cms/#/crStatus'>T AP/FMPNL/2022/AP C439/CRM29580</Link>, 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA',<Grid display={'flex'}><Button size='small' sx={{pr:4}}><BorderColorOutlinedIcon sx={{ color:'purple'}}/></Button>  <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}><FolderOpenOutlinedIcon sx={{color:'green'}} /></Button>  </Grid>],
    // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  ];
  
  
  function createData(id, empCode, actionTakenBy, Designation, phone, remarksGiven, actionTime,actionTaken, viewAttach) {
    return {  id, empCode, actionTakenBy, Designation, phone, remarksGiven, actionTime, actionTaken, viewAttach};
  }
  
  const columns = [
    {
      width: 100,
      label: 'Sl No.',
      dataKey: 'id',
    },
    {
      width: 200,
      label: 'Employee Code',
      dataKey: 'empCode',
    },
    {
      width: 160,
      label: 'Action Taken By',
      dataKey: 'actionTakenBy',
      // numeric: true,
    },
    {
      width: 160,
      label: 'Designation',
      dataKey: 'Designation',
      // numeric: true,
    },
    {
      width: 200,
      label: 'Phone Number',
      dataKey: 'phone',
      // numeric: true,
    },
    {
      width: 160,
      label: 'Remarks Given',
      dataKey: 'remarksGiven',
      // numeric: true,
    },
    {
      width: 180,
      label: 'Action Taken Time',
      dataKey: 'actionTime',
      // numeric: true,
    },
    {
      width: 160,
      label: 'Action Taken',
      dataKey: 'actionTaken',
      // numeric: true,
    },
    {
      width: 160,
      label: 'View Attachment',
      dataKey: 'viewAttach',
      // numeric: true,
    },
    
    
    
  ];
  
  const rows = Array.from({ length: 50 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index+1, ...randomSelection);
  });

  //   const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const tableRef = React.useRef(null)

  
  // const {onDownload} = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: 'user_info',
  //   sheet:'UserData'

  // })

  return (
    <>
      <Approval/>
      <br></br>

      <Card>
                <Box sx={{ pr: 3, float:'right' }}>

                    <Button
                      variant="outlined"
                      startIcon={<DownloadForOfflineIcon />}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      mb={2}
                      size="small" sx={{color: '#3F51B5', border: '1px solid #3F51B5' }}
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
                      <MenuItem onClick={handleClose}><CSVLink data={rows} filename={"userData.csv"}>Excel Export</CSVLink></MenuItem>
                      <MenuItem onClick={handleClose}>Pdf Export</MenuItem>
                    </Menu>
                    </Box>
                    {openModal && <Modal1 closeModal ={setOpenModal}/>}
        <CardContent>
          <Grid mt={3}>
            <VirtualizedTable columns={columns} rows={rows}/>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default DisplayData
