import { Component } from '@angular/core';
import ProductList from '../../assets/products.json';

interface Product{
  objectID: number,
  name: string,
  product_reference: string,
  price: string
}

@Component({
  selector: 'productList',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productList: Product[] = ProductList;
}
