import React from "react";
import { StyledMenu } from "./MenuStyles";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import CloseButton from 'react-bootstrap/CloseButton';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';

const Menu = ({ openMenu, setOpenMenu }) => (
    <StyledMenu openMenu = {openMenu}>
        <CloseButton className="btn" variant="white"  onClick={() => setOpenMenu(!openMenu)} />
        <a href="/">
            <img className="menuLogo" src="./images/logo.png" /> 
        </a>
        <h1>
            Menu
        </h1>
        <div className="social">
            <a href="https://www.facebook.com/WeekendLandscapes" target="_blank">
                <AiFillFacebook size='3rem' />
            </a>
            <a href="https://www.instagram.com/weekendlandscaping/?hl=en" target="_blank">
                <AiFillInstagram size='3rem' />
            </a>
            <a href="tel:5138333687" target="_blank">
                <BsFillTelephoneForwardFill size='2.5rem' />
            </a>
        </div>
        <a href="../#contactme" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Projects"></span>
          Contact us
          </a>
          <a href="../#about" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Projects"></span>
          About
          </a>
        <a href="../#services" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="Technologies"></span>
          Services
          </a>
        <a href="/gallery" onClick={() => setOpenMenu(!openMenu)}>
          <span role="img" aria-label="About Me"></span>
          Gallery
          </a>

    </StyledMenu>

)

export default Menu; 