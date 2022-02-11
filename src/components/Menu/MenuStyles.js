import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #201d21;
    height: 100vh;
    width: 400px;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: 'translateX(100%)';
    z-index: 100;
    display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};

    @media screen and (max-width: 750px) {
        width: 100%;
    }

    @media screen and (min-width: 750px) {
        justify-content: center;
    }
        
    .btn {
        font-size: 25px;
        margin-left: 92%;
        margin-top: 10px;
    }

    h1 {
    text-align: center;
    color: #3bb837;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2rem;
    padding-bottom: 8px;
    border-bottom: 2px solid #08bf02;
  }

  .social {
    text-align: center;
  }
  .social a {
    color: #08bf02;
    &:hover {
      color: white;
    }
    padding: 0 20px 0 20px;
  }
  a {
    font-size: 2rem;
    font-family: 'Space Grotesk', sans-serif;
    padding: 1rem 0;
    font-weight: bold;
    color: #08bf02;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    &:hover {
      color: white;
    }
  }

  .menuLogo {
      display: flex;
      height: 66px;
      width: 308px;
      margin: 25px auto 25px auto;
      
      @media screen and (min-width: 750px) {
        display: none;
      }
  }
`