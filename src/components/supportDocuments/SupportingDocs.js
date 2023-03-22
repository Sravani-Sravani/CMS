import { Button, FormLabel, Grid, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import SimpleBackdrop from '../../pages/ViewCR/BackDrop';

const SupportingDocs = () => {
    const aRef = useRef(null);

    const [files, setFiles] = useState([]);

  const handleFileSelect = (e) =>{
    const selectedFile = e.target.files[0];
    setFiles([...files, selectedFile]);
    aRef.current.value = '';
  }

  const handleFileUpload = (e) => {
    console.log(files);
    //TODO (upload files to database) Logic 
  }

  
  const handlePreview = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank', 'noreferrer')
  }
  
  const handleFileRemove =(index) =>{
    const newFiles = [...files];
    newFiles.splice(index,1);
    setFiles(newFiles);
    aRef.current.value = '';
  }
  return (
    <>
        <Grid item xs={12}  sm={6} md={6} lg={6} mt={0.5}>
            <Grid item xs={12} sm={6} md={6} lg={6} >
            <FormLabel id="demo-row-radio-buttons-group-label"  required  sx={{mb:"8px"}}>
                Supporting Documents:
            </FormLabel>
            </Grid>
            {files.map((file, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant='body2'>File {index+1}: {file.name}</Typography>
                {/* file !== '' <Button onClick={() => handlePreview(file)} >Preview</Button>?<SimpleBackdrop imageURL ={file} /> : <></> */}
                {
                file !== '' ? <Button onClick={() => handlePreview(file)} >Preview</Button>:<SimpleBackdrop imageURL ={file} /> }
                </Grid>
            ))}
            <input type="file" ref={aRef} onChange={handleFileSelect} />
            <Grid item sx={{mt:0.5}}>
                <Button  variant='outlined' sx={{marginRight:'5px'}} size='small' onClick={handleFileRemove} >Remove File</Button>
                <Button  variant='contained' sx={{marginRight:'5px'}} size='small' onClick={handleFileUpload}>Add</Button>
                {/* <Button  variant='contained' size='small' onClick={removeFileUpload}>Delete</Button> */}
            </Grid>
        </Grid> 
    </>
  )
}

export default SupportingDocs;
