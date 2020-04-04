import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  notLogin: boolean = false;
  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute) { }

  Save(userName, password){
    this.userService.userAuthentication(userName, password).subscribe((data:any) => {
      console.log('Login Data ', data);
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('userId', data.id);
      localStorage.setItem('userName', data.userName);

      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/'])
    },
    (err: HttpErrorResponse) => {
      this.notLogin = true;
    });
  }

  ngOnInit(): void {
  }

}
