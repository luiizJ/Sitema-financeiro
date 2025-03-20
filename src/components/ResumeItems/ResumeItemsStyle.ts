import Styled from 'styled-components';

export const Container = Styled.div`
  flex: 1;
`;
export const Title = Styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;

`;
export const Info = Styled.div<{color?: string}>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color ?? '#000'};

`;