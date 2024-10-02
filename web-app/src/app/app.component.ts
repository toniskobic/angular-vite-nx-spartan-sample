import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'web-app-root',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    HlmButtonDirective,
    HlmInputDirective,
    HlmLabelDirective,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text-center p-1 text-3xl">Hello {{ name() }}</h1>
    <div class="flex justify-center gap-4">
      <div class="flex flex-col gap-4">
        <label hlmLabel>
          Name
          <input hlmInput [formControl]="nameControl" />
        </label>
        <button hlmBtn (click)="submit()">Submit</button>
      </div>
    </div>
  `,
})
export class AppComponent {
  name = signal('');

  nameControl = new FormControl('', { nonNullable: true });

  submit() {
    this.name.set(this.nameControl.value);
  }
}
