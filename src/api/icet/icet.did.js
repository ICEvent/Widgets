export const idlFactory = ({ IDL }) => {
  const Balance = IDL.Nat;
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const Extension = IDL.Text;
  const TokenIdentifier__1 = IDL.Text;
  const Metadata = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError__1 });
  const AccountIdentifier__1 = IDL.Text;
  const Balance__1 = IDL.Nat;
  const Result_1 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError__1 });
  const Date = IDL.Nat64;
  const TransactionId = IDL.Nat;
  const TransactionsRequest = IDL.Record({
    'token' : TokenIdentifier,
    'query_option' : IDL.Variant({
      'all' : IDL.Null,
      'date' : IDL.Tuple(Date, Date),
      'page' : IDL.Tuple(IDL.Nat, IDL.Nat),
      'txid' : TransactionId,
      'user' : User,
    }),
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const SubAccount = IDL.Vec(IDL.Nat8);
  const TransferRequest__1 = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const Transaction = IDL.Record({
    'date' : Date,
    'request' : TransferRequest__1,
    'txid' : TransactionId,
  });
  const Result = IDL.Variant({
    'ok' : IDL.Vec(Transaction),
    'err' : CommonError,
  });
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const TransferIdResponse = IDL.Variant({
    'ok' : IDL.Nat,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const icevent_token = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    'registry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1))],
        ['query'],
      ),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_1], ['query']),
    'transactions' : IDL.Func([TransactionsRequest], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'transferTo' : IDL.Func([TransferRequest], [TransferIdResponse], []),
  });
  return icevent_token;
};
export const init = ({ IDL }) => {
  const Balance = IDL.Nat;
  return [IDL.Text, IDL.Text, IDL.Nat8, Balance, IDL.Principal];
};
