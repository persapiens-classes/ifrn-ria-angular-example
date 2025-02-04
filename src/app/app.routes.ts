import { Routes } from '@angular/router';
import { OwnerInsertComponent } from './owner-insert.component';
import { OwnerListComponent } from './owner-list.component';

export const routes: Routes = [
    { path: 'owners/new', component: OwnerInsertComponent },
    { path: 'owners', component: OwnerListComponent},
    { path: '', redirectTo: 'owners', pathMatch: 'full'},
    { path: '**', redirectTo: 'owners'}
];
