import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {RouterLinks} from '../app/datastorage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  url_me = RouterLinks.URL_ME;
  url_education = RouterLinks.URL_EDUCATION;
  url_skills = RouterLinks.URL_SKILLS;
  url_experiences = RouterLinks.URL_EXPERIENCES;
  url_campus = RouterLinks.URL_CAMPUS;
  url_research = RouterLinks.URL_RESEARCH;

  isMobile : boolean = false;
  
  constructor(private titleService: Title) {
    if(window.screen.width < 700) {
      this.isMobile = true;
    }
    titleService.setTitle('Hi, I\'m Ibrahim Khan');
  }
}
