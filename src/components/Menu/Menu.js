import React from "react";
import { StyledMenu } from "./MenuStyles";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import CloseButton from 'react-bootstrap/CloseButton';


const Menu = ({ openMenu, setOpenMenu }) => (
    <StyledMenu openMenu = {openMenu}>
        <CloseButton className="btn" variant="white"  onClick={() => setOpenMenu(!openMenu)} />
        <img className="menuLogo" src="./images/logo.png" /> 
        <h1 style={{color: '#08bf02'}}>
            Menu
        </h1>
        <div className="social">
            <a href="/" target="_blank">
                <AiFillFacebook />
            </a>
            <a href="/" target="_blank">
                <AiFillInstagram />
            </a>
        </div>
        <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Experience"></span>
          513.833.3687
        </a>
        <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Projects"></span>
          Contact us
          </a>
          <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Projects"></span>
          About
          </a>
        <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Technologies"></span>
          Services
          </a>
        <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="About Me"></span>
          Gallery
          </a>

    </StyledMenu>

)

export default Menu; 