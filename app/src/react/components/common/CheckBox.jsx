import React from 'react';
import styled from 'styled-components';
import { 
  MdOutlineCheckBoxOutlineBlank as CheckOff, 
  MdOutlineCheckBox as CheckOn 
} from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckBox = ({ checked = false, onChecked = () => {}}) => {

  return (
    <Wrapper onClick={() => onChecked(!checked)}>
      {checked ? <CheckOn /> : <CheckOff />}
    </Wrapper>
  );
};

export default CheckBox;
