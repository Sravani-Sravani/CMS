import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PageTitle = (name) => {
  return (
    <div>
      <Box  display='flex'  px={2} mt={2} borderBottom='1px solid #808080'>
        <Typography variant='h4' color='#808080' >{name.name}</Typography>
        {/* <Typography variant='body1' sx={{fontSize:'10px'}}>
          <Typography variant='body1' component='span' sx={{fontSize:'10px', color:'#0377df', fontWeight:'bold'}}>Home </Typography>
           >> DashBoard</Typography> */}
      </Box>
    </div>
  )
}

export default PageTitle
