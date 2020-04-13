import { Component, OnInit, OnChanges } from '@angular/core';
import { OrderService } from 'src/app/_service/order.service';
import { Order } from 'src/app/_models/order';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  





  fromDate : Date ;
  toDate:Date ;
  GetData(date){
    this.fromDate = date.value.fromDate;
    this.toDate = date.value.toDate ; 
    this.s.getUserOrders(this.fromDate,this.toDate).subscribe(o => {
        
      this.myOrders = o;

      
    })
  }
  Show(data){
    alert(data);
  }
  
    myOrders : Order [] = [];
    constructor(private s:OrderService) { }
  
  
    
    ngOnInit(): void {
      
      
    }

}
