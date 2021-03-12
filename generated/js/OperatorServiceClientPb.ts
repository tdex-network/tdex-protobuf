/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as operator_pb from './operator_pb';


export class OperatorClient {
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

  methodInfoDepositMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.DepositMarketReply,
    (request: operator_pb.DepositMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.DepositMarketReply.deserializeBinary
  );

  depositMarket(
    request: operator_pb.DepositMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.DepositMarketReply>;

  depositMarket(
    request: operator_pb.DepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.DepositMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.DepositMarketReply>;

  depositMarket(
    request: operator_pb.DepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.DepositMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/DepositMarket',
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
    operator_pb.ListDepositMarketReply,
    (request: operator_pb.ListDepositMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListDepositMarketReply.deserializeBinary
  );

  listDepositMarket(
    request: operator_pb.ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListDepositMarketReply>;

  listDepositMarket(
    request: operator_pb.ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListDepositMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListDepositMarketReply>;

  listDepositMarket(
    request: operator_pb.ListDepositMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListDepositMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListDepositMarket',
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
    operator_pb.DepositFeeAccountReply,
    (request: operator_pb.DepositFeeAccountRequest) => {
      return request.serializeBinary();
    },
    operator_pb.DepositFeeAccountReply.deserializeBinary
  );

  depositFeeAccount(
    request: operator_pb.DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.DepositFeeAccountReply>;

  depositFeeAccount(
    request: operator_pb.DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.DepositFeeAccountReply) => void): grpcWeb.ClientReadableStream<operator_pb.DepositFeeAccountReply>;

  depositFeeAccount(
    request: operator_pb.DepositFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.DepositFeeAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/DepositFeeAccount',
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
    operator_pb.BalanceFeeAccountReply,
    (request: operator_pb.BalanceFeeAccountRequest) => {
      return request.serializeBinary();
    },
    operator_pb.BalanceFeeAccountReply.deserializeBinary
  );

  balanceFeeAccount(
    request: operator_pb.BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.BalanceFeeAccountReply>;

  balanceFeeAccount(
    request: operator_pb.BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.BalanceFeeAccountReply) => void): grpcWeb.ClientReadableStream<operator_pb.BalanceFeeAccountReply>;

  balanceFeeAccount(
    request: operator_pb.BalanceFeeAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.BalanceFeeAccountReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/BalanceFeeAccount',
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
    operator_pb.OpenMarketReply,
    (request: operator_pb.OpenMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.OpenMarketReply.deserializeBinary
  );

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.OpenMarketReply>;

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.OpenMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.OpenMarketReply>;

  openMarket(
    request: operator_pb.OpenMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.OpenMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/OpenMarket',
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
    operator_pb.CloseMarketReply,
    (request: operator_pb.CloseMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.CloseMarketReply.deserializeBinary
  );

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.CloseMarketReply>;

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.CloseMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.CloseMarketReply>;

  closeMarket(
    request: operator_pb.CloseMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.CloseMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/CloseMarket',
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

  methodInfoListMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.ListMarketReply,
    (request: operator_pb.ListMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListMarketReply.deserializeBinary
  );

  listMarket(
    request: operator_pb.ListMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListMarketReply>;

  listMarket(
    request: operator_pb.ListMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListMarketReply>;

  listMarket(
    request: operator_pb.ListMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListMarket',
        request,
        metadata || {},
        this.methodInfoListMarket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/ListMarket',
    request,
    metadata || {},
    this.methodInfoListMarket);
  }

  methodInfoUpdateMarketFee = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.UpdateMarketFeeReply,
    (request: operator_pb.UpdateMarketFeeRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketFeeReply.deserializeBinary
  );

  updateMarketFee(
    request: operator_pb.UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketFeeReply>;

  updateMarketFee(
    request: operator_pb.UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketFeeReply>;

  updateMarketFee(
    request: operator_pb.UpdateMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketFee',
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

  methodInfoUpdateMarketPrice = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.UpdateMarketPriceReply,
    (request: operator_pb.UpdateMarketPriceRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketPriceReply.deserializeBinary
  );

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketPriceReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketPriceReply>;

  updateMarketPrice(
    request: operator_pb.UpdateMarketPriceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketPriceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketPrice',
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

  methodInfoUpdateMarketStrategy = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.UpdateMarketStrategyReply,
    (request: operator_pb.UpdateMarketStrategyRequest) => {
      return request.serializeBinary();
    },
    operator_pb.UpdateMarketStrategyReply.deserializeBinary
  );

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketStrategyReply) => void): grpcWeb.ClientReadableStream<operator_pb.UpdateMarketStrategyReply>;

  updateMarketStrategy(
    request: operator_pb.UpdateMarketStrategyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.UpdateMarketStrategyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/UpdateMarketStrategy',
        request,
        metadata || {},
        this.methodInfoUpdateMarketStrategy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Operator/UpdateMarketStrategy',
    request,
    metadata || {},
    this.methodInfoUpdateMarketStrategy);
  }

  methodInfoWithdrawMarket = new grpcWeb.AbstractClientBase.MethodInfo(
    operator_pb.WithdrawMarketReply,
    (request: operator_pb.WithdrawMarketRequest) => {
      return request.serializeBinary();
    },
    operator_pb.WithdrawMarketReply.deserializeBinary
  );

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.WithdrawMarketReply) => void): grpcWeb.ClientReadableStream<operator_pb.WithdrawMarketReply>;

  withdrawMarket(
    request: operator_pb.WithdrawMarketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.WithdrawMarketReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/WithdrawMarket',
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
    operator_pb.ListSwapsReply,
    (request: operator_pb.ListSwapsRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ListSwapsReply.deserializeBinary
  );

  listSwaps(
    request: operator_pb.ListSwapsRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ListSwapsReply>;

  listSwaps(
    request: operator_pb.ListSwapsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.ListSwapsReply) => void): grpcWeb.ClientReadableStream<operator_pb.ListSwapsReply>;

  listSwaps(
    request: operator_pb.ListSwapsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ListSwapsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ListSwaps',
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
    operator_pb.ReportMarketFeeReply,
    (request: operator_pb.ReportMarketFeeRequest) => {
      return request.serializeBinary();
    },
    operator_pb.ReportMarketFeeReply.deserializeBinary
  );

  reportMarketFee(
    request: operator_pb.ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<operator_pb.ReportMarketFeeReply>;

  reportMarketFee(
    request: operator_pb.ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: operator_pb.ReportMarketFeeReply) => void): grpcWeb.ClientReadableStream<operator_pb.ReportMarketFeeReply>;

  reportMarketFee(
    request: operator_pb.ReportMarketFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: operator_pb.ReportMarketFeeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Operator/ReportMarketFee',
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

