import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Advert, Div } from './singleproduct.styled';
import { NavLink } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
}

const SingleProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [oneProduct, getOneProduct] = useState<Product | null>(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            getOneProduct(response.data);
        });
    }, [id]);

    // Handle the case where oneProduct is null or undefined
    if (!oneProduct) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <NavLink to='..'><h1>&#x2190; Back to all products</h1></NavLink>
            </div>

            <Advert>
                <div>
                    {oneProduct.image && (
                        <img src={oneProduct.image} alt={oneProduct.title} />
                    )}
                </div>
                <Div>
                    <div>
                        <h1>{oneProduct.title}</h1>
                        <h5>{oneProduct.category}</h5>
                        <p>{oneProduct.description}</p>
                        <h2>Price - $ {oneProduct.price}</h2>
                    </div>
                </Div>
            </Advert>
        </div>
    );
};

export default SingleProduct;
