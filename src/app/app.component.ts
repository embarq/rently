import { Component } from '@angular/core';

@Component({
  selector: 'rty-root',
  template: `
    <rty-layout>
      <router-outlet></router-outlet>
    </rty-layout>
  `,
  styles: []
})
export class AppComponent {
}
