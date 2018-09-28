import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAboutMeComponent} from '../app/page-about-me/page-about-me.component';
import {PageEducationComponent} from '../app/page-education/page-education.component'
import {PageSkillsComponent} from '../app/page-skills/page-skills.component'
import {PageExperiencesComponent} from '../app/page-experiences/page-experiences.component'
import {PageCampusInvolvementsComponent} from '../app/page-campus-involvements/page-campus-involvements.component'
import {PageResearchComponent} from '../app/page-research/page-research.component'
import {RouterLinks, RouterPaths} from '../app/datastorage';



const routes: Routes = [
  { path: '', redirectTo: RouterLinks.URL_ME, pathMatch: 'full' },
  { path: RouterPaths.PATH_ME, component: PageAboutMeComponent },
  { path: RouterPaths.PATH_EDUCATION, component: PageEducationComponent },
  { path: RouterPaths.PATH_SKILLS, component: PageSkillsComponent },
  { path: RouterPaths.PATH_EXPERIENCES, component: PageExperiencesComponent },
  { path: RouterPaths.PATH_CAMPUS, component: PageCampusInvolvementsComponent },
  { path: RouterPaths.PATH_RESEARCH, component: PageResearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

