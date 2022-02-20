import styled from "styled-components";




export const ServicesWrapper = styled.div`
    background: #e6e6e6;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    padding-top: 50px;

    h1 {
        font-size: 3em;
        padding-bottom: .5em;
    }

  
`

export const ServicesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    margin: 0 auto;
    text-align: left;
    text-decoration: none;

    div {
        margin: 0 auto;
    }
    
   
    li {
        list-style-type: none;
    }

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center; 

        li {
            padding: 5px 0;
        }

      
    }

    

`