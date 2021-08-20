/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as trade_pb from './trade_pb';


export class TradeClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoMarkets = new grpcWeb.AbstractClientBase.MethodInfo(
    trade_pb.MarketsReply,
    (request: trade_pb.MarketsRequest) => {
      return request.serializeBinary();
    },
    trade_pb.MarketsReply.deserializeBinary
  );

  markets(
    request: trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<trade_pb.MarketsReply>;

  markets(
    request: trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: trade_pb.MarketsReply) => void): grpcWeb.ClientReadableStream<trade_pb.MarketsReply>;

  markets(
    request: trade_pb.MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: trade_pb.MarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Trade/Markets',
        request,
        metadata || {},
        this.methodInfoMarkets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Trade/Markets',
    request,
    metadata || {},
    this.methodInfoMarkets);
  }

  methodInfoBalances = new grpcWeb.AbstractClientBase.MethodInfo(
    trade_pb.BalancesReply,
    (request: trade_pb.BalancesRequest) => {
      return request.serializeBinary();
    },
    trade_pb.BalancesReply.deserializeBinary
  );

  balances(
    request: trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<trade_pb.BalancesReply>;

  balances(
    request: trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: trade_pb.BalancesReply) => void): grpcWeb.ClientReadableStream<trade_pb.BalancesReply>;

  balances(
    request: trade_pb.BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: trade_pb.BalancesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Trade/Balances',
        request,
        metadata || {},
        this.methodInfoBalances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Trade/Balances',
    request,
    metadata || {},
    this.methodInfoBalances);
  }

  methodInfoMarketPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    trade_pb.MarketPriceReply,
    (request: trade_pb.MarketPriceRequest) => {
      return request.serializeBinary();
    },
    trade_pb.MarketPriceReply.deserializeBinary
  );

  marketPrice(
    request: trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<trade_pb.MarketPriceReply>;

  marketPrice(
    request: trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: trade_pb.MarketPriceReply) => void): grpcWeb.ClientReadableStream<trade_pb.MarketPriceReply>;

  marketPrice(
    request: trade_pb.MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: trade_pb.MarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Trade/MarketPrice',
        request,
        metadata || {},
        this.methodInfoMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Trade/MarketPrice',
    request,
    metadata || {},
    this.methodInfoMarketPrice);
  }

  methodInfoTradePropose = new grpcWeb.AbstractClientBase.MethodInfo(
    trade_pb.TradeProposeReply,
    (request: trade_pb.TradeProposeRequest) => {
      return request.serializeBinary();
    },
    trade_pb.TradeProposeReply.deserializeBinary
  );

  tradePropose(
    request: trade_pb.TradeProposeRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Trade/TradePropose',
      request,
      metadata || {},
      this.methodInfoTradePropose);
  }

  methodInfoTradeComplete = new grpcWeb.AbstractClientBase.MethodInfo(
    trade_pb.TradeCompleteReply,
    (request: trade_pb.TradeCompleteRequest) => {
      return request.serializeBinary();
    },
    trade_pb.TradeCompleteReply.deserializeBinary
  );

  tradeComplete(
    request: trade_pb.TradeCompleteRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Trade/TradeComplete',
      request,
      metadata || {},
      this.methodInfoTradeComplete);
  }

}

