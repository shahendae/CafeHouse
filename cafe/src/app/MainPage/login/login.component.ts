import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  Save(userName, password){
    console.log('user name ', userName);
    console.log('password', password);
    this.userService.userAuthentication(userName, password).subscribe(a => {
      console.log('tessssst login ', a);
    });
  }

  ngOnInit(): void {
  }

}
