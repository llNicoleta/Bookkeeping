import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TransactionRuleService} from "../../../../services/transaction-rule.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent implements OnInit {
  ruleForm = this.fb.group({
    code1: [this.data.initial.code1, Validators.required],
    code2: [this.data.initial.code2, Validators.required],
    action: [this.data.initial.action, Validators.required],
    rule: [this.data.initial.rule, Validators.required],
  },);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ruleService: TransactionRuleService, private fb: FormBuilder, public dialogRef: MatDialogRef<RuleFormComponent>) { }

  ngOnInit(): void {
  }

  submitRule() {
    const rule = this.ruleForm.value;
    this.ruleService.setRuleForAccount(rule);
    this.dialogRef.close();
  }

}
