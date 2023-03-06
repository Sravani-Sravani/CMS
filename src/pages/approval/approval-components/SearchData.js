import { Typography, Stack, Box, Grid, TextField, MenuItem,Card, CardContent, Button } from '@mui/material'
import { borderColor } from '@mui/system'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';




const SearchData = () => {
    const [value, setValue] = useState("")
    const [text, setText] = useState("");
    console.log(value)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleText=(e)=>{
        setText(e.target.value);
    }
  return (
    <>
        <Typography mb={2} variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}} color='#808080' mt={2}>Click here to export all required data</Typography> 
        <Card sx={{border:"1px solid", borderColor:"text.secondary"}} mt={2}>
            <CardContent sx={{width:'100%'}} px={3}>
                <Grid container display='flex' flexDirection='row' justifyContent='center'>
                    <Grid item  py={0.5} textAlign='center' fontSize={2} display='flex' justifyContent='space-between'>
                        <Typography variant='body2' pt={1.5}>Advance Search</Typography>
                        <Grid item>
                            <Typography pt={1.2}>&nbsp;&nbsp; : &nbsp;</Typography>
                        </Grid>
                        <Grid item width="200px" size="small" textAlign="center" py={0.5}>
                            <TextField size='small' fullWidth textAlign="center" label='CR-ID' select value={value} onChange={handleChange} fontSize="100px">
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item width="200px" size="small" textAlign="center" py={0.5} ml={2}>
                            <TextField size='small' fullWidth textAlign="center" label='SELECT' select value={value} onChange={handleChange} fontSize="100px">
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item width="200px" size="small" textAlign="center" py={0.5} ml={2}>
                            <TextField size='small' fullWidth textAlign="center" value={text} onChange={handleText} fontSize="100px">
                            </TextField>
                        </Grid>
                        <Box item width='auto' py={1}size="small" textAlign="left" ml={2}>
                                <Link to="/dataTable">
                                <Button variant='contained' size='small'>
                                    <SearchOutlinedIcon fontSize='medium' color='text.primary'/>
                                </Button>
                                </Link>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>
  )
}

export default SearchData
