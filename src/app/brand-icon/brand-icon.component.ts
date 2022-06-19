import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-brand-icon',
    template: `<span [innerHTML]="brandIcon"></span>`,
    styleUrls: ['./brand-icon.component.scss'],
})

export class BrandIconComponent implements OnInit {
    @Input()
    public name?: string;
    public brandIcon: any;

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        ) {
    }

    public ngOnInit(): void {
        this.httpClient
        .get(`assets/images/${this.name}.svg`, { responseType: 'text' })
        .subscribe(value => {
            this.brandIcon = this.sanitizer.bypassSecurityTrustHtml(value);
        });
    }
}