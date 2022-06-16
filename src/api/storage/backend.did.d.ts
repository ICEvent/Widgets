import type { Principal } from '@dfinity/principal';
export interface Container {
  'addModerator' : (arg_0: Principal) => Promise<Result>,
  'availableCycles' : () => Promise<bigint>,
  'fetchFileChunk' : (arg_0: FileId, arg_1: bigint) => Promise<
      [] | [Array<number>]
    >,
  'fetchFileChunks' : (arg_0: FileId) => Promise<[] | [Array<number>]>,
  'fetchFileInfo' : (arg_0: FileId) => Promise<[] | [FileData]>,
  'getAdmin' : () => Promise<Principal>,
  'getFileIds' : () => Promise<Array<FileId>>,
  'getModerators' : () => Promise<Array<Principal>>,
  'getQuota' : () => Promise<{ 'used' : bigint, 'quota' : bigint }>,
  'getStatus' : () => Promise<Array<[Principal, bigint]>>,
  'getUploaders' : () => Promise<Array<Uploader>>,
  'putFileChunks' : (
      arg_0: FileId,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Array<number>,
    ) => Promise<Result>,
  'putFileInfo' : (arg_0: FileInfo) => Promise<Result_1>,
  'saveFileChunks' : (
      arg_0: FileId,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Array<number>,
    ) => Promise<Result>,
  'setAdmin' : (arg_0: Principal) => Promise<Result>,
  'setUploaders' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
  'updateStatus' : () => Promise<undefined>,
  'wallet_receive' : () => Promise<undefined>,
}
export interface FileData {
  'cid' : Principal,
  'owner' : Principal,
  'name' : string,
  'createdAt' : Timestamp,
  'size' : bigint,
  'fileId' : FileId__1,
  'chunkCount' : bigint,
  'extension' : FileExtension,
  'uploadedAt' : Timestamp,
}
export type FileExtension = { 'aac' : null } |
  { 'avi' : null } |
  { 'gif' : null } |
  { 'jpg' : null } |
  { 'mp3' : null } |
  { 'mp4' : null } |
  { 'png' : null } |
  { 'svg' : null } |
  { 'wav' : null } |
  { 'jpeg' : null };
export type FileId = string;
export type FileId__1 = string;
export interface FileInfo {
  'owner' : Principal,
  'name' : string,
  'createdAt' : Timestamp,
  'size' : bigint,
  'chunkCount' : bigint,
  'extension' : FileExtension,
}
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : FileId } |
  { 'err' : string };
export type Timestamp = bigint;
export interface Uploader {
  'files' : Array<FileId__1>,
  'quota' : bigint,
  'uploader' : Principal,
}
export interface _SERVICE extends Container {}
