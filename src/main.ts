/// <reference path="main.d.ts" />

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('isSSR', SERVER);
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
