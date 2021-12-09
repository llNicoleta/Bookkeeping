import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountListComponent} from "./pages/account-list/account-list.component";

const routes: Routes = [
  {path: 'account-list', component: AccountListComponent},
  {path: '', redirectTo: 'account-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
