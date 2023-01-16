import { ThisReceiver } from '@angular/compiler';
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
  alert("Order Number: "+orderObj.orderNumber+"\n Username of the client: "+orderObj.username+"\n The order: "+orderObj.quantity+"x"+orderObj.productName
  +"\n The Date: "+orderObj.datetime);
 }
}
