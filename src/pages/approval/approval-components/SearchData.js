import { Typography, Stack, Box, Grid, TextField, MenuItem,Card, CardContent, Button } from '@mui/material'
import { borderColor } from '@mui/system'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import PageTitle from '../../../layouts/PageTitle';




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

    const name= 'Click here to export all required data'
  return (
    <>
        {/* <Typography mb={2} variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}} color='#808080' mt={2}>Click here to export all required data</Typography>  */}
        <Box mt={2}>
        <Card >
            <CardContent sx={{width:'100%'}} px={3}>
        <PageTitle name={name}/>
                <Grid container display='flex' flexDirection='row' justifyContent='center' >
                    <Grid item  py={0.5} textAlign='center' fontSize={2} display='flex' justifyContent='space-between'>
                        <Typography variant='body2' pt={1.5}>Advance Search</Typography>
                        <Grid item xs={12} sm={2}>
                            <Typography pt={1.2}>&nbsp;&nbsp; : &nbsp;</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} width="200px" size="small" textAlign="center" py={0.5}>
                            <TextField size='small' fullWidth textAlign="center" label='CR-ID' select value={value} onChange={handleChange} fontSize="100px">
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} width="200px" size="small" textAlign="center" py={0.5} ml={2}>
                            <TextField size='small' fullWidth textAlign="center" label='SELECT' select value={value} onChange={handleChange} fontSize="100px">
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6} width="200px" size="small" textAlign="center" py={0.5} ml={2}>
                            <TextField size='small' fullWidth textAlign="center" value={text} onChange={handleText} fontSize="100px">
                            </TextField>
                        </Grid>
                        <Box item xs={12} sm={6} width='auto' py={1}size="small" textAlign="left" ml={2}>
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
        </Box>
    </>
  )
}

export default SearchData
