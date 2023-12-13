import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsList from '../products';
import { ProductArea, Div, Ul, Li } from '../products/products.styled';
function Home() {
    const [cate, getCate] = useState<string[]>([])
    const api = 'https://fakestoreapi.com/products/'
    const [loader, getLoader] = useState(true)
    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        axios.get(`${api}categories`).then((response) => {
            getCate(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get(api).then((response) => {
            setCurrentProducts(response.data);
            getLoader(false)
        })
    }, []);

    const filterCate = (name: string) => {
        axios.get(`https://fakestoreapi.com/products/category/${name}`).then((response) => {
            setCurrentProducts(response.data);

        })
    }

    return (
        <Div>
            <div>
                {cate.map((item, index) =>
                    <Ul>
                        <Li key={`${index}-miau`} onClick={() => filterCate(item)}>
                            {item}
                        </Li>
                    </Ul>
                )}

            </div>
            <div>
                {loader
                    ?
                    (<ProductArea> <img style={{ margin: '0 auto' }} src='https://miro.medium.com/v2/resize:fit:679/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' alt='loader' /> </ProductArea>)
                    :
                    (<ProductArea>
                        {currentProducts.map((item, index) =>
                            <ProductsList key={`${index}-mamamumu`} item={item} />
                        )}
                    </ProductArea>)
                }

            </div>
        </Div>
    );
}

export default Home;


