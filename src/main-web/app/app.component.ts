import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private store:Store<any>) {
  }

  ngOnInit() {
  }
}
