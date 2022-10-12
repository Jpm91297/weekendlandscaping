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
    font-family: 'Nunito', sans-serif;

    @media screen and (max-width: 750px) {
        width: 100%;

        .btn {
          margin-left: 92%;
          margin-top: 10px;
          font-size: 25px;
        }
    }

    @media screen and (min-width: 750px) {
        justify-content: center;

        .btn {
          margin-left: 87%;
          font-size: 25px;        
        }
    }
        
    h1 {
    text-align: center;
    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: 3.5rem;
    padding-bottom: 20px;
    border-bottom: 2px solid white;
    font-weight: 700;

    @media screen and (max-width: 750px) {
      display: none
    }
  }

  .social {
    text-align: center;
  }
  .social a {
    color: white;
    &:hover {
      color: #08bf02;
    }
    padding: 0 20px 0 20px;
  }
  a {
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;

    &:hover {
      color: #08bf02;
    }
  }

  .menuLogo {
      display: flex;
      height: 86.62px;
      width: 247.5px;
      margin: 25px auto 25px auto;
      
      @media screen and (min-width: 750px) {
        display: none;
      }
  }
`