import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppService } from './app.service';
import { AppModel } from './core/models/app.model';
import { Store } from '@ngrx/store/store';
import { INCREMENT } from './shared/actions/app.actions';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  counter: Observable<number>;

  constructor(private router: Router, private titleService: Title, private appService: AppService,
              private _appModel: AppModel) {
    this.counter = _appModel.counter$;
  }

  // constructor(private router: Router, private titleService: Title, private store: Store<any>) {
  //   this.counter = store.select('counter');
  // }

  ngOnInit() {
    this.titleService.setTitle('Dashboard Main Page');
  }

  increase() {
    // this.store.dispatch({type:INCREMENT});
    this._appModel.increaseNumber();
  }

  decrease() {
  }

  reset(count: number) {
  }
}
