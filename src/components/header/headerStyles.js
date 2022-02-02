import styled from "styled-components";

export const headerWrap = styled.div`
    

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
        height: 90px;
        width: 420px;

        @media screen and (max-width: 700px) {
            height: 60px;
            width: 280px;
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
        position: absolute;
        top: 0px;
        width: 1900px;
        z-index: 1;
        object-fit: cover;
        filter: brightness(50%);

        @media screen and (max-width: 1350px) {
            width: 100%;
            height: 100vh;
        }

    }


`