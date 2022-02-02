import React from "react";
import { StyledMenu } from "./MenuStyles";

const Menu = ({ openMenu, setOpenMenu }) => (
    <StyledMenu openMenu = {openMenu}>
        <h1>
            Hi There
        </h1>
    </StyledMenu>

)

export default Menu; 