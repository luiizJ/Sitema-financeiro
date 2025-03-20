import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 20px;
  color: #333;
`;

export const TableHeaderColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  padding: 10px 0;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-size: 14px;
  font-weight: bold;
`;