import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #223252;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: 'translateX(100%)';
    z-index: 4;
    display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
`