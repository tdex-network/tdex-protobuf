/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as types_pb from './types_pb';

import {
  CloseMarketReply,
  CloseMarketRequest,
  DepositAddressReply,
  DepositAddressRequest,
  FeeBalanceReply,
  FeeBalanceRequest,
  FeeDepositAddressReply,
  FeeDepositAddressRequest,
  ListDepositAddressReply,
  ListDepositAddressRequest,
  OpenMarketReply,
  OpenMarketRequest,
  UpdateFeeReply,
  UpdateFeeRequest} from './operator_pb';

export class OperatorClient {
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

  methodInfoDepositAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    DepositAddressReply,
    (request: DepositAddressRequest) => {
      return request.serializeBinary();
    },
    DepositAddressReply.deserializeBinary
  );

  depositAddress(
    request: DepositAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<DepositAddressReply>;

  depositAddress(
    request: DepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DepositAddressReply) => void): grpcWeb.ClientReadableStream<DepositAddressReply>;

  depositAddress(
    request: DepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DepositAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/DepositAddress', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoDepositAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/DepositAddress',
    request,
    metadata || {},
    this.methodInfoDepositAddress);
  }

  methodInfoListDepositAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDepositAddressReply,
    (request: ListDepositAddressRequest) => {
      return request.serializeBinary();
    },
    ListDepositAddressReply.deserializeBinary
  );

  listDepositAddress(
    request: ListDepositAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDepositAddressReply>;

  listDepositAddress(
    request: ListDepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDepositAddressReply) => void): grpcWeb.ClientReadableStream<ListDepositAddressReply>;

  listDepositAddress(
    request: ListDepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDepositAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListDepositAddress', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListDepositAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListDepositAddress',
    request,
    metadata || {},
    this.methodInfoListDepositAddress);
  }

  methodInfoFeeDepositAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    FeeDepositAddressReply,
    (request: FeeDepositAddressRequest) => {
      return request.serializeBinary();
    },
    FeeDepositAddressReply.deserializeBinary
  );

  feeDepositAddress(
    request: FeeDepositAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<FeeDepositAddressReply>;

  feeDepositAddress(
    request: FeeDepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FeeDepositAddressReply) => void): grpcWeb.ClientReadableStream<FeeDepositAddressReply>;

  feeDepositAddress(
    request: FeeDepositAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FeeDepositAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/FeeDepositAddress', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoFeeDepositAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/FeeDepositAddress',
    request,
    metadata || {},
    this.methodInfoFeeDepositAddress);
  }

  methodInfoFeeBalance = new grpcWeb.AbstractClientBase.MethodInfo(
    FeeBalanceReply,
    (request: FeeBalanceRequest) => {
      return request.serializeBinary();
    },
    FeeBalanceReply.deserializeBinary
  );

  feeBalance(
    request: FeeBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<FeeBalanceReply>;

  feeBalance(
    request: FeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FeeBalanceReply) => void): grpcWeb.ClientReadableStream<FeeBalanceReply>;

  feeBalance(
    request: FeeBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FeeBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/FeeBalance', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoFeeBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/FeeBalance',
    request,
    metadata || {},
    this.methodInfoFeeBalance);
  }

  methodInfoOpenMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenMarketReply,
    (request: OpenMarketRequest) => {
      return request.serializeBinary();
    },
    OpenMarketReply.deserializeBinary
  );

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<OpenMarketReply>;

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenMarketReply) => void): grpcWeb.ClientReadableStream<OpenMarketReply>;

  openMarket(
    request: OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/OpenMarket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoOpenMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/OpenMarket',
    request,
    metadata || {},
    this.methodInfoOpenMarket);
  }

  methodInfoCloseMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    CloseMarketReply,
    (request: CloseMarketRequest) => {
      return request.serializeBinary();
    },
    CloseMarketReply.deserializeBinary
  );

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<CloseMarketReply>;

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CloseMarketReply) => void): grpcWeb.ClientReadableStream<CloseMarketReply>;

  closeMarket(
    request: CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/CloseMarket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCloseMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/CloseMarket',
    request,
    metadata || {},
    this.methodInfoCloseMarket);
  }

  methodInfoUpdateFee = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateFeeReply,
    (request: UpdateFeeRequest) => {
      return request.serializeBinary();
    },
    UpdateFeeReply.deserializeBinary
  );

  updateFee(
    request: UpdateFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateFeeReply>;

  updateFee(
    request: UpdateFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateFeeReply) => void): grpcWeb.ClientReadableStream<UpdateFeeReply>;

  updateFee(
    request: UpdateFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateFee', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdateFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateFee',
    request,
    metadata || {},
    this.methodInfoUpdateFee);
  }

}

