import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-experiment-list',
  templateUrl: './experiment-list.html',
  styleUrls: ['./experiment-list.scss']
})
export class ExperimentListComponent implements OnInit {
  
  articles = [
    {url: 'grid', title: 'ZIGZAG GRID'},
    {url: 'ngrx', title: 'NGRX'},
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
