export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const FileId = IDL.Text;
  const Timestamp = IDL.Int;
  const FileId__1 = IDL.Text;
  const FileExtension = IDL.Variant({
    'aac' : IDL.Null,
    'avi' : IDL.Null,
    'gif' : IDL.Null,
    'jpg' : IDL.Null,
    'mp3' : IDL.Null,
    'mp4' : IDL.Null,
    'png' : IDL.Null,
    'svg' : IDL.Null,
    'wav' : IDL.Null,
    'jpeg' : IDL.Null,
  });
  const FileData = IDL.Record({
    'cid' : IDL.Principal,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'size' : IDL.Nat,
    'fileId' : FileId__1,
    'chunkCount' : IDL.Nat,
    'extension' : FileExtension,
    'uploadedAt' : Timestamp,
  });
  const Uploader = IDL.Record({
    'files' : IDL.Vec(FileId__1),
    'quota' : IDL.Nat,
    'uploader' : IDL.Principal,
  });
  const FileInfo = IDL.Record({
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'createdAt' : Timestamp,
    'size' : IDL.Nat,
    'chunkCount' : IDL.Nat,
    'extension' : FileExtension,
  });
  const Result_1 = IDL.Variant({ 'ok' : FileId, 'err' : IDL.Text });
  const Container = IDL.Service({
    'addModerator' : IDL.Func([IDL.Principal], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'fetchFileChunk' : IDL.Func(
        [FileId, IDL.Nat],
        [IDL.Opt(IDL.Vec(IDL.Nat8))],
        [],
      ),
    'fetchFileChunks' : IDL.Func([FileId], [IDL.Opt(IDL.Vec(IDL.Nat8))], []),
    'fetchFileInfo' : IDL.Func([FileId], [IDL.Opt(FileData)], []),
    'getAdmin' : IDL.Func([], [IDL.Principal], ['query']),
    'getFileIds' : IDL.Func([], [IDL.Vec(FileId)], ['query']),
    'getModerators' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getQuota' : IDL.Func(
        [],
        [IDL.Record({ 'used' : IDL.Nat, 'quota' : IDL.Nat })],
        ['query'],
      ),
    'getStatus' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
        ['query'],
      ),
    'getUploaders' : IDL.Func([], [IDL.Vec(Uploader)], ['query']),
    'putFileChunks' : IDL.Func(
        [FileId, IDL.Nat, IDL.Nat, IDL.Vec(IDL.Nat8)],
        [Result],
        [],
      ),
    'putFileInfo' : IDL.Func([FileInfo], [Result_1], []),
    'saveFileChunks' : IDL.Func(
        [FileId, IDL.Nat, IDL.Nat, IDL.Vec(IDL.Nat8)],
        [Result],
        [],
      ),
    'setAdmin' : IDL.Func([IDL.Principal], [Result], []),
    'setUploaders' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'updateStatus' : IDL.Func([], [], []),
    'wallet_receive' : IDL.Func([], [], []),
  });
  return Container;
};
export const init = ({ IDL }) => { return []; };
