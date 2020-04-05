import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  id;
  product: Product = new Product();
  constructor(private s: ProductService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id){
      this.s.getProduct(this.id).subscribe(a => {
        console.log('user getted ', a);
        this.product = a;
      })
    }
   }

  Delete(){
    this.s.deleteProduct(this.id).subscribe(a => {
      this.router.navigate(['/product']);
    });
  }

  Cancel(){
    this.router.navigate(['/product']);
  }

  ngOnInit(): void {
  }

}
