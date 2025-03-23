import styled from 'styled-components';
import { device } from './breakpoints';

export const Container = styled.div`
  
`;

export const Header = styled.div`
  background-color: #333;
  height: 95px;
  font-weight: bold;
  font-size: 14px;
`;

export const HeaderText = styled.h1`
margin: 0;
padding: 0;
color: #FFF;
padding-top: 30px;
`;

export const Body = styled.div`
margin: 0 auto;
max-width: 100%;
margin-bottom: 30px;
`;

export const NoGrid = styled.div`
display: flex;
gap: 15px;
margin-bottom: 20px;
  @media ${device.tablet} {
    /* Ajustes para telas acima de 768px */
    flex-direction: column;
    align-items: center;
  }
`;