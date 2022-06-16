export const idlFactory = ({ IDL }) => {
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const AllowanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance__1 = IDL.Nat;
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError__1 });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const Balance = IDL.Nat;
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
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
  const TokenIdentifier__1 = IDL.Text;
  const AccountIdentifier__1 = IDL.Text;
  const Result_5 = IDL.Variant({
    'ok' : AccountIdentifier__1,
    'err' : CommonError__1,
  });
  const Extension = IDL.Text;
  const TokenIndex = IDL.Nat32;
  const Minter = IDL.Record({
    'minted' : IDL.Vec(TokenIndex),
    'minter' : IDL.Principal,
    'quota' : IDL.Nat,
  });
  const Metadata__1 = IDL.Record({
    'event_day' : IDL.Text,
    'asset' : IDL.Opt(IDL.Text),
    'host' : IDL.Text,
    'event_location' : IDL.Text,
    'event_id' : IDL.Nat,
    'event_name' : IDL.Text,
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const Request = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingCallback = IDL.Func(
      [StreamingCallbackToken],
      [StreamingCallbackResponse],
      ['query'],
    );
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }),
  });
  const Response = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const Result_4 = IDL.Variant({ 'ok' : Metadata__1, 'err' : CommonError__1 });
  const Metadata = IDL.Record({
    'event_day' : IDL.Text,
    'asset' : IDL.Opt(IDL.Text),
    'host' : IDL.Text,
    'event_location' : IDL.Text,
    'event_id' : IDL.Nat,
    'event_name' : IDL.Text,
  });
  const MintTicketRequest = IDL.Record({
    'metadatas' : IDL.Vec(Metadata),
    'spender' : IDL.Principal,
  });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Vec(TokenIndex),
    'err' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
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
  const iceventicket = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'addModerator' : IDL.Func([IDL.Principal], [], []),
    'allowance' : IDL.Func([AllowanceRequest], [Result_1], ['query']),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer' : IDL.Func([TokenIdentifier__1], [Result_5], ['query']),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getAdmin' : IDL.Func([], [IDL.Principal], ['query']),
    'getAllowances' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Principal))],
        ['query'],
      ),
    'getMinters' : IDL.Func([], [IDL.Vec(Minter)], ['query']),
    'getModerators' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getMyTickets' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIdentifier__1, Metadata__1))],
        ['query'],
      ),
    'getRegistry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier__1))],
        ['query'],
      ),
    'getTokenIdentifier' : IDL.Func(
        [TokenIndex],
        [TokenIdentifier__1],
        ['query'],
      ),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata__1))],
        ['query'],
      ),
    'http_request' : IDL.Func([Request], [Response], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'mintEventTickets' : IDL.Func([MintTicketRequest], [Result_3], []),
    'setAdmin' : IDL.Func([IDL.Principal], [], []),
    'setDefaultAsset' : IDL.Func([IDL.Opt(IDL.Vec(IDL.Nat8))], [], []),
    'setMinter' : IDL.Func([IDL.Principal, IDL.Nat], [Result_2], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_1], ['query']),
    'transactions' : IDL.Func([TransactionsRequest], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'transferTicketWithId' : IDL.Func(
        [IDL.Principal, TokenIdentifier__1],
        [TransferResponse],
        [],
      ),
    'transferTicketWithIndex' : IDL.Func(
        [IDL.Principal, TokenIndex],
        [TransferResponse],
        [],
      ),
  });
  return iceventicket;
};
export const init = ({ IDL }) => { return []; };
