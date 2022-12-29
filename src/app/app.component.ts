import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@ViewChild(MatTable, { static: false }) table: MatTable<any>;
  //displayedColumns: string[] = ['home', 'away', 'score'];
  //public results?: MatchResult[];
  //public realResults?: MatchResult[];
  //public dataSource: MatTableDataSource<MatchResult> = new MatTableDataSource<MatchResult>([]);
  description: string = "This component demonstrates fetching data from livescore...";
  team: string = "Arsenal";

  constructor(public http: HttpClient) {
    console.log("app constructor entered");
  }

  //  http.get<MatchResult[]>('/footballresults/fake').subscribe(result => {
  //    this.results = result;
  //    this.dataSource = new MatTableDataSource<MatchResult>(result);
  //    console.log(result);
  //  }, error => console.error(error));

  //  http.get<MatchResult[]>('/footballresults').subscribe(result => {
  //    this.realResults = result;
  //    this.dataSource = new MatTableDataSource<MatchResult>(result);
  //    console.log(result);
  //  }, error => console.error(error));
  //}

  //getData() {
  //  this.http.get<MatchResult[]>('/footballresults/fake').subscribe(result => {
  //    this.dataSource = new MatTableDataSource<MatchResult>(result);
  //    console.log(result);
  //  }, error => console.error(error));
  //}
}

//export interface MatchResult {
//  homeTeam: string;
//  homeScore: number;
//  awayTeam: string;
//  awayScore: number;
//}
