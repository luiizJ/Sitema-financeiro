import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  height: 150px;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  color: #000;
  font-weight: bold;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  font-size:20px;
  justify-content: space-around;
`;