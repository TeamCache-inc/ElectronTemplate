import React from 'react';
import styled from 'styled-components';
import './App.css';

import Theme from './constants/colors';
import Toolbar from './components/window/Toolbar';

// const { ipcRenderer } = window;

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Theme.bg};
    width: 100vw;
    height: 100vh;
    color: white;
    overflow: hidden;
`
const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    background-color: ${Theme.bg};
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const App = () => {

    return (
        <WindowWrapper>
            <AppWrapper>
                <Toolbar />
                <ContentWrapper>
                    hello wrld
                </ContentWrapper>
            </AppWrapper>
        </WindowWrapper>
    );
}

export default App;
