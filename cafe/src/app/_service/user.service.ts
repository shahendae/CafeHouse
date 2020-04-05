import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:56311/api/users';
  constructor(private http: HttpClient, private router: Router) { 
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
    var data = "username=" + userName + "&password=" + password +"&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'True' });
    return this.http.post('http://localhost:56311/Token', data, {headers: reqHeader});
  }

  IsLogin(){
    let userToken = localStorage.getItem('userToken');
    if(userToken != null){
      return true;
    }
    return false;
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }

  CurrentUserName(){
    let userToken = localStorage.getItem('userToken');
    if(!userToken) return null;
    let userName = localStorage.getItem('userName');
    return userName;
  }

  CurrentUserId(){
    let userToken = localStorage.getItem('userToken');
    if(!userToken) return null;
    let userId = localStorage.getItem('userId');
    return userId;
  }

  CurrentUserToken(){
    return localStorage.getItem('userToken');
  }

  CurrentUserRole(){
    let userToken = localStorage.getItem('userToken');
    if(!userToken) return null;
    let userRole = localStorage.getItem('userRole');
    return userRole;
  }



}
