import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories: Category[] = [];
  id;

  constructor(private s: ProductService, private c: CategoryService, private router: Router,
    private route: ActivatedRoute) { 
      //Get id from url
      this.id = this.route.snapshot.paramMap.get('id');
      console.log("id:", this.id);
      if(this.id) {
        //Get product with this id from database
        this.s.getProduct(this.id).take(1).subscribe(a => {
          this.product = a;
          console.log('product ', a);
        });
      }
  }

  Save(){
    //Edit product
    if(this.id) this.s.editProduct(this.id, this.product).subscribe(a => {
      console.log(a);
      this.router.navigate(['/product']);
    });
    //Add new product
    else this.s.addProduct(this.product).subscribe(a => {
      console.log(a);
      this.router.navigate(['/product']);
    });
    
  }

  //Get categories from database for dropdownlist
  ngOnInit(): void {
    this.c.getCategories().subscribe(a => { 
      this.categories = a;
      console.log(a);
    })
  }

}
