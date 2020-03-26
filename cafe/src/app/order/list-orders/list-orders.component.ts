import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_service/order.service';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders:Order[] = [];

  constructor(private s: OrderService) { }

  ngOnInit(): void {
    this.s.getOrders().subscribe(o => {
      this.orders = o;
      console.log(o);
    })
  }
}