import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { EducationComponent } from './Pages/education/education.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ProjectsComponent } from './Pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'about-me', component: AboutMeComponent },
      { path: '', component: AboutMeComponent},
      { path: 'projects', component: ProjectsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
