import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from '../redux/action/Actions';

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
