import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn : boolean = false;

  service: HardcodedAuthenticationService;

  constructor(service: HardcodedAuthenticationService) {
    this.service = service;
  }

  ngOnInit(): void {
   // this.isUserLoggedIn = this.service.isUserLoggedIn();
  }

}
