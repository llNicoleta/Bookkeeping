import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TransactionRuleService} from "../../services/transaction-rule.service";
import {TransactionRule} from "../../models/transaction-rule.model";

@Component({
  selector: 'app-transaction-checker',
  templateUrl: './transaction-checker.component.html',
  styleUrls: ['./transaction-checker.component.scss']
})
export class TransactionCheckerComponent implements OnInit {
  checkForm = this.fb.group({
    code1: ['', Validators.required],
    code2: ['', Validators.required],
    action: [null, Validators.required]
  })

  hasRun: boolean = false;
  rule!: TransactionRule | null;
  constructor(private fb: FormBuilder, private ruleService: TransactionRuleService) { }

  ngOnInit(): void {
  }

  check() {
    let code1 = this.checkForm.value.code1;
    let code2 = this.checkForm.value.code2;
    let action = this.checkForm.value.action;
    this.rule = this.ruleService.checkRule(code1, code2, action);
    this.hasRun = true;
  }
}
