// package: 
// file: trade.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as trade_pb from "./trade_pb";
import * as handshake_pb from "./handshake_pb";
import * as swap_pb from "./swap_pb";
import * as types_pb from "./types_pb";

interface ITradeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: ITradeService_IConnect;
    markets: ITradeService_IMarkets;
    balances: ITradeService_IBalances;
    marketPrice: ITradeService_IMarketPrice;
    tradePropose: ITradeService_ITradePropose;
    tradeComplete: ITradeService_ITradeComplete;
    unarySecret: ITradeService_IUnarySecret;
    streamSecret: ITradeService_IStreamSecret;
}

interface ITradeService_IConnect extends grpc.MethodDefinition<handshake_pb.Init, handshake_pb.Ack> {
    path: string; // "/.Trade/Connect"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<handshake_pb.Init>;
    requestDeserialize: grpc.deserialize<handshake_pb.Init>;
    responseSerialize: grpc.serialize<handshake_pb.Ack>;
    responseDeserialize: grpc.deserialize<handshake_pb.Ack>;
}
interface ITradeService_IMarkets extends grpc.MethodDefinition<trade_pb.MarketsRequest, trade_pb.MarketsReply> {
    path: string; // "/.Trade/Markets"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.MarketsRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.MarketsRequest>;
    responseSerialize: grpc.serialize<trade_pb.MarketsReply>;
    responseDeserialize: grpc.deserialize<trade_pb.MarketsReply>;
}
interface ITradeService_IBalances extends grpc.MethodDefinition<trade_pb.BalancesRequest, trade_pb.BalancesReply> {
    path: string; // "/.Trade/Balances"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.BalancesRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.BalancesRequest>;
    responseSerialize: grpc.serialize<trade_pb.BalancesReply>;
    responseDeserialize: grpc.deserialize<trade_pb.BalancesReply>;
}
interface ITradeService_IMarketPrice extends grpc.MethodDefinition<trade_pb.MarketPriceRequest, trade_pb.MarketPriceReply> {
    path: string; // "/.Trade/MarketPrice"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.MarketPriceRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.MarketPriceRequest>;
    responseSerialize: grpc.serialize<trade_pb.MarketPriceReply>;
    responseDeserialize: grpc.deserialize<trade_pb.MarketPriceReply>;
}
interface ITradeService_ITradePropose extends grpc.MethodDefinition<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply> {
    path: string; // "/.Trade/TradePropose"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<trade_pb.TradeProposeRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeProposeRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeProposeReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeProposeReply>;
}
interface ITradeService_ITradeComplete extends grpc.MethodDefinition<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply> {
    path: string; // "/.Trade/TradeComplete"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<trade_pb.TradeCompleteRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeCompleteRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeCompleteReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeCompleteReply>;
}
interface ITradeService_IUnarySecret extends grpc.MethodDefinition<handshake_pb.SecretMessage, handshake_pb.SecretMessage> {
    path: string; // "/.Trade/UnarySecret"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    requestDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
    responseSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    responseDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
}
interface ITradeService_IStreamSecret extends grpc.MethodDefinition<handshake_pb.SecretMessage, handshake_pb.SecretMessage> {
    path: string; // "/.Trade/StreamSecret"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    requestDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
    responseSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    responseDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
}

export const TradeService: ITradeService;

export interface ITradeServer {
    connect: grpc.handleUnaryCall<handshake_pb.Init, handshake_pb.Ack>;
    markets: grpc.handleUnaryCall<trade_pb.MarketsRequest, trade_pb.MarketsReply>;
    balances: grpc.handleUnaryCall<trade_pb.BalancesRequest, trade_pb.BalancesReply>;
    marketPrice: grpc.handleUnaryCall<trade_pb.MarketPriceRequest, trade_pb.MarketPriceReply>;
    tradePropose: grpc.handleServerStreamingCall<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply>;
    tradeComplete: grpc.handleServerStreamingCall<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply>;
    unarySecret: grpc.handleUnaryCall<handshake_pb.SecretMessage, handshake_pb.SecretMessage>;
    streamSecret: grpc.handleServerStreamingCall<handshake_pb.SecretMessage, handshake_pb.SecretMessage>;
}

export interface ITradeClient {
    connect(request: handshake_pb.Init, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    connect(request: handshake_pb.Init, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    connect(request: handshake_pb.Init, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    markets(request: trade_pb.MarketsRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    markets(request: trade_pb.MarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    markets(request: trade_pb.MarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    balances(request: trade_pb.BalancesRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    balances(request: trade_pb.BalancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    balances(request: trade_pb.BalancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    marketPrice(request: trade_pb.MarketPriceRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    marketPrice(request: trade_pb.MarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    marketPrice(request: trade_pb.MarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    tradePropose(request: trade_pb.TradeProposeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeProposeReply>;
    tradePropose(request: trade_pb.TradeProposeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeProposeReply>;
    tradeComplete(request: trade_pb.TradeCompleteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    tradeComplete(request: trade_pb.TradeCompleteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    unarySecret(request: handshake_pb.SecretMessage, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    streamSecret(request: handshake_pb.SecretMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
    streamSecret(request: handshake_pb.SecretMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
}

export class TradeClient extends grpc.Client implements ITradeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public connect(request: handshake_pb.Init, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public connect(request: handshake_pb.Init, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public connect(request: handshake_pb.Init, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public markets(request: trade_pb.MarketsRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    public markets(request: trade_pb.MarketsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    public markets(request: trade_pb.MarketsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketsReply) => void): grpc.ClientUnaryCall;
    public balances(request: trade_pb.BalancesRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    public balances(request: trade_pb.BalancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    public balances(request: trade_pb.BalancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.BalancesReply) => void): grpc.ClientUnaryCall;
    public marketPrice(request: trade_pb.MarketPriceRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    public marketPrice(request: trade_pb.MarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    public marketPrice(request: trade_pb.MarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.MarketPriceReply) => void): grpc.ClientUnaryCall;
    public tradePropose(request: trade_pb.TradeProposeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeProposeReply>;
    public tradePropose(request: trade_pb.TradeProposeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeProposeReply>;
    public tradeComplete(request: trade_pb.TradeCompleteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    public tradeComplete(request: trade_pb.TradeCompleteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    public unarySecret(request: handshake_pb.SecretMessage, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public streamSecret(request: handshake_pb.SecretMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
    public streamSecret(request: handshake_pb.SecretMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
}
