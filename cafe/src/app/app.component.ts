import { Component } from '@angular/core';
import { AuthGuard } from './_guard/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe';
}
