// package: 
// file: trade.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as trade_pb from "./trade_pb";
import * as swap_pb from "./swap_pb";
import * as types_pb from "./types_pb";

interface ITradeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    markets: ITradeService_IMarkets;
    balances: ITradeService_IBalances;
    marketPrice: ITradeService_IMarketPrice;
    tradePropose: ITradeService_ITradePropose;
    tradeProposeUnary: ITradeService_ITradeProposeUnary;
    tradeComplete: ITradeService_ITradeComplete;
    tradeCompleteUnary: ITradeService_ITradeCompleteUnary;
}

interface ITradeService_IMarkets extends grpc.MethodDefinition<trade_pb.MarketsRequest, trade_pb.MarketsReply> {
    path: "/Trade/Markets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.MarketsRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.MarketsRequest>;
    responseSerialize: grpc.serialize<trade_pb.MarketsReply>;
    responseDeserialize: grpc.deserialize<trade_pb.MarketsReply>;
}
interface ITradeService_IBalances extends grpc.MethodDefinition<trade_pb.BalancesRequest, trade_pb.BalancesReply> {
    path: "/Trade/Balances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.BalancesRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.BalancesRequest>;
    responseSerialize: grpc.serialize<trade_pb.BalancesReply>;
    responseDeserialize: grpc.deserialize<trade_pb.BalancesReply>;
}
interface ITradeService_IMarketPrice extends grpc.MethodDefinition<trade_pb.MarketPriceRequest, trade_pb.MarketPriceReply> {
    path: "/Trade/MarketPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.MarketPriceRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.MarketPriceRequest>;
    responseSerialize: grpc.serialize<trade_pb.MarketPriceReply>;
    responseDeserialize: grpc.deserialize<trade_pb.MarketPriceReply>;
}
interface ITradeService_ITradePropose extends grpc.MethodDefinition<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply> {
    path: "/Trade/TradePropose";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<trade_pb.TradeProposeRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeProposeRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeProposeReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeProposeReply>;
}
interface ITradeService_ITradeProposeUnary extends grpc.MethodDefinition<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply> {
    path: "/Trade/TradeProposeUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.TradeProposeRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeProposeRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeProposeReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeProposeReply>;
}
interface ITradeService_ITradeComplete extends grpc.MethodDefinition<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply> {
    path: "/Trade/TradeComplete";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<trade_pb.TradeCompleteRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeCompleteRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeCompleteReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeCompleteReply>;
}
interface ITradeService_ITradeCompleteUnary extends grpc.MethodDefinition<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply> {
    path: "/Trade/TradeCompleteUnary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<trade_pb.TradeCompleteRequest>;
    requestDeserialize: grpc.deserialize<trade_pb.TradeCompleteRequest>;
    responseSerialize: grpc.serialize<trade_pb.TradeCompleteReply>;
    responseDeserialize: grpc.deserialize<trade_pb.TradeCompleteReply>;
}

export const TradeService: ITradeService;

export interface ITradeServer {
    markets: grpc.handleUnaryCall<trade_pb.MarketsRequest, trade_pb.MarketsReply>;
    balances: grpc.handleUnaryCall<trade_pb.BalancesRequest, trade_pb.BalancesReply>;
    marketPrice: grpc.handleUnaryCall<trade_pb.MarketPriceRequest, trade_pb.MarketPriceReply>;
    tradePropose: grpc.handleServerStreamingCall<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply>;
    tradeProposeUnary: grpc.handleUnaryCall<trade_pb.TradeProposeRequest, trade_pb.TradeProposeReply>;
    tradeComplete: grpc.handleServerStreamingCall<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply>;
    tradeCompleteUnary: grpc.handleUnaryCall<trade_pb.TradeCompleteRequest, trade_pb.TradeCompleteReply>;
}

export interface ITradeClient {
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
    tradeProposeUnary(request: trade_pb.TradeProposeRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    tradeProposeUnary(request: trade_pb.TradeProposeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    tradeProposeUnary(request: trade_pb.TradeProposeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    tradeComplete(request: trade_pb.TradeCompleteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    tradeComplete(request: trade_pb.TradeCompleteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
    tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
    tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
}

export class TradeClient extends grpc.Client implements ITradeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
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
    public tradeProposeUnary(request: trade_pb.TradeProposeRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    public tradeProposeUnary(request: trade_pb.TradeProposeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    public tradeProposeUnary(request: trade_pb.TradeProposeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeProposeReply) => void): grpc.ClientUnaryCall;
    public tradeComplete(request: trade_pb.TradeCompleteRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    public tradeComplete(request: trade_pb.TradeCompleteRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<trade_pb.TradeCompleteReply>;
    public tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
    public tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
    public tradeCompleteUnary(request: trade_pb.TradeCompleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: trade_pb.TradeCompleteReply) => void): grpc.ClientUnaryCall;
}
