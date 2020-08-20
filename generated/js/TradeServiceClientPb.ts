/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as handshake_pb from './handshake_pb';
import * as swap_pb from './swap_pb';
import * as types_pb from './types_pb';

import {
  BalancesReply,
  BalancesRequest,
  MarketPriceReply,
  MarketPriceRequest,
  MarketsReply,
  MarketsRequest,
  TradeCompleteReply,
  TradeCompleteRequest,
  TradeProposeReply,
  TradeProposeRequest} from './trade_pb';

export class TradeClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoConnect = new grpcWeb.AbstractClientBase.MethodInfo(
    handshake_pb.Ack,
    (request: handshake_pb.Init) => {
      return request.serializeBinary();
    },
    handshake_pb.Ack.deserializeBinary
  );

  connect(
    request: handshake_pb.Init,
    metadata: grpcWeb.Metadata | null): Promise<handshake_pb.Ack>;

  connect(
    request: handshake_pb.Init,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: handshake_pb.Ack) => void): grpcWeb.ClientReadableStream<handshake_pb.Ack>;

  connect(
    request: handshake_pb.Init,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: handshake_pb.Ack) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Trade/Connect', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoConnect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Trade/Connect',
    request,
    metadata || {},
    this.methodInfoConnect);
  }

  methodInfoMarkets = new grpcWeb.AbstractClientBase.MethodInfo(
    MarketsReply,
    (request: MarketsRequest) => {
      return request.serializeBinary();
    },
    MarketsReply.deserializeBinary
  );

  markets(
    request: MarketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<MarketsReply>;

  markets(
    request: MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MarketsReply) => void): grpcWeb.ClientReadableStream<MarketsReply>;

  markets(
    request: MarketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: MarketsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Trade/Markets', this.hostname_).toString(),
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
    BalancesReply,
    (request: BalancesRequest) => {
      return request.serializeBinary();
    },
    BalancesReply.deserializeBinary
  );

  balances(
    request: BalancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<BalancesReply>;

  balances(
    request: BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BalancesReply) => void): grpcWeb.ClientReadableStream<BalancesReply>;

  balances(
    request: BalancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: BalancesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Trade/Balances', this.hostname_).toString(),
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
    MarketPriceReply,
    (request: MarketPriceRequest) => {
      return request.serializeBinary();
    },
    MarketPriceReply.deserializeBinary
  );

  marketPrice(
    request: MarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<MarketPriceReply>;

  marketPrice(
    request: MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MarketPriceReply) => void): grpcWeb.ClientReadableStream<MarketPriceReply>;

  marketPrice(
    request: MarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: MarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Trade/MarketPrice', this.hostname_).toString(),
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
    TradeProposeReply,
    (request: TradeProposeRequest) => {
      return request.serializeBinary();
    },
    TradeProposeReply.deserializeBinary
  );

  tradePropose(
    request: TradeProposeRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/Trade/TradePropose', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoTradePropose);
  }

  methodInfoTradeComplete = new grpcWeb.AbstractClientBase.MethodInfo(
    TradeCompleteReply,
    (request: TradeCompleteRequest) => {
      return request.serializeBinary();
    },
    TradeCompleteReply.deserializeBinary
  );

  tradeComplete(
    request: TradeCompleteRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/Trade/TradeComplete', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoTradeComplete);
  }

  methodInfoUnarySecret = new grpcWeb.AbstractClientBase.MethodInfo(
    handshake_pb.SecretMessage,
    (request: handshake_pb.SecretMessage) => {
      return request.serializeBinary();
    },
    handshake_pb.SecretMessage.deserializeBinary
  );

  unarySecret(
    request: handshake_pb.SecretMessage,
    metadata: grpcWeb.Metadata | null): Promise<handshake_pb.SecretMessage>;

  unarySecret(
    request: handshake_pb.SecretMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: handshake_pb.SecretMessage) => void): grpcWeb.ClientReadableStream<handshake_pb.SecretMessage>;

  unarySecret(
    request: handshake_pb.SecretMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: handshake_pb.SecretMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Trade/UnarySecret', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUnarySecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Trade/UnarySecret',
    request,
    metadata || {},
    this.methodInfoUnarySecret);
  }

  methodInfoStreamSecret = new grpcWeb.AbstractClientBase.MethodInfo(
    handshake_pb.SecretMessage,
    (request: handshake_pb.SecretMessage) => {
      return request.serializeBinary();
    },
    handshake_pb.SecretMessage.deserializeBinary
  );

  streamSecret(
    request: handshake_pb.SecretMessage,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/Trade/StreamSecret', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoStreamSecret);
  }

}

