import type { Principal } from '@dfinity/principal';
export interface Address {
  'postcode' : string,
  'country' : string,
  'province' : string,
  'city' : string,
  'address' : string,
}
export interface Contact {
  'fax' : [] | [string],
  'url' : [] | [string],
  'contact' : [] | [string],
  'name' : string,
  'email' : string,
  'address' : Address,
  'wallet' : [] | [Wallet],
  'phone' : string,
}
export type Currency = string;
export interface Invoice {
  'id' : string,
  'to' : Contact,
  'tax' : Tax,
  'status' : Status,
  'paymentterms' : Array<PaymentTerm>,
  'owner' : string,
  'cost' : number,
  'from' : Contact,
  'note' : string,
  'createtime' : bigint,
  'event' : bigint,
  'duetime' : bigint,
  'calendar' : bigint,
  'currency' : string,
  'adjust' : number,
  'discount' : number,
  'items' : Array<Item>,
  'amount' : number,
  'receiver' : [] | [string],
}
export type InvoiceStatus = { 'new' : null } |
  { 'canceled' : null } |
  { 'paid' : null } |
  { 'confirmed' : null };
export interface Item {
  'desc' : string,
  'quantity' : number,
  'itype' : { 'cost' : null } |
    { 'income' : null },
  'price' : number,
}
export interface Ledger {
  'addInvoice' : (arg_0: NewInvoice) => Promise<Result>,
  'addOrder' : (arg_0: NewOrder) => Promise<Result>,
  'availableCycles' : () => Promise<bigint>,
  'changeInvoiceStatus' : (arg_0: string, arg_1: InvoiceStatus) => Promise<
      Result
    >,
  'changeOrderStatus' : (arg_0: string, arg_1: OrderStatus) => Promise<
      Result_1
    >,
  'findOrdersByStatus' : (arg_0: OrderStatus__1) => Promise<Array<Order>>,
  'getMyInvoice' : (arg_0: InvoiceStatus, arg_1: bigint) => Promise<
      Array<Invoice>
    >,
  'getOrder' : (arg_0: string) => Promise<[] | [Order]>,
  'getProcessOrders' : () => Promise<Array<Order>>,
  'requestDelivery' : (arg_0: string) => Promise<Result>,
  'updateInvoice' : (arg_0: string, arg_1: UpdateInvoice) => Promise<Result>,
}
export interface NewInvoice {
  'id' : string,
  'to' : Contact,
  'tax' : Tax,
  'paymentterms' : Array<PaymentTerm>,
  'cost' : number,
  'from' : Contact,
  'note' : string,
  'event' : bigint,
  'duetime' : bigint,
  'calendar' : bigint,
  'currency' : string,
  'adjust' : number,
  'discount' : number,
  'items' : Array<Item>,
  'amount' : number,
  'receiver' : [] | [string],
}
export interface NewOrder {
  'memo' : [] | [string],
  'seller' : string,
  'orderid' : string,
  'items' : Array<OrderItem>,
  'amount' : number,
}
export interface Order {
  'status' : OrderStatus,
  'changetime' : [] | [bigint],
  'memo' : [] | [string],
  'seller' : string,
  'orderid' : string,
  'ordertime' : bigint,
  'buyer' : string,
  'items' : Array<OrderItem>,
  'amount' : number,
}
export interface OrderItem {
  'item' : { 'ticket' : bigint } |
    { 'file' : null } |
    { 'mint' : bigint } |
    { 'solution' : bigint },
  'count' : bigint,
}
export type OrderStatus = { 'new' : null } |
  { 'canceled' : null } |
  { 'paid' : TXID } |
  { 'delivered' : null } |
  { 'processing' : string } |
  { 'received' : null };
export type OrderStatus__1 = { 'new' : null } |
  { 'canceled' : null } |
  { 'paid' : TXID } |
  { 'delivered' : null } |
  { 'processing' : string } |
  { 'received' : null };
export interface Order__1 {
  'status' : OrderStatus,
  'changetime' : [] | [bigint],
  'memo' : [] | [string],
  'seller' : string,
  'orderid' : string,
  'ordertime' : bigint,
  'buyer' : string,
  'items' : Array<OrderItem>,
  'amount' : number,
}
export interface PaymentTerm { 'name' : string, 'address' : string }
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : Order__1 } |
  { 'err' : string };
export type Status = { 'new' : null } |
  { 'canceled' : null } |
  { 'paid' : null } |
  { 'confirmed' : null };
export type TXID = bigint;
export interface Tax {
  'name' : string,
  'rate' : number,
  'number' : string,
  'amount' : number,
}
export interface UpdateInvoice {
  'tax' : Tax,
  'status' : Status,
  'paymentterms' : Array<PaymentTerm>,
  'cost' : number,
  'note' : string,
  'duetime' : bigint,
  'adjust' : number,
  'discount' : number,
  'items' : Array<Item>,
  'amount' : number,
}
export interface Wallet { 'currency' : Currency, 'address' : string }
export interface _SERVICE extends Ledger {}
