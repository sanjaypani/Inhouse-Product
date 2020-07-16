import { Component, OnInit } from '@angular/core';

export class upload {

  constructor(public filename: string,
              public filetype: string,
              public language: string,
              public targetDate: Date) {
  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  uploadsList = [

    new upload('Java 8 in Action', '.pdf', 'English', new Date()),
    new upload('Java 9 in Action', '.pdf', 'English', new Date()),
    new upload('Java 10 in Action', '.pdf', 'English', new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
