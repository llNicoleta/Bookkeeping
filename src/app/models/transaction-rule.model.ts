export enum ActionType {
  CREDIT='credit',
  DEBIT='debit',
}

export interface TransactionRule {
  code1: number,
  code2: number,
  action: ActionType,
  rule: string,
}
