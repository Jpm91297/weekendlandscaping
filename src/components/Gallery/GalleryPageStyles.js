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

    .intro {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        h1 {
        font-size: 4em;
        padding-bottom: 50px;
        }
       
        @media screen and (max-width: 750px) {
            width: 75%;
        }
    }

    .photo-section {
        margin-top: 100px;
        width: 100%;
        background: #e6e6e6;

        @media screen and (max-width: 1350px) {
            margin-top: 80px;
        }

        @media screen and (max-width: 400px) {
            margin-top: 10px;
        }
    }









`;