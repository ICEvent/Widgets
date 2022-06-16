import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export type Balance = bigint;
export interface BalanceRequest { 'token' : TokenIdentifier, 'user' : User }
export type BalanceResponse = { 'ok' : Balance } |
  { 'err' : CommonError };
export type Balance__1 = bigint;
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type CommonError__1 = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type Date = bigint;
export type Extension = string;
export type Memo = Array<number>;
export type Metadata = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export type Result = { 'ok' : Array<Transaction> } |
  { 'err' : CommonError };
export type Result_1 = { 'ok' : Balance__1 } |
  { 'err' : CommonError__1 };
export type Result_2 = { 'ok' : Metadata } |
  { 'err' : CommonError__1 };
export type SubAccount = Array<number>;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export interface Transaction {
  'date' : Date,
  'request' : TransferRequest__1,
  'txid' : TransactionId,
}
export type TransactionId = bigint;
export interface TransactionsRequest {
  'token' : TokenIdentifier,
  'query_option' : { 'all' : null } |
    { 'date' : [Date, Date] } |
    { 'page' : [bigint, bigint] } |
    { 'txid' : TransactionId } |
    { 'user' : User },
}
export type TransferIdResponse = { 'ok' : bigint } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export interface TransferRequest {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export interface TransferRequest__1 {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export type TransferResponse = { 'ok' : Balance } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface icevent_token {
  'acceptCycles' : () => Promise<undefined>,
  'availableCycles' : () => Promise<bigint>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'extensions' : () => Promise<Array<Extension>>,
  'metadata' : (arg_0: TokenIdentifier__1) => Promise<Result_2>,
  'registry' : () => Promise<Array<[AccountIdentifier__1, Balance__1]>>,
  'supply' : (arg_0: TokenIdentifier__1) => Promise<Result_1>,
  'transactions' : (arg_0: TransactionsRequest) => Promise<Result>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'transferTo' : (arg_0: TransferRequest) => Promise<TransferIdResponse>,
}
export interface _SERVICE extends icevent_token {}
