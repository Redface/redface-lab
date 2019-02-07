import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get('api/heroes/11').subscribe(hero => {
      console.log(hero);
    });
  }
}
