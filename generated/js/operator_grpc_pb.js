// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var operator_pb = require('./operator_pb.js');
var types_pb = require('./types_pb.js');

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

function serialize_DepositAddressReply(arg) {
  if (!(arg instanceof operator_pb.DepositAddressReply)) {
    throw new Error('Expected argument of type DepositAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositAddressReply(buffer_arg) {
  return operator_pb.DepositAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DepositAddressRequest(arg) {
  if (!(arg instanceof operator_pb.DepositAddressRequest)) {
    throw new Error('Expected argument of type DepositAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DepositAddressRequest(buffer_arg) {
  return operator_pb.DepositAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FeeBalanceReply(arg) {
  if (!(arg instanceof operator_pb.FeeBalanceReply)) {
    throw new Error('Expected argument of type FeeBalanceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FeeBalanceReply(buffer_arg) {
  return operator_pb.FeeBalanceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FeeBalanceRequest(arg) {
  if (!(arg instanceof operator_pb.FeeBalanceRequest)) {
    throw new Error('Expected argument of type FeeBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FeeBalanceRequest(buffer_arg) {
  return operator_pb.FeeBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FeeDepositAddressReply(arg) {
  if (!(arg instanceof operator_pb.FeeDepositAddressReply)) {
    throw new Error('Expected argument of type FeeDepositAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FeeDepositAddressReply(buffer_arg) {
  return operator_pb.FeeDepositAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FeeDepositAddressRequest(arg) {
  if (!(arg instanceof operator_pb.FeeDepositAddressRequest)) {
    throw new Error('Expected argument of type FeeDepositAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FeeDepositAddressRequest(buffer_arg) {
  return operator_pb.FeeDepositAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListDepositAddressReply(arg) {
  if (!(arg instanceof operator_pb.ListDepositAddressReply)) {
    throw new Error('Expected argument of type ListDepositAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListDepositAddressReply(buffer_arg) {
  return operator_pb.ListDepositAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListDepositAddressRequest(arg) {
  if (!(arg instanceof operator_pb.ListDepositAddressRequest)) {
    throw new Error('Expected argument of type ListDepositAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListDepositAddressRequest(buffer_arg) {
  return operator_pb.ListDepositAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_UpdateFeeReply(arg) {
  if (!(arg instanceof operator_pb.UpdateFeeReply)) {
    throw new Error('Expected argument of type UpdateFeeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateFeeReply(buffer_arg) {
  return operator_pb.UpdateFeeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateFeeRequest(arg) {
  if (!(arg instanceof operator_pb.UpdateFeeRequest)) {
    throw new Error('Expected argument of type UpdateFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateFeeRequest(buffer_arg) {
  return operator_pb.UpdateFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service for operators to configure and manage a TDEX daemon
var OperatorService = exports.OperatorService = {
  // Returns a new derived address for the given market.
// If market field is empty, a new Market is created and MUST be initialized.
depositAddress: {
    path: '/Operator/DepositAddress',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.DepositAddressRequest,
    responseType: operator_pb.DepositAddressReply,
    requestSerialize: serialize_DepositAddressRequest,
    requestDeserialize: deserialize_DepositAddressRequest,
    responseSerialize: serialize_DepositAddressReply,
    responseDeserialize: deserialize_DepositAddressReply,
  },
  // Returns the list of previously generated addresses for the given market.
listDepositAddress: {
    path: '/Operator/ListDepositAddress',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.ListDepositAddressRequest,
    responseType: operator_pb.ListDepositAddressReply,
    requestSerialize: serialize_ListDepositAddressRequest,
    requestDeserialize: deserialize_ListDepositAddressRequest,
    responseSerialize: serialize_ListDepositAddressReply,
    responseDeserialize: deserialize_ListDepositAddressReply,
  },
  // Returns a new derived address from the fee account.
// This is only used to deposit some LBTC to subsidize blockchain fees.
feeDepositAddress: {
    path: '/Operator/FeeDepositAddress',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.FeeDepositAddressRequest,
    responseType: operator_pb.FeeDepositAddressReply,
    requestSerialize: serialize_FeeDepositAddressRequest,
    requestDeserialize: deserialize_FeeDepositAddressRequest,
    responseSerialize: serialize_FeeDepositAddressReply,
    responseDeserialize: deserialize_FeeDepositAddressReply,
  },
  // Returns the aggregated balance of LBTC held in the fee account.
feeBalance: {
    path: '/Operator/FeeBalance',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.FeeBalanceRequest,
    responseType: operator_pb.FeeBalanceReply,
    requestSerialize: serialize_FeeBalanceRequest,
    requestDeserialize: deserialize_FeeBalanceRequest,
    responseSerialize: serialize_FeeBalanceReply,
    responseDeserialize: deserialize_FeeBalanceReply,
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
  // Changes the fee for the given market.
// The Market MUST be closed before doing this change.
updateFee: {
    path: '/Operator/UpdateFee',
    requestStream: false,
    responseStream: false,
    requestType: operator_pb.UpdateFeeRequest,
    responseType: operator_pb.UpdateFeeReply,
    requestSerialize: serialize_UpdateFeeRequest,
    requestDeserialize: deserialize_UpdateFeeRequest,
    responseSerialize: serialize_UpdateFeeReply,
    responseDeserialize: deserialize_UpdateFeeReply,
  },
};

exports.OperatorClient = grpc.makeGenericClientConstructor(OperatorService);
