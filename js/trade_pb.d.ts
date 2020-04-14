// package: 
// file: trade.proto

import * as jspb from "google-protobuf";
import * as swap_pb from "./swap_pb";

export class MarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsRequest;
  static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
  export type AsObject = {
  }
}

export class MarketsReply extends jspb.Message {
  clearQuoteassetList(): void;
  getQuoteassetList(): Array<string>;
  setQuoteassetList(value: Array<string>): void;
  addQuoteasset(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsReply): MarketsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsReply;
  static deserializeBinaryFromReader(message: MarketsReply, reader: jspb.BinaryReader): MarketsReply;
}

export namespace MarketsReply {
  export type AsObject = {
    quoteassetList: Array<string>,
  }
}

export class Balance extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    asset: string,
    amount: number,
  }
}

export class BalancesRequest extends jspb.Message {
  getQuoteasset(): string;
  setQuoteasset(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesRequest): BalancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesRequest;
  static deserializeBinaryFromReader(message: BalancesRequest, reader: jspb.BinaryReader): BalancesRequest;
}

export namespace BalancesRequest {
  export type AsObject = {
    quoteasset: string,
  }
}

export class BalancesReply extends jspb.Message {
  clearBalanceList(): void;
  getBalanceList(): Array<Balance>;
  setBalanceList(value: Array<Balance>): void;
  addBalance(value?: Balance, index?: number): Balance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesReply.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesReply): BalancesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesReply;
  static deserializeBinaryFromReader(message: BalancesReply, reader: jspb.BinaryReader): BalancesReply;
}

export namespace BalancesReply {
  export type AsObject = {
    balanceList: Array<Balance.AsObject>,
  }
}

export class TradeRequest extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): swap_pb.SwapRequest | undefined;
  setMsg(value?: swap_pb.SwapRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeRequest): TradeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeRequest;
  static deserializeBinaryFromReader(message: TradeRequest, reader: jspb.BinaryReader): TradeRequest;
}

export namespace TradeRequest {
  export type AsObject = {
    msg?: swap_pb.SwapRequest.AsObject,
  }
}

export class TradeReply extends jspb.Message {
  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): swap_pb.SwapAccept | undefined;
  setMsg(value?: swap_pb.SwapAccept): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): swap_pb.SwapFail | undefined;
  setFailure(value?: swap_pb.SwapFail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeReply): TradeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeReply;
  static deserializeBinaryFromReader(message: TradeReply, reader: jspb.BinaryReader): TradeReply;
}

export namespace TradeReply {
  export type AsObject = {
    msg?: swap_pb.SwapAccept.AsObject,
    failure?: swap_pb.SwapFail.AsObject,
  }
}

export class TradeCompleteRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteRequest): TradeCompleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteRequest;
  static deserializeBinaryFromReader(message: TradeCompleteRequest, reader: jspb.BinaryReader): TradeCompleteRequest;
}

export namespace TradeCompleteRequest {
  export type AsObject = {
  }
}

export class TradeCompleteReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteReply): TradeCompleteReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeCompleteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteReply;
  static deserializeBinaryFromReader(message: TradeCompleteReply, reader: jspb.BinaryReader): TradeCompleteReply;
}

export namespace TradeCompleteReply {
  export type AsObject = {
  }
}

