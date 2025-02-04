import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { PanelModule } from 'primeng/panel';
import { OwnerCrudComponent } from './owner-crud.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HelloComponent, OwnerCrudComponent, PanelModule],
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <app-hello helloName="DEV"></app-hello>

          <owner-crud> </owner-crud>
        </div>  
      </div>
    </main>
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
