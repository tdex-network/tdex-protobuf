// package: 
// file: trade.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as swap_pb from "./swap_pb";
import * as types_pb from "./types_pb";

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
    clearMarketsList(): void;
    getMarketsList(): Array<types_pb.MarketWithFee>;
    setMarketsList(value: Array<types_pb.MarketWithFee>): MarketsReply;
    addMarkets(value?: types_pb.MarketWithFee, index?: number): types_pb.MarketWithFee;


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
        marketsList: Array<types_pb.MarketWithFee.AsObject>,
    }
}

export class BalancesRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): types_pb.Market | undefined;
    setMarket(value?: types_pb.Market): BalancesRequest;


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
        market?: types_pb.Market.AsObject,
    }
}

export class BalancesReply extends jspb.Message { 
    clearBalancesList(): void;
    getBalancesList(): Array<types_pb.BalanceWithFee>;
    setBalancesList(value: Array<types_pb.BalanceWithFee>): BalancesReply;
    addBalances(value?: types_pb.BalanceWithFee, index?: number): types_pb.BalanceWithFee;


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
        balancesList: Array<types_pb.BalanceWithFee.AsObject>,
    }
}

export class MarketPriceRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): types_pb.Market | undefined;
    setMarket(value?: types_pb.Market): MarketPriceRequest;

    getType(): TradeType;
    setType(value: TradeType): MarketPriceRequest;

    getAmount(): number;
    setAmount(value: number): MarketPriceRequest;

    getAsset(): string;
    setAsset(value: string): MarketPriceRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketPriceRequest): MarketPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketPriceRequest;
    static deserializeBinaryFromReader(message: MarketPriceRequest, reader: jspb.BinaryReader): MarketPriceRequest;
}

export namespace MarketPriceRequest {
    export type AsObject = {
        market?: types_pb.Market.AsObject,
        type: TradeType,
        amount: number,
        asset: string,
    }
}

export class MarketPriceReply extends jspb.Message { 
    clearPricesList(): void;
    getPricesList(): Array<types_pb.PriceWithFee>;
    setPricesList(value: Array<types_pb.PriceWithFee>): MarketPriceReply;
    addPrices(value?: types_pb.PriceWithFee, index?: number): types_pb.PriceWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketPriceReply.AsObject;
    static toObject(includeInstance: boolean, msg: MarketPriceReply): MarketPriceReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): types_pb.Market | undefined;
    setMarket(value?: types_pb.Market): TradeProposeRequest;

    getType(): TradeType;
    setType(value: TradeType): TradeProposeRequest;


    hasSwapRequest(): boolean;
    clearSwapRequest(): void;
    getSwapRequest(): swap_pb.SwapRequest | undefined;
    setSwapRequest(value?: swap_pb.SwapRequest): TradeProposeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeProposeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradeProposeRequest): TradeProposeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeProposeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeProposeRequest;
    static deserializeBinaryFromReader(message: TradeProposeRequest, reader: jspb.BinaryReader): TradeProposeRequest;
}

export namespace TradeProposeRequest {
    export type AsObject = {
        market?: types_pb.Market.AsObject,
        type: TradeType,
        swapRequest?: swap_pb.SwapRequest.AsObject,
    }
}

export class TradeProposeReply extends jspb.Message { 

    hasSwapAccept(): boolean;
    clearSwapAccept(): void;
    getSwapAccept(): swap_pb.SwapAccept | undefined;
    setSwapAccept(value?: swap_pb.SwapAccept): TradeProposeReply;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): TradeProposeReply;

    getExpiryTimeUnix(): number;
    setExpiryTimeUnix(value: number): TradeProposeReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeProposeReply.AsObject;
    static toObject(includeInstance: boolean, msg: TradeProposeReply): TradeProposeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

    hasSwapComplete(): boolean;
    clearSwapComplete(): void;
    getSwapComplete(): swap_pb.SwapComplete | undefined;
    setSwapComplete(value?: swap_pb.SwapComplete): TradeCompleteRequest;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): TradeCompleteRequest;


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
        swapComplete?: swap_pb.SwapComplete.AsObject,
        swapFail?: swap_pb.SwapFail.AsObject,
    }
}

export class TradeCompleteReply extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): TradeCompleteReply;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): TradeCompleteReply;


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
        txid: string,
        swapFail?: swap_pb.SwapFail.AsObject,
    }
}

export class ProposeTradeRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): types_pb.Market | undefined;
    setMarket(value?: types_pb.Market): ProposeTradeRequest;

    getType(): TradeType;
    setType(value: TradeType): ProposeTradeRequest;


    hasSwapRequest(): boolean;
    clearSwapRequest(): void;
    getSwapRequest(): swap_pb.SwapRequest | undefined;
    setSwapRequest(value?: swap_pb.SwapRequest): ProposeTradeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposeTradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProposeTradeRequest): ProposeTradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposeTradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposeTradeRequest;
    static deserializeBinaryFromReader(message: ProposeTradeRequest, reader: jspb.BinaryReader): ProposeTradeRequest;
}

export namespace ProposeTradeRequest {
    export type AsObject = {
        market?: types_pb.Market.AsObject,
        type: TradeType,
        swapRequest?: swap_pb.SwapRequest.AsObject,
    }
}

export class ProposeTradeReply extends jspb.Message { 

    hasSwapAccept(): boolean;
    clearSwapAccept(): void;
    getSwapAccept(): swap_pb.SwapAccept | undefined;
    setSwapAccept(value?: swap_pb.SwapAccept): ProposeTradeReply;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): ProposeTradeReply;

    getExpiryTimeUnix(): number;
    setExpiryTimeUnix(value: number): ProposeTradeReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProposeTradeReply.AsObject;
    static toObject(includeInstance: boolean, msg: ProposeTradeReply): ProposeTradeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProposeTradeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProposeTradeReply;
    static deserializeBinaryFromReader(message: ProposeTradeReply, reader: jspb.BinaryReader): ProposeTradeReply;
}

export namespace ProposeTradeReply {
    export type AsObject = {
        swapAccept?: swap_pb.SwapAccept.AsObject,
        swapFail?: swap_pb.SwapFail.AsObject,
        expiryTimeUnix: number,
    }
}

export class CompleteTradeRequest extends jspb.Message { 

    hasSwapComplete(): boolean;
    clearSwapComplete(): void;
    getSwapComplete(): swap_pb.SwapComplete | undefined;
    setSwapComplete(value?: swap_pb.SwapComplete): CompleteTradeRequest;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): CompleteTradeRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompleteTradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompleteTradeRequest): CompleteTradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompleteTradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompleteTradeRequest;
    static deserializeBinaryFromReader(message: CompleteTradeRequest, reader: jspb.BinaryReader): CompleteTradeRequest;
}

export namespace CompleteTradeRequest {
    export type AsObject = {
        swapComplete?: swap_pb.SwapComplete.AsObject,
        swapFail?: swap_pb.SwapFail.AsObject,
    }
}

export class CompleteTradeReply extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): CompleteTradeReply;


    hasSwapFail(): boolean;
    clearSwapFail(): void;
    getSwapFail(): swap_pb.SwapFail | undefined;
    setSwapFail(value?: swap_pb.SwapFail): CompleteTradeReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompleteTradeReply.AsObject;
    static toObject(includeInstance: boolean, msg: CompleteTradeReply): CompleteTradeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompleteTradeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompleteTradeReply;
    static deserializeBinaryFromReader(message: CompleteTradeReply, reader: jspb.BinaryReader): CompleteTradeReply;
}

export namespace CompleteTradeReply {
    export type AsObject = {
        txid: string,
        swapFail?: swap_pb.SwapFail.AsObject,
    }
}

export enum TradeType {
    BUY = 0,
    SELL = 1,
}
