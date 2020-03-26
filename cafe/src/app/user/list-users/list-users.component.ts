import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:User[];
  constructor(private u: UserService) { }

  ngOnInit(): void {
    this.u.getUsers().subscribe(u=>{
      this.users = u;
      console.log(u);
    })
  }

}
