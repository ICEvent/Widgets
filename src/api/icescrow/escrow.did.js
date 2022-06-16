export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Order = IDL.Record({
    'id' : IDL.Nat,
    'releasetime' : IDL.Int,
    'status' : IDL.Variant({
      'new' : IDL.Null,
      'deposited' : IDL.Null,
      'closed' : IDL.Null,
      'canceled' : IDL.Null,
      'refunded' : IDL.Null,
      'released' : IDL.Null,
      'delivered' : IDL.Null,
    }),
    'deposittime' : IDL.Int,
    'blockout' : IDL.Nat64,
    'updatetime' : IDL.Int,
    'delivertime' : IDL.Int,
    'closetime' : IDL.Int,
    'blockin' : IDL.Nat64,
    'memo' : IDL.Text,
    'seller' : IDL.Principal,
    'createtime' : IDL.Int,
    'refundtime' : IDL.Int,
    'expiration' : IDL.Int,
    'currency' : IDL.Variant({
      'ADA' : IDL.Null,
      'BTC' : IDL.Null,
      'DOT' : IDL.Null,
      'ETH' : IDL.Null,
      'ICP' : IDL.Null,
      'ICEG' : IDL.Null,
      'ICET' : IDL.Null,
      'USDC' : IDL.Null,
      'USDT' : IDL.Null,
    }),
    'account' : IDL.Text,
    'buyer' : IDL.Principal,
    'canceltime' : IDL.Int,
    'amount' : IDL.Nat64,
  });
  const EscrowService = IDL.Service({
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'cancel' : IDL.Func([IDL.Nat], [Result], []),
    'close' : IDL.Func([IDL.Nat], [Result], []),
    'confirm' : IDL.Func([IDL.Nat], [Result], []),
    'create' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Text, IDL.Int],
        [Result],
        [],
      ),
    'deliver' : IDL.Func([IDL.Nat], [Result], []),
    'deposit' : IDL.Func([IDL.Nat], [Result], []),
    'getAllOrders' : IDL.Func([], [IDL.Vec(Order)], []),
    'getOrder' : IDL.Func([IDL.Nat], [Order], []),
    'getOrders' : IDL.Func([], [IDL.Vec(Order)], []),
    'refund' : IDL.Func([IDL.Nat], [Result], []),
  });
  return EscrowService;
};
export const init = ({ IDL }) => { return []; };
