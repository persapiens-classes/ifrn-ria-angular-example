import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'owner-insert',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule, DividerModule, CommonModule],
  template: `
    <form [formGroup]="insertForm">
      <p-panel header="Insert">
        <label for="name">Name:</label>
        <input id="name" 
          name="inputName"
          pInputText 
          [pAutoFocus]="true" 
          placeholder="Name to be inserted" 
          formControlName="inputName" />
        <div
          *ngIf="insertForm.get('inputName')?.invalid && (insertForm.get('inputName')?.dirty || insertForm.get('inputName')?.touched)"
          class="alert"
        >
          <div *ngIf="insertForm.get('inputName')?.errors?.['required']">Name is required.</div>
          <div *ngIf="insertForm.get('inputName')?.errors?.['minlength']">Name must be at least 3 characters long.</div>
        </div>
        <p-divider />
        <p-button icon="pi pi-check" (onClick)="insert()" [style]="{'margin-right': '10px'}" [disabled]="insertForm.invalid"/>
        <p-button icon="pi pi-times" (onClick)="cancelInsert()"/>
      </p-panel>
    </form>
  `
})
export class OwnerInsertComponent {
  insertForm: FormGroup

  router: Router
  ownerService: OwnerService

  constructor(private newRouter: Router, private newOwnerService: OwnerService, private formBuilder: FormBuilder) {
    this.router = newRouter
    this.ownerService = newOwnerService
    this.insertForm = formBuilder.group({
      inputName: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  insert() {
    if (this.insertForm.valid) {
      const newOwner = new Owner(this.insertForm.value.inputName)
      this.ownerService.insert(newOwner)
      this.router.navigate(["owners"])
    }
  }

  cancelInsert() {
    this.router.navigate(["owners"])
  }
}
