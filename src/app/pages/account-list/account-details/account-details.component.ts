import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Account} from "../../../models/account.model";
import {TransactionRuleService} from "../../../services/transaction-rule.service";
import {ActionType, TransactionRule} from "../../../models/transaction-rule.model";
import {FormBuilder} from "@angular/forms";
import {RuleFormComponent} from "./rule-form/rule-form.component";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  transactionRules: Array<TransactionRule> = [];

  actionType!: ActionType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Account, private ruleService: TransactionRuleService, private fb: FormBuilder, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getRulesForAccount();
  }

  getRulesForAccount() {
    this.transactionRules = this.ruleService.getRulesForAccount(this.data.code);
  }

  openAddForm() {
    const dialogRef = this.matDialog.open(RuleFormComponent, {
        data: {
          initial: {code1: this.data.code, code2: '', action: null, rule: ''},
          title: 'Add transaction rule'
        }
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.getRulesForAccount();
    });
  }
}
