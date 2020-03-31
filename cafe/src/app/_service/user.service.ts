import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getUser(id){
    return this.http.get(this.url + '/' + id);
  }

  addUser(user: User){
    return this.http.post(this.url,user);
  }

  editUser(id:string, user: User){
    return this.http.put(this.url+'/'+id, user);
  }

  deleteUser(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //Authentication
  userAuthentication(userName, password){
    var data = "username=" + userName + "&password" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post('http://localhost:56311/token', data, {headers: reqHeader});
  }

}
