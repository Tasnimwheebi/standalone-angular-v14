import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
    selector: 'app-root-example',
    standalone: true,
    imports: [
        NxWelcomeComponent, CommonModule
    ],
    template: `
    <div *ngIf="url">
       
    <baman-nx-welcome  [url]="url"></baman-nx-welcome></div>
  `
})
export class ExampleStandaloneComponent {
    url = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dendrobium-orchid-types-1587739626.jpg";
}
