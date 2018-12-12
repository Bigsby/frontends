import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    The organizer
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'organizer';
}
