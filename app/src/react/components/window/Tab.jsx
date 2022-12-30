import React from 'react';
import styled from 'styled-components';
import Theme from '../../constants/colors';

const ScTab = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    font-size: 16px;
    border-bottom: 1px solid ${Theme.border};
    cursor: pointer;


    color: ${({ selected }) => selected ? 'rgba(255,255,255)' : 'rgba(150,150,150)'};
    &:hover {
        color: ${({ selected }) => !selected && 'rgba(200,200,200)'};
    }
`;

const TabSelector = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: white;
`;

const Tab = ({ title, icon: Icon, selected, onTabSelected }) => {
    return (
        <ScTab role="img" title={title} selected={selected} onClick={onTabSelected} icon={Icon}>
            <Icon size={24} />
            {selected && <TabSelector />}
        </ScTab>
    );
};

export default Tab;
