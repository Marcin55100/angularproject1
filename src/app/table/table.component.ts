import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  public displayedColumns: string[] = ['home', 'away', 'score'];
  public results?: MatchResult[];
  public realResults?: MatchResult[];
  public dataSource: MatTableDataSource<MatchResult> = new MatTableDataSource<MatchResult>([]);
  public clickedRows = new Set<PeriodicElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public http: HttpClient) {
    console.log("table constructor entered");

    http.get<MatchResult[]>('/footballresults/fake').subscribe(result => {
      this.results = result;
      this.dataSource = new MatTableDataSource<MatchResult>(result);
      this.dataSource.paginator = this.paginator;
      console.log(result);
    }, error => console.error(error));

    http.get<MatchResult[]>('/footballresults').subscribe(result => {
      this.realResults = result;
      this.dataSource = new MatTableDataSource<MatchResult>(result);
      this.dataSource.paginator = this.paginator;
      console.log(result);
    }, error => console.error(error));
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

export interface PeriodicElement {
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
}
