import axios from 'axios';

export const FETCH_PRODUCT_DATA = 'FETCH_PRODUCT_DATA';

export const fetchProductData = () => async (dispatch) => {
    try {
        const res = await axios.get('https:........');
        dispatch({ type: FETCH_PRODUCT_DATA, payload: res.data });
    } catch (error) {
        console.error("Failed to fetch product data", error);
       
    }
};
