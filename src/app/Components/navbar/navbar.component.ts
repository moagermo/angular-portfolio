import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iconSrc = "../../assets/images/binary-code.svg"
  classAboutMe = 'btn btn-outline-info active';
  classProject = 'btn btn-outline-info';
  classExperience = 'btn btn-outline-info';
  classEducation = 'btn btn-outline-info active';

  public href: string = '';
  url: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setActiveButton(button: string){
    if(button === 'aboutMePage'){
      this.classAboutMe = 'btn btn-outline-info active';
      this.classProject = 'btn btn-outline-info';
      this.classEducation = 'btn btn-outline-info';
      this.classExperience = 'btn btn-outline-info';
    } else if (button === 'projectsPage'){
      this.classAboutMe = 'btn btn-outline-info';
      this.classProject = 'btn btn-outline-info active';
      this.classEducation = 'btn btn-outline-info';
      this.classExperience = 'btn btn-outline-info';
    } else if (button === 'experiencePage'){
      this.classAboutMe = 'btn btn-outline-info';
      this.classProject = 'btn btn-outline-info';
      this.classEducation = 'btn btn-outline-info';
      this.classExperience = 'btn btn-outline-info active';
    } else if (button === 'educationPage'){
      this.classAboutMe = 'btn btn-outline-info';
      this.classProject = 'btn btn-outline-info';
      this.classEducation = 'btn btn-outline-info active';
      this.classExperience = 'btn btn-outline-info';
    }
  }
}
