import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useFormik } from "formik";
import styled from "styled-components";
import {InputAdornment} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState , useEffect} from 'react';
import SimpleBackdrop from './ViewCR/BackDrop';


import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import noImage from "../assets/images/noImage.jpg";
import PageTitle from '../layouts/PageTitle';
import { lt } from 'date-fns/locale';
import SupportingDocs from '../components/supportDocuments/SupportingDocs';


const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
function CreateRequest1() {
  // const aRef = useRef(null);
  
  const options = [
    { label: 'One', id: "1" },
    { label: 'Two', id: "2" },
  ];

  const workflowOptions = [  
    { label: "Technical Issues", id: "1" },
    { label: "Normal Change Request", id: "2" },
    { label: "Production Support Service Request", id: "3" },
  ];
      
  const [show, setShow] = useState({label:"", id:""});
  const handleChange=(e, selectedValue) =>{
    // const getField = e.target.value;
    // console.log(getField);
    // console.log(selectedValue);
    setShow(selectedValue);
  }
  // const [addFile, setAddFile] = useState(false);
  // const handleAddItem =()=>{
  //   // setAddFile(true)
  //   // setAddFile([...addFile,{addItem:""}])
  //   if(addFile == false){
  //     setAddFile(true);
  //   }
    
  // }
  // const handleRemoveItem =() =>{
  //   setAddFile(false);
  // }

  

  // const clearData=()=>{
  //   setBaseFile('')
  //   aRef.current.value = null;
  // }
  
  // const [fileUploadCount, setFileUploadCount] = useState(1);
  // // const addFileUpload = React.useCallback(() => {
  // //   setFileUploadCount(count => count + 1);
  // // });
  // const removeFileUpload = React.useCallback(() => {
  //   setFileUploadCount(count => Math.max(1, count - 1));
  // });
  // const [baseFile,setBaseFile] = useState('');
  // const handleFileChange = React.useCallback((e) => {
  //     var result = URL.createObjectURL(e.target.files[0])
  //     setBaseFile(result)
  //     console("Basefile is",result.size());

      
  //     //   //setFile(URL.createObjectURL(e.target.files[0]));
  //     //   let idCardBase64 = '';
  //     //   (test(e.target.files[0], (result) => {
  //     //     idCardBase64 = result;
  //     //     setBaseFile(result);
        
  //     //     // console.log(idCardBase64);
  //     //     // setFileUrl(idCardBase64);
  //     //     //sendPrivateFile(idCardBase64,event.target.files[0].name, event.target.files[0].type);
  //     // })
  //     // );  
  // }, [setBaseFile, baseFile]);

  // const fileUploadJSX = React.useMemo(() => {
  //   let tempFileUploadJSX = []
  //   for (let i = 0; i < fileUploadCount; i++) {
  //     tempFileUploadJSX.push(
  //       <div key={`fileUpload_${i}`} component="label" sx={{bgcolor: "white", color: "black",textTransform: 'none'}}  >    

  //         <input type="file" ref={aRef} onChange={handleFileSelect} />
  //         { //Check if message failed
  //           (baseFile !== '')
  //             // ? <a target="_blank" href={baseFile}><Button><VisibilityIcon />Preview</Button></a>
  //             ? <SimpleBackdrop imageURL={baseFile}/>
  //             : <></>
  //         }
  //       </div>
  //     );
  //   }
  //   return tempFileUploadJSX;
  // }, [fileUploadCount, handleFileChange, baseFile]);

  // const [files, setFiles] = useState([]);

  // const handleFileSelect = (e) =>{
  //   const selectedFile = e.target.files[0];
  //   setFiles([...files, selectedFile]);
  //   aRef.current.value = '';
  // }

  // const handleFileUpload = (e) => {
  //   console.log(files);
  //   //TODO (upload files to database) Logic 
  // }

  
  // const handlePreview = (file) => {
  //   const fileURL = URL.createObjectURL(file);
  //   window.open(fileURL, '_blank', 'noreferrer')
  // }
  
  // const handleFileRemove =(index) =>{
  //   const newFiles = [...files];
  //   newFiles.splice(index,1);
  //   setFiles(newFiles);
  //   aRef.current.value = '';
  // }

    

  const [at, setAt] = React.useState('');
  const [po, setPo] = React.useState('');
  const [dept, setDept] = React.useState('');
  const [sub, setSub] = React.useState('');
  const [rtn, setRtn] = React.useState(null);
  const [rte, setRte] = React.useState(null);
  const [crt, setCrt] = React.useState('');
  const [crd, setCrd] = React.useState('');
  const [crm, setCrm] = React.useState('');
  const [tc, setTc] = React.useState('');
  // const [wfc, setWfc] = React.useState('');
  const [cs, setCs] = React.useState('');
  const [mno, setMno] = React.useState('');
  
  const resetForm = () =>{
    setAt("")
    setPo("")
    setDept("")
    setSub("")
    setRtn(null)
    setRte(null)
    setCrt("")
    setCrd("")
    setCrm("")
    setTc("")
    // setWfc("")
    setShow("")
    setCs("")
    setMno("")
    // aRef.current.value = null;
    
  }
  
  const name = 'Application Details'
  return(
    <>  
        <Box py={1}>
          <Typography variant='h5'>Create Request</Typography>
        </Box>
        <Card>
            <CardContent>
            
              <PageTitle name={name}/>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
                <Grid item xs={12} sm={4} md={3} lg={3} required>
               <Autocomplete
                  disablePortal
                  
                  value={at}
                    onChange={(event, newValue)=>{
                      setAt(newValue);
                    }}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Application Type" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                
                  value={po}
                    onChange={(event, newValue)=>{
                      setPo(newValue);
                    }}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Parent Organisation" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  value={dept}
                    onChange={(event, newValue)=>{
                      setDept(newValue);
                    }}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Department" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                  disablePortal
                  value={sub}
                  onChange={(event, newValue)=>{
                    setSub(newValue);
                  }}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Sub Department" required/>}
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
             
             <Grid item xs={12} sm={2} md={2} lg={2}>
            <FormLabel id="demo-row-radio-buttons-group-label" required >
                  Change Request Type:
                </FormLabel>
            </Grid>
            <Grid item  xs={12} sm={10} md={10} lg={10}>
              <FormControl sx={{width:"max-content",ml:2,mt:2}} >
                
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group" 
                >
                  <FormControlLabel
                    value={rtn}
                    defaultValue={rtn}
                    onChange={(newValue) => setRtn(newValue.target.value)}

                    control={<Radio />}
                    label="New Requirement"
                  />
                  <FormControlLabel
                    value={rte}
                    defaultValue={rte}
                    onChange={(newValue) => setRte(newValue.target.value)}

                    control={<Radio />}
                    label="Existing Requirement"
                  />
                  
                </RadioGroup>
              </FormControl>
              
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
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
               value={crt}
               onChange={(newValue) => setCrt(newValue.target.value)}

                multiline
                required
                fullWidth
                id="email"
                label="CR Title(max 1000 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                value={crd}
                onChange={(newValue) => setCrd(newValue.target.value)}

                multiline
                required
                fullWidth
                id="email"
                label="CR Description(max 4000 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
                  disablePortal
                  value={crm}
                    onChange={(event,value) => {setCrm(value)}}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="CR Module" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
                  disablePortal
                  value={tc}
                    onChange={(event,value) => {setTc(value)}}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="Type of Change" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField
                margin="normal"
                type="number"
                required
                fullWidth
                value={mno}
                onChange={(newValue) => setMno(newValue.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                     +91
                     </InputAdornment>,
                }}
                  onKeyPress={(e) => {
                    
                    if (e?.key === '-' || e?.key === '+' ) {
                      e.preventDefault();
                    }

                  }}
                  
                
                label="Mobile Number"
                id="combo-box-demo"
                name="email"
                autoComplete="email"
                size="small"
                sx={{ mt:0 }}
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* <Autocomplete
                  disablePortal
                    // onChange={(event,value) => {setWfc(value)}}
                    // value={wfc}
                  value={show}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={workflowOptions}
                  onChange={handleChange}
                  // isOptionEqualToValue={(option, value) => option.id === value.value}
                  
                  renderInput={(params) => <TextField {...params} label="Workflow Category" required/>}
                /> */}
                <Autocomplete
                  disablePortal
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  onChange={handleChange}
                  options={workflowOptions}
                  value={show}
                  // sx={{ width: "100%"}}
                  
                  renderInput={(params) => (
                    <TextField {...params} label="Workflow Category"  required/>
                  )}
                />
                {/* <select name ="workflow category" margin="normal" onChange={(e) => (handleChange(e))} required>
                  <option>Workflow Category</option>
                  <option value='1'>Technical Issues</option>
                  <option value='2'>Normal Change Request</option>
                  <option value='3'>Production Support Service Request</option>
                </select> */}
            </Grid>
            {
              show?.id === '3' && (
                <Grid item xs={12} sm={6} md={6} lg={6}>
              
                <Autocomplete
                      disablePortal
                      value={cs}
                        onChange={(event,value) => {setCs(value)}}
    
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                      options={options}
                      
                      renderInput={(params) => <TextField {...params} label="CR Severity" required/>}
                    />
                </Grid>
              )
            }
            
             {/* <Grid item xs={12} sm={6} md={6} lg={6}>
              
            <Autocomplete
                  disablePortal
                  value={cs}
                    onChange={(event,value) => {setCs(value)}}

                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={options}
                  
                  renderInput={(params) => <TextField {...params} label="CR Severity" required/>}
                />
               
                
            </Grid>   */}
            
             
            
            
            </Grid>
            
                
                {/* <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={2} md={2} lg={2}>
            <FormLabel id="demo-row-radio-buttons-group-label" required >
                  Supporting Documents:
                </FormLabel>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10}>
                <Button  component="label" sx={{bgcolor: "white", color: "black",textTransform: 'none',ml:2}}><input  type="file" ref={aRef} style={{ fontSize:"15px" }}  multiple /></Button>   
            </Grid>
            </Grid> */}
            <Grid item xs={12}  sm={6} md={6} lg={6} mt={0.5}>
              
                <SupportingDocs />
            </Grid>
            
            </CardContent>
        </Card>
        <Box
        
        sx={{   float: "right" }}
      >
        <Button onClick={() => resetForm() } variant="outlined" sx={{mr:2}}>
          Reset
        </Button>
        <Button  variant="contained">
        Create Change Request
        </Button>
      </Box>
        </>
    )
}
export default CreateRequest1;
