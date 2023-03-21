import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { CardHeader, FormLabel, Input } from '@mui/material';
import { border } from '@mui/system';
import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';

import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import DataTable2 from './DataGrid';
import { ThemeProvider } from '@emotion/react';
import PageTitle from '../../layouts/PageTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import CMSReport from './CMSReport';
// import VirtualizedTable from './VirtualizedTable';
// import {CSVLink} from 'react-csv';
import { useDownloadExcel } from 'react-export-table-to-excel';
import {CSVLink} from 'react-csv';
import 'jspdf-autotable';
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from '../../components/modal/Modal';
// import ExportTableToPDF from './StaticTable';
// import "../../components/modal/Modal.css"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: 'black',
}));
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
          "&$error": {
            color: "#db3131",
          },
          
        },
      },
    },
  },
});

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
    label: 'CR Description',
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
    width: 160,
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
    width: 180,
    label: 'Expected Delivery Date',
    dataKey: 'CREDD',
    numeric: true,
  },
  {
    width: 200,
    label: 'CR Raised By',
    dataKey: 'CRRaisedBy',
    numeric: true,
  },
  {
    width: 160,
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
  return createData(index+1, ...randomSelection);
});

export default function CRDetails() {
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [text, setText] = React.useState("Default Text");
  const name= 'CRID: AP/Trust Operations/2021';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  // const tableRef = React.useRef(null)

  const cardTitle = 'Remark Details';
  // const {onDownload} = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: 'user_info',
  //   sheet:'UserData'

  // })
  const downloadPdf=()=>{
    var doc = new jsPDF('landscape', 'px', 'a4','false');
    doc.text('User Data', 20, 10);
    doc.autoTable({
      columns:columns.map(col => ({...col, datakey:col.dataKey})),
      body: sample
    })

    doc.save('userdata.pdf')
  }

  // const componentPDF = React.useRef();
  // const downloadPdf = useReactToPrint({
  //   content:()=>componentPDF.current,
  //   documentTitle:"User Data",
  //   onAfterPrint:()=>alert('data saved')
  // });

  const tableRef = useRef();

  const handleExportPDF = () => {
    const input = tableRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pageWidth / imageWidth, pageHeight / imageHeight);
      const imgWidth = imageWidth * ratio;
      const imgHeight = imageHeight * ratio;
      pdf.addImage(imgData, "PNG", (pageWidth - imgWidth) / 12, (pageHeight - imgHeight) / 12, imgWidth, imgHeight);
      pdf.save("table.pdf");
    });
  };

  const [openModal , setOpenModal] = React.useState(false);

  return (
    <>
    <Box py={1}>
      <Typography variant='h6'>Change Request Details</Typography>
    </Box>
    <Card sx={{width:"100%"}}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <Typography sx={{bgcolor:'#3F51B5',color:'white',textAlign:'center'}}>Change Request Details</Typography> */}
        <PageTitle name={name}/>
        
        

        <CardContent>
        
        <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
            
          >
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b>
                    Application Type 
                </b>
              </FormLabel>
              
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Dr. YSR Arogyasri Portal</Typography>
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                 <b> Parent Organisation </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Dr. YSR Arogyasri Health Care Trust</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2} >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                  <b>Source Department </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Typography >:  Trust Operations</Typography>  
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2} >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                 <b> Source Department</b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Trust Operations</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b> CR Module </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Typography >:  Dr. YSR Arogyasri Portal</Typography>  
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                 <b> Request Type </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Dr. YSR Arogyasri Portal</Typography>
            </Grid>
          </Grid>  
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            // alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  mt={2.7}>
              <FormLabel id="demo-row-radio-buttons-group-label"  required >
                 <b> CR Title</b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline
                rows ={2}
                name="email"
                autoComplete="email"
                size="small"
                defaultValue="With the approval Copy	"
                autoFocus
              />  
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2} mt={2.7} >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                 <b> CR Description </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline 
                rows={2}
                name="email"
                autoComplete="email"
                defaultValue='With the approval Copy'
                size="small"
                autoFocus
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
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2} >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                 <b> Type of Change</b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Dr. YSR Arogyasri Portal</Typography>  
            </Grid>
            
             
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b>  CR Priority </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography >:  Dr. YSR Arogyasri Portal</Typography>
            </Grid>
          </Grid>  
          <Grid
              container
              direction="row"
              rowSpacing={0}
              columnSpacing={2}
              justify="flex-end"
              alignItems="center"
              marginBottom={2}>
                <Grid item xs={12} sm={2} md={2} lg={2}  >
                  <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                    <b> Workflow Category</b> 
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}  >
                  <Typography >:  Dr. YSR Arogyasri Portal</Typography>        
                </Grid>
              
              <Grid item xs={12} sm={2} md={2} lg={2}  >
                <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                  <b> Supporting Document </b> 
                  <Typography>:</Typography>
                </FormLabel>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}   >
                <Typography sx={{ml:4}}><Button  onClick={() => {setOpenModal(true)}}>img.jpg</Button> </Typography>
              </Grid>
            </Grid>  
            {openModal && <Modal closeModal ={setOpenModal}/>}
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b>  Required Date </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                defaultValue="02/02/2022"
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
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
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b>  Remarks </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline
                rows={3}
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
              />
                
            </Grid>
          </Grid> 
              

        
            {/* <Button variant="contained" size='small' sx={{   float: "right",mt:2 }}>Back</Button> */}
            </CardContent>
        
        </Card>
        
        <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={12}  display="flex" justifyContent='space-between'>
                <Button variant="contained" size='small' sx={{ml:1}}>Back</Button>
                <Grid item  display='flex' justifyContent='flex-end'>
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Save Remarks</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="contained" size='small' sx={{mx:1}}>Approve</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Reject</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Revert</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Preview Remarks</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Close</Button>
                {/* </Grid> */}
              </Grid>
            </Grid>
              
            
        </Grid>
        
        
        
        <Card>
        
        <PageTitle name={cardTitle}/>
        <Box sx={{ pr: 3, float:'right' }}>

        <Button
          variant="outlined"
          startIcon={<DownloadForOfflineIcon />}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
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
          <CSVLink data={rows} filename={"userData.csv"}>
            <MenuItem> <Button onClick={handleClose}>Excel Export</Button></MenuItem>
            </CSVLink>
          {/* <MenuItem> <Button onClick={()=>downloadPdf()}>Pdf Export</Button></MenuItem> */}
          <MenuItem> <Button sx={{textDecoration:"underline"}} onClick={handleExportPDF}>Pdf Export</Button></MenuItem>
          
        </Menu>
        
        </Box>
        {/* </Stack> */}
        <CardContent>
        <Grid 
        // sx={{ marginTop: 2, marginLeft: 2, marginRight: 2, marginBottom: 2 }}
        mt={3}>
          
          {/* <DataTable2 /> */}
          {/* <ExportTableToPDF /> */}
          
      <Paper sx={{overflowX:"auto"}}>
      <Box sx={{width:"100%",display:"table",tableLayout:"fixed"}}>

         
      <Table  ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell>Sl No.</TableCell>
            <TableCell>Change Request Id</TableCell>
            <TableCell>CR Title</TableCell>
            <TableCell>CR Description</TableCell>
            <TableCell>CR Raised Department</TableCell>
            <TableCell>CR Raised Date</TableCell>
            <TableCell>Current Status</TableCell>
            <TableCell>Internal Status</TableCell>
            <TableCell>External Status</TableCell>
            <TableCell>Parent CR ID</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Type of Change</TableCell>
            <TableCell>Build ID</TableCell>
            <TableCell>Expected Delivery Date</TableCell>
            <TableCell>CR Raised By</TableCell>
            <TableCell>CR Category</TableCell>
            <TableCell>Workflow</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {/* 1	T AP/FMPNL/2022/AP C439/CRM29580	With the approval Copy	With the approval Copy	Empanelment and Medical Audit	02/02/2022 04:42:21 pm	Pending with ALAMURI VIJAY BHASKAR(AP_C214)	NA	PMU Verified	-NA-	-NA-	High	Work Flow Changes	-NA-	-NA-	ANUPAMA KETHAM REDDY	Normal Request	Change */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>T AP/FMPNL/2022/AP C439/CRM29580</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>With the approval Copy</TableCell>
            <TableCell>Empanelment and Medical Audit</TableCell>
            <TableCell>02/02/2022 04:42:21 pm</TableCell>
            <TableCell>Pending with ALAMURI VIJAY BHASKAR(AP_C214)</TableCell>
            <TableCell>NA</TableCell>
            <TableCell>PMU Verified</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>High</TableCell>
            <TableCell>	Work Flow Changes</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>-NA-</TableCell>
            <TableCell>ANUPAMA KETHAM REDDY</TableCell>
            <TableCell>Normal Request</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>


          
          </TableBody>
        </Table>
        </Box>
        </Paper> 
        </Grid>
        </CardContent>
        </Card>
        
        {/* <Stack
            container
            direction="row"
            spacing={1}
            columnSpacing={2}
            justifyContent="center"
            alignItems="center"
          >


            {/* <Button variant="contained" size='small' >Close</Button>
            <Button variant="contained" size='small' >Previous Remarks</Button> */}
        {/* </Stack> */} 
        
        {/* </ThemeProvider> */}
    </>
    );
  }