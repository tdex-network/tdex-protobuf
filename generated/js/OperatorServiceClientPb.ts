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
  BalanceFeeAccountReply,
  BalanceFeeAccountRequest,
  CloseMarketReply,
  CloseMarketRequest,
  DepositFeeAccountReply,
  DepositFeeAccountRequest,
  DepositMarketReply,
  DepositMarketRequest,
  ListDepositMarketReply,
  ListDepositMarketRequest,
  ListSwapsReply,
  ListSwapsRequest,
  OpenMarketReply,
  OpenMarketRequest,
  ReportMarketFeeReply,
  ReportMarketFeeRequest,
  UpdateMarketFeeReply,
  UpdateMarketFeeRequest,
  UpdateMarketPriceReply,
  UpdateMarketPriceRequest,
  WithdrawMarketReply,
  WithdrawMarketRequest} from './operator_pb';

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

  methodInfoDepositMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    DepositMarketReply,
    (request: DepositMarketRequest) => {
      return request.serializeBinary();
    },
    DepositMarketReply.deserializeBinary
  );

  depositMarket(
    request: DepositMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<DepositMarketReply>;

  depositMarket(
    request: DepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DepositMarketReply) => void): grpcWeb.ClientReadableStream<DepositMarketReply>;

  depositMarket(
    request: DepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DepositMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/DepositMarket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoDepositMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/DepositMarket',
    request,
    metadata || {},
    this.methodInfoDepositMarket);
  }

  methodInfoListDepositMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDepositMarketReply,
    (request: ListDepositMarketRequest) => {
      return request.serializeBinary();
    },
    ListDepositMarketReply.deserializeBinary
  );

  listDepositMarket(
    request: ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDepositMarketReply>;

  listDepositMarket(
    request: ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDepositMarketReply) => void): grpcWeb.ClientReadableStream<ListDepositMarketReply>;

  listDepositMarket(
    request: ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDepositMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListDepositMarket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListDepositMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListDepositMarket',
    request,
    metadata || {},
    this.methodInfoListDepositMarket);
  }

  methodInfoDepositFeeAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    DepositFeeAccountReply,
    (request: DepositFeeAccountRequest) => {
      return request.serializeBinary();
    },
    DepositFeeAccountReply.deserializeBinary
  );

  depositFeeAccount(
    request: DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<DepositFeeAccountReply>;

  depositFeeAccount(
    request: DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DepositFeeAccountReply) => void): grpcWeb.ClientReadableStream<DepositFeeAccountReply>;

  depositFeeAccount(
    request: DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DepositFeeAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/DepositFeeAccount', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoDepositFeeAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/DepositFeeAccount',
    request,
    metadata || {},
    this.methodInfoDepositFeeAccount);
  }

  methodInfoBalanceFeeAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    BalanceFeeAccountReply,
    (request: BalanceFeeAccountRequest) => {
      return request.serializeBinary();
    },
    BalanceFeeAccountReply.deserializeBinary
  );

  balanceFeeAccount(
    request: BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<BalanceFeeAccountReply>;

  balanceFeeAccount(
    request: BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BalanceFeeAccountReply) => void): grpcWeb.ClientReadableStream<BalanceFeeAccountReply>;

  balanceFeeAccount(
    request: BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: BalanceFeeAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/BalanceFeeAccount', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoBalanceFeeAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/BalanceFeeAccount',
    request,
    metadata || {},
    this.methodInfoBalanceFeeAccount);
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

  methodInfoUpdateMarketPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateMarketPriceReply,
    (request: UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketPriceReply.deserializeBinary
  );

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketPriceReply>;

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<UpdateMarketPriceReply>;

  updateMarketPrice(
    request: UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketPrice', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdateMarketPrice,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketPrice',
    request,
    metadata || {},
    this.methodInfoUpdateMarketPrice);
  }

  methodInfoUpdateMarketFee = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateMarketFeeReply,
    (request: UpdateMarketFeeRequest) => {
      return request.serializeBinary();
    },
    UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketFee(
    request: UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateMarketFeeReply>;

  updateMarketFee(
    request: UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<UpdateMarketFeeReply>;

  updateMarketFee(
    request: UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/UpdateMarketFee', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUpdateMarketFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketFee',
    request,
    metadata || {},
    this.methodInfoUpdateMarketFee);
  }

  methodInfoWithdrawMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    WithdrawMarketReply,
    (request: WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    WithdrawMarketReply.deserializeBinary
  );

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<WithdrawMarketReply>;

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<WithdrawMarketReply>;

  withdrawMarket(
    request: WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/WithdrawMarket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoWithdrawMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/WithdrawMarket',
    request,
    metadata || {},
    this.methodInfoWithdrawMarket);
  }

  methodInfoListSwaps = new grpcWeb.AbstractClientBase.MethodInfo(
    ListSwapsReply,
    (request: ListSwapsRequest) => {
      return request.serializeBinary();
    },
    ListSwapsReply.deserializeBinary
  );

  listSwaps(
    request: ListSwapsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListSwapsReply>;

  listSwaps(
    request: ListSwapsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListSwapsReply) => void): grpcWeb.ClientReadableStream<ListSwapsReply>;

  listSwaps(
    request: ListSwapsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListSwapsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ListSwaps', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListSwaps,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListSwaps',
    request,
    metadata || {},
    this.methodInfoListSwaps);
  }

  methodInfoReportMarketFee = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportMarketFeeReply,
    (request: ReportMarketFeeRequest) => {
      return request.serializeBinary();
    },
    ReportMarketFeeReply.deserializeBinary
  );

  reportMarketFee(
    request: ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<ReportMarketFeeReply>;

  reportMarketFee(
    request: ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportMarketFeeReply) => void): grpcWeb.ClientReadableStream<ReportMarketFeeReply>;

  reportMarketFee(
    request: ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ReportMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Operator/ReportMarketFee', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoReportMarketFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ReportMarketFee',
    request,
    metadata || {},
    this.methodInfoReportMarketFee);
  }

}

