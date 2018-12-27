import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';
import * as fromProduct from "../+store/products.reducer";
import * as productSelectors from "../+store/products.selector";
import * as productActions from "../+store/products.actions";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  // errorMessage: string;
  errorMessage$: Observable<string>;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  // using services
  // sub: Subscription;
  componentActive = true;

  constructor(
    private store: Store<fromProduct.State>,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // using services
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => this.selectedProduct = selectedProduct
    // );

    // using ngrx
    this.store.pipe(select(productSelectors.getCurrentProduct)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );
    this.store.pipe(
      select(productSelectors.getProducts),
      takeWhile(() => this.componentActive)
    ).subscribe(
      (products: Product[]) => this.products = products
    )

    // with services
    // this.productService.getProducts().subscribe(
    //   (products: Product[]) => this.products = products,
    //   (err: any) => this.errorMessage = err.error
    // );
    //with actions & effects
    this.store.dispatch(new productActions.Load());

    // TODO: need unsubscribe
    this.store.pipe(select(productSelectors.getShowProductCode)).subscribe(
      showProductCode =>  this.displayCode = showProductCode
    )


    this.errorMessage$ = this.store.pipe(select(productSelectors.getError));
  }

  ngOnDestroy(): void {
    // using services
    // this.sub.unsubscribe();


     this.componentActive = false;
  }

  checkChanged(value: boolean): void {

    // this.store.dispatch({
    //   // this is representation of action
    //   type: 'TOGGLE_PRODUCT_CODE',
    //   payload: value
    // })

    this.store.dispatch(new productActions.ToggleProductCode(value));

  }

  newProduct(): void {
    // using services
    // this.productService.changeSelectedProduct(this.productService.newProduct());

    // using ngrx
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    // using services
    // this.productService.changeSelectedProduct(product);

    // using ngrx
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }

}
