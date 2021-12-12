import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountListComponent} from "./pages/account-list/account-list.component";
import {TransactionCheckerComponent} from "./pages/transaction-checker/transaction-checker.component";

const routes: Routes = [
  {path: 'account-list', component: AccountListComponent},
  {path: 'checker', component: TransactionCheckerComponent},
  {path: '', redirectTo: 'account-list', pathMatch: 'full'},
  {path: '**', redirectTo: 'account-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
