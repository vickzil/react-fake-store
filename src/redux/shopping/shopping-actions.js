import * as actionTypes from './shopping-types';
import axios from 'axios'

// ACTION ADD TO CART
export const addToCart = (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: id
        },
    };
};


// ACTION REMOVE ITEM FROM CART
export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: id
        },
    };
};

// ACTION ADJUST QUANTITY
export const adjustItemQty = (id, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: id,
            qty
        },
    };
};

// ACTION FETCH PRODUCT
export const fetchProducts = (item) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: item,
    };
};


// ACTION CLEAR CART
export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART,
    };
};

// FETCH PRODUCTS FROM API
export const fetchAllProducts = () => {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const products = response.data;
                dispatch(fetchProducts(products))
            }).catch(error => console.log(error.message))
    };
};