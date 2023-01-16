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
    alert("Product ID : "+productObj.objectID+"\nProduct name : "+productObj.name+"\nThe reference : "+productObj.product_reference
    +"\nPrice : "+productObj.price);
   }
}
