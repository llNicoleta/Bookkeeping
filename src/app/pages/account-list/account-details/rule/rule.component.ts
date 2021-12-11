import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionRule} from "../../../../models/transaction-rule.model";

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  @Input() rule!: TransactionRule;

  @Output() editEmitter = new EventEmitter<TransactionRule>();
  @Output() deleteEmitter = new EventEmitter<TransactionRule>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEdit() {
    this.editEmitter.emit(this.rule);
  }

  emitDelete() {
    this.deleteEmitter.emit(this.rule);
  }
}
