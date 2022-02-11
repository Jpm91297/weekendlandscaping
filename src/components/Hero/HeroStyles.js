import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    position: absolute;
    z-index: 2;
    align-items: center;
    width: 100%;
    margin-top: 7.5em;

    h1 {
        font-size: 3em;
    }

    .intro {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        @media screen and (max-width: 750px) {
            width: 50%;
        }
    }

`;