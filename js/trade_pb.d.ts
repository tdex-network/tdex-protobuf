// package: 
// file: trade.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as swap_pb from "./swap_pb";

export class Market extends jspb.Message { 
    getBaseAsset(): string;
    setBaseAsset(value: string): Market;

    getQuoteAsset(): string;
    setQuoteAsset(value: string): Market;


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
    setMarket(value?: Market): MarketWithFee;

    getFee(): number;
    setFee(value: number): MarketWithFee;


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

export class Balance extends jspb.Message { 
    getBaseAmount(): number;
    setBaseAmount(value: number): Balance;

    getQuoteAmount(): number;
    setQuoteAmount(value: number): Balance;


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
        baseAmount: number,
        quoteAmount: number,
    }
}

export class BalanceWithFee extends jspb.Message { 

    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): Balance | undefined;
    setBalance(value?: Balance): BalanceWithFee;

    getFee(): number;
    setFee(value: number): BalanceWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceWithFee): BalanceWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceWithFee;
    static deserializeBinaryFromReader(message: BalanceWithFee, reader: jspb.BinaryReader): BalanceWithFee;
}

export namespace BalanceWithFee {
    export type AsObject = {
        balance?: Balance.AsObject,
        fee: number,
    }
}

export class Price extends jspb.Message { 
    getBasePrice(): number;
    setBasePrice(value: number): Price;

    getQuotePrice(): number;
    setQuotePrice(value: number): Price;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Price.AsObject;
    static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Price;
    static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
    export type AsObject = {
        basePrice: number,
        quotePrice: number,
    }
}

export class PriceWithFee extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): Price | undefined;
    setPrice(value?: Price): PriceWithFee;

    getFee(): number;
    setFee(value: number): PriceWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: PriceWithFee): PriceWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceWithFee;
    static deserializeBinaryFromReader(message: PriceWithFee, reader: jspb.BinaryReader): PriceWithFee;
}

export namespace PriceWithFee {
    export type AsObject = {
        price?: Price.AsObject,
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
    setMarketsList(value: Array<MarketWithFee>): MarketsReply;
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
    setMarket(value?: Market): BalancesRequest;


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
    getBalancesList(): Array<BalanceWithFee>;
    setBalancesList(value: Array<BalanceWithFee>): BalancesReply;
    addBalances(value?: BalanceWithFee, index?: number): BalanceWithFee;


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
        balancesList: Array<BalanceWithFee.AsObject>,
    }
}

export class MarketPriceRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): MarketPriceRequest;


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
        market?: Market.AsObject,
    }
}

export class MarketPriceReply extends jspb.Message { 
    clearPricesList(): void;
    getPricesList(): Array<PriceWithFee>;
    setPricesList(value: Array<PriceWithFee>): MarketPriceReply;
    addPrices(value?: PriceWithFee, index?: number): PriceWithFee;


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
        pricesList: Array<PriceWithFee.AsObject>,
    }
}

export class TradeProposeRequest extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): TradeProposeRequest;

    getType(): TradeProposeRequest.Type;
    setType(value: TradeProposeRequest.Type): TradeProposeRequest;


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
