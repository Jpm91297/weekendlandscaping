import styled from "styled-components";

export const headerWrap = styled.div`
    

    .nav {
        display: grid;
        grid-template-columns: 30% 50% 20%;
        position: relative;
        top: 0px;
        width: 100%;
        z-index: 99;

    }

    .logo {
        max-width: 100%;
        grid-area: 1 / 1 / 1 / 1;
    }


    .links {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        align-items: center;
    }

    .links a {
        color: white;
        font-weight: 700;
        font-size: 1em;
    }

    .social {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .beauty img {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 1000px;
        z-index: 1;
    }


`