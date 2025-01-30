import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { HelloComponent } from './hello.component';
import { InsertComponent } from "./insert.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ButtonModule, TableModule, InputTextModule, PanelModule, AutoFocusModule, HelloComponent, InsertComponent],
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <app-hello helloName="DEV"></app-hello>

          <name-insert (insertOutEvent)="insert($event)"></name-insert>

          <p-panel header="List">
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
                      <td><p-button icon="pi pi-trash" (onClick)="remove(item)" /></td>
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
  names: Array<string> = []

  insert(name: string) {
    this.names.push(name)
  }

  remove(item: string) {
    this.names = this.names.filter(internalName => internalName !== item)
  }
}
