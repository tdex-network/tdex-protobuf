import * as jspb from "google-protobuf"

import * as types_pb from './types_pb';

export class DepositMarketRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): DepositMarketRequest;
  hasMarket(): boolean;
  clearMarket(): DepositMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositMarketRequest): DepositMarketRequest.AsObject;
  static serializeBinaryToWriter(message: DepositMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositMarketRequest;
  static deserializeBinaryFromReader(message: DepositMarketRequest, reader: jspb.BinaryReader): DepositMarketRequest;
}

export namespace DepositMarketRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class DepositMarketReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): DepositMarketReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: DepositMarketReply): DepositMarketReply.AsObject;
  static serializeBinaryToWriter(message: DepositMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositMarketReply;
  static deserializeBinaryFromReader(message: DepositMarketReply, reader: jspb.BinaryReader): DepositMarketReply;
}

export namespace DepositMarketReply {
  export type AsObject = {
    address: string,
  }
}

export class ListDepositMarketRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): ListDepositMarketRequest;
  hasMarket(): boolean;
  clearMarket(): ListDepositMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositMarketRequest): ListDepositMarketRequest.AsObject;
  static serializeBinaryToWriter(message: ListDepositMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositMarketRequest;
  static deserializeBinaryFromReader(message: ListDepositMarketRequest, reader: jspb.BinaryReader): ListDepositMarketRequest;
}

export namespace ListDepositMarketRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class ListDepositMarketReply extends jspb.Message {
  getAddressList(): Array<string>;
  setAddressList(value: Array<string>): ListDepositMarketReply;
  clearAddressList(): ListDepositMarketReply;
  addAddress(value: string, index?: number): ListDepositMarketReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDepositMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListDepositMarketReply): ListDepositMarketReply.AsObject;
  static serializeBinaryToWriter(message: ListDepositMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDepositMarketReply;
  static deserializeBinaryFromReader(message: ListDepositMarketReply, reader: jspb.BinaryReader): ListDepositMarketReply;
}

export namespace ListDepositMarketReply {
  export type AsObject = {
    addressList: Array<string>,
  }
}

export class DepositFeeAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositFeeAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositFeeAccountRequest): DepositFeeAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DepositFeeAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositFeeAccountRequest;
  static deserializeBinaryFromReader(message: DepositFeeAccountRequest, reader: jspb.BinaryReader): DepositFeeAccountRequest;
}

export namespace DepositFeeAccountRequest {
  export type AsObject = {
  }
}

export class DepositFeeAccountReply extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): DepositFeeAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositFeeAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: DepositFeeAccountReply): DepositFeeAccountReply.AsObject;
  static serializeBinaryToWriter(message: DepositFeeAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositFeeAccountReply;
  static deserializeBinaryFromReader(message: DepositFeeAccountReply, reader: jspb.BinaryReader): DepositFeeAccountReply;
}

export namespace DepositFeeAccountReply {
  export type AsObject = {
    address: string,
  }
}

export class BalanceFeeAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceFeeAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceFeeAccountRequest): BalanceFeeAccountRequest.AsObject;
  static serializeBinaryToWriter(message: BalanceFeeAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceFeeAccountRequest;
  static deserializeBinaryFromReader(message: BalanceFeeAccountRequest, reader: jspb.BinaryReader): BalanceFeeAccountRequest;
}

export namespace BalanceFeeAccountRequest {
  export type AsObject = {
  }
}

export class BalanceFeeAccountReply extends jspb.Message {
  getBalance(): number;
  setBalance(value: number): BalanceFeeAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceFeeAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceFeeAccountReply): BalanceFeeAccountReply.AsObject;
  static serializeBinaryToWriter(message: BalanceFeeAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalanceFeeAccountReply;
  static deserializeBinaryFromReader(message: BalanceFeeAccountReply, reader: jspb.BinaryReader): BalanceFeeAccountReply;
}

export namespace BalanceFeeAccountReply {
  export type AsObject = {
    balance: number,
  }
}

export class OpenMarketRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): OpenMarketRequest;
  hasMarket(): boolean;
  clearMarket(): OpenMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenMarketRequest): OpenMarketRequest.AsObject;
  static serializeBinaryToWriter(message: OpenMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenMarketRequest;
  static deserializeBinaryFromReader(message: OpenMarketRequest, reader: jspb.BinaryReader): OpenMarketRequest;
}

export namespace OpenMarketRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
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
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): CloseMarketRequest;
  hasMarket(): boolean;
  clearMarket(): CloseMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseMarketRequest): CloseMarketRequest.AsObject;
  static serializeBinaryToWriter(message: CloseMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseMarketRequest;
  static deserializeBinaryFromReader(message: CloseMarketRequest, reader: jspb.BinaryReader): CloseMarketRequest;
}

export namespace CloseMarketRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
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

export class UpdateMarketFeeRequest extends jspb.Message {
  getMarketWithFee(): types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: types_pb.MarketWithFee): UpdateMarketFeeRequest;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): UpdateMarketFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketFeeRequest): UpdateMarketFeeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFeeRequest;
  static deserializeBinaryFromReader(message: UpdateMarketFeeRequest, reader: jspb.BinaryReader): UpdateMarketFeeRequest;
}

export namespace UpdateMarketFeeRequest {
  export type AsObject = {
    marketWithFee?: types_pb.MarketWithFee.AsObject,
  }
}

export class UpdateMarketFeeReply extends jspb.Message {
  getMarketWithFee(): types_pb.MarketWithFee | undefined;
  setMarketWithFee(value?: types_pb.MarketWithFee): UpdateMarketFeeReply;
  hasMarketWithFee(): boolean;
  clearMarketWithFee(): UpdateMarketFeeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketFeeReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketFeeReply): UpdateMarketFeeReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketFeeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketFeeReply;
  static deserializeBinaryFromReader(message: UpdateMarketFeeReply, reader: jspb.BinaryReader): UpdateMarketFeeReply;
}

export namespace UpdateMarketFeeReply {
  export type AsObject = {
    marketWithFee?: types_pb.MarketWithFee.AsObject,
  }
}

export class UpdateMarketPriceRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): UpdateMarketPriceRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPriceRequest): UpdateMarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPriceRequest;
  static deserializeBinaryFromReader(message: UpdateMarketPriceRequest, reader: jspb.BinaryReader): UpdateMarketPriceRequest;
}

export namespace UpdateMarketPriceRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class UpdateMarketPriceReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketPriceReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketPriceReply): UpdateMarketPriceReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketPriceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketPriceReply;
  static deserializeBinaryFromReader(message: UpdateMarketPriceReply, reader: jspb.BinaryReader): UpdateMarketPriceReply;
}

export namespace UpdateMarketPriceReply {
  export type AsObject = {
  }
}

export class WithdrawMarketRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): WithdrawMarketRequest;
  hasMarket(): boolean;
  clearMarket(): WithdrawMarketRequest;

  getBalanceToWithdraw(): types_pb.Balance | undefined;
  setBalanceToWithdraw(value?: types_pb.Balance): WithdrawMarketRequest;
  hasBalanceToWithdraw(): boolean;
  clearBalanceToWithdraw(): WithdrawMarketRequest;

  getSatPerKw(): number;
  setSatPerKw(value: number): WithdrawMarketRequest;

  getScript(): Uint8Array | string;
  getScript_asU8(): Uint8Array;
  getScript_asB64(): string;
  setScript(value: Uint8Array | string): WithdrawMarketRequest;

  getPush(): boolean;
  setPush(value: boolean): WithdrawMarketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketRequest): WithdrawMarketRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketRequest;
  static deserializeBinaryFromReader(message: WithdrawMarketRequest, reader: jspb.BinaryReader): WithdrawMarketRequest;
}

export namespace WithdrawMarketRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
    balanceToWithdraw?: types_pb.Balance.AsObject,
    satPerKw: number,
    script: Uint8Array | string,
    push: boolean,
  }
}

export class WithdrawMarketReply extends jspb.Message {
  getRawTx(): Uint8Array | string;
  getRawTx_asU8(): Uint8Array;
  getRawTx_asB64(): string;
  setRawTx(value: Uint8Array | string): WithdrawMarketReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawMarketReply): WithdrawMarketReply.AsObject;
  static serializeBinaryToWriter(message: WithdrawMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawMarketReply;
  static deserializeBinaryFromReader(message: WithdrawMarketReply, reader: jspb.BinaryReader): WithdrawMarketReply;
}

export namespace WithdrawMarketReply {
  export type AsObject = {
    rawTx: Uint8Array | string,
  }
}

export class ListSwapsRequest extends jspb.Message {
  getStatus(): SwapStatus;
  setStatus(value: SwapStatus): ListSwapsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSwapsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSwapsRequest): ListSwapsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSwapsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSwapsRequest;
  static deserializeBinaryFromReader(message: ListSwapsRequest, reader: jspb.BinaryReader): ListSwapsRequest;
}

export namespace ListSwapsRequest {
  export type AsObject = {
    status: SwapStatus,
  }
}

export class ListSwapsReply extends jspb.Message {
  getSwapsList(): Array<SwapInfo>;
  setSwapsList(value: Array<SwapInfo>): ListSwapsReply;
  clearSwapsList(): ListSwapsReply;
  addSwaps(value?: SwapInfo, index?: number): SwapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSwapsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListSwapsReply): ListSwapsReply.AsObject;
  static serializeBinaryToWriter(message: ListSwapsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSwapsReply;
  static deserializeBinaryFromReader(message: ListSwapsReply, reader: jspb.BinaryReader): ListSwapsReply;
}

export namespace ListSwapsReply {
  export type AsObject = {
    swapsList: Array<SwapInfo.AsObject>,
  }
}

export class ReportMarketFeeRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): ReportMarketFeeRequest;
  hasMarket(): boolean;
  clearMarket(): ReportMarketFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportMarketFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportMarketFeeRequest): ReportMarketFeeRequest.AsObject;
  static serializeBinaryToWriter(message: ReportMarketFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportMarketFeeRequest;
  static deserializeBinaryFromReader(message: ReportMarketFeeRequest, reader: jspb.BinaryReader): ReportMarketFeeRequest;
}

export namespace ReportMarketFeeRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class ReportMarketFeeReply extends jspb.Message {
  getCollectedFeesList(): Array<types_pb.Fee>;
  setCollectedFeesList(value: Array<types_pb.Fee>): ReportMarketFeeReply;
  clearCollectedFeesList(): ReportMarketFeeReply;
  addCollectedFees(value?: types_pb.Fee, index?: number): types_pb.Fee;

  getTotalCollectedFeesPerAssetMap(): jspb.Map<string, number>;
  clearTotalCollectedFeesPerAssetMap(): ReportMarketFeeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportMarketFeeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ReportMarketFeeReply): ReportMarketFeeReply.AsObject;
  static serializeBinaryToWriter(message: ReportMarketFeeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportMarketFeeReply;
  static deserializeBinaryFromReader(message: ReportMarketFeeReply, reader: jspb.BinaryReader): ReportMarketFeeReply;
}

export namespace ReportMarketFeeReply {
  export type AsObject = {
    collectedFeesList: Array<types_pb.Fee.AsObject>,
    totalCollectedFeesPerAssetMap: Array<[string, number]>,
  }
}

export class SwapInfo extends jspb.Message {
  getStatus(): SwapStatus;
  setStatus(value: SwapStatus): SwapInfo;

  getAmountP(): number;
  setAmountP(value: number): SwapInfo;

  getAssetP(): string;
  setAssetP(value: string): SwapInfo;

  getAmountR(): number;
  setAmountR(value: number): SwapInfo;

  getAssetR(): string;
  setAssetR(value: string): SwapInfo;

  getMarketFee(): types_pb.Fee | undefined;
  setMarketFee(value?: types_pb.Fee): SwapInfo;
  hasMarketFee(): boolean;
  clearMarketFee(): SwapInfo;

  getRequestTimeUnix(): number;
  setRequestTimeUnix(value: number): SwapInfo;

  getAcceptTimeUnix(): number;
  setAcceptTimeUnix(value: number): SwapInfo;

  getCompleteTimeUnix(): number;
  setCompleteTimeUnix(value: number): SwapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SwapInfo): SwapInfo.AsObject;
  static serializeBinaryToWriter(message: SwapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapInfo;
  static deserializeBinaryFromReader(message: SwapInfo, reader: jspb.BinaryReader): SwapInfo;
}

export namespace SwapInfo {
  export type AsObject = {
    status: SwapStatus,
    amountP: number,
    assetP: string,
    amountR: number,
    assetR: string,
    marketFee?: types_pb.Fee.AsObject,
    requestTimeUnix: number,
    acceptTimeUnix: number,
    completeTimeUnix: number,
  }
}

export enum SwapStatus { 
  UNDEFINED = 0,
  REQUEST = 1,
  ACCEPT = 2,
  COMPLETE = 3,
}
