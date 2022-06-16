export const idlFactory = ({ IDL }) => {
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
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
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
  const OrderStatus = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : TXID,
    'delivered' : IDL.Null,
    'processing' : IDL.Text,
    'received' : IDL.Null,
  });
  const Order__1 = IDL.Record({
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
  const Result_1 = IDL.Variant({ 'ok' : Order__1, 'err' : IDL.Text });
  const OrderStatus__1 = IDL.Variant({
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
  const Ledger = IDL.Service({
    'addInvoice' : IDL.Func([NewInvoice], [Result], []),
    'addOrder' : IDL.Func([NewOrder], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'changeInvoiceStatus' : IDL.Func([IDL.Text, InvoiceStatus], [Result], []),
    'changeOrderStatus' : IDL.Func([IDL.Text, OrderStatus], [Result_1], []),
    'findOrdersByStatus' : IDL.Func(
        [OrderStatus__1],
        [IDL.Vec(Order)],
        ['query'],
      ),
    'getMyInvoice' : IDL.Func(
        [InvoiceStatus, IDL.Nat],
        [IDL.Vec(Invoice)],
        ['query'],
      ),
    'getOrder' : IDL.Func([IDL.Text], [IDL.Opt(Order)], ['query']),
    'getProcessOrders' : IDL.Func([], [IDL.Vec(Order)], ['query']),
    'requestDelivery' : IDL.Func([IDL.Text], [Result], []),
    'updateInvoice' : IDL.Func([IDL.Text, UpdateInvoice], [Result], []),
  });
  return Ledger;
};
export const init = ({ IDL }) => { return []; };
