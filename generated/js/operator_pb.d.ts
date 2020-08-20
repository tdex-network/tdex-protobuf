import * as jspb from "google-protobuf"

import * as types_pb from './types_pb';

export class DepositAddressRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): DepositAddressRequest;
  hasMarket(): boolean;
  clearMarket(): DepositAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositAddressRequest): DepositAddressRequest.AsObject;
  static serializeBinaryToWriter(message: DepositAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositAddressRequest;
  static deserializeBinaryFromReader(message: DepositAddressRequest, reader: jspb.BinaryReader): DepositAddressRequest;
}

export namespace DepositAddressRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class ListDepositAddressRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): ListDepositAddressRequest;
  hasMarket(): boolean;
  clearMarket(): ListDepositAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositAddressRequest): ListDepositAddressRequest.AsObject;
  static serializeBinaryToWriter(message: ListDepositAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositAddressRequest;
  static deserializeBinaryFromReader(message: ListDepositAddressRequest, reader: jspb.BinaryReader): ListDepositAddressRequest;
}

export namespace ListDepositAddressRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class ListDepositAddressReply extends jspb.Message {
  getAddressList(): Array<string>;
  setAddressList(value: Array<string>): ListDepositAddressReply;
  clearAddressList(): ListDepositAddressReply;
  addAddress(value: string, index?: number): ListDepositAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositAddressReply): ListDepositAddressReply.AsObject;
  static serializeBinaryToWriter(message: ListDepositAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositAddressReply;
  static deserializeBinaryFromReader(message: ListDepositAddressReply, reader: jspb.BinaryReader): ListDepositAddressReply;
}

export namespace ListDepositAddressReply {
  export type AsObject = {
    addressList: Array<string>,
  }
}

export class DepositAddressReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): DepositAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: DepositAddressReply): DepositAddressReply.AsObject;
  static serializeBinaryToWriter(message: DepositAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositAddressReply;
  static deserializeBinaryFromReader(message: DepositAddressReply, reader: jspb.BinaryReader): DepositAddressReply;
}

export namespace DepositAddressReply {
  export type AsObject = {
    address: string,
  }
}

export class FeeDepositAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeDepositAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeeDepositAddressRequest): FeeDepositAddressRequest.AsObject;
  static serializeBinaryToWriter(message: FeeDepositAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeDepositAddressRequest;
  static deserializeBinaryFromReader(message: FeeDepositAddressRequest, reader: jspb.BinaryReader): FeeDepositAddressRequest;
}

export namespace FeeDepositAddressRequest {
  export type AsObject = {
  }
}

export class FeeDepositAddressReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): FeeDepositAddressReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeDepositAddressReply.AsObject;
  static toObject(includeInstance: boolean, msg: FeeDepositAddressReply): FeeDepositAddressReply.AsObject;
  static serializeBinaryToWriter(message: FeeDepositAddressReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeDepositAddressReply;
  static deserializeBinaryFromReader(message: FeeDepositAddressReply, reader: jspb.BinaryReader): FeeDepositAddressReply;
}

export namespace FeeDepositAddressReply {
  export type AsObject = {
    address: string,
  }
}

export class FeeBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeeBalanceRequest): FeeBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: FeeBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeBalanceRequest;
  static deserializeBinaryFromReader(message: FeeBalanceRequest, reader: jspb.BinaryReader): FeeBalanceRequest;
}

export namespace FeeBalanceRequest {
  export type AsObject = {
  }
}

export class FeeBalanceReply extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): FeeBalanceReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeBalanceReply.AsObject;
  static toObject(includeInstance: boolean, msg: FeeBalanceReply): FeeBalanceReply.AsObject;
  static serializeBinaryToWriter(message: FeeBalanceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeBalanceReply;
  static deserializeBinaryFromReader(message: FeeBalanceReply, reader: jspb.BinaryReader): FeeBalanceReply;
}

export namespace FeeBalanceReply {
  export type AsObject = {
    balance: number,
  }
}

export class OpenMarketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketRequest): OpenMarketRequest.AsObject;
  static serializeBinaryToWriter(message: OpenMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketRequest;
  static deserializeBinaryFromReader(message: OpenMarketRequest, reader: jspb.BinaryReader): OpenMarketRequest;
}

export namespace OpenMarketRequest {
  export type AsObject = {
  }
}

export class OpenMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketReply): OpenMarketReply.AsObject;
  static serializeBinaryToWriter(message: OpenMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketReply;
  static deserializeBinaryFromReader(message: OpenMarketReply, reader: jspb.BinaryReader): OpenMarketReply;
}

export namespace OpenMarketReply {
  export type AsObject = {
  }
}

export class CloseMarketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketRequest): CloseMarketRequest.AsObject;
  static serializeBinaryToWriter(message: CloseMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketRequest;
  static deserializeBinaryFromReader(message: CloseMarketRequest, reader: jspb.BinaryReader): CloseMarketRequest;
}

export namespace CloseMarketRequest {
  export type AsObject = {
  }
}

export class CloseMarketReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketReply): CloseMarketReply.AsObject;
  static serializeBinaryToWriter(message: CloseMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketReply;
  static deserializeBinaryFromReader(message: CloseMarketReply, reader: jspb.BinaryReader): CloseMarketReply;
}

export namespace CloseMarketReply {
  export type AsObject = {
  }
}

export class UpdateFeeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeeRequest): UpdateFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeeRequest;
  static deserializeBinaryFromReader(message: UpdateFeeRequest, reader: jspb.BinaryReader): UpdateFeeRequest;
}

export namespace UpdateFeeRequest {
  export type AsObject = {
  }
}

export class UpdateFeeReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeeReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeeReply): UpdateFeeReply.AsObject;
  static serializeBinaryToWriter(message: UpdateFeeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeeReply;
  static deserializeBinaryFromReader(message: UpdateFeeReply, reader: jspb.BinaryReader): UpdateFeeReply;
}

export namespace UpdateFeeReply {
  export type AsObject = {
  }
}

