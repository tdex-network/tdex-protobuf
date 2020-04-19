// package: 
// file: trade.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as swap_pb from "./swap_pb";

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

export class Market extends jspb.Message { 
    getBaseAsset(): string;
    setBaseAsset(value: string): void;

    getQuoteAsset(): string;
    setQuoteAsset(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        baseAsset: string,
        quoteAsset: string,
    }
}

export class MarketWithFee extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): void;

    getFee(): number;
    setFee(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: MarketWithFee): MarketWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketWithFee;
    static deserializeBinaryFromReader(message: MarketWithFee, reader: jspb.BinaryReader): MarketWithFee;
}

export namespace MarketWithFee {
    export type AsObject = {
        market?: Market.AsObject,
        fee: number,
    }
}

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
    getMarketsList(): Array<MarketWithFee>;
    setMarketsList(value: Array<MarketWithFee>): void;
    addMarkets(value?: MarketWithFee, index?: number): MarketWithFee;


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
        marketsList: Array<MarketWithFee.AsObject>,
    }
}

export class BalancesRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): void;


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
        market?: Market.AsObject,
    }
}

export class BalancesReply extends jspb.Message { 
    clearBalancesList(): void;
    getBalancesList(): Array<Balance>;
    setBalancesList(value: Array<Balance>): void;
    addBalances(value?: Balance, index?: number): Balance;

    getFee(): number;
    setFee(value: number): void;


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
        balancesList: Array<Balance.AsObject>,
        fee: number,
    }
}

export class TradeProposeRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): void;

    getType(): TradeProposeRequest.Type;
    setType(value: TradeProposeRequest.Type): void;


    hasSwapRequest(): boolean;
    clearSwapRequest(): void;
    getSwapRequest(): swap_pb.SwapRequest | undefined;
    setSwapRequest(value?: swap_pb.SwapRequest): void;


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
        market?: Market.AsObject,
        type: TradeProposeRequest.Type,
        swapRequest?: swap_pb.SwapRequest.AsObject,
    }

    export enum Type {
    BUY = 0,
    SELL = 1,
    }

}

export class TradeProposeReply extends jspb.Message { 

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): swap_pb.SwapAccept | undefined;
    setMsg(value?: swap_pb.SwapAccept): void;


    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): swap_pb.SwapFail | undefined;
    setFailure(value?: swap_pb.SwapFail): void;


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
        msg?: swap_pb.SwapAccept.AsObject,
        failure?: swap_pb.SwapFail.AsObject,
    }
}

export class TradeCompleteRequest extends jspb.Message { 

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): swap_pb.SwapComplete | undefined;
    setMsg(value?: swap_pb.SwapComplete): void;


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
        msg?: swap_pb.SwapComplete.AsObject,
    }
}

export class TradeCompleteReply extends jspb.Message { 
    getTxid(): string;
    setTxid(value: string): void;


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
    }
}
