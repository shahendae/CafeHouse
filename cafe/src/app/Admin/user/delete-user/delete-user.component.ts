import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id;
  user: User = new User();

  constructor(private s: UserService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    if(this.id){
      this.s.getUser(this.id).subscribe(a => {
        console.log('user getted ', a);
        this.user = a;
      })
    }
   }

  Delete(){
    this.s.deleteUser(this.id).subscribe(a => {
      this.router.navigate(['/adminUser']);
    });
  }

  Cancel(){
    this.router.navigate(['/adminUser']);
  }

  ngOnInit(): void {
  }

}
