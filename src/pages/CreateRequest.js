import * as React from 'react';
import {Card,CardContent,Typography, Grid, FormLabel,Box, Button,Autocomplete,TextField, FormControl,RadioGroup,FormControlLabel,Radio, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material';
import { useRef, useState } from 'react';


  function CreateRequest() {
    const deleteButton = false;
    const PHONE_REGEX = new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
   const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "red",
            "&$error": {
              color: "#db3131",
            },
            
          },
        },
      },
    },
  });
  
  
  const [files, setFiles] = useState([])
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        deleteButton= true;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
    }
    
  
 
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [value, setValue] = React.useState(null);
  const [num, setNum] = React.useState();
  const limitChar = 10;
  const handleChange = (e) => {
    if (e.target.value.toString().length <= limitChar && !PHONE_REGEX.test(e.target.value)) {
      setNum(e.target.value);
    }
  };
  return (
        <>
        <Typography sx={{mb:3,mt:1, fontSize: 22,display:"flex",justifyContent:"center",alignItems:"center" }} color="text.secondary" gutterBottom>Create Request</Typography>
        <Card sx={{border:"2px  solid grey" , mx:2}}>
        <CardContent>
        <ThemeProvider theme={theme}>
        
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            sx={{mb:"10px"}}
            alignItems="center"
          >
            <Grid item sx={{ml:5}}xs={12} sm={2} md={2} lg={2}>
              
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required  >
                Application Type:
              </FormLabel>
              
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                  
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Dr. YSR Aarogyasri Portal"  />
                    )}
                  />
                </Grid>
              </Grid>
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            >
              <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required>
                Parent Organisation:
              </FormLabel>
              
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Dr. YSR Aarogyasri Health Care Trust" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            >
              <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required>
                Department:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Administration" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            sx={{mb:"10px"}}
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required>
                Sub Department:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            >
            <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required>
                Change Request Type:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
              <FormControl sx={{width:"max-content"}}>
                <RadioGroup 
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="New Requirement"
                    control={<Radio />}
                    label="New Requirement" sx={{color:"grey"}}
                  />
                  <FormControlLabel
                    value="Existing Requirement"
                    control={<Radio />}
                    label="Existing Requirement" sx={{color:"grey"}}
                  />
                  
                </RadioGroup>
              </FormControl>
            </Grid>
            </Grid>
            <Grid
            sx={{mb:"10px"}}
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel  id="demo-row-radio-buttons-group-label" required sx={{color:"black"}}>
                CR Title(max 1000 characters):
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    type="text"
                    inputProps={{ maxLength: 1000 }}
                    required
                    fullWidth
                    id="email"
                    multiline
                    name="email"
                    autoComplete="email"
                    size="small" 
                    rows={2}              
                  />
                </Grid>
            </Grid>
            <Grid
            sx={{mb:"10px"}}
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item sx={{ml:5}}  xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" required sx={{color:"black"}} >
                CR Description(max 4000 characters):
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <TextField
                    margin="normal"
                    type="text"
                    inputProps={{ maxLength: 4000 }}
                    required
                    fullWidth
                    id="email"
                    multiline
                    rows={4}
                    name="email"
                    autoComplete="email"
                    size="small"                  
                  />
                </Grid>
            </Grid>
            
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" required sx={{color:"black"}}>
                CR module:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            sx={{mb:"10px"}}
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" required sx={{color:"black"}}>
                Type of Change:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}} required>
                Workflow Category:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                  <Autocomplete
                  required
                    disablePortal
                    onChange={(event, value) => console.log(value)}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: "100%", mt: 1 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select" />
                    )}
                  />
                </Grid>
            </Grid>
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item  sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}}>
                Mobile Number:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
            

                  <TextField
                    margin="normal"
                    fullWidth
                    type="number"
                    onChange={(e) => handleChange(e)}
                    defaultValue={num}
                    value={num}
                    size="small" 
                    InputProps={{
                        inputProps: { min: 1 }
                      }}
                      onKeyPress={(event) => {
                        if (event?.key === '-' || event?.key === '+') {
                          event.preventDefault();
                        }
                      }}
                                     
                  />
                 
                </Grid>
            </Grid>
            <Grid
            container
            sx={{mb:"10px"}}
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
                <Grid item sx={{ml:5}} xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:"black"}}>
                Supporting Documents:
              </FormLabel>
            </Grid>
            <Grid item sx={{ml:30}} xs={12} sm={4} md={4} lg={4}>
                
            

      

      
    
         <Button  component="label" sx={{bgcolor: "white", color: "black",textTransform: 'none'}}><input  type="file" style={{ fontSize:"15px" }} onChange={uploadHandler} multiple /></Button>   
        
                </Grid>
            </Grid>
            
            </ThemeProvider>
            </CardContent>
      </Card>
            <Box
        spacing={2}
        sx={{mt:2,mb:2, display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        <Button sx={{ minWidth: 100, ml: 1 }} variant="contained">
          Create Change Request
        </Button>
        <Button sx={{ minWidth: 100, ml: 1 }} variant="outlined">
          Reset
        </Button>
      </Box>
      <Grid>
        
      </Grid>
          
    </>
    )
}
 
export default CreateRequest;
