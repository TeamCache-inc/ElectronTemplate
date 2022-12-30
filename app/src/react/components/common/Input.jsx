import React, { forwardRef } from "react";
import styled from 'styled-components';
import Theme from "../../constants/colors";

const ScInput = styled.input`
  height: 40px;
  font-size: 12px;
  background-color: rgba(75,75,75, 0.5);
  border: none;
  border-radius: 20px;
  outline: none;
  color: lightgray;
  padding: 0px 20px;

  &:focus {
    color: ${Theme.primary};
  }
`;

const Input = forwardRef(({ ...rest }, ref) => {
  return <ScInput ref={ref} { ...rest }/>
});

export default Input;
