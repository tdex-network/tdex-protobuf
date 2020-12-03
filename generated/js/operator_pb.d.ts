import * as jspb from "google-protobuf"

import * as types_pb from './types_pb';

export class DepositMarketRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): DepositMarketRequest;
  hasMarket(): boolean;
  clearMarket(): DepositMarketRequest;

  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): DepositMarketRequest;

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
    numOfAddresses: number,
  }
}

export class DepositMarketReply extends jspb.Message {
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): DepositMarketReply;
  clearAddressesList(): DepositMarketReply;
  addAddresses(value: string, index?: number): DepositMarketReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: DepositMarketReply): DepositMarketReply.AsObject;
  static serializeBinaryToWriter(message: DepositMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositMarketReply;
  static deserializeBinaryFromReader(message: DepositMarketReply, reader: jspb.BinaryReader): DepositMarketReply;
}

export namespace DepositMarketReply {
  export type AsObject = {
    addressesList: Array<string>,
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
  getNumOfAddresses(): number;
  setNumOfAddresses(value: number): DepositFeeAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositFeeAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepositFeeAccountRequest): DepositFeeAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DepositFeeAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositFeeAccountRequest;
  static deserializeBinaryFromReader(message: DepositFeeAccountRequest, reader: jspb.BinaryReader): DepositFeeAccountRequest;
}

export namespace DepositFeeAccountRequest {
  export type AsObject = {
    numOfAddresses: number,
  }
}

export class DepositFeeAccountReply extends jspb.Message {
  getAddressWithBlindingKeyList(): Array<types_pb.AddressWithBlindingKey>;
  setAddressWithBlindingKeyList(value: Array<types_pb.AddressWithBlindingKey>): DepositFeeAccountReply;
  clearAddressWithBlindingKeyList(): DepositFeeAccountReply;
  addAddressWithBlindingKey(value?: types_pb.AddressWithBlindingKey, index?: number): types_pb.AddressWithBlindingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositFeeAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: DepositFeeAccountReply): DepositFeeAccountReply.AsObject;
  static serializeBinaryToWriter(message: DepositFeeAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositFeeAccountReply;
  static deserializeBinaryFromReader(message: DepositFeeAccountReply, reader: jspb.BinaryReader): DepositFeeAccountReply;
}

export namespace DepositFeeAccountReply {
  export type AsObject = {
    addressWithBlindingKeyList: Array<types_pb.AddressWithBlindingKey.AsObject>,
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

export class ListMarketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketRequest): ListMarketRequest.AsObject;
  static serializeBinaryToWriter(message: ListMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketRequest;
  static deserializeBinaryFromReader(message: ListMarketRequest, reader: jspb.BinaryReader): ListMarketRequest;
}

export namespace ListMarketRequest {
  export type AsObject = {
  }
}

export class ListMarketReply extends jspb.Message {
  getMarketsList(): Array<MarketInfo>;
  setMarketsList(value: Array<MarketInfo>): ListMarketReply;
  clearMarketsList(): ListMarketReply;
  addMarkets(value?: MarketInfo, index?: number): MarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMarketReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListMarketReply): ListMarketReply.AsObject;
  static serializeBinaryToWriter(message: ListMarketReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMarketReply;
  static deserializeBinaryFromReader(message: ListMarketReply, reader: jspb.BinaryReader): ListMarketReply;
}

export namespace ListMarketReply {
  export type AsObject = {
    marketsList: Array<MarketInfo.AsObject>,
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

export class UpdateMarketStrategyRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): UpdateMarketStrategyRequest;
  hasMarket(): boolean;
  clearMarket(): UpdateMarketStrategyRequest;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): UpdateMarketStrategyRequest;

  getMetadata(): string;
  setMetadata(value: string): UpdateMarketStrategyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketStrategyRequest): UpdateMarketStrategyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyRequest;
  static deserializeBinaryFromReader(message: UpdateMarketStrategyRequest, reader: jspb.BinaryReader): UpdateMarketStrategyRequest;
}

export namespace UpdateMarketStrategyRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
    strategyType: StrategyType,
    metadata: string,
  }
}

export class UpdateMarketStrategyReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMarketStrategyReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMarketStrategyReply): UpdateMarketStrategyReply.AsObject;
  static serializeBinaryToWriter(message: UpdateMarketStrategyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMarketStrategyReply;
  static deserializeBinaryFromReader(message: UpdateMarketStrategyReply, reader: jspb.BinaryReader): UpdateMarketStrategyReply;
}

export namespace UpdateMarketStrategyReply {
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

  getPrice(): types_pb.Price | undefined;
  setPrice(value?: types_pb.Price): UpdateMarketPriceRequest;
  hasPrice(): boolean;
  clearPrice(): UpdateMarketPriceRequest;

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
    price?: types_pb.Price.AsObject,
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

  getMillisatPerByte(): number;
  setMillisatPerByte(value: number): WithdrawMarketRequest;

  getAddress(): string;
  setAddress(value: string): WithdrawMarketRequest;

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
    millisatPerByte: number,
    address: string,
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
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSwapsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSwapsRequest): ListSwapsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSwapsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSwapsRequest;
  static deserializeBinaryFromReader(message: ListSwapsRequest, reader: jspb.BinaryReader): ListSwapsRequest;
}

export namespace ListSwapsRequest {
  export type AsObject = {
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
  getCollectedFeesList(): Array<FeeInfo>;
  setCollectedFeesList(value: Array<FeeInfo>): ReportMarketFeeReply;
  clearCollectedFeesList(): ReportMarketFeeReply;
  addCollectedFees(value?: FeeInfo, index?: number): FeeInfo;

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
    collectedFeesList: Array<FeeInfo.AsObject>,
    totalCollectedFeesPerAssetMap: Array<[string, number]>,
  }
}

export class MarketInfo extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): MarketInfo;
  hasMarket(): boolean;
  clearMarket(): MarketInfo;

  getFee(): types_pb.Fee | undefined;
  setFee(value?: types_pb.Fee): MarketInfo;
  hasFee(): boolean;
  clearFee(): MarketInfo;

  getTradable(): boolean;
  setTradable(value: boolean): MarketInfo;

  getStrategyType(): StrategyType;
  setStrategyType(value: StrategyType): MarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MarketInfo): MarketInfo.AsObject;
  static serializeBinaryToWriter(message: MarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketInfo;
  static deserializeBinaryFromReader(message: MarketInfo, reader: jspb.BinaryReader): MarketInfo;
}

export namespace MarketInfo {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
    fee?: types_pb.Fee.AsObject,
    tradable: boolean,
    strategyType: StrategyType,
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

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): SwapInfo;

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
    expiryTimeUnix: number,
  }
}

export class FeeInfo extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): FeeInfo;

  getBasisPoint(): number;
  setBasisPoint(value: number): FeeInfo;

  getAsset(): string;
  setAsset(value: string): FeeInfo;

  getAmount(): number;
  setAmount(value: number): FeeInfo;

  getMarketPrice(): number;
  setMarketPrice(value: number): FeeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeeInfo): FeeInfo.AsObject;
  static serializeBinaryToWriter(message: FeeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeInfo;
  static deserializeBinaryFromReader(message: FeeInfo, reader: jspb.BinaryReader): FeeInfo;
}

export namespace FeeInfo {
  export type AsObject = {
    tradeId: string,
    basisPoint: number,
    asset: string,
    amount: number,
    marketPrice: number,
  }
}

export enum StrategyType { 
  PLUGGABLE = 0,
  BALANCED = 1,
  UNBALANCED = 2,
}
export enum SwapStatus { 
  UNDEFINED = 0,
  REQUEST = 1,
  ACCEPT = 2,
  COMPLETE = 3,
}
