import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'name-insert',
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule],
  template: `
    <p-panel header="Insert">
      <label for="name">Name:</label>
      <input pInputText [pAutoFocus]="true" [(ngModel)]="insertName" placeholder="Name to be inserted">
      <p-button icon="pi pi-plus" (onClick)="insert()" />
    </p-panel>
  `
})
export class InsertComponent {
  insertName = ''

  @Output() insertOutEvent = new EventEmitter<string>();

  insert() {
    this.insertOutEvent.emit(this.insertName);
  }
}
