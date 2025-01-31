import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Owner } from './owner';

@Component({
  selector: 'owner-list',
  imports: [FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule],
  template: `
    <p-panel header="List">
      <p-table [value]="ownersList" >
        <ng-template #header>
          <tr>
              <th pSortableColumn="name" style="width:20%">
                Name <p-sortIcon field="name" />
              </th>
              <th>Remove</th>
          </tr>
          <th>
              <p-columnFilter
                  type="text"
                  field="name"
                  placeholder="Search by name"
                  ariaLabel="Filter Name"
              ></p-columnFilter>
          </th>
        </ng-template>
        <ng-template #body let-item>
            <tr>
                <td>{{ item.name }}</td>
                <td><p-button icon="pi pi-trash" (onClick)="remove(item)" /></td>
            </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent {
  @Input() ownersList: Array<Owner> = []

  @Output() removeOutEvent = new EventEmitter<Owner>();

  remove(item: Owner) {
    this.removeOutEvent.emit(item);
  }
}
