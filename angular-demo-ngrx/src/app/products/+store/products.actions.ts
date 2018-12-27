import { Action } from '@ngrx/store';
import { Product } from '../product';


export enum ProductActionTypes {
    TOGGLE_PRODUCT_CODE = '[Product] Toggle product code',
    SET_CURRENT_PRODUCT = '[Product] Set current product',
    CLEAR_CURRENT_PRODUCT = '[Product] Clear current product',
    INITIALIZE_CURRENT_PRODUCT = '[Product] Initialize current product',
    LOAD = '[Product] Load',
    LOAD_SUCCESS = '[Product] Load Success',
    LOAD_FAIL = '[Product] Load Fail',
    UPDATE_PRODUCT = '[Product] Update Product',
    UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Success',
    UPDATE_PRODUCT_FAIL = '[Product] Update Product Fail',
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.TOGGLE_PRODUCT_CODE;

    constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SET_CURRENT_PRODUCT;

    constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.CLEAR_CURRENT_PRODUCT;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.INITIALIZE_CURRENT_PRODUCT;
}

export class Load implements Action {
    readonly type = ProductActionTypes.LOAD;
  }

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_SUCCESS;

    constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LOAD_FAIL;

    constructor(public payload: string) { }
}


export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT;

    constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;

    constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT_FAIL;

    constructor(public payload: string) { }
}

export type ProductAction = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFail
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFail;