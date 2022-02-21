import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 2;
    position: relative;
    align-items: center;
    width: 100%;
    padding-top: 7.5em;
    font-family: 'Nunito', sans-serif;

    @media screen and (max-height: 500px) {
        padding-top: 4em;
    }

    h1 {
        font-size: 4em;
        margin-bottom: 25px;
    }

    .intro {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        @media screen and (max-width: 1150px) {
            width: 85%;
        }

        @media screen and (max-width: 400px) {
            width: 100%;

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
    }

`;