import type { Principal } from '@dfinity/principal';
export type Action = { 'read' : null } |
  { 'delete' : null } |
  { 'create' : null } |
  { 'update' : null };
export interface Address {
  'postcode' : string,
  'country' : string,
  'province' : string,
  'city' : string,
  'address' : string,
}
export interface Comment {
  'comto' : Comto__1,
  'user' : string,
  'comment' : string,
  'timestamp' : bigint,
  'attachments' : Array<string>,
}
export type Comto = { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
export type Comto__1 = { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
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
export type Function = { 'contact' : bigint } |
  { 'other' : null } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint } |
  { 'comment' : bigint };
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
export interface Log {
  'function' : Function,
  'action' : Action,
  'user' : string,
  'logtime' : bigint,
  'message' : string,
}
export interface Message {
  'id' : bigint,
  'note' : string,
  'sender' : string,
  'isread' : boolean,
  'readtime' : bigint,
  'replyid' : [] | [bigint],
  'attachment' : [] | [string],
  'receiver' : string,
  'sendtime' : bigint,
}
export interface NewComment {
  'comto' : Comto__1,
  'comment' : string,
  'attachments' : Array<string>,
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
export interface NewLog {
  'function' : Function,
  'action' : Action,
  'user' : string,
  'message' : string,
}
export interface NewMessage {
  'note' : string,
  'replyid' : [] | [bigint],
  'attachment' : [] | [string],
  'receiver' : string,
}
export interface NewNotification {
  'note' : string,
  'sender' : string,
  'ntype' : TypeNotification,
  'receiver' : string,
}
export interface NewOrder {
  'memo' : [] | [string],
  'seller' : string,
  'orderid' : string,
  'items' : Array<OrderItem>,
  'amount' : number,
}
export interface Notification {
  'id' : bigint,
  'note' : string,
  'sender' : string,
  'isread' : boolean,
  'readtime' : bigint,
  'ntype' : TypeNotification,
  'receiver' : string,
  'sendtime' : bigint,
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
export interface PaymentTerm { 'name' : string, 'address' : string }
export interface Ram {
  'addComment' : (arg_0: NewComment) => Promise<Result>,
  'addInvoice' : (arg_0: NewInvoice) => Promise<Result>,
  'addNotification' : (arg_0: NewNotification) => Promise<undefined>,
  'addOrder' : (arg_0: NewOrder) => Promise<Result>,
  'availableCycles' : () => Promise<bigint>,
  'changeInvoiceStatus' : (arg_0: string, arg_1: InvoiceStatus) => Promise<
      Result
    >,
  'deleteNotification' : (arg_0: bigint) => Promise<Result>,
  'findOrdersByStatus' : (arg_0: OrderStatus__1) => Promise<Array<Order>>,
  'getComments' : (arg_0: Comto, arg_1: bigint) => Promise<Array<Comment>>,
  'getLogs' : (arg_0: bigint) => Promise<Array<Log>>,
  'getMyInvoice' : (arg_0: InvoiceStatus, arg_1: bigint) => Promise<
      Array<Invoice>
    >,
  'getMyMessages' : (arg_0: boolean, arg_1: bigint) => Promise<Array<Message>>,
  'getMyNotifications' : (arg_0: boolean, arg_1: bigint) => Promise<
      Array<Notification>
    >,
  'getOrder' : (arg_0: string) => Promise<[] | [Order]>,
  'getProcessOrders' : () => Promise<Array<Order>>,
  'getUserLogs' : (arg_0: bigint) => Promise<Array<Log>>,
  'log' : (arg_0: NewLog) => Promise<undefined>,
  'message' : (arg_0: NewMessage) => Promise<Result>,
  'readMessage' : (arg_0: bigint) => Promise<Result>,
  'readNotification' : (arg_0: bigint) => Promise<Result>,
  'updateInvoice' : (arg_0: string, arg_1: UpdateInvoice) => Promise<Result>,
}
export type Result = { 'ok' : bigint } |
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
export type TypeNotification = { 'contact' : bigint } |
  { 'other' : null } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
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
export interface _SERVICE extends Ram {}
