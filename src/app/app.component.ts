import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description: string = "This page demonstrates fetching data from livescore...";
  team: string = "Arsenal";

  constructor(public http: HttpClient) {
    console.log("app constructor entered");
  }
}
