import React from 'react'
import styled from '@emotion/styled'
import NavBar from './NavBar';
const HeaderStyles = styled.header`
display: flex;
justify-content: space-between;
background-color: #2A0944;
color: white;
align-items: center;
`;
const SpanKia = styled.span`
    margin-left: 5%;
    font-size: 48px;
`;
const Header = () => {
    return (
        <HeaderStyles>
         <SpanKia>K.I.A.</SpanKia>
         <NavBar /> 
        </HeaderStyles>
    )
}

export default Header
