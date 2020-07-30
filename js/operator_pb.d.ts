import * as jspb from "google-protobuf"

export class DepositAddressRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositAddressRequest): DepositAddressRequest.AsObject;
  static serializeBinaryToWriter(message: DepositAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositAddressRequest;
  static deserializeBinaryFromReader(message: DepositAddressRequest, reader: jspb.BinaryReader): DepositAddressRequest;
}

export namespace DepositAddressRequest {
  export type AsObject = {
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

