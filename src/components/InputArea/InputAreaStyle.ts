import styled from 'styled-components';

const primaryColor = '#ADD8E6';
const primaryDark = '#0000FF';
const borderColor = '#CCC';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px ${borderColor};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    color: black;
`;

export const InputLabel = styled.label`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputTitle = styled.div`
    font-weight: bold;
`;

const sharedInputStyles = `
    width: 100%;
    height: 35px;
    padding: 5px;
    border: 1px solid ${primaryColor};
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
`;

export const Input = styled.input`
    ${sharedInputStyles}
`;

export const Select = styled.select`
    ${sharedInputStyles}
`;

export const Button = styled.button`
    ${sharedInputStyles}
    background-color: ${primaryColor};
    color: black;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${primaryDark};
        color: white;
    }
`;
