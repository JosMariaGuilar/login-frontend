import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginuserService: LoginuserService) {}

  ngOnInit(): void {}

  userLogin(): void {
    this.loginuserService
      .loginUser(this.user)
      .subscribe((data) => (console.log(data)), error => alert('sorry please enter correct username and password'))
  }
}
