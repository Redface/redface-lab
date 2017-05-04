import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AppService } from './app.service';

@Component({
  selector: 'rf-entry',
  templateUrl: './app.html',
  styleUrls: ['./shared/styles/app.global.scss', './app.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  constructor(private router:Router, private titleService:Title, private appService:AppService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Dashboard Main Page');
  }
}
