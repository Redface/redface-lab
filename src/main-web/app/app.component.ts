import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppService } from './app.service';
import { AppModel } from './core/models/app.model';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  constructor(private router:Router, private titleService:Title, private appService:AppService, private _appModel:AppModel) {
  }

  ngOnInit() {
    this.titleService.setTitle('Dashboard Main Page');
  }
  
  increase(){
    
  }
  decrease(){

  }
  reset(count:number) {
    
  }
}
