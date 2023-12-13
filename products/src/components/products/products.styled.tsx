import styled from "styled-components";

export const ProductArea = styled.div`
  
    display: flex;
    margin: 0 auto;
    max-width: 1048px;
    flex-wrap: wrap;

`

export const Div = styled.div`
    display:flex;
    justify-content: center;
    gap: 40px;
`


const ProductsCard = styled.div`
    width: 250px;
    height: 600px;
    cursor: pointer;
    border-radius: 12px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;

    &:hover {
        box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);
    }

    img {
        height: 200px;
        width: 230px;
        object-fit: contain;
        border-radius: 12px;
        padding: 20px;
    }


    h1 {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    h2{
        font-size: 16px;
        font-weight: bold;
    }

    h5 {
        margin: 2px;
    }


    p {
        font-size: 14px;
        padding: 10px
    }

`

export default ProductsCard