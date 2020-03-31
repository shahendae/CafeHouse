import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) { }

  Save(){
    this.categoryService.addCategory(this.category).subscribe(a => {
      console.log("new category ", a);
      this.router.navigate(['/category']);
    });
  }

  ngOnInit(): void {
  }

}
