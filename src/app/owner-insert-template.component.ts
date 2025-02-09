import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'owner-insert-template',
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule, DividerModule, CommonModule],
  template: `
    <form #insertForm="ngForm">
      <p-panel header="Insert">
        <label for="name">Name:</label>
        <input id="name" 
          name="inputName"
          pInputText 
          [pAutoFocus]="true" 
          placeholder="Name to be inserted" 
          #inputName="ngModel"
          [(ngModel)]="insertOwner.name" 
          required
          minlength="3" />
        <div
          *ngIf="inputName.invalid && (inputName.dirty || inputName.touched)"
          class="alert"
        >
          <div *ngIf="inputName.errors?.['required']">Name is required.</div>
          <div *ngIf="inputName.errors?.['minlength']">Name must be at least 3 characters long.</div>
        </div>
        <p-divider />
        <p-button icon="pi pi-check" (onClick)="insert()" [style]="{'margin-right': '10px'}" disabled="{{ inputName.invalid }}"/>
        <p-button icon="pi pi-times" (onClick)="cancelInsert(insertForm)"/>
      </p-panel>
    </form>
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

  cancelInsert(form: NgForm) {
    form.control.markAsDirty()
    this.router.navigate(["owners"])
  }
}
