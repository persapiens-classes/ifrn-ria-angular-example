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
              <th>Name</th>
              <th>Remove</th>
          </tr>
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
