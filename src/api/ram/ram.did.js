export const idlFactory = ({ IDL }) => {
  const Comto__1 = IDL.Variant({
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const NewComment = IDL.Record({
    'comto' : Comto__1,
    'comment' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Address = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Currency = IDL.Text;
  const Wallet = IDL.Record({ 'currency' : Currency, 'address' : IDL.Text });
  const Contact = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : Address,
    'wallet' : IDL.Opt(Wallet),
    'phone' : IDL.Text,
  });
  const Tax = IDL.Record({
    'name' : IDL.Text,
    'rate' : IDL.Float64,
    'number' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const PaymentTerm = IDL.Record({ 'name' : IDL.Text, 'address' : IDL.Text });
  const Item = IDL.Record({
    'desc' : IDL.Text,
    'quantity' : IDL.Nat32,
    'itype' : IDL.Variant({ 'cost' : IDL.Null, 'income' : IDL.Null }),
    'price' : IDL.Float64,
  });
  const NewInvoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const TypeNotification = IDL.Variant({
    'contact' : IDL.Nat,
    'other' : IDL.Null,
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'user' : IDL.Text,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const NewNotification = IDL.Record({
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'ntype' : TypeNotification,
    'receiver' : IDL.Text,
  });
  const OrderItem = IDL.Record({
    'item' : IDL.Variant({
      'ticket' : IDL.Nat,
      'file' : IDL.Null,
      'mint' : IDL.Nat,
      'solution' : IDL.Nat,
    }),
    'count' : IDL.Nat,
  });
  const NewOrder = IDL.Record({
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const InvoiceStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const TXID = IDL.Nat;
  const OrderStatus__1 = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const OrderStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const Order = IDL.Record({
    'status' : OrderStatus,
    'changetime' : IDL.Opt(IDL.Int),
    'memo' : IDL.Opt(IDL.Text),
    'seller' : IDL.Text,
    'orderid' : IDL.Text,
    'ordertime' : IDL.Int,
    'buyer' : IDL.Text,
    'items' : IDL.Vec(OrderItem),
    'amount' : IDL.Float64,
  });
  const Comto = IDL.Variant({
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
  });
  const Comment = IDL.Record({
    'comto' : Comto__1,
    'user' : IDL.Text,
    'comment' : IDL.Text,
    'timestamp' : IDL.Int,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Function = IDL.Variant({
    'contact' : IDL.Nat,
    'other' : IDL.Null,
    'note' : IDL.Nat,
    'todo' : IDL.Nat,
    'user' : IDL.Text,
    'event' : IDL.Nat,
    'calendar' : IDL.Nat,
    'comment' : IDL.Nat,
  });
  const Action = IDL.Variant({
    'read' : IDL.Null,
    'delete' : IDL.Null,
    'create' : IDL.Null,
    'update' : IDL.Null,
  });
  const Log = IDL.Record({
    'function' : Function,
    'action' : Action,
    'user' : IDL.Text,
    'logtime' : IDL.Int,
    'message' : IDL.Text,
  });
  const Status = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact,
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'owner' : IDL.Text,
    'cost' : IDL.Float64,
    'from' : Contact,
    'note' : IDL.Text,
    'createtime' : IDL.Int,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const Message = IDL.Record({
    'id' : IDL.Nat,
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'isread' : IDL.Bool,
    'readtime' : IDL.Int,
    'replyid' : IDL.Opt(IDL.Nat),
    'attachment' : IDL.Opt(IDL.Text),
    'receiver' : IDL.Text,
    'sendtime' : IDL.Int,
  });
  const Notification = IDL.Record({
    'id' : IDL.Nat,
    'note' : IDL.Text,
    'sender' : IDL.Text,
    'isread' : IDL.Bool,
    'readtime' : IDL.Int,
    'ntype' : TypeNotification,
    'receiver' : IDL.Text,
    'sendtime' : IDL.Int,
  });
  const NewLog = IDL.Record({
    'function' : Function,
    'action' : Action,
    'user' : IDL.Text,
    'message' : IDL.Text,
  });
  const NewMessage = IDL.Record({
    'note' : IDL.Text,
    'replyid' : IDL.Opt(IDL.Nat),
    'attachment' : IDL.Opt(IDL.Text),
    'receiver' : IDL.Text,
  });
  const UpdateInvoice = IDL.Record({
    'tax' : Tax,
    'status' : Status,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'cost' : IDL.Float64,
    'note' : IDL.Text,
    'duetime' : IDL.Nat,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
  });
  const Ram = IDL.Service({
    'addComment' : IDL.Func([NewComment], [Result], []),
    'addInvoice' : IDL.Func([NewInvoice], [Result], []),
    'addNotification' : IDL.Func([NewNotification], [], []),
    'addOrder' : IDL.Func([NewOrder], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'changeInvoiceStatus' : IDL.Func([IDL.Text, InvoiceStatus], [Result], []),
    'deleteNotification' : IDL.Func([IDL.Nat], [Result], []),
    'findOrdersByStatus' : IDL.Func(
        [OrderStatus__1],
        [IDL.Vec(Order)],
        ['query'],
      ),
    'getComments' : IDL.Func([Comto, IDL.Nat], [IDL.Vec(Comment)], ['query']),
    'getLogs' : IDL.Func([IDL.Nat], [IDL.Vec(Log)], ['query']),
    'getMyInvoice' : IDL.Func(
        [InvoiceStatus, IDL.Nat],
        [IDL.Vec(Invoice)],
        ['query'],
      ),
    'getMyMessages' : IDL.Func(
        [IDL.Bool, IDL.Nat],
        [IDL.Vec(Message)],
        ['query'],
      ),
    'getMyNotifications' : IDL.Func(
        [IDL.Bool, IDL.Nat],
        [IDL.Vec(Notification)],
        ['query'],
      ),
    'getOrder' : IDL.Func([IDL.Text], [IDL.Opt(Order)], ['query']),
    'getProcessOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'getUserLogs' : IDL.Func([IDL.Nat], [IDL.Vec(Log)], ['query']),
    'log' : IDL.Func([NewLog], [], []),
    'message' : IDL.Func([NewMessage], [Result], []),
    'readMessage' : IDL.Func([IDL.Nat], [Result], []),
    'readNotification' : IDL.Func([IDL.Nat], [Result], []),
    'updateInvoice' : IDL.Func([IDL.Text, UpdateInvoice], [Result], []),
  });
  return Ram;
};
export const init = ({ IDL }) => { return []; };
