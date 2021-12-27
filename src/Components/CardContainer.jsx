import React from 'react'
import CardProjects from './CardProjects'
import styled from '@emotion/styled'

const proyectos = [{title:"test",description:"testDescription",img:"/img/descarga (2).png"},{title:"test",description:"testDescription",img:"/img/descarga (2).png"},{title:"test",description:"testDescription",img:"/img/descarga (2).png"},{title:"test",description:"testDescription",img:"/img/descarga (2).png"}]
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
                    <CardProjects key={i} title={proyecto.title} description={proyecto.description} img={proyecto.img}/>
                ))
            }
        </Container>
    )
}

export default CardContainer
