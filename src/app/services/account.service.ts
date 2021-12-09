import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Account} from "../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  FILE_PATH = 'assets/files/DevPlant-Accounts-Sample.csv';
  allAccounts$: Observable<Array<Account>> = new Observable();

  constructor(private http: HttpClient) {
    this.allAccounts$ = this.http.get(this.FILE_PATH, { responseType: 'text' }).pipe(
      map(data => this.splitLines(data)),
      map(data => this.splitByComma(data)),
      map(data => this.mapToObject(data)),
    );
  }

  splitLines(data: string): Array<string> {
    return data.trim().split('\n');
  }

  splitByComma(data: Array<string>): Array<Array<string>> {
    return data.map(d => d.split(','));
  }

  mapToObject(data: Array<Array<string>>): Array<Account> {
    const accounts: Array<Account> = [];
    data.forEach(account => accounts.push({code: parseInt(account[0]), name: account[1]}));
    return accounts;
  }
}
