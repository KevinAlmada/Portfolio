import styled from '@emotion/styled'
import React from 'react'

const SectionContact = styled.section`
padding: 25px 0px;
background-color:#FEC260 ;
color:#A12568;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Buttons = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:25px;
@media screen and (min-width:500px) {
    flex-direction: row;
    justify-content: space-evenly;
    };
`;

const LinksContact = styled.a`
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 23px;
    color:#A12568;
    padding: 3px 5px;
    border: #A12568 2px solid;
    transition: all 0.5s ease-out;
    &:hover {
        box-shadow: 3px 9px 15px 0px rgba(136,22,22,0.65);
-webkit-box-shadow: 3px 9px 15px 0px rgba(136,22,22,0.65);
-moz-box-shadow: 3px 9px 15px 0px rgba(136,22,22,0.65);
  };
  @media screen and (min-width:500px) {
    font-size: 30px;
    width: 25%;
    height: 100px;
    flex-direction: column;
    };
`;
const Contact = () => {
    return (
        <SectionContact>
            <Buttons>
                <LinksContact href="/CV_KevinIvanAlmada.pdf" download>Resume <i className="fas fa-file-download"></i></LinksContact>
                <LinksContact href="https://github.com/KevinAlmada" >GitHub <i className="fab fa-github-alt"></i></LinksContact>
                <LinksContact href="https://www.linkedin.com/in/kevin-almada/" >LinkedIn <i className="fab fa-linkedin-in"></i></LinksContact>
            </Buttons>
        </SectionContact>
    )
}

export default Contact
