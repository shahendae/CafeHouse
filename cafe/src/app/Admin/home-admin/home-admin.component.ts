import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { OrderService } from 'src/app/_service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  orderProducts:Order[] = [];
  constructor(private orderServ:OrderService, private route:Router) { }
  
  Done(id:number){
      this.orderServ.orderStatus(id).subscribe(a=>{
      this.orderServ.getOrderProducts().subscribe(o=>{
        this.orderProducts = o;
      })
    });
  }

  ngOnInit(): void {
    this.orderServ.getOrderProducts().subscribe(o=>{
      this.orderProducts = o;
    })
  }
}
