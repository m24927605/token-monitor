import { EventMonitorLog } from '../../base/log';

export class MintEventLog extends EventMonitorLog {
  private _minter: string = '';
  private _mintAmount: number = 0;
  private _mintTokens: number = 0;

  set minter(value: string) {
    this._minter = value;
  }

  set mintAmount(value: number) {
    this._mintAmount = value;
  }

  set mintTokens(value: number) {
    this._mintTokens = value;
  }

  makeEventLogContent() {
    const message = `${this._minter} Mint ${this._mintAmount} crUSDC with ${this._mintTokens} USDC`;
    this._logContent = this._appendDefaultLog(message);
  }
}

export class RedeemEventLog extends EventMonitorLog {
  private _redeemer: string = '';
  private _redeemAmount: number = 0;
  private _redeemTokens: number = 0;

  set redeemer(value: string) {
    this._redeemer = value;
  }

  set redeemAmount(value: number) {
    this._redeemAmount = value;
  }

  set redeemTokens(value: number) {
    this._redeemTokens = value;
  }

  makeEventLogContent() {
    const message = `${this._redeemer} Redeem ${this._redeemAmount} USDC, burn ${this._redeemTokens} crUSDC`;
    this._logContent = this._appendDefaultLog(message);
  }
}

export class BorrowEventLog extends EventMonitorLog {
  private _borrower: string = '';
  private _borrowAmount: number = 0;
  private _accountBorrows: number = 0;
  private _totalBorrows: number = 0;

  set borrower(value: string) {
    this._borrower = value;
  }

  set borrowAmount(value: number) {
    this._borrowAmount = value;
  }

  set accountBorrows(value: number) {
    this._accountBorrows = value;
  }

  set totalBorrows(value: number) {
    this._totalBorrows = value;
  }

  makeEventLogContent() {
    const message = `${this._borrower} Borrow ${this._borrowAmount} USDC`;
    this._logContent = this._appendDefaultLog(message);
  }
}

export class RepayBorrowEventLog extends EventMonitorLog {
  private _payer: string = '';
  private _borrower: string = '';
  private _repayAmount: number = 0;
  private _accountBorrows: number = 0;
  private _totalBorrows: number = 0;

  set payer(value: string) {
    this._payer = value;
  }

  set borrower(value: string) {
    this._borrower = value;
  }

  set repayAmount(value: number) {
    this._repayAmount = value;
  }

  set accountBorrows(value: number) {
    this._accountBorrows = value;
  }

  set totalBorrows(value: number) {
    this._totalBorrows = value;
  }

  makeEventLogContent() {
    const message = `${this._payer} RepayBorrow ${this._repayAmount} USDC for ${this._borrower}`;
    this._logContent = this._appendDefaultLog(message);
  }
}