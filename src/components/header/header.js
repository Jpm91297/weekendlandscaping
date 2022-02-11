import React from "react";
import * as S from './headerStyles'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import Burger from "../Burger/Burger";


/*
git add .
git commit -m "message"
git push origin main
*/

const Header = ({openMenu, setOpenMenu}) => (
    <S.headerWrap>
        <div className="nav">
            <img className="logo" src="./images/logo.png" /> 
            <div className="links">
                <li>
                    <a href="tel:5138333687" style ={{textDecoration:"none"}}>
                        513.833.3687
                    </a>
                </li>
                <li>
                    <a href="#about" style ={{textDecoration:"none"}}>
                        About
                    </a>  
                </li>
                <li>
                    <a href="#services" style ={{textDecoration:"none"}}>
                        Services
                    </a>  
                </li>
                <li>
                    <a href="#gallery" style ={{textDecoration:"none"}}>
                        Gallery
                    </a>  
                </li>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/WeekendLandscapes" target="_blank">
                    <AiFillFacebook size="3rem" color="white" />
                </a>
                <a href="https://www.instagram.com/weekendlandscaping/?hl=en" target="_blank">
                    <AiFillInstagram size="3rem" color="white" />
                </a>
                <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
            

        </div>
       <div className="beauty">
            <img src="./images/background.jpg" />
        </div> 
        
    </S.headerWrap>

)

export default Header;