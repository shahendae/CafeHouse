import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_service/order.service';
import { Order } from 'src/app/_models/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  





  fromDate : Date ;
  datePipe:DatePipe ;
  toDate:Date ;
  GetData(date){
    this.fromDate = new Date(date.value.fromDate);
    this.toDate = new Date(date.value.toDate) ; 
    console.log(this.fromDate);
    console.log(this.toDate);
    //this.datePipe.transform(this.fromDate,"M/d/yy");
    
    
    var date1 = this.datePipe.transform(this.fromDate,"DD/MM/Y");
    console.log(date1);


    
    
 

  }
  
  
  // Testing(){
  //   this.myOrders.splice(this.myOrders.length-2,this.myOrders.length-1);
  // }
  
  
    myOrders : Order [] = [];
    constructor(private s:OrderService) { }
  
    
    ngOnInit(): void {
      this.s.getUserOrders().subscribe(o => {
        
        this.myOrders = o;
  
        
      })
    }

}
