import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    SAVE_PRODUCT_SUCCESS,
    SAVE_PRODUCT_FAILURE
} from './types'
import API from '../api'

//Actions Creators
export function fetchProductSuccess(product) {
    return {type: FETCH_PRODUCT_SUCCESS, payload: product}
}

export function fetchProductfailure(error) {
    return {type: FETCH_PRODUCT_FAILURE, payload: error}
}

export function fetchProductsfailure(errors) {
    return {type: FETCH_PRODUCTS_FAILURE, payload: errors}
}

export function fetchProductsSuccess(products) {
    return {type: FETCH_PRODUCTS_SUCCESS, payload: products}
}

export function fetchProductsfailure(errors) {
    return {type: FETCH_PRODUCTS_FAILURE, payload: errors}
}

export function saveProductSuccess() {
    return {type: SAVE_PRODUCT_SUCCESS}
}

export function saveProductSuccess() {
    return {type: SAVE_PRODUCT_SUCCESS}
}

export function saveProductFailure(error) {
    return {type: SAVE_PRODUCT_FAILURE, payload: error}
}

//Actions creator asyncs
export function fetchProducts() {
    return async(dispatch => {
        dispatch(() => {
            return {type: 'FETCH_PRODUCT_INIT'}
        })
        try {
            const data = await API.products.getAll();
            return dispatch(FETCH_PRODUCT_SUCCESS(data.product))
        } catch (error) {}
    })
}
export function fetchProduct () {}
export function saveProduct () {}


