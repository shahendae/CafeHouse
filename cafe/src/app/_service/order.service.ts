import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../_models/order';
import {UserService} from '../_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:56311/api/orders';
  urlOrder = 'http://localhost:56311/api/order/';
  urlOrderProducts = 'http://localhost:56311/api/Order/products';
  userId = this.userserve.CurrentUserId();
  constructor(private http: HttpClient ,private userserve: UserService) { 
  }

  getOrders(){
    return this.http.get<Order[]>(this.url);
  }
  addOrder(order: Order){
    return this.http.post(this.url,order);
  }

  getUserOrders(from:Date , to:Date){
    return this.http.get<Order[]>(this.urlOrder+this.userId+"/"+from+"/"+to);
  }

  getOrderProducts(){
    return this.http.get<Order[]>(this.urlOrderProducts);
  }

  orderStatus(orderId:number){
    return this.http.put<Order>(this.url+'/'+orderId,null);
  }

}
