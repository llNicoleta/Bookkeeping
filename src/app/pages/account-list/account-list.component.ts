import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../../models/account.model";
import {AccountService} from "../../services/account.service";
import {MatDialog} from "@angular/material/dialog";
import {AccountDetailsComponent} from "./account-details/account-details.component";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  allAccounts$!: Observable<Array<Account>>;

  displayedColumns = [
    'code',
    'name',
    'actions'
  ]

  constructor(private accountsService: AccountService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.allAccounts$ = this.accountsService.allAccounts$;
  }

  openDetails(row: Account) {
    this.matDialog.open(AccountDetailsComponent, {data: row});
  }
}
