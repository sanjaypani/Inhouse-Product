import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Sanjay';
  password = '';

  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor(private router: Router,
              private service: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log("username ::: " + this.username)

    if (this.service.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
    console.log("invalidLogin : " + this.invalidLogin)
  }

}
