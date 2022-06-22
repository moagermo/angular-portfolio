import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';

@Component({
    selector: 'about-me-page',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {
    profilePicture = '../../../assets/images/profile-pic.jpg'

    constructor() {}
    ngOnInit(): void {
    }
}