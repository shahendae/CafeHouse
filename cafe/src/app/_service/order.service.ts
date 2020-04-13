import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:56311/api/orders';
  urlOrder = 'http://localhost:56311/api/orders/';
  urlOrderProducts = 'http://localhost:56311/api/Order/products';
  userId:string = "97910cd0-2bf8-43e0-87b3-96a54381983c";
  constructor(private http: HttpClient) { 
  }

  getOrders(){
    return this.http.get<Order[]>(this.url);
  }
  addOrder(order: Order){
    return this.http.post(this.url,order);
  }

  getUserOrders(){
    return this.http.get<Order[]>(this.urlOrder+this.userId);
  }

  getOrderProducts(){
    return this.http.get<Order[]>(this.urlOrderProducts);
  }

  orderStatus(orderId:number){
    return this.http.put<Order>(this.url+'/'+orderId,null);
  }

}
