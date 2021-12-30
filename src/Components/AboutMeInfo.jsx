import styled from '@emotion/styled';
import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
const AboutMeInfoStyled = styled.div`
width: 300px;
margin-bottom: 100px;
`;
const PStyled = styled.p`
margin-top:20px;
`;
const AboutMeInfo = () => {
    const {language} = useContext(LanguageContext)
    return (
        <AboutMeInfoStyled>
            <h2>{language === true ? "SOBRE MI":"ABOUT ME"}</h2>
            <hr />
            <PStyled>
                {language === true ?
                " Hola extraño, mi nombre es Kevin Ivan Almada (K.I.A.), soy un desarrollador web de Buenos Aires , Argentina . Me encanta programar , ver series y jugar videojuegos.":
                "Hi stranger, my name is Kevin Ivan Almada (K.I.A.), im a web developer from Buenos Aires, Argentina. I love programming, series and videogames."}
            </PStyled>
        </AboutMeInfoStyled>
    )
}

export default AboutMeInfo
