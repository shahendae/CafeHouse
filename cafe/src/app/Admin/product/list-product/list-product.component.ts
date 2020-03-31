import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:Product[];

  constructor(private s: ProductService, private router: Router) {
   }

   delete(id) {
     console.log("deleted id", id);
     this.s.deleteProduct(id).subscribe(a => {
       this.router.navigate(['/product']);
     });
   }

  ngOnInit(): void {
    this.s.getProducts().subscribe(a => {
      this.products = a;
      console.log(a);
    })

  }

}
