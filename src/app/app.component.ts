import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {
    name: 'Shannon',
    age: '45'
  };
  constructor(private userSvc: UserService) {
    this.user = userSvc.user;
  }

  saveUser(user) {
    this.userSvc.saveUser(user);
  }
}
