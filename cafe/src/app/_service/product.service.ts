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

  getProduct(id){
    return this.http.get(this.url + '/' + id);
  }

  addProduct(product: Product){
    return this.http.post(this.url,product);
  }

  editProduct(id:number, product: Product){
    return this.http.put<Product>(this.url + '/' + id, product);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}
