import {Injectable} from '@angular/core';
import {ActionType, TransactionRule} from "../models/transaction-rule.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionRuleService {

  constructor() {
  }

  getRules(): string | null {
    return localStorage.getItem('rules');
  }

  getRulesForAccount(code: number): Array<TransactionRule> {
    const rulesLocal = this.getRules();
    const rules = this.parseRules(rulesLocal);
    return rules.filter(rule => rule.code1 === code);
  }

  private parseRules(rulesLocal: string | null): Array<TransactionRule> {
    return rulesLocal ? JSON.parse(rulesLocal) : [];
  }

  setRuleForAccount(rule: TransactionRule) {
    const rulesLocal = this.getRules();
    let currentRules = this.parseRules(rulesLocal);
    currentRules.push(rule);
    currentRules.push(this.setEquivalentRule(rule));
    localStorage.setItem('rules', JSON.stringify(currentRules));
  }

  private setEquivalentRule(rule: TransactionRule): TransactionRule {
    return {
      code2: rule.code1,
      code1: rule.code2,
      action: rule.action === ActionType.CREDIT ? ActionType.DEBIT : ActionType.CREDIT,
      rule: rule.rule,
    };
  }
}
