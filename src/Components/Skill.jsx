import styled from '@emotion/styled';
import React from 'react'

const Skill = ({imgName,name}) => {
    const SkillArticle = styled.article`
    display: flex;
    flex-direction: column;
    width: 120px;
    align-items: center;
    aspect-ratio: 1/1;
    @media screen and (min-width:750px) {
        width: 155px;
    };
    @media screen and (min-width:900px) {
        width: 180px;
    };
    `;
    const SkillImg = styled.img`
    width :60%;
    `;
    return (
        <SkillArticle>
          <SkillImg src={`./img/${imgName}`} alt="" />  
          <span>{name}</span>
        </SkillArticle>
    )
}

export default Skill
