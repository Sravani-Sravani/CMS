import React from 'react'
import { Typography, Card,CardContent, Grid, Autocomplete,TextField, Box } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import PageTitle from '../layouts/PageTitle';

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
  const name = "CMS Dashboard"
  return (
    <>
      <PageTitle name={name}/>
      <Box>
        <Stack>
            <Grid container rowSpacing={2} columnSpacing={2} direction='row' justify="flex-end" alignItems="center">
              <Grid xs={12} sm={4} item >
                <Card  >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Total No. of CRs
                      </Typography>
                      <CheckCircleRoundedIcon style={{color:"#79B5F2", fontSize:'50px'}}/>
                    </Box>
                    <Box mt={2}>
                      <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif' }}>
                        2541
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{  fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Approved CRs
                      </Typography>
                      <RecommendRoundedIcon style={{color:"#97D36C", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      2222
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Rejected CRs
                      </Typography>
                      <CancelRoundedIcon style={{color:"#EE5555", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      251
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080'>
                        In Progress CRs
                      </Typography>
                      <AccessTimeFilledIcon style={{color:"#FDDF75", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      600
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{fontFamily:'Lato, sans-serif' }} color='#808080'>
                        Pending CRs
                      </Typography>
                      <ChangeCircleIcon style={{color:"#D8A7FF", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      1200
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Closed CRs
                      </Typography>
                      <OfflinePinRoundedIcon style={{color:"#CCCCCC", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
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
