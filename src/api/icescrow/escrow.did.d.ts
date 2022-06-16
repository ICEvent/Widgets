import type { Principal } from '@dfinity/principal';
export interface EscrowService {
  'availableCycles' : () => Promise<bigint>,
  'cancel' : (arg_0: bigint) => Promise<Result>,
  'close' : (arg_0: bigint) => Promise<Result>,
  'confirm' : (arg_0: bigint) => Promise<Result>,
  'create' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: string,
      arg_3: bigint,
    ) => Promise<Result>,
  'deliver' : (arg_0: bigint) => Promise<Result>,
  'deposit' : (arg_0: bigint) => Promise<Result>,
  'getAllOrders' : () => Promise<Array<Order>>,
  'getOrder' : (arg_0: bigint) => Promise<Order>,
  'getOrders' : () => Promise<Array<Order>>,
  'refund' : (arg_0: bigint) => Promise<Result>,
}
export interface Order {
  'id' : bigint,
  'releasetime' : bigint,
  'status' : { 'new' : null } |
    { 'deposited' : null } |
    { 'closed' : null } |
    { 'canceled' : null } |
    { 'refunded' : null } |
    { 'released' : null } |
    { 'delivered' : null },
  'deposittime' : bigint,
  'blockout' : bigint,
  'updatetime' : bigint,
  'delivertime' : bigint,
  'closetime' : bigint,
  'blockin' : bigint,
  'memo' : string,
  'seller' : Principal,
  'createtime' : bigint,
  'refundtime' : bigint,
  'expiration' : bigint,
  'currency' : { 'ADA' : null } |
    { 'BTC' : null } |
    { 'DOT' : null } |
    { 'ETH' : null } |
    { 'ICP' : null } |
    { 'ICEG' : null } |
    { 'ICET' : null } |
    { 'USDC' : null } |
    { 'USDT' : null },
  'account' : string,
  'buyer' : Principal,
  'canceltime' : bigint,
  'amount' : bigint,
}
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export interface _SERVICE extends EscrowService {}
