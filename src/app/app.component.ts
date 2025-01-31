import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello.component';
import { OwnerInsertComponent } from "./owner-insert.component";
import { OwnerListComponent } from './owner-list.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HelloComponent, OwnerInsertComponent, OwnerListComponent, PanelModule],
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <app-hello helloName="DEV"></app-hello>

          <p-panel header="Owner">
            <owner-insert (insertOutEvent)="insert($event)"></owner-insert>

            <owner-list (removeOutEvent)="remove($event)" [listNames]="names"></owner-list>
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
