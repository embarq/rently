import { Component, NgZone, ChangeDetectionStrategy, ApplicationRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'rty-root',
  template: `<rty-layout><router-outlet></router-outlet></rty-layout>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    router: Router,
    zone: NgZone,
    appRef: ApplicationRef
  ) {
    zone.runOutsideAngular(() => {
      appRef.isStable.subscribe((isStable) => console.log('App is stable', isStable));
    });
    zone.runOutsideAngular(() => {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (event.urlAfterRedirects === '/not-found') {
            console.log('[route not found]:', JSON.stringify(event));
          } else {
            console.log('[route recognized]:', JSON.stringify(event));
          }
        }
      });
    })
  }
}
