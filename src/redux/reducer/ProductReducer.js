import { FETCH_PRODUCT_DATA } from '../action/Actions';

const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_DATA:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default productReducer;
