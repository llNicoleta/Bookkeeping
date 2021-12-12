import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  check() {

  }
}
