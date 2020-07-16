import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcomedata.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome ';
  responseMsg : String;
  errorMsg: String;

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.message = this.message + this.route.snapshot.params['name']
  }

  getWelcomeMsg() {
    console.log("Getting Welcome Message ......");
    this.service.executeHelloMessage().subscribe(
      res => this.handleSuccessResponse(res),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response) {
    console.log(response);
    this.responseMsg = response.message
  }

  handleErrorResponse(err) {
    this.errorMsg = err.error.message;
    console.log("Error Msg " + this.errorMsg);
  }

}
