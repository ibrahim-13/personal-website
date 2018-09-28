import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-research',
  templateUrl: './page-research.component.html',
  styleUrls: ['./page-research.component.css']
})
export class PageResearchComponent implements OnInit {

  panelOpenState : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
