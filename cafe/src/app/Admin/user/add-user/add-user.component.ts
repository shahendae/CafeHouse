import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  Save(){
    this.userService.addUser(this.user).subscribe(a => {
      console.log('new user ', a);
      this.router.navigate(['/adminUser']);
    });
    
  }
  
  ngOnInit(): void {
  }

}
