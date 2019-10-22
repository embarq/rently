import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'rty-root',
  template: `
    <rty-layout>
      <router-outlet></router-outlet>
    </rty-layout>
    <pre style="display:none">{{ routerConfig }}</pre>
  `,
  styles: []
})
export class AppComponent {
  routerConfig: string;
  constructor(router: Router) {
    this.routerConfig = JSON.stringify(router.config);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        try {
          this.routerConfig = JSON.stringify(router.config);
        } catch (error) {
        }

        if (event.urlAfterRedirects === '/not-found') {
          console.log('[route not found]:', JSON.stringify(event));
        } else {
          console.log('[route recognized]:', JSON.stringify(event));
        }
      }
    })
  }
}
