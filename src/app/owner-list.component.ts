import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'owner-list',
  imports: [FormsModule, ButtonModule, TableModule, PanelModule, AutoFocusModule],
  template: `
    <p-panel header="List">
      <p-table [value]="listNames" >
        <ng-template #header>
          <tr>
              <th>Name</th>
              <th>Remove</th>
          </tr>
      </ng-template>
        <ng-template #body let-item>
            <tr>
                <td>{{ item }}</td>
                <td><p-button icon="pi pi-trash" (onClick)="remove(item)" /></td>
            </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class OwnerListComponent {
  @Input() listNames: Array<string> = []

  @Output() removeOutEvent = new EventEmitter<string>();

  remove(item: string) {
    this.removeOutEvent.emit(item);
  }
}
