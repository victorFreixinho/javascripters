import React from 'react';
import {useDropzone} from 'react-dropzone';
import {useCallback} from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setCsvData } from "../states/modules/diseases";

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function UploadData(props) {
  const dispatch = useDispatch();
  const handleSubmit = (binaryStr) => {
    dispatch(
      setCsvData(binaryStr)
    );
  };

  const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result
          handleSubmit(binaryStr)
        }
        reader.readAsArrayBuffer(file)
      })
      
    }, [])
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({onDrop});
  
  return (
    <div className="App">
    <TopBar />

    <div className="container">
      <Typography variant="h5" component="div" className="mt-5 mb-3" align="justify">
        Upload de CSV
      </Typography>
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Arraste os arquivos aqui! Ou clique para selecionar os arquivos.</p>
      </Container>
    </div>
  </div>
  );
}

<UploadData/>
export default UploadData

