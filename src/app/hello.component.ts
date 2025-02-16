import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'hello',
  imports: [ButtonModule, TooltipModule],
  template: `
    <div style="display: flex; align-items: center; gap: 10px;">
      <h1>Hello, {{ helloName() }}</h1>
      <p-button pTooltip="Logout" icon="pi pi-sign-out" (click)="logout()" severity="danger" />
    </div>
  `
})
export class HelloComponent {
  constructor(private authService: AuthService, private router: Router) {}

  helloName() {
    return this.authService.authenticatedLogin()
  }

  logout() {
    this.authService.logout()
    this.router.navigate(["login"])
  }
}
