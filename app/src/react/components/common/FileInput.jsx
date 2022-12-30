import React from 'react';
import styled from 'styled-components';
import { 
  FcLandscape as ImageIcon, 
} from 'react-icons/fc';
import { useDropzone } from 'react-dropzone';

const ScValue = styled.div`
  font-size: 12px;
  padding-right: 16px;
  color: rgb(220, 220, 220);
`;

const ScIcon = styled(ImageIcon)`
  width: 12px;
  height: 12px;
  margin-left: auto;
  filter: brightness(0.8);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgba(100, 100, 100, 0.5);
  padding: 0 8px;
  
  &:focus {
    outline: none;
  }
  &:hover > ${ScValue} {
    color: white;
  }
  &:hover > ${ScIcon} {
    filter: brightness(1);
  }
`;

const FileInput = ({ value = {}, onFileChanged = () => {}}) => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({accept: 'image/*'});

  if (acceptedFiles && acceptedFiles.length) {
    console.log(acceptedFiles);
  }

  const {
    name = '',
    path = '',
  } = value;

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />
      <ScValue>{name}</ScValue>
      <ScIcon />
    </Wrapper>
  );
};

export default FileInput;
