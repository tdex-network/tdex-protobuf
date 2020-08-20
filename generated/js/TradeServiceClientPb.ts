/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as swap_pb from './swap_pb';

import {
  BalancesReply,
  BalancesRequest,
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

}

