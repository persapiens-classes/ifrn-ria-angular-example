import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ButtonModule, TableModule, InputTextModule],
  //templateUrl: './app.component.html',
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <h1>Hello, {{ name }}</h1>

          <label for="name">Name:</label>
          <input pInputText [(ngModel)]="name">
          <p-button label="Insert" (onClick)="insert()" />

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
