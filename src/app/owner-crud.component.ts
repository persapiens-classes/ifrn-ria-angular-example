import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OwnerInsertComponent } from "./owner-insert.component";
import { OwnerListComponent } from './owner-list.component';
import { PanelModule } from 'primeng/panel';
import { Owner } from './owner';
import { DividerModule } from 'primeng/divider';
import { OwnerService } from './owner-service';

@Component({
  selector: 'owner-crud',
  imports: [FormsModule, OwnerInsertComponent, OwnerListComponent, PanelModule, DividerModule],
  template: `
    <p-panel header="Owner">
      <owner-insert (insertOutEvent)="insert($event)"></owner-insert>

      <p-divider />

      <owner-list (removeOutEvent)="remove($event)" [ownersList]="findAll()"></owner-list>
    </p-panel>
  `,
  styleUrl: './app.component.scss'
})
export class OwnerCrudComponent {
  ownerService: OwnerService

  constructor(ownerService: OwnerService) {
    this.ownerService = ownerService
  }

  insert(owner: Owner) {
    this.ownerService.insert(owner)
  }

  remove(owner: Owner) {
    this.ownerService.remove(owner.name)
  }

  findAll(): Array<Owner> {
    return this.ownerService.findAll()
  }
}
