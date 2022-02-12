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
        text-align: left;
    }
`