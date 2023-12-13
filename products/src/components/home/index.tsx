import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsList from '../products';

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
        <div>
            <div>
                {cate.map((item, index) =>
                    <ul>
                        <li key={`${index}-miau`} onClick={() => filterCate(item)}>
                            {item}
                        </li>
                    </ul>
                )}

            </div>
            <div>
                {loader
                    ?
                    (<div> <img style={{ margin: '0 auto' }} src='https://miro.medium.com/v2/resize:fit:679/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' alt='loader' /> </div>)
                    :
                    (<div>
                        {currentProducts.map((item, index) =>
                            <ProductsList key={`${index}-mamamumu`} item={item} />
                        )}
                    </div>)
                }

            </div>
        </div>
    );
}

export default Home;


