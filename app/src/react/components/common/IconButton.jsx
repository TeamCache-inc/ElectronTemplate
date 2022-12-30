import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => Math.floor(size / 0.66)}px;
    height: ${({ size }) => Math.floor(size / 0.66)}px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    margin-left: ${({ shovedRight }) => shovedRight ? 'auto' : 0};
    font-size: ${({ size }) => size || '16'}px;

    &:hover {
      ${({ soft, disabled }) => !soft && !disabled ? css`
        background-color: rgba(255, 255, 255, 0.2);
      ` : null}
    }
    &:active {
      ${({ soft, disabled }) => !soft && !disabled ? css`
        background-color: rgba(255, 255, 255, 0.4);
      ` : null}
    }

    > svg {
      ${({ soft, disabled }) => soft || disabled ? css`
        color: gray;
        transition: color 0.2s ease-in-out;
      ` : null}
    }

    &:hover > svg {
      ${({ soft, hoverColor, disabled }) => soft && !disabled ? css`
        color: ${hoverColor || 'white'};
      ` : null}
    }
`;

const IconButton = ({ 
  children, 
  shovedRight, 
  soft, 
  hoverColor, 
  disabled,
  size=16,
  onClick = () => {},
  ...rest 
}) => {
  return (
    <Wrapper 
      {...rest} 
      size={size}
      shovedRight={shovedRight} 
      soft={soft} 
      hoverColor={hoverColor} 
      disabled={disabled} 
      onClick={(e) => {
        if (!disabled) {
          onClick(e);
        }
      }}
    >
      {children}
    </Wrapper>
  )
}

export default IconButton;
