import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import Typography from '@mui/material/Typography';


const PageTitle = (name) => {
  return (
    <div>
      <Box  display='flex' justifyContent='space-between' alignItems='center' px={2} borderBottom='1px solid'>
        <Typography variant='h4' color='text.secondary'>{name.name}</Typography>
        {/* <Typography variant='body1' sx={{fontSize:'10px'}}>
          <Typography variant='body1' component='span' sx={{fontSize:'10px', color:'#0377df', fontWeight:'bold'}}>Home </Typography>
           >> DashBoard</Typography> */}
      </Box>
    </div>
  )
}

export default PageTitle
