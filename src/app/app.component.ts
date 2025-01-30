import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello.component';
import { InsertComponent } from "./insert.component";
import { ListComponent } from './list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HelloComponent, InsertComponent, ListComponent],
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <app-hello helloName="DEV"></app-hello>

          <name-insert (insertOutEvent)="insert($event)"></name-insert>

          <name-list (removeOutEvent)="remove($event)" [listNames]="names"></name-list>
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
