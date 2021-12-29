import styled from '@emotion/styled';
import React from 'react';
const AboutMeInfoStyled = styled.div`
width: 300px;
margin-bottom: 100px;
`;
const PStyled = styled.p`
margin-top:20px;
`;
const AboutMeInfo = () => {
    return (
        <AboutMeInfoStyled>
            <h2>ABOUT ME</h2>
            <hr />
            <PStyled>Hi stranger, my name is Kevin Ivan Almada (K.I.A.), im a web developer from Buenos Aires Argentina. I love programming, series and videogames.</PStyled>
        </AboutMeInfoStyled>
    )
}

export default AboutMeInfo
