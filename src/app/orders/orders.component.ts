import { Component } from '@angular/core';
import OrderList from "../../assets/orders.json"

interface Order{
  orderNumber: number,
  username: string,
  productName: string,
  quantity: number,
  datetime: string
}

@Component({
  selector: 'orderList',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
 orderList: Order[] = OrderList;

 OrderDetails(orderObj : Order) :void{
  alert("Order Number : "+orderObj.orderNumber+"\nUsername of the client : "+orderObj.username+"\nThe order : "+orderObj.quantity+"x"+orderObj.productName
  +"\nThe Date : "+orderObj.datetime);
 }
}
