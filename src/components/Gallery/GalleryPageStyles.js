import styled from "styled-components";

export const GalleryPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 2;
    position: relative;
    align-items: center;
    width: 100%;
    
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
        margin-bottom: 50px;

    }

    .intro {
        text-align: center;
        margin: 0 auto;
        width: 25%;

        h1 {
        font-size: 4em;
        padding-bottom: 50px;
        padding-top: 1em;
        }
       
        @media screen and (max-width: 750px) {
            width: 100%;
          
            font-size: .8em;

            

        }

        @media screen and (max-width: 450px) {
            background: #201d21;
        }
    }

    .photo-section {
        margin-top: 100px;
        width: 100%;
        background: #e6e6e6;

        @media screen and (max-width: 1350px) {
            margin-top: 80px;
        }

        @media screen and (max-width: 600px) {
            margin-top: 0px;
        }
    }









`;