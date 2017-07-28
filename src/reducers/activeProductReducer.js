import {
    FETCH_PRODUCT_INIT,
    SAVE_PRODUCT_FAILURE,
    SAVE_PRODUCT_SUCCESS
} from '../actions/types'
import initialState from './initialState'

export default function activeProductReducer(state = initialState.activeProduct, action) {
    switch (action.type) {
        case FETCH_PRODUCT_INIT:
            return {
                ...state,
                error: null,
                loading: true
            }
        case SAVE_PRODUCT_SUCCESS: 
            return {
                ...state,
                product: action.payload,
                error: null,
                loading: false
            }
        case SAVE_PRODUCT_FAILURE:
            return {
                ...state,
                product: null,
                error: action.payload,
                loading: false
            }
        default:
            console.log("default activeProductReducer");
            return state
        }
}