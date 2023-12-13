import styled from "styled-components";

export const Nav = styled.div`
    
    display:flex;
    background-color: #f68f50;
    width: 97%;
    height: 60px;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    margin-bottom: 20px;

    img {

        height: 57px;
    }

    a {
        text-decoration: none;
        font-size: 26px;

        &:link, &:visited {
            background-color: #f68f50  ;
            color: white;
            padding: 14px 25px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
          }
          
          &:hover, &:active {
            background-color: red;
          }
    }
    

`