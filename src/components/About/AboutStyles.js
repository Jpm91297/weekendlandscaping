import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    padding-top: 275px;
    background: #e6e6e6;

    @media screen and (max-width: 1350px) {
        padding-top: 50px;

       
    }

    p {
        text-align: center;
        width: 50%;
        margin: 0 auto;

        @media screen and (max-width: 1350px) {
            width: 75%;
            text-align: left;
        }
    }
`