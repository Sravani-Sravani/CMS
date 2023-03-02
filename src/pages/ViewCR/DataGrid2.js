import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
const columns = [
  { field: 'id', headerName: 'SNo', type:'number',  headerClassName: 'super-app-theme--header',width: 70 },
 
  { field: 'actionTakenby', headerName: 'Action Taken by', width: 180 ,headerClassName: 'super-app-theme--header'},
  { field: 'designation', headerName: 'Designation', width: 130,headerClassName: 'super-app-theme--header' },
 
  { field: 'remarks', headerName: 'Remarks Given', width: 300,headerClassName: 'super-app-theme--header' },
  { field: 'actionTakentime', headerName: 'Action Taken Time', width: 180,headerClassName: 'super-app-theme--header' },
  { field: 'actionTaken', headerName: 'Action Taken', width: 180,headerClassName: 'super-app-theme--header' },
  { field: 'attachments', headerName: 'View Attachment(s)', width: 150,headerClassName: 'super-app-theme--header' },
 
];

const rows = [
  { id: 1,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 2,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 3,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 4,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 5,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 6,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 7,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
  { id: 8,  actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'Release Lead',remarks: 'Closed CR',actionTakentime:'24/02/2023 11:57:23 am',actionTaken:'Approved' ,attachments:'NA'},
 
 
];

export default function DataTable2() {
  return (
    <Box sx={{ height: 400, width: '100%',  '& .super-app-theme--header': {
        backgroundColor: '#2196f3',
      },}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       
      />
    </Box>
  );
}