import styled from "styled-components";

export const headerWrap = styled.div`
    font-family: 'Nunito', sans-serif;

    .nav {
        display: grid;
        grid-template-columns: 30% 50% 20%;
        position: relative;
        top: 0px;
        width: 100%;
        z-index: 99;


        @media screen and (max-width: 450px) {
            background: #201d21;
        }
      
    }


    .logo {
        grid-area: 1 / 1 / 1 / 1;
        height: 115.5px;
        width: 330px;

        @media screen and (max-width: 700px) {
            height: 86.62px;
            width: 247.5px;
        }
    }


    .links {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        align-items: center;

        
    }

    .links a {
        color: white;
        font-weight: 700;
        font-size: 1.2em;

        @media screen and (max-width: 1350px) {
            display: none;
        }
    }

    .social {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .social a {
        @media screen and (max-width: 700px) {
            display: none;
        }
    }

    .beauty {
        background: #e6e6e6;
    }
   
    .beauty img {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(50%);
        z-index: 1;
        
        @media screen and (max-height:775px ) {
            height: 125%;
        }

        @media screen and (max-height:615px ) {
            height: 150%;
        }

        @media screen and (max-height:515px ) {
            height: 175%;
        }

        @media screen and (max-height:430px ) {
            height: 200%;
        }

        @media screen and (max-height:376px ) {
            height: 250%;
        }
        
        @media screen and (max-height:250px ) {
            height: 300%;
        }
        
        
        
        @media screen and (max-width:1350px) {
            height: 100%;
        }


        @media screen and (max-width: 450px) {
            width: 100%;
            height: 100vh;
            display: none;
            
        }

        @media screen and (max-width: 400px) {
            width: 100%;
            height: 125%;
        }
    }


`