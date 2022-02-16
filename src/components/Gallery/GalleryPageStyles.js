import styled from "styled-components";

export const GalleryPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 2;
    position: relative;
    align-items: center;
    width: 100%;
    margin-top: 7.5em;
    font-family: 'Nunito', sans-serif;

    h1 {
        font-size: 4em;
        margin-bottom: 50px;
    }

    .intro2 {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        @media screen and (max-width: 750px) {
            width: 75%;
        }
    }


`;