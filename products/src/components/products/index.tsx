import ProductsCard from './products.styled';


interface Product {
    id: number;
    title: string;
    image: string;
    category: string;
    description: string;
    alt: string;
    rating: {
        rate: number;
        count: number;
    };
    price: number;
}

interface ProductsListProps {
    item: Product;
}


const ProductsList: React.FC<ProductsListProps> = ({ item }) => {
    return (

        <ProductsCard>
            <img src={item.image} alt={item.title} />
            <h2>
                {item.title.length > 20 ? `${item.title.slice(0, 25)}...` : item.title}
            </h2>
            <h5>
                {item.category}
            </h5>
            <p>
                {`${item.description.slice(0, 150)}...`}
            </p>
            <h4>
                Rating: {item.rating.rate} / {item.rating.count}
            </h4>
            <h1>
                $ {item.price}
                <a href={"/product/" + item.id}>
                    VIEW DETAILS
                </a>
            </h1>
        </ProductsCard>
    );
}

export default ProductsList

