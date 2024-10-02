import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'web-app-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <web-app-analog-welcome/>
  `,
})
export default class HomeComponent {
}
