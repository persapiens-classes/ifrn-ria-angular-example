import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';

@Component({
  selector: 'owner-insert',
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule],
  template: `
    <p-panel header="Insert">
      <label for="name">Name:</label>
      <input pInputText [pAutoFocus]="true" [(ngModel)]="insertOwner.name" placeholder="Name to be inserted">
      <p-button icon="pi pi-plus" (onClick)="insert()" />
    </p-panel>
  `
})
export class OwnerInsertComponent {
  insertOwner = new Owner('')

  @Output() insertOutEvent = new EventEmitter<Owner>();

  insert() {
    this.insertOutEvent.emit(this.insertOwner);
    this.insertOwner = new Owner('')
  }
}
