import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export class HelloResponseBean {
  constructor(public message: String) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloMessage() {
    console.log("Execute " + environment.url);
    return this.http.get<HelloResponseBean>(environment.url);
  }
}
