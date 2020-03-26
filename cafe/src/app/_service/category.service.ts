import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:56311/api/categories';
  constructor(private http: HttpClient) { 
  }

  getCategories(){
    return this.http.get<Category[]>(this.url);
  }

  addCategory(category: Category){
    return this.http.post(this.url,category);
  }
}
