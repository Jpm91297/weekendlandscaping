import React from "react";
import { StyledBurger } from "./BurgerStyles";

const Burger = ( { openMenu, setOpenMenu } ) => (
    <StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)} >
        <div />
        <div />
        <div />
    </StyledBurger>

)

export default Burger;