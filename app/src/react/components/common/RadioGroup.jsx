import React from 'react';
import styled from 'styled-components';
import Theme from '../../constants/colors';

const ScRadioTitle = styled.span`
    font-size: 12px;
    margin-right: 12px;
`;

const ScRadioCircle = styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: transparent;

    transition: background-color 200ms ease-in-out;
`;

const ScRadio = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${ScRadioCircle} {
        background-color: ${({ selected }) => selected && Theme.primary};
        border: ${({ selected }) => selected && '1px solid transparent'};
    }
    &:hover > ${ScRadioCircle} {
        background-color: ${({ selected }) => !selected && 'rgba(255,255,255,0.05)'};
    }
`;

const ScRadioGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    ${ScRadio} {
        margin-right: 48px;
    }
`;

const RadioGroup = ({ options, selectedIndex = 0, onRadioSelected }) => {
    return (
        <ScRadioGroup>
            {options.map((option, i) => (
                <Radio
                    key={`RadioGroup_Radio_${option}`}
                    title={option} 
                    selected={selectedIndex === i}
                    onRadioSelected={() => onRadioSelected(i)}
                />
            ))}
        </ScRadioGroup>
    );
}

const Radio = ({ title, selected, onRadioSelected }) => {
    return (
        <ScRadio selected={selected} onClick={onRadioSelected}>
            <ScRadioTitle>{title}</ScRadioTitle>
            <ScRadioCircle />
        </ScRadio>
    );
};

export default RadioGroup;
