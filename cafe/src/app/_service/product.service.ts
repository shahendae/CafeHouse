import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:56311/api/products';
  constructor(private http: HttpClient) { 
  }

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product){
    return this.http.post(this.url,product);
  }

  editProduct(id:number){
    return this.http.put(this.url+'/'+id,null);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+'/'+id,null);
  }
}
