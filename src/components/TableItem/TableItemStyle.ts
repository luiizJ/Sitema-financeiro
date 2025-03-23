
import { device } from "@/app/breakpoints";
import styled from "styled-components";

export const TableLine = styled.tr`
  border-bottom: 1px solid #444;
   @media ${device.tablet} {
    padding-bottom: 10px
  }
`;

export const TableData = styled.td`
  padding: 12x;
  text-align: left;
  font-size: 18px;
  @media ${device.tablet} {
  padding-top: 14px
}
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  font-weight: bold;
  color: ${(props) => props.color};
`;
