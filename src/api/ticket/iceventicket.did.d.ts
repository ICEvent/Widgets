import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export interface AllowanceRequest {
  'token' : TokenIdentifier,
  'owner' : User,
  'spender' : Principal,
}
export interface ApproveRequest {
  'token' : TokenIdentifier,
  'subaccount' : [] | [SubAccount],
  'allowance' : Balance,
  'spender' : Principal,
}
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
export type HeaderField = [string, string];
export type Memo = Array<number>;
export interface Metadata {
  'event_day' : string,
  'asset' : [] | [string],
  'host' : string,
  'event_location' : string,
  'event_id' : bigint,
  'event_name' : string,
}
export interface Metadata__1 {
  'event_day' : string,
  'asset' : [] | [string],
  'host' : string,
  'event_location' : string,
  'event_id' : bigint,
  'event_name' : string,
}
export interface MintTicketRequest {
  'metadatas' : Array<Metadata>,
  'spender' : Principal,
}
export interface Minter {
  'minted' : Array<TokenIndex>,
  'minter' : Principal,
  'quota' : bigint,
}
export interface Request {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface Response {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export type Result = { 'ok' : Array<Transaction> } |
  { 'err' : CommonError };
export type Result_1 = { 'ok' : Balance__1 } |
  { 'err' : CommonError__1 };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_3 = { 'ok' : Array<TokenIndex> } |
  { 'err' : string };
export type Result_4 = { 'ok' : Metadata__1 } |
  { 'err' : CommonError__1 };
export type Result_5 = { 'ok' : AccountIdentifier__1 } |
  { 'err' : CommonError__1 };
export type StreamingCallback = (arg_0: StreamingCallbackToken) => Promise<
    StreamingCallbackResponse
  >;
export interface StreamingCallbackResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
}
export interface StreamingCallbackToken {
  'key' : string,
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }
  };
export type SubAccount = Array<number>;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export type TokenIndex = number;
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
export interface iceventicket {
  'acceptCycles' : () => Promise<undefined>,
  'addModerator' : (arg_0: Principal) => Promise<undefined>,
  'allowance' : (arg_0: AllowanceRequest) => Promise<Result_1>,
  'approve' : (arg_0: ApproveRequest) => Promise<undefined>,
  'availableCycles' : () => Promise<bigint>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'bearer' : (arg_0: TokenIdentifier__1) => Promise<Result_5>,
  'extensions' : () => Promise<Array<Extension>>,
  'getAdmin' : () => Promise<Principal>,
  'getAllowances' : () => Promise<Array<[TokenIndex, Principal]>>,
  'getMinters' : () => Promise<Array<Minter>>,
  'getModerators' : () => Promise<Array<Principal>>,
  'getMyTickets' : () => Promise<Array<[TokenIdentifier__1, Metadata__1]>>,
  'getRegistry' : () => Promise<Array<[TokenIndex, AccountIdentifier__1]>>,
  'getTokenIdentifier' : (arg_0: TokenIndex) => Promise<TokenIdentifier__1>,
  'getTokens' : () => Promise<Array<[TokenIndex, Metadata__1]>>,
  'http_request' : (arg_0: Request) => Promise<Response>,
  'metadata' : (arg_0: TokenIdentifier__1) => Promise<Result_4>,
  'mintEventTickets' : (arg_0: MintTicketRequest) => Promise<Result_3>,
  'setAdmin' : (arg_0: Principal) => Promise<undefined>,
  'setDefaultAsset' : (arg_0: [] | [Array<number>]) => Promise<undefined>,
  'setMinter' : (arg_0: Principal, arg_1: bigint) => Promise<Result_2>,
  'supply' : (arg_0: TokenIdentifier__1) => Promise<Result_1>,
  'transactions' : (arg_0: TransactionsRequest) => Promise<Result>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'transferTicketWithId' : (
      arg_0: Principal,
      arg_1: TokenIdentifier__1,
    ) => Promise<TransferResponse>,
  'transferTicketWithIndex' : (arg_0: Principal, arg_1: TokenIndex) => Promise<
      TransferResponse
    >,
}
export interface _SERVICE extends iceventicket {}
