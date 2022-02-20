import styled from "styled-components";

export const ContactWrap = styled.div`
    font-family: 'Nunito', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    background: #e6e6e6;
    padding-top: 50px;
    padding-bottom: 1em;

    h1 {
        font-size: 3em;
        padding-bottom: .5em;
    }

    .formContainer {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;

        @media screen and (max-width: 1350px) {
            width: 75%;
        }

        input {
            margin: 10px;
            border: 2px solid;
            background: #f7f7f7;
        }

        textarea {
            margin: 10px;
            border: 2px solid;
            height: 6em;
            background: #f7f7f7;
        }

        .submit {
            height: 50px;
            width: 50%;
            margin: 0 auto;
            font-weight: 900;
        }


    }


`
