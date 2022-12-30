import React from 'react';
import styled from 'styled-components';
import Theme from '../../constants/colors';
import Tab from './Tab';

const ScTabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px ${Theme.shadow};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Tabs = ({ tabs, selectedTab, onTabSelected = () => {}, backgroundColor }) => {
    return (
        <ScTabs backgroundColor={backgroundColor}>
            {tabs.map((tab, i) => {
                const { title, icon } = tab;
                return (
                    <Tab
                        key={`Tabs_Tab_${title}`}
                        title={title}
                        icon={icon}
                        selected={selectedTab === i}
                        onTabSelected={() => onTabSelected(i)}
                    />
                );
            })}
        </ScTabs>
    );
};

export default Tabs;
