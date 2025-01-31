import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerInsertComponent } from "./owner-insert.component";
import { OwnerListComponent } from './owner-list.component';
import { PanelModule } from 'primeng/panel';
import { Owner } from './owner';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'owner-crud',
  imports: [FormsModule, OwnerInsertComponent, OwnerListComponent, PanelModule, DividerModule],
  template: `
    <p-panel header="Owner">
      <owner-insert (insertOutEvent)="insert($event)"></owner-insert>

      <p-divider />

      <owner-list (removeOutEvent)="remove($event)" [ownersList]="owners"></owner-list>
    </p-panel>
  `,
  styleUrl: './app.component.scss'
})
export class OwnerCrudComponent {
  owners: Array<Owner> = []

  insert(owner: Owner) {
    this.owners.push(owner)
  }

  remove(owner: Owner) {
    this.owners = this.owners.filter(internalOwner => internalOwner.name !== owner.name)
  }
}
