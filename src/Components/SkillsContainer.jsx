import styled from '@emotion/styled'
import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
import Skill from './Skill'
const skills =[
    {name:"React.js",imgName:"atom.png"},
    {name:"Node.js",imgName:"node.png"},
    {name:"Express.js",imgName:"express.png"},
    {name:"Javascript",imgName:"javascript.png"},
    {name:"MySQL",imgName:"mysql.png"},
    {name:"Sequelize",imgName:"sequelize.png"},
    {name:"HTML",imgName:"html.png"},
    {name:"CSS",imgName:"css.png"},
]
const SkillBox = styled.section`
    width: 80%;
    border-radius: 20px;
    background-color: #2A0944 ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0px;
    margin-bottom: 20px;
    @media screen and (min-width:900px) {
        width: 800px;
    };
`;
const SkillH2 = styled.h2`
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
`;
const SkillsContainer = () => {
    const {language} = useContext(LanguageContext)
    return (
        <SkillBox>
            <SkillH2>{language === true ? "MIS HABILIDADES":"MY SKILLS"}</SkillH2>
            {
                skills.map((skill,i) => (
                    <Skill key={i} name={skill.name} imgName={skill.imgName} />
                ))
            }
        </SkillBox>
    )
}

export default SkillsContainer
