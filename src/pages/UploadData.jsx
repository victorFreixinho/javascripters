import React from "react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import Typography from "@mui/material/Typography";
import Breadcrumb from "../components/common/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { setCsvData } from "../states/modules/diseases";

import "../styles/Dropzone.css";

//insert this into border-color property
const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

function UploadData(props) {
  const dispatch = useDispatch();

  // const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
  //   useDropzone({});

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const handleSubmit = (binaryStr) => {
    dispatch(setCsvData(binaryStr));
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log("binary str: ", binaryStr);
        handleSubmit(binaryStr);
      };
      reader.readAsBinaryString(file);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  return (
    <>
      <TopBar />
      <Breadcrumb title="Upload de CSV" current="Upload de CSV" />
      <div className="container-fluid">
        <div className="row mx-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5>Upload de CSV</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {/* <div className="dropzone-container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input className="input-zone" {...getInputProps()} />
                    <div className="text-center">
                      {isDragActive ? (
                        <p className="dropzone-content">
                          Release to drop the files here
                        </p>
                      ) : (
                        <p className="dropzone-content">
                          Drag’n’drop some files here, or click to select files
                        </p>
                      )}
                      <button type="button" onClick={open} className="btn">
                        Click to select files
                      </button>
                    </div>
                    <aside>
                      <ul>{files}</ul>
                    </aside>
                  </div>
                </div> */}
                <div className="dropzone-simple-container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    {" "}
                    <input {...getInputProps()} />
                    <p>
                      Arraste os arquivos aqui! Ou clique para selecionar os
                      arquivos.
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <Typography variant="h7" component="div" align="justify">
                    Para inserir novos dados no banco, insira acima um arquivo
                    no formato .tsv cujas linhas sejam como na forma:
                  </Typography>
                  <br />
                  <Typography variant="h7" component="div" align="center">
                    {
                      "UF  NomeDaCidade  CodigoIBGE  Latitude  Longitude  NomeDaDoenca  DataDeOcorrencia"
                    }
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h7" component="div" align="justify">
                    Segue abaixo um exemplo:
                  </Typography>
                  <Typography variant="h7" component="div" align="center">
                    {
                      "GO  Abadia de Goiás  520005  -16,7573  -49,4412  Dengue  01-01-1999"
                    }
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

<UploadData />;
export default UploadData;
