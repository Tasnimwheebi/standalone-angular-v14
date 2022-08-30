import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ExampleStandaloneComponent } from './app/exampleStandalone.component';
import { NxWelcomeComponent } from './app/nx-welcome.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(ExampleStandaloneComponent);
