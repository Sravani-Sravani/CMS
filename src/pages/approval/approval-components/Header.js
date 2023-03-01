import React from 'react';
import { Box, Typography, Stack, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors'



const buttonBg = createTheme({palette:{primary: grey}})
const Header = () => {
  return (
    <Box textAlign='center' sx={{borderBottom:1, borderColor:'text.secondary'}}>
      <Typography variant="h5" component="h1" p={2} color="primary.dark" sx={{fontWeight:700}}>Change Management System</Typography>
      <Grid sx={{display: 'flex', flexDirection:'row', justifyContent:'center', size:0.5}} paddingBottom={3} container spacing={{ xs: 4, md: 2 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
        <ThemeProvider theme={buttonBg}>
            <Grid item>
                <Box>
                    <Button size='small' variant='contained' sx={{mx: 0.5}} >My Request Status</Button>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <Button size='small' variant='contained' sx={{mx: 0.5}}>Create Request</Button>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                <Button size='small' variant='contained' sx={{mx: 0.5}}>My Approvals</Button>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                <Button size='small' variant='contained' sx={{mx: 0.5}}>CMS Reports</Button>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                <Button size='small' variant='contained' sx={{mx: 0.5}}>BugTracking</Button>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                <Button size='small' variant='contained' sx={{mx: 0.5}}>Close</Button>
                </Box>
            </Grid>
        </ThemeProvider>
      </Grid>
    </Box>
  )
}

export default Header
