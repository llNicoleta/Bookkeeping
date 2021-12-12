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
    const rules = this.parseRules();
    return rules.filter(rule => rule.code1 === code);
  }

  private parseRules(): Array<TransactionRule> {
    const rulesLocal = this.getRules();
    return rulesLocal ? JSON.parse(rulesLocal) : [];
  }

  setRuleForAccount(rule: TransactionRule) {
    let currentRules = this.parseRules();
    currentRules.push(rule);
    currentRules.push(this.setEquivalentRule(rule));
    localStorage.setItem('rules', JSON.stringify(currentRules));
  }

  updateRuleForAccount(rule: TransactionRule) {
    let newRules = this.filterRuleOut(rule);
    newRules.push(rule);
    newRules.push(this.setEquivalentRule(rule));
    localStorage.setItem('rules', JSON.stringify(newRules));
  }

  checkRule(code1: number, code2: number, action: ActionType): TransactionRule | null {
    let rules = this.parseRules();
    let rule = rules.find(rule => rule.code1 === code1 && rule.code2 === code2 && rule.action === action);
    return rule ? rule : null;
  }

  private filterRuleOut(rule: TransactionRule): Array<TransactionRule> {
    let currentRules = this.parseRules();
    return currentRules
      .filter(r => !(r.code2 === rule.code1 && r.code1 === rule.code2))
      .filter(r => !(r.code1 === rule.code1 && r.code2 === rule.code2));
  }

  deleteRule(rule: TransactionRule) {
    const newRules = this.filterRuleOut(rule);
    localStorage.setItem('rules', JSON.stringify(newRules));
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
