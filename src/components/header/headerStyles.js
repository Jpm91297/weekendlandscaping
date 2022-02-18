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
    }


    .logo {
        grid-area: 1 / 1 / 1 / 1;
        height: 89.5px;
        width: 331px;

        @media screen and (max-width: 700px) {
            height: 66px;
            width: 244.2px;
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


    .beauty img {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(50%);
        z-index: 1;
        animation: fadeIn ease-in 1;
        
        
        @media screen and (max-width:1350px) and (orientation: landscape) {
            height: 300%;
        }


        @media screen and (max-width: 450px) {
            width: 100%;
            height: 100vh;
        }
    }


`