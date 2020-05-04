// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var operator_pb = require('./operator_pb.js');

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


var OperatorService = exports.OperatorService = {
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
};

exports.OperatorClient = grpc.makeGenericClientConstructor(OperatorService);
