// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var trade_pb = require('./trade_pb.js');
var swap_pb = require('./swap_pb.js');

function serialize_BalancesReply(arg) {
  if (!(arg instanceof trade_pb.BalancesReply)) {
    throw new Error('Expected argument of type BalancesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BalancesReply(buffer_arg) {
  return trade_pb.BalancesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BalancesRequest(arg) {
  if (!(arg instanceof trade_pb.BalancesRequest)) {
    throw new Error('Expected argument of type BalancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BalancesRequest(buffer_arg) {
  return trade_pb.BalancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketsReply(arg) {
  if (!(arg instanceof trade_pb.MarketsReply)) {
    throw new Error('Expected argument of type MarketsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketsReply(buffer_arg) {
  return trade_pb.MarketsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketsRequest(arg) {
  if (!(arg instanceof trade_pb.MarketsRequest)) {
    throw new Error('Expected argument of type MarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketsRequest(buffer_arg) {
  return trade_pb.MarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TradeCompleteReply(arg) {
  if (!(arg instanceof trade_pb.TradeCompleteReply)) {
    throw new Error('Expected argument of type TradeCompleteReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeCompleteReply(buffer_arg) {
  return trade_pb.TradeCompleteReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TradeCompleteRequest(arg) {
  if (!(arg instanceof trade_pb.TradeCompleteRequest)) {
    throw new Error('Expected argument of type TradeCompleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeCompleteRequest(buffer_arg) {
  return trade_pb.TradeCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TradeReply(arg) {
  if (!(arg instanceof trade_pb.TradeReply)) {
    throw new Error('Expected argument of type TradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeReply(buffer_arg) {
  return trade_pb.TradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TradeRequest(arg) {
  if (!(arg instanceof trade_pb.TradeRequest)) {
    throw new Error('Expected argument of type TradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeRequest(buffer_arg) {
  return trade_pb.TradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service Interface 
var TradeServiceService = exports.TradeServiceService = {
  markets: {
    path: '/TradeService/Markets',
    requestStream: false,
    responseStream: false,
    requestType: trade_pb.MarketsRequest,
    responseType: trade_pb.MarketsReply,
    requestSerialize: serialize_MarketsRequest,
    requestDeserialize: deserialize_MarketsRequest,
    responseSerialize: serialize_MarketsReply,
    responseDeserialize: deserialize_MarketsReply,
  },
  balances: {
    path: '/TradeService/Balances',
    requestStream: false,
    responseStream: false,
    requestType: trade_pb.BalancesRequest,
    responseType: trade_pb.BalancesReply,
    requestSerialize: serialize_BalancesRequest,
    requestDeserialize: deserialize_BalancesRequest,
    responseSerialize: serialize_BalancesReply,
    responseDeserialize: deserialize_BalancesReply,
  },
  trade: {
    path: '/TradeService/Trade',
    requestStream: false,
    responseStream: true,
    requestType: trade_pb.TradeRequest,
    responseType: trade_pb.TradeReply,
    requestSerialize: serialize_TradeRequest,
    requestDeserialize: deserialize_TradeRequest,
    responseSerialize: serialize_TradeReply,
    responseDeserialize: deserialize_TradeReply,
  },
  tradeComplete: {
    path: '/TradeService/TradeComplete',
    requestStream: false,
    responseStream: true,
    requestType: trade_pb.TradeCompleteRequest,
    responseType: trade_pb.TradeCompleteReply,
    requestSerialize: serialize_TradeCompleteRequest,
    requestDeserialize: deserialize_TradeCompleteRequest,
    responseSerialize: serialize_TradeCompleteReply,
    responseDeserialize: deserialize_TradeCompleteReply,
  },
};

exports.TradeServiceClient = grpc.makeGenericClientConstructor(TradeServiceService);
