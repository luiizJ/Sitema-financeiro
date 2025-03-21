import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  color: #333;
  width: 50%;
  height: 100%;
`;

export const Chart = styled.div`
  width: 60%;
    height: 100%;

`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColorBox = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
`;
