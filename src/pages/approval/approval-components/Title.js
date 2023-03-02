import React from 'react';
import { Box, Typography, Stack} from "@mui/material";


const Title = () => {
  return (
    <Box sx={{borderBottom:1, borderColor:'text.secondary'}}>
      <Stack p={2} >
        <Typography variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}}  color='#808080'>My Approval</Typography>
      </Stack>
    </Box>
  )
}

export default Title
