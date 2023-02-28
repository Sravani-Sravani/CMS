import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
const columns = [
  { field: 'id', headerName: 'SNo', type:'number',  headerClassName: 'super-app-theme--header',width: 70 },
  { field: 'empcode', headerName: 'Employee Code', width: 180,headerClassName: 'super-app-theme--header' },
  { field: 'actionTakenby', headerName: 'Action Taken by', width: 180 ,headerClassName: 'super-app-theme--header'},
  { field: 'designation', headerName: 'Designation', width: 130,headerClassName: 'super-app-theme--header' },
  { field: 'phnno', headerName: 'Phone Number', width: 130,headerClassName: 'super-app-theme--header' },
  { field: 'remarks', headerName: 'Remarks Given', width: 160,headerClassName: 'super-app-theme--header' },
  { field: 'actionTakentime', headerName: 'Action Taken Time', width: 180,headerClassName: 'super-app-theme--header' },
  { field: 'attachments', headerName: 'View Attachment(s)', width: 150,headerClassName: 'super-app-theme--header' },
 
];

const rows = [
  { id: 1, empcode: 'MEDICO_CGH_GNT', actionTakenby: 'Dr.T.Prabhakar Rao', 
  designation: 'MEDICO',phnno:9876504321,remarks: 'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:2,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno: 9876504321 ,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:3,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno: 9876504321 ,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:4,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno:9876504321,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:5,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno:9876504321,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:6,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno:9876504321,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:7,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno:9876504321,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'},
  {id:8,empcode:'MEDICO_CGH_GNT',actionTakenby:'Dr.T.Prabhakar Rao',designation:'MEDICO',phnno:9876504321,remarks:'CR Created',actionTakentime:'24/02/2023 11:57:23 am',attachments:'NA'}
];

export default function DataTable() {
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

