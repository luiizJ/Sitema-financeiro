
import styled from "styled-components";

export const TableLine = styled.tr`
  border-bottom: 1px solid #444;
`;

export const TableData = styled.td`
  padding: 12px;
  text-align: left;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  font-weight: bold;
  color: ${(props) => props.color};
`;
