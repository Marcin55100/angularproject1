import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['home', 'away', 'score'];
  public results?: MatchResult[];
  public realResults?: MatchResult[];
  public dataSource: MatTableDataSource<MatchResult> = new MatTableDataSource<MatchResult>([]);

  constructor(public http: HttpClient) {
    console.log("table constructor entered");

    http.get<MatchResult[]>('/footballresults/fake').subscribe(result => {
      this.results = result;
      this.dataSource = new MatTableDataSource<MatchResult>(result);
      console.log(result);
    }, error => console.error(error));

    http.get<MatchResult[]>('/footballresults').subscribe(result => {
      this.realResults = result;
      this.dataSource = new MatTableDataSource<MatchResult>(result);
      console.log(result);
    }, error => console.error(error));
  }
    ngOnInit(): void {
        //throw new Error('Method not implemented.');
    }

  getData() {
    this.http.get<MatchResult[]>('/footballresults/fake').subscribe(result => {
      this.dataSource = new MatTableDataSource<MatchResult>(result);
      console.log(result);
    }, error => console.error(error));
  }
}

export interface MatchResult {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
}
