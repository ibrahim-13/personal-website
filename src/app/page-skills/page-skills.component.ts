import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.css']
})
export class PageSkillsComponent implements OnInit {

  languages : string[] = [
    'Java',
    'C/C++',
    'Python',
    'Javascript/Node.js',
    'PHP'
  ]

  frameworktools : string[] = [
    'Android Studio',
    'Qt Framework',
    'Angular',
    'UNIX Bash/Shell Scripting'
  ]

  constructor() { }

  ngOnInit() {
  }

}
