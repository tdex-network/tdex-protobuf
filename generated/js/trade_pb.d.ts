import * as jspb from "google-protobuf"

import * as swap_pb from './swap_pb';
import * as types_pb from './types_pb';

export class MarketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
  static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsRequest;
  static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
  export type AsObject = {
  }
}

export class MarketsReply extends jspb.Message {
  getMarketsList(): Array<types_pb.MarketWithFee>;
  setMarketsList(value: Array<types_pb.MarketWithFee>): MarketsReply;
  clearMarketsList(): MarketsReply;
  addMarkets(value?: types_pb.MarketWithFee, index?: number): types_pb.MarketWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsReply): MarketsReply.AsObject;
  static serializeBinaryToWriter(message: MarketsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsReply;
  static deserializeBinaryFromReader(message: MarketsReply, reader: jspb.BinaryReader): MarketsReply;
}

export namespace MarketsReply {
  export type AsObject = {
    marketsList: Array<types_pb.MarketWithFee.AsObject>,
  }
}

export class BalancesRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): BalancesRequest;
  hasMarket(): boolean;
  clearMarket(): BalancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesRequest): BalancesRequest.AsObject;
  static serializeBinaryToWriter(message: BalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesRequest;
  static deserializeBinaryFromReader(message: BalancesRequest, reader: jspb.BinaryReader): BalancesRequest;
}

export namespace BalancesRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
  }
}

export class BalancesReply extends jspb.Message {
  getBalancesList(): Array<types_pb.BalanceWithFee>;
  setBalancesList(value: Array<types_pb.BalanceWithFee>): BalancesReply;
  clearBalancesList(): BalancesReply;
  addBalances(value?: types_pb.BalanceWithFee, index?: number): types_pb.BalanceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancesReply.AsObject;
  static toObject(includeInstance: boolean, msg: BalancesReply): BalancesReply.AsObject;
  static serializeBinaryToWriter(message: BalancesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancesReply;
  static deserializeBinaryFromReader(message: BalancesReply, reader: jspb.BinaryReader): BalancesReply;
}

export namespace BalancesReply {
  export type AsObject = {
    balancesList: Array<types_pb.BalanceWithFee.AsObject>,
  }
}

export class MarketPriceRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): MarketPriceRequest;
  hasMarket(): boolean;
  clearMarket(): MarketPriceRequest;

  getType(): types_pbTradeType;
  setType(value: types_pbTradeType): MarketPriceRequest;

  getAmount(): number;
  setAmount(value: number): MarketPriceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceRequest): MarketPriceRequest.AsObject;
  static serializeBinaryToWriter(message: MarketPriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceRequest;
  static deserializeBinaryFromReader(message: MarketPriceRequest, reader: jspb.BinaryReader): MarketPriceRequest;
}

export namespace MarketPriceRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
    type: types_pbTradeType,
    amount: number,
  }
}

export class MarketPriceReply extends jspb.Message {
  getPricesList(): Array<types_pb.PriceWithFee>;
  setPricesList(value: Array<types_pb.PriceWithFee>): MarketPriceReply;
  clearPricesList(): MarketPriceReply;
  addPrices(value?: types_pb.PriceWithFee, index?: number): types_pb.PriceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketPriceReply.AsObject;
  static toObject(includeInstance: boolean, msg: MarketPriceReply): MarketPriceReply.AsObject;
  static serializeBinaryToWriter(message: MarketPriceReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketPriceReply;
  static deserializeBinaryFromReader(message: MarketPriceReply, reader: jspb.BinaryReader): MarketPriceReply;
}

export namespace MarketPriceReply {
  export type AsObject = {
    pricesList: Array<types_pb.PriceWithFee.AsObject>,
  }
}

export class TradeProposeRequest extends jspb.Message {
  getMarket(): types_pb.Market | undefined;
  setMarket(value?: types_pb.Market): TradeProposeRequest;
  hasMarket(): boolean;
  clearMarket(): TradeProposeRequest;

  getType(): types_pbTradeType;
  setType(value: types_pbTradeType): TradeProposeRequest;

  getSwapRequest(): swap_pb.SwapRequest | undefined;
  setSwapRequest(value?: swap_pb.SwapRequest): TradeProposeRequest;
  hasSwapRequest(): boolean;
  clearSwapRequest(): TradeProposeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeProposeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeProposeRequest): TradeProposeRequest.AsObject;
  static serializeBinaryToWriter(message: TradeProposeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeProposeRequest;
  static deserializeBinaryFromReader(message: TradeProposeRequest, reader: jspb.BinaryReader): TradeProposeRequest;
}

export namespace TradeProposeRequest {
  export type AsObject = {
    market?: types_pb.Market.AsObject,
    type: types_pbTradeType,
    swapRequest?: swap_pb.SwapRequest.AsObject,
  }
}

export class TradeProposeReply extends jspb.Message {
  getSwapAccept(): swap_pb.SwapAccept | undefined;
  setSwapAccept(value?: swap_pb.SwapAccept): TradeProposeReply;
  hasSwapAccept(): boolean;
  clearSwapAccept(): TradeProposeReply;

  getSwapFail(): swap_pb.SwapFail | undefined;
  setSwapFail(value?: swap_pb.SwapFail): TradeProposeReply;
  hasSwapFail(): boolean;
  clearSwapFail(): TradeProposeReply;

  getExpiryTimeUnix(): number;
  setExpiryTimeUnix(value: number): TradeProposeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeProposeReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeProposeReply): TradeProposeReply.AsObject;
  static serializeBinaryToWriter(message: TradeProposeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeProposeReply;
  static deserializeBinaryFromReader(message: TradeProposeReply, reader: jspb.BinaryReader): TradeProposeReply;
}

export namespace TradeProposeReply {
  export type AsObject = {
    swapAccept?: swap_pb.SwapAccept.AsObject,
    swapFail?: swap_pb.SwapFail.AsObject,
    expiryTimeUnix: number,
  }
}

export class TradeCompleteRequest extends jspb.Message {
  getSwapComplete(): swap_pb.SwapComplete | undefined;
  setSwapComplete(value?: swap_pb.SwapComplete): TradeCompleteRequest;
  hasSwapComplete(): boolean;
  clearSwapComplete(): TradeCompleteRequest;

  getSwapFail(): swap_pb.SwapFail | undefined;
  setSwapFail(value?: swap_pb.SwapFail): TradeCompleteRequest;
  hasSwapFail(): boolean;
  clearSwapFail(): TradeCompleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteRequest): TradeCompleteRequest.AsObject;
  static serializeBinaryToWriter(message: TradeCompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteRequest;
  static deserializeBinaryFromReader(message: TradeCompleteRequest, reader: jspb.BinaryReader): TradeCompleteRequest;
}

export namespace TradeCompleteRequest {
  export type AsObject = {
    swapComplete?: swap_pb.SwapComplete.AsObject,
    swapFail?: swap_pb.SwapFail.AsObject,
  }
}

export class TradeCompleteReply extends jspb.Message {
  getTxid(): string;
  setTxid(value: string): TradeCompleteReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeCompleteReply.AsObject;
  static toObject(includeInstance: boolean, msg: TradeCompleteReply): TradeCompleteReply.AsObject;
  static serializeBinaryToWriter(message: TradeCompleteReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeCompleteReply;
  static deserializeBinaryFromReader(message: TradeCompleteReply, reader: jspb.BinaryReader): TradeCompleteReply;
}

export namespace TradeCompleteReply {
  export type AsObject = {
    txid: string,
  }
}

