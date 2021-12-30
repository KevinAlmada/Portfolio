import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
import CardProjects from './CardProjects'
import styled from '@emotion/styled'

const proyectos = [
    {titleEN:"KDDS",title:"KDDS",description:"E-commerce de una optica",img:"/img/kdds.png",url:"https://github.com/KevinAlmada/grupo_1_KDDS",descriptionEN:"E-commerce of eyeglass shop."},
    {titleEN:"Servitronic",title:"Servitronic",description:"Pagina que ofrece servicios",img:"/img/servitronic.png",url:"https://servitronic.com.ar",descriptionEN:"Page that offers services."},
    {titleEN:"Insurance",title:"Seguros",description:"Cotizador de seguros",img:"/img/seguros.png",url:"https://compassionate-wiles-f99f0c.netlify.app",descriptionEN:"Insurance quote"},
    {titleEN:"Vet",title:"Veterinaria",description:"Administrador de turnos",img:"/img/veterinaria.png",url:"https://focused-allen-cda5fc.netlify.app",descriptionEN:"Shift Manager"}]
const CardContainer = () => {
    const {language} = useContext(LanguageContext)
    const Container = styled.div`
    @media screen and (min-width:678px) {
    display: flex;
    justify-content: space-around;
    align-items: start;
    };
    `;
    return (
        <Container>
            {
                proyectos.map((proyecto,i) => (
                    <CardProjects key={i} title={language === true ?proyecto.title : proyecto.titleEN}  description={language === true ?proyecto.description : proyecto.descriptionEN} img={proyecto.img} url={proyecto.url}/>
                ))
            }
        </Container>
    )
}

export default CardContainer
