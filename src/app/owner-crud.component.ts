import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'owner-crud',
  imports: [FormsModule, RouterOutlet],
  template: `
    <h2>Owners</h2>

    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class OwnerCrudComponent {
}
