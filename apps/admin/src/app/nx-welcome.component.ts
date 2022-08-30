import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

/* eslint-disable */

@Component({
  selector: 'baman-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
  <img src="{{url}}" alt="" srcset="" width="300">
  `,

  styles: [],
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}
  @Input() url!: string
  ngOnInit(): void {}
}
