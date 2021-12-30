import styled from '@emotion/styled'
import React, { useEffect } from 'react'
const Arrow = styled.a`
    font-size:40px ;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items :center ;
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 10px;
    text-decoration: none;
    color: #FEC260;
    background-color:#2A0944 ;
    border : 3px solid #3B185F ;
    transition: all ease 0.5s;
    opacity: 0;
    @media screen and (min-width:678px) {
        width: 60px;
        height: 60px;
        bottom: 50px;
        right: 50px;
    };
`;
const ToTop = () => {
    
    useEffect(() => {
        let flecha = document.querySelector("#arrow")
        console.log(flecha);
         window.addEventListener("scroll", () => {
             if(window.scrollY <= 100){
                 flecha.style.opacity= "0"
            }else {
                 flecha.style.opacity="1"
            }})
        
    }, []) 
    return (
        <Arrow  href="#kia" id="arrow">
            <i className="fas fa-arrow-up"></i>
        </Arrow>
    )
}

export default ToTop
