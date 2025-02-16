import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';
import { Router } from '@angular/router';
import { OwnerService } from './owner-service';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'owner-list',
  imports: [FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule, DividerModule, TooltipModule],
  template: `
    <p-button  icon="pi pi-plus" (onClick)="startInsert()" autofocus="true" pTooltip="Start owner insert" />

    <p-divider />

    <p-panel header="List">
      <p-table 
        [value]="ownersList()"
        [rows]="3"
        [paginator]="true"
        [rowsPerPageOptions]="[3, 5, 10]"
      >
        <ng-template #header>
          <tr>
              <th pSortableColumn="name" style="width:20%">
                Name <p-sortIcon field="name" />
              </th>
              <th>Remove</th>
          </tr>
          <tr>
              <th>
                  <p-columnFilter
                      type="text"
                      field="name"
                      placeholder="Search by name"
                      ariaLabel="Filter Name"
                  ></p-columnFilter>
              </th>
          </tr>
        </ng-template>
        <ng-template #body let-item>
            <tr>
                <td>{{ item.name }}</td>
                <td><p-button icon="pi pi-trash" (onClick)="remove(item)" pTooltip="Delete the owner"/></td>
            </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent {
  ownersList = signal<Owner[]>([]);

  constructor(private router: Router, 
      private ownerService: OwnerService,
      private messageService: MessageService
    ) {
    // Effect to synh ownersList with service
    effect(() => {
      this.ownersList.set(this.ownerService.owners())
    })

    this.loadOwners()
  }

  async remove(item: Owner) {
    const success = await this.ownerService.remove(item.name)
    if (success) {
      this.loadOwners() // Load owners after deletion
      this.messageService.add({
        severity: 'success',
        summary: 'Owner removed',
        detail: 'Owner removed ok.'
      })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Owner not removed',
        detail: 'Owner not removed.'
      })
    }
  }

  startInsert(): void {
    this.router.navigate(["owners/new"])
  }

  async loadOwners() {
    await this.ownerService.loadOwners()
  }
}
