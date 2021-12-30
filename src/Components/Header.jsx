import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext';
import styled from '@emotion/styled'
import SwitchToogle from './SwitchToogle';

const HeaderStyles = styled.header`
display: flex;
justify-content: center;
background-color: #2A0944;
color: white;
align-items: center;
`;
const Header = () => {
    const {setLanguage} = useContext(LanguageContext)
    const handleChange = (e) => {
        setLanguage(e.target.checked);
    }
    return (
        <HeaderStyles>
         <div className='divKia'><div className='outSquare'></div><div className='innerSquare'></div><span className='kiaSquare'>KIA</span></div>
         <SwitchToogle onChange={handleChange}/>
        </HeaderStyles>
    )
}

export default Header
