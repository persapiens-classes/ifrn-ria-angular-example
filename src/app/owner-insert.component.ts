import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';

@Component({
  selector: 'owner-insert',
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule, DividerModule],
  template: `
    <p-panel header="Insert">
      <label for="name">Name:</label>
      <input pInputText [pAutoFocus]="true" [(ngModel)]="insertOwner.name" placeholder="Name to be inserted">
      <p-divider />
      <p-button icon="pi pi-check" (onClick)="insert()" [style]="{'margin-right': '10px'}"/>
      <p-button icon="pi pi-times" (onClick)="cancelInsert()" />
    </p-panel>
  `
})
export class OwnerInsertComponent {
  insertOwner = new Owner('')

  router: Router
  ownerService: OwnerService

  constructor(private newRouter: Router, private newOwnerService: OwnerService) {
    this.router = newRouter
    this.ownerService = newOwnerService
  }

  insert() {
    this.ownerService.insert(this.insertOwner)
    this.router.navigate(["owners"])
  }

  cancelInsert() {
    this.router.navigate(["owners"])
  }
}
