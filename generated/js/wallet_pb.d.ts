import * as jspb from "google-protobuf"

export class WalletBalanceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceRequest): WalletBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: WalletBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceRequest;
  static deserializeBinaryFromReader(message: WalletBalanceRequest, reader: jspb.BinaryReader): WalletBalanceRequest;
}

export namespace WalletBalanceRequest {
  export type AsObject = {
  }
}

export class WalletBalanceResponse extends jspb.Message {
  getTotalBalance(): number;
  setTotalBalance(value: number): WalletBalanceResponse;

  getConfirmedBalance(): number;
  setConfirmedBalance(value: number): WalletBalanceResponse;

  getUnconfirmedBalance(): number;
  setUnconfirmedBalance(value: number): WalletBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletBalanceResponse): WalletBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: WalletBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceResponse;
  static deserializeBinaryFromReader(message: WalletBalanceResponse, reader: jspb.BinaryReader): WalletBalanceResponse;
}

export namespace WalletBalanceResponse {
  export type AsObject = {
    totalBalance: number,
    confirmedBalance: number,
    unconfirmedBalance: number,
  }
}

export class GenSeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedRequest): GenSeedRequest.AsObject;
  static serializeBinaryToWriter(message: GenSeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedRequest;
  static deserializeBinaryFromReader(message: GenSeedRequest, reader: jspb.BinaryReader): GenSeedRequest;
}

export namespace GenSeedRequest {
  export type AsObject = {
  }
}

export class GenSeedResponse extends jspb.Message {
  getSeedMnemonicList(): Array<string>;
  setSeedMnemonicList(value: Array<string>): GenSeedResponse;
  clearSeedMnemonicList(): GenSeedResponse;
  addSeedMnemonic(value: string, index?: number): GenSeedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenSeedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenSeedResponse): GenSeedResponse.AsObject;
  static serializeBinaryToWriter(message: GenSeedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenSeedResponse;
  static deserializeBinaryFromReader(message: GenSeedResponse, reader: jspb.BinaryReader): GenSeedResponse;
}

export namespace GenSeedResponse {
  export type AsObject = {
    seedMnemonicList: Array<string>,
  }
}

export class InitWalletRequest extends jspb.Message {
  getWalletPassword(): Uint8Array | string;
  getWalletPassword_asU8(): Uint8Array;
  getWalletPassword_asB64(): string;
  setWalletPassword(value: Uint8Array | string): InitWalletRequest;

  getSeedMnemonicList(): Array<string>;
  setSeedMnemonicList(value: Array<string>): InitWalletRequest;
  clearSeedMnemonicList(): InitWalletRequest;
  addSeedMnemonic(value: string, index?: number): InitWalletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitWalletRequest): InitWalletRequest.AsObject;
  static serializeBinaryToWriter(message: InitWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitWalletRequest;
  static deserializeBinaryFromReader(message: InitWalletRequest, reader: jspb.BinaryReader): InitWalletRequest;
}

export namespace InitWalletRequest {
  export type AsObject = {
    walletPassword: Uint8Array | string,
    seedMnemonicList: Array<string>,
  }
}

export class InitWalletResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitWalletResponse): InitWalletResponse.AsObject;
  static serializeBinaryToWriter(message: InitWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitWalletResponse;
  static deserializeBinaryFromReader(message: InitWalletResponse, reader: jspb.BinaryReader): InitWalletResponse;
}

export namespace InitWalletResponse {
  export type AsObject = {
  }
}

export class UnlockWalletRequest extends jspb.Message {
  getWalletPassword(): Uint8Array | string;
  getWalletPassword_asU8(): Uint8Array;
  getWalletPassword_asB64(): string;
  setWalletPassword(value: Uint8Array | string): UnlockWalletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletRequest): UnlockWalletRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletRequest;
  static deserializeBinaryFromReader(message: UnlockWalletRequest, reader: jspb.BinaryReader): UnlockWalletRequest;
}

export namespace UnlockWalletRequest {
  export type AsObject = {
    walletPassword: Uint8Array | string,
  }
}

export class UnlockWalletResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockWalletResponse): UnlockWalletResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockWalletResponse;
  static deserializeBinaryFromReader(message: UnlockWalletResponse, reader: jspb.BinaryReader): UnlockWalletResponse;
}

export namespace UnlockWalletResponse {
  export type AsObject = {
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getCurrentPassword(): Uint8Array | string;
  getCurrentPassword_asU8(): Uint8Array;
  getCurrentPassword_asB64(): string;
  setCurrentPassword(value: Uint8Array | string): ChangePasswordRequest;

  getNewPassword(): Uint8Array | string;
  getNewPassword_asU8(): Uint8Array;
  getNewPassword_asB64(): string;
  setNewPassword(value: Uint8Array | string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    currentPassword: Uint8Array | string,
    newPassword: Uint8Array | string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
  }
}

export class SendToManyRequest extends jspb.Message {
  getOutputsList(): Array<TxOut>;
  setOutputsList(value: Array<TxOut>): SendToManyRequest;
  clearOutputsList(): SendToManyRequest;
  addOutputs(value?: TxOut, index?: number): TxOut;

  getSatPerKw(): number;
  setSatPerKw(value: number): SendToManyRequest;

  getPush(): boolean;
  setPush(value: boolean): SendToManyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyRequest): SendToManyRequest.AsObject;
  static serializeBinaryToWriter(message: SendToManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyRequest;
  static deserializeBinaryFromReader(message: SendToManyRequest, reader: jspb.BinaryReader): SendToManyRequest;
}

export namespace SendToManyRequest {
  export type AsObject = {
    outputsList: Array<TxOut.AsObject>,
    satPerKw: number,
    push: boolean,
  }
}

export class SendToManyReply extends jspb.Message {
  getRawTx(): Uint8Array | string;
  getRawTx_asU8(): Uint8Array;
  getRawTx_asB64(): string;
  setRawTx(value: Uint8Array | string): SendToManyReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToManyReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendToManyReply): SendToManyReply.AsObject;
  static serializeBinaryToWriter(message: SendToManyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToManyReply;
  static deserializeBinaryFromReader(message: SendToManyReply, reader: jspb.BinaryReader): SendToManyReply;
}

export namespace SendToManyReply {
  export type AsObject = {
    rawTx: Uint8Array | string,
  }
}

export class TxOut extends jspb.Message {
  getAsset(): string;
  setAsset(value: string): TxOut;

  getValue(): number;
  setValue(value: number): TxOut;

  getAddress(): string;
  setAddress(value: string): TxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxOut.AsObject;
  static toObject(includeInstance: boolean, msg: TxOut): TxOut.AsObject;
  static serializeBinaryToWriter(message: TxOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxOut;
  static deserializeBinaryFromReader(message: TxOut, reader: jspb.BinaryReader): TxOut;
}

export namespace TxOut {
  export type AsObject = {
    asset: string,
    value: number,
    address: string,
  }
}

