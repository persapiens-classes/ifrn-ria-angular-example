import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { HelloComponent } from './hello.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'owner-crud',
  imports: [FormsModule, RouterOutlet, HelloComponent, ToastModule],
  providers: [MessageService],
  template: `
    <hello />

    <h2>Owners</h2>

    <router-outlet></router-outlet>
    <!-- Toast to show message -->
    <p-toast></p-toast>
  `,
  styleUrl: './app.component.scss'
})
export class OwnerCrudComponent {
}
