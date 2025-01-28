import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ButtonModule, TableModule, InputTextModule, PanelModule, AutoFocusModule],
  //templateUrl: './app.component.html',
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <h1>Hello, {{ name }}</h1>

          <p-panel header="Insert">
            <label for="name">Name:</label>
            <input pInputText [pAutoFocus]="true" [(ngModel)]="name" placeholder="Name to be inserted">
            <p-button label="Insert" (onClick)="insert()" />
          </p-panel>

          <p-panel header="Names">
            <p-table [value]="names" >
              <ng-template #header>
                <tr>
                    <th>Name</th>
                    <th>Remove</th>
                </tr>
            </ng-template>
              <ng-template #body let-item>
                  <tr>
                      <td>{{ item }}</td>
                      <td><p-button label="Remove" (onClick)="remove(item)" /></td>
                  </tr>
              </ng-template>
            </p-table>
          </p-panel>
        </div>  
      </div>
    </main>

    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = ''

  names: Array<string> = []

  insert() {
    this.names.push(this.name)
  }

  remove(item: string) {
    this.names = this.names.filter(internalName => internalName !== item)
  }
}
