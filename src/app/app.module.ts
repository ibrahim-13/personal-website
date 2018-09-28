import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// My imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageAboutMeComponent } from './page-about-me/page-about-me.component';
import { PageEducationComponent } from './page-education/page-education.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
import { PageExperiencesComponent } from './page-experiences/page-experiences.component';
import { PageCampusInvolvementsComponent } from './page-campus-involvements/page-campus-involvements.component';
import { PageResearchComponent } from './page-research/page-research.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAboutMeComponent,
    PageEducationComponent,
    PageSkillsComponent,
    PageExperiencesComponent,
    PageCampusInvolvementsComponent,
    PageResearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
