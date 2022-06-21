import { Component, OnInit } from '@angular/core';

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