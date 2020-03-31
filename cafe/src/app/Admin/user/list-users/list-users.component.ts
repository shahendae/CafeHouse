import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private u: UserService, private router: Router) { }

  delete(id){
    this.u.deleteUser(id).subscribe(a => {
      console.log('Deleted user ', a);
      this.router.navigate(['/adminUser']);
    });
  }

  ngOnInit(): void {
    this.u.getUsers().subscribe(u=>{
      this.users = u;
      console.log(u);
    })
  }

}
