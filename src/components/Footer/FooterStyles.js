import styled from "styled-components";

export const FooterStyles = styled.div`
        background: #e6e6e6;
        padding-bottom: 1em;
        font-family: 'Nunito', sans-serif;


        .divider {
            width: 75%;
            border-top: 2px solid black;
            padding-top: 1em;
            margin: 0 auto;
        }

        div {
            width: 50%;
            margin: 0 auto;
            text-align: center;

            @media screen and (max-width: 450px) {
             width: 75%
        }
        }

        


`