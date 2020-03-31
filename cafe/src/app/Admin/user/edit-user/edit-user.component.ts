import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  id;
  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute) { 
      this.id = route.snapshot.paramMap.get('id');
      if(this.id){
        this.userService.getUser(this.id).subscribe(a => {
          console.log('user getted ', a);
          this.user = a;
        })
      }
    }

  Save(){
    this.userService.editUser(this.id, this.user).subscribe(a => {
      console.log('edited user ', a);
      this.router.navigate(['/adminUser']);
    }); 
  }

  ngOnInit(): void {
  }

}
