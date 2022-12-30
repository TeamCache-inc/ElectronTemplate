import React from 'react';
import styled from 'styled-components';

const ScButton = styled.button`
    outline: none;
    padding: 12px 40px;
    background-color: transparent;
    border: 2px solid gray;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    font-size: 14px;
    font-family: var(--font-primary);

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
    &:active {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Button = ({ children, ...rest}) => {
    return (
        <ScButton {...rest}>{children}</ScButton>
    );
}

export default Button;
