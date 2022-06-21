import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  aboutMePage = document.getElementById('#aboutMePage');
  projectsPage = document.getElementById('#projectsPage');
  educationPage = document.getElementById('#educationPage');
  experiencePage = document.getElementById('#experiencePage');

  iconSrc = "../../assets/images/binary-code.svg"
  constructor() { }

  ngOnInit(): void {
  }
  
  clickOfLink(this: any){
    this.aboutMePage.className.remove(' active');
    this.projectsPage.className.remove(' active');
    this.experiencePage.className.remove(' active');
    this.educationPage.className.remove(' active');
    this.className+=' active'

  }
}
