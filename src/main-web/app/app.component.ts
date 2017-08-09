import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AppModel } from './core/models/app.model';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private router: Router, private _appModel: AppModel) {
    this.counter$ = _appModel.counter$;
  }

  ngOnInit() {
    this.setTitle('Dashboard Main Page');
  }

  increase() {
    this._appModel.increaseNumber();
  }

  decrease() {
    this._appModel.decreaseNumber();
  }

  reset(count: number) {
    this._appModel.resetNumber(0);
  }

  private setTitle(title: string) {
    this._appModel.setTitle(title);
  }
}
