import React from 'react';
import styled, { css } from 'styled-components';

import { APP_NAME } from '../../constants/common';
import dimens from '../../constants/dimens';

import ImgMin from 'Images/window/min.png';
import ImgMax from 'Images/window/max.png';
import ImgClose from 'Images/window/close.png';

const ScToolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    z-index: 2;
    font-size: 12px;
    margin-top: 1px;
    margin-left: 1px;
    margin-right: 1px;
    background-color: var(--bg-darkest);
    user-select: none;
    -moz-user-drag: none;
    -webkit-user-select: none;
    ${({ contextMenuShowing }) => css`
      ${contextMenuShowing ? '' : '-webkit-app-region: drag;'}
    `}
`

const ToolbarTitle = styled.div`
    font-size: 16px;
    margin-left: ${dimens.spacerS}px;
    font-family: 'Dancing Script', cursive;
    letter-spacing: 1.5px;
`

const WindowControlWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    font-family: "Segoe UI";
    font-size: 10px;
    -webkit-app-region: no-drag;
`

const WindowControl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 32px;
    border: none;
    &:hover {
        background-color: var(--control-hover);
    }
    &:active {
        background-color: var(--control-active);
    }
    img {
        height: 10px;
        width: 10px;
    }
`

const WindowControlClose = styled(WindowControl)`
    &:hover {
        background-color: #E81123;
    }
`

const Toolbar = ({ contextMenuShowing }) => {
  return (
    <ScToolbar contextMenuShowing={contextMenuShowing}>
        <ToolbarTitle id="title">
          {APP_NAME}
        </ToolbarTitle>

        <WindowControlWrapper>
            <WindowControl 
              id="window_min" 
              onClick={() => window.onMinimize()}
            >
              <img src={ImgMin} alt="minimize" />
            </WindowControl>
            
            <WindowControl 
              id="window_max" 
              onClick={() => window.onMaximize()}
            >
              <img src={ImgMax} alt="maximize" />
            </WindowControl>

            <WindowControlClose 
              id="window_close" 
              onClick={() => window.onClose()}
            >
              <img src={ImgClose} alt="exit" />
            </WindowControlClose>
        </WindowControlWrapper>
    </ScToolbar>
  );
};

export default Toolbar;
