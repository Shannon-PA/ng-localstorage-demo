import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')) || {
      name: '',
      age: ''
    };
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
