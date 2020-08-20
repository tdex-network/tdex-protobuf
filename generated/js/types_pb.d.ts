import * as jspb from "google-protobuf"

export class Balance extends jspb.Message {
  getBaseAmount(): number;
  setBaseAmount(value: number): Balance;

  getQuoteAmount(): number;
  setQuoteAmount(value: number): Balance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
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
  getBalance(): Balance | undefined;
  setBalance(value?: Balance): BalanceWithFee;
  hasBalance(): boolean;
  clearBalance(): BalanceWithFee;

  getFee(): number;
  setFee(value: number): BalanceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalanceWithFee.AsObject;
  static toObject(includeInstance: boolean, msg: BalanceWithFee): BalanceWithFee.AsObject;
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

export class Market extends jspb.Message {
  getBaseAsset(): string;
  setBaseAsset(value: string): Market;

  getQuoteAsset(): string;
  setQuoteAsset(value: string): Market;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Market.AsObject;
  static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
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
  getMarket(): Market | undefined;
  setMarket(value?: Market): MarketWithFee;
  hasMarket(): boolean;
  clearMarket(): MarketWithFee;

  getFee(): number;
  setFee(value: number): MarketWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketWithFee.AsObject;
  static toObject(includeInstance: boolean, msg: MarketWithFee): MarketWithFee.AsObject;
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

export class Price extends jspb.Message {
  getBasePrice(): number;
  setBasePrice(value: number): Price;

  getQuotePrice(): number;
  setQuotePrice(value: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
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
  getPrice(): Price | undefined;
  setPrice(value?: Price): PriceWithFee;
  hasPrice(): boolean;
  clearPrice(): PriceWithFee;

  getFee(): number;
  setFee(value: number): PriceWithFee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceWithFee.AsObject;
  static toObject(includeInstance: boolean, msg: PriceWithFee): PriceWithFee.AsObject;
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

