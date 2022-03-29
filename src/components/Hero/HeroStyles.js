import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 2;
    position: relative;
    align-items: center;
    width: 100%;
    font-family: 'Nunito', sans-serif;

    @media screen and (max-height: 500px) {
        
    }

    h1 {
        font-size: 4em;
        margin-bottom: 25px;
        padding-top: 1em;
    }

    .intro {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        @media screen and (max-width: 1150px) {
            width: 85%;
        }

        @media screen and (max-width: 450px) {
            background: #201d21;
            width: 100%;
        }

        @media screen and (max-width: 400px) {
            width: 100%;
            font-size: .75em;
            padding-top: 100px;

        }
    }

    button {
        margin-top: 50px;
        background: transparent;
        border: 2px solid white;
        color: white;
        width: 10rem;
        height: 5rem;
        font-size: 1.5rem;
        font-weight: 700;

        @media screen and (max-width: 450px) {
           margin-bottom: 50px; 
        }
}

`;