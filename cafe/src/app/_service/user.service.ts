import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:56311/api/users';
  constructor(private http: HttpClient) { 
  }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }

  addUser(user: User){
    return this.http.post(this.url,user);
  }

  editUser(id:string){
    return this.http.put(this.url+'/'+id,null);
  }

  deleteUser(id:string){
    return this.http.delete(this.url+'/'+id,null);
  }

}
