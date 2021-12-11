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
    code1: [{value: this.data.initial.code1, disabled: true}],
    code2: [{value: this.data.initial.code2, disabled: this.data.edit}, Validators.required],
    action: [this.data.initial.action, Validators.required],
    rule: [this.data.initial.rule, Validators.required],
  },);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ruleService: TransactionRuleService, private fb: FormBuilder, public dialogRef: MatDialogRef<RuleFormComponent>) { }

  ngOnInit(): void {
  }

  submitRule() {
    const rule = this.ruleForm.getRawValue();
    this.ruleService.setRuleForAccount(rule);
    this.dialogRef.close();
  }

  updateRule() {
    const rule = this.ruleForm.getRawValue();
    this.ruleService.updateRuleForAccount(rule);
    this.dialogRef.close();
  }
}
