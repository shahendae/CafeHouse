import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:56311/api/orders';
  constructor(private http: HttpClient) { 
  }

  getOrders(){
    return this.http.get<Order[]>(this.url);
  }

  addOrder(order: Order){
    return this.http.post(this.url,order);
  }
}
