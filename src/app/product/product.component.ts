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

  ProductDetails(productObj : Product) :void{
    alert("Product ID: "+productObj.objectID+"\n Product name: "+productObj.name+"\n The reference: "+productObj.product_reference
    +"\n Price: "+productObj.price);
   }
}
