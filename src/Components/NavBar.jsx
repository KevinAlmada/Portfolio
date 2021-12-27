import styled from '@emotion/styled'
import React from 'react'
const Nav = styled.nav`
display: none;
width: 30%;
margin-right: 30px;
@media screen and (min-width:678px) {
    display: block;
};
`;
const Links = styled.li`
    font-weight: 100;
    @media screen and (min-width:678px) {
    font-size: 16px;
    };
    @media screen and (min-width:900px) {
    font-size: 20px;
    };
`;
const UnorderedList = styled.ul`
display: flex;
justify-content: space-between;
`;
const NavBar = () => {
    return (
        <Nav>
            <UnorderedList>
                <Links>SOBRE MI</Links>
                <Links>PROYECTOS</Links>
                <Links>CONTACTO</Links>
            </UnorderedList>
        </Nav>
    )
}

export default NavBar
