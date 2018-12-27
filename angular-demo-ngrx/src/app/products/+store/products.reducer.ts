import {Product} from '../product';
import * as fromRoot from "../../state/app.state";
import { ProductAction, ProductActionTypes } from "./products.actions";

// product is a lazyloading module
export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
}

export function reducer(state = initialState, action: ProductAction): ProductState {

    switch (action.type) {
        case ProductActionTypes.TOGGLE_PRODUCT_CODE:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProductActionTypes.SET_CURRENT_PRODUCT:
        return {
            ...state,
            currentProductId: action.payload.id
        };
        case ProductActionTypes.CLEAR_CURRENT_PRODUCT:
        return {
            ...state,
            currentProductId: null
        };
        case ProductActionTypes.INITIALIZE_CURRENT_PRODUCT:
        return {
            ...state,
            currentProductId: 0
        };
        case ProductActionTypes.LOAD_SUCCESS:
        return {
            ...state,
            products: action.payload,
            error: ''
        }
        case ProductActionTypes.LOAD_FAIL:
        return {
            ...state,
            products: [],
            error: action.payload
        }
        case ProductActionTypes.UPDATE_PRODUCT_SUCCESS:
        const updatedProducts = state.products.map(
            item => action.payload.id === item.id ? action.payload : item);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.payload.id,
            error: ''
        };

        case ProductActionTypes.UPDATE_PRODUCT_FAIL:
        return {
            ...state,
            error: action.payload
        };
        default:
            return state;
    }

}
