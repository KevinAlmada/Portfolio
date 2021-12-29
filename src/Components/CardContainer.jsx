import React from 'react'
import CardProjects from './CardProjects'
import styled from '@emotion/styled'

const proyectos = [
    {title:"KDDS",description:"E-commerce de una optica",img:"/img/descarga (2).png",url:"https://github.com/KevinAlmada/grupo_1_KDDS"},
    {title:"Servitronic",description:"Pagina que ofrece servicios",img:"/img/descarga (2).png",url:"https://servitronic.com.ar"},
    {title:"Seguros",description:"Cotizador de seguros",img:"/img/descarga (2).png",url:"https://compassionate-wiles-f99f0c.netlify.app"},
    {title:"Veterinaria",description:"Administrador de turnos",img:"/img/descarga (2).png",url:"https://focused-allen-cda5fc.netlify.app"}]
const CardContainer = () => {
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
                    <CardProjects key={i} title={proyecto.title} description={proyecto.description} img={proyecto.img} url={proyecto.url}/>
                ))
            }
        </Container>
    )
}

export default CardContainer
