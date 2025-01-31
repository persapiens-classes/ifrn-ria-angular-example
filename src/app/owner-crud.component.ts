import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerInsertComponent } from "./owner-insert.component";
import { OwnerListComponent } from './owner-list.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'owner-crud',
  imports: [FormsModule, OwnerInsertComponent, OwnerListComponent, PanelModule],
  template: `
    <p-panel header="Owner">
      <owner-insert (insertOutEvent)="insert($event)"></owner-insert>

      <owner-list (removeOutEvent)="remove($event)" [listNames]="names"></owner-list>
    </p-panel>
  `,
  styleUrl: './app.component.scss'
})
export class OwnerCrudComponent {
  names: Array<string> = []

  insert(name: string) {
    this.names.push(name)
  }

  remove(item: string) {
    this.names = this.names.filter(internalName => internalName !== item)
  }
}
