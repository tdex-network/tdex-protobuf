// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var operator_pb = require('./operator_pb.js');
var types_pb = require('./types_pb.js');

function serialize_BalanceFeeAccountReply(arg) {
  if (!(arg instanceof operator_pb.BalanceFeeAccountReply)) {
    throw new Error('Expected argument of type BalanceFeeAccountReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BalanceFeeAccountReply(buffer_arg) {
  return operator_pb.BalanceFeeAccountReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BalanceFeeAccountRequest(arg) {
  if (!(arg instanceof operator_pb.BalanceFeeAccountRequest)) {
    throw new Error('Expected argument of type BalanceFeeAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BalanceFeeAccountRequest(buffer_arg) {
  return operator_pb.BalanceFeeAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CloseMarketReply(arg) {
  if (!(arg instanceof operator_pb.CloseMarketReply)) {
    throw new Error('Expected argument of type CloseMarketReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CloseMarketReply(buffer_arg) {
  return operator_pb.CloseMarketReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CloseMarketRequest(arg) {
  if (!(arg instanceof operator_pb.CloseMarketRequest)) {
    throw new Error('Expected argument of type CloseMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CloseMarketRequest(buffer_arg) {
  return operator_pb.CloseMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DepositFeeAccountReply(arg) {
  if (!(arg instanceof operator_pb.DepositFeeAccountReply)) {
    throw new Error('Expected argument of type DepositFeeAccountReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositFeeAccountReply(buffer_arg) {
  return operator_pb.DepositFeeAccountReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DepositFeeAccountRequest(arg) {
  if (!(arg instanceof operator_pb.DepositFeeAccountRequest)) {
    throw new Error('Expected argument of type DepositFeeAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositFeeAccountRequest(buffer_arg) {
  return operator_pb.DepositFeeAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DepositMarketReply(arg) {
  if (!(arg instanceof operator_pb.DepositMarketReply)) {
    throw new Error('Expected argument of type DepositMarketReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositMarketReply(buffer_arg) {
  return operator_pb.DepositMarketReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DepositMarketRequest(arg) {
  if (!(arg instanceof operator_pb.DepositMarketRequest)) {
    throw new Error('Expected argument of type DepositMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositMarketRequest(buffer_arg) {
  return operator_pb.DepositMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListDepositMarketReply(arg) {
  if (!(arg instanceof operator_pb.ListDepositMarketReply)) {
    throw new Error('Expected argument of type ListDepositMarketReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListDepositMarketReply(buffer_arg) {
  return operator_pb.ListDepositMarketReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListDepositMarketRequest(arg) {
  if (!(arg instanceof operator_pb.ListDepositMarketRequest)) {
    throw new Error('Expected argument of type ListDepositMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListDepositMarketRequest(buffer_arg) {
  return operator_pb.ListDepositMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListSwapsReply(arg) {
  if (!(arg instanceof operator_pb.ListSwapsReply)) {
    throw new Error('Expected argument of type ListSwapsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListSwapsReply(buffer_arg) {
  return operator_pb.ListSwapsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListSwapsRequest(arg) {
  if (!(arg instanceof operator_pb.ListSwapsRequest)) {
    throw new Error('Expected argument of type ListSwapsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListSwapsRequest(buffer_arg) {
  return operator_pb.ListSwapsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketFeeReportReply(arg) {
  if (!(arg instanceof operator_pb.MarketFeeReportReply)) {
    throw new Error('Expected argument of type MarketFeeReportReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketFeeReportReply(buffer_arg) {
  return operator_pb.MarketFeeReportReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketFeeReportRequest(arg) {
  if (!(arg instanceof operator_pb.MarketFeeReportRequest)) {
    throw new Error('Expected argument of type MarketFeeReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketFeeReportRequest(buffer_arg) {
  return operator_pb.MarketFeeReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OpenMarketReply(arg) {
  if (!(arg instanceof operator_pb.OpenMarketReply)) {
    throw new Error('Expected argument of type OpenMarketReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OpenMarketReply(buffer_arg) {
  return operator_pb.OpenMarketReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OpenMarketRequest(arg) {
  if (!(arg instanceof operator_pb.OpenMarketRequest)) {
    throw new Error('Expected argument of type OpenMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OpenMarketRequest(buffer_arg) {
  return operator_pb.OpenMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMarketFeeReply(arg) {
  if (!(arg instanceof operator_pb.UpdateMarketFeeReply)) {
    throw new Error('Expected argument of type UpdateMarketFeeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMarketFeeReply(buffer_arg) {
  return operator_pb.UpdateMarketFeeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMarketFeeRequest(arg) {
  if (!(arg instanceof operator_pb.UpdateMarketFeeRequest)) {
    throw new Error('Expected argument of type UpdateMarketFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMarketFeeRequest(buffer_arg) {
  return operator_pb.UpdateMarketFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMarketPriceReply(arg) {
  if (!(arg instanceof operator_pb.UpdateMarketPriceReply)) {
    throw new Error('Expected argument of type UpdateMarketPriceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMarketPriceReply(buffer_arg) {
  return operator_pb.UpdateMarketPriceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateMarketPriceRequest(arg) {
  if (!(arg instanceof operator_pb.UpdateMarketPriceRequest)) {
    throw new Error('Expected argument of type UpdateMarketPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateMarketPriceRequest(buffer_arg) {
  return operator_pb.UpdateMarketPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WithdrawMarketReply(arg) {
  if (!(arg instanceof operator_pb.WithdrawMarketReply)) {
    throw new Error('Expected argument of type WithdrawMarketReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WithdrawMarketReply(buffer_arg) {
  return operator_pb.WithdrawMarketReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WithdrawMarketRequest(arg) {
  if (!(arg instanceof operator_pb.WithdrawMarketRequest)) {
    throw new Error('Expected argument of type WithdrawMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WithdrawMarketRequest(buffer_arg) {
  return operator_pb.WithdrawMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service for operators to configure and manage a TDEX daemon
var OperatorService = exports.OperatorService = {
  // Returns a new derived address for the given market.
// If market field is empty, a new Market is created and MUST be initialized.
depositMarket: {
    path: '/Operator/DepositMarket',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.DepositMarketRequest,
    responseType: operator_pb.DepositMarketReply,
    requestSerialize: serialize_DepositMarketRequest,
    requestDeserialize: deserialize_DepositMarketRequest,
    responseSerialize: serialize_DepositMarketReply,
    responseDeserialize: deserialize_DepositMarketReply,
  },
  // Returns the list of previously generated addresses for the given market.
listDepositMarket: {
    path: '/Operator/ListDepositMarket',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.ListDepositMarketRequest,
    responseType: operator_pb.ListDepositMarketReply,
    requestSerialize: serialize_ListDepositMarketRequest,
    requestDeserialize: deserialize_ListDepositMarketRequest,
    responseSerialize: serialize_ListDepositMarketReply,
    responseDeserialize: deserialize_ListDepositMarketReply,
  },
  // Returns a new derived address from the fee account.
// This is only used to deposit some LBTC to subsidize blockchain fees.
depositFeeAccount: {
    path: '/Operator/DepositFeeAccount',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.DepositFeeAccountRequest,
    responseType: operator_pb.DepositFeeAccountReply,
    requestSerialize: serialize_DepositFeeAccountRequest,
    requestDeserialize: deserialize_DepositFeeAccountRequest,
    responseSerialize: serialize_DepositFeeAccountReply,
    responseDeserialize: deserialize_DepositFeeAccountReply,
  },
  // Returns the aggregated balance of LBTC held in the fee account.
balanceFeeAccount: {
    path: '/Operator/BalanceFeeAccount',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.BalanceFeeAccountRequest,
    responseType: operator_pb.BalanceFeeAccountReply,
    requestSerialize: serialize_BalanceFeeAccountRequest,
    requestDeserialize: deserialize_BalanceFeeAccountRequest,
    responseSerialize: serialize_BalanceFeeAccountReply,
    responseDeserialize: deserialize_BalanceFeeAccountReply,
  },
  // Makes the given market tradable
openMarket: {
    path: '/Operator/OpenMarket',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.OpenMarketRequest,
    responseType: operator_pb.OpenMarketReply,
    requestSerialize: serialize_OpenMarketRequest,
    requestDeserialize: deserialize_OpenMarketRequest,
    responseSerialize: serialize_OpenMarketReply,
    responseDeserialize: deserialize_OpenMarketReply,
  },
  // Makes the given market NOT tradabale
closeMarket: {
    path: '/Operator/CloseMarket',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.CloseMarketRequest,
    responseType: operator_pb.CloseMarketReply,
    requestSerialize: serialize_CloseMarketRequest,
    requestDeserialize: deserialize_CloseMarketRequest,
    responseSerialize: serialize_CloseMarketReply,
    responseDeserialize: deserialize_CloseMarketReply,
  },
  // Manually updates the price for the given market
updateMarketPrice: {
    path: '/Operator/UpdateMarketPrice',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.UpdateMarketPriceRequest,
    responseType: operator_pb.UpdateMarketPriceReply,
    requestSerialize: serialize_UpdateMarketPriceRequest,
    requestDeserialize: deserialize_UpdateMarketPriceRequest,
    responseSerialize: serialize_UpdateMarketPriceReply,
    responseDeserialize: deserialize_UpdateMarketPriceReply,
  },
  // Changes the Liquidity Provider fee for the given market. I thsould be
// express in basis point. To change the fee on each swap from (current) 0.25%
// to 1% you need to pass down 100 The Market MUST be closed before doing this
// change.
updateMarketFee: {
    path: '/Operator/UpdateMarketFee',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.UpdateMarketFeeRequest,
    responseType: operator_pb.UpdateMarketFeeReply,
    requestSerialize: serialize_UpdateMarketFeeRequest,
    requestDeserialize: deserialize_UpdateMarketFeeRequest,
    responseSerialize: serialize_UpdateMarketFeeReply,
    responseDeserialize: deserialize_UpdateMarketFeeReply,
  },
  // WithdrawMarket allows the operator to withdraw to external wallet funds
// from a specific market. The Market MUST be closed before doing this change.
withdrawMarket: {
    path: '/Operator/WithdrawMarket',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.WithdrawMarketRequest,
    responseType: operator_pb.WithdrawMarketReply,
    requestSerialize: serialize_WithdrawMarketRequest,
    requestDeserialize: deserialize_WithdrawMarketRequest,
    responseSerialize: serialize_WithdrawMarketReply,
    responseDeserialize: deserialize_WithdrawMarketReply,
  },
  // Returs all the swaps processed by the daemon (both attempted and completed)
listSwaps: {
    path: '/Operator/ListSwaps',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.ListSwapsRequest,
    responseType: operator_pb.ListSwapsReply,
    requestSerialize: serialize_ListSwapsRequest,
    requestDeserialize: deserialize_ListSwapsRequest,
    responseSerialize: serialize_ListSwapsReply,
    responseDeserialize: deserialize_ListSwapsReply,
  },
  // Displays a report on how much the given market is collecting in Liquidity
// Provider fees
marketFeeReport: {
    path: '/Operator/MarketFeeReport',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.MarketFeeReportRequest,
    responseType: operator_pb.MarketFeeReportReply,
    requestSerialize: serialize_MarketFeeReportRequest,
    requestDeserialize: deserialize_MarketFeeReportRequest,
    responseSerialize: serialize_MarketFeeReportReply,
    responseDeserialize: deserialize_MarketFeeReportReply,
  },
};

exports.OperatorClient = grpc.makeGenericClientConstructor(OperatorService);
