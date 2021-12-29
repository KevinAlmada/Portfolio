import React from 'react'
import styled from '@emotion/styled'
const HeaderStyles = styled.header`
display: flex;
justify-content: center;
background-color: #2A0944;
color: white;
align-items: center;
`;

const Header = () => {
    return (
        <HeaderStyles>
         <div className='divKia'><div className='outSquare'></div><div className='innerSquare'></div><span className='kiaSquare'>KIA</span></div>
        </HeaderStyles>
    )
}

export default Header
