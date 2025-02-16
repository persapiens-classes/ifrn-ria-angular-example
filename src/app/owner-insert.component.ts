import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'owner-insert',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, PanelModule, AutoFocusModule, DividerModule, CommonModule, TooltipModule],
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
        <p-button icon="pi pi-check" (onClick)="insert()" [style]="{'margin-right': '10px'}" [disabled]="insertForm.invalid" pTooltip="Save the owner"/>
        <p-button icon="pi pi-times" (onClick)="cancelInsert()" pTooltip="Cancel"/>
      </p-panel>
    </form>
  `
})
export class OwnerInsertComponent {
  insertForm: FormGroup;
  isSubmitting = signal(false); // Signal to control submitting state

  constructor(
    private router: Router,
    private ownerService: OwnerService, 
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ) {
    this.insertForm = this.formBuilder.group({
      inputName: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  async insert() {
    if (this.insertForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true)

      const newOwner = new Owner(this.insertForm.value.inputName)
      const result = await this.ownerService.insert(newOwner)

      this.isSubmitting.set(false);
      if (result) {
        this.messageService.add({
          severity: 'success',
          summary: 'Owner inserted',
          detail: 'Owner inserted ok.'
        })
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Owner not inserted',
          detail: 'Owner not inserted.'
        })
      }
      this.router.navigate(["owners"])
    }
  }

  cancelInsert() {
    this.router.navigate(["owners"])
  }
}
