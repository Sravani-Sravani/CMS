import React from 'react'
import { Typography, Card,CardContent, Grid, Autocomplete,TextField, Box } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';

import { Stack } from '@mui/system';
// const cardNums= [
//     {num1:2241},
//     {num2: 2222},
//     {num3: 251},
//     {num4: 600},
//     {num5: 1200},
//     {num6: 400},
// ]
const DashboardCards = () => {
  return (
    <>
      <Box  display='flex' justifyContent='space-between' alignItems='center' px={2}>
        <Typography variant='body1' color='#808080'>CMS DashBoard</Typography>
        {/* <Typography variant='body1' sx={{fontSize:'10px'}}>
          <Typography variant='body1' component='span' sx={{fontSize:'10px', color:'#0377df', fontWeight:'bold'}}>Home </Typography>
           >> DashBoard</Typography> */}
      </Box>
      <Box py={2} mt={5}>
        <Stack>
            <Grid container rowSpacing={2} columnSpacing={2} direction='row' justify="flex-end" alignItems="center">
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3, display:'block', width:'auto', height:'auto', borderRadius:'5px'}} >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        Total No. of CRs
                      </Typography>
                      <CheckCircleRoundedIcon style={{color:"#79B5F2", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                        2541
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3, borderRadius:'5px'}}>
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        Approved CRs
                      </Typography>
                      <RecommendRoundedIcon style={{color:"#97D36C", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      2222
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3,  borderRadius:'5px'}}>
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        Rejected CRs
                      </Typography>
                      <CancelRoundedIcon style={{color:"#EE5555", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      251
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3,  borderRadius:'5px'}}>
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        In Progress CRs
                      </Typography>
                      <CachedRoundedIcon style={{color:"#FDDF75", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      600
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3,  borderRadius:'5px'}}>
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        Pending CRs
                      </Typography>
                      <PendingActionsRoundedIcon style={{color:"#D8A7FF", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      1200
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card sx={{boxShadow:3,  borderRadius:'5px'}}>
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontSize: 10, fontFamily:'Lato, sans-serif' }} color='#808080' fontWeight={600} gutterBottom>
                        Closed CRs
                      </Typography>
                      <OfflinePinRoundedIcon style={{color:"#CCCCCC", fontSize:'30px'}}/>
                    </Box>
                    <Typography variant='h4' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      400
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Stack>
      </Box>
    </>
  )
}

export default DashboardCards;
