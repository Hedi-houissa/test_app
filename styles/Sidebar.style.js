import styled from 'styled-components';
import { device } from '@styles/mediaQueriesBreakpoints';


export const Content = styled.div`
background-color:${({ backgroundColor }) => backgroundColor};
width: ${({ width }) => width||'20%'};  
height: ${({ height }) => height||'20%'};  
margin: ${({ margin }) => margin || '1%'};
padding: ${({ padding }) => padding || '1%'};
font-size: ${({ fontSize }) => fontSize || '25px'};
text-align: ${({ textAlign }) => textAlign || 'left'};
color: ${({color}) => color||'#ffffff'};

`;

