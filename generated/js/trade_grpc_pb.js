// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var trade_pb = require('./trade_pb.js');
var handshake_pb = require('./handshake_pb.js');
var swap_pb = require('./swap_pb.js');
var types_pb = require('./types_pb.js');

function serialize_Ack(arg) {
  if (!(arg instanceof handshake_pb.Ack)) {
    throw new Error('Expected argument of type Ack');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Ack(buffer_arg) {
  return handshake_pb.Ack.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_Init(arg) {
  if (!(arg instanceof handshake_pb.Init)) {
    throw new Error('Expected argument of type Init');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Init(buffer_arg) {
  return handshake_pb.Init.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketPriceReply(arg) {
  if (!(arg instanceof trade_pb.MarketPriceReply)) {
    throw new Error('Expected argument of type MarketPriceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketPriceReply(buffer_arg) {
  return trade_pb.MarketPriceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MarketPriceRequest(arg) {
  if (!(arg instanceof trade_pb.MarketPriceRequest)) {
    throw new Error('Expected argument of type MarketPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MarketPriceRequest(buffer_arg) {
  return trade_pb.MarketPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_SecretMessage(arg) {
  if (!(arg instanceof handshake_pb.SecretMessage)) {
    throw new Error('Expected argument of type SecretMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SecretMessage(buffer_arg) {
  return handshake_pb.SecretMessage.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_TradeProposeReply(arg) {
  if (!(arg instanceof trade_pb.TradeProposeReply)) {
    throw new Error('Expected argument of type TradeProposeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeProposeReply(buffer_arg) {
  return trade_pb.TradeProposeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TradeProposeRequest(arg) {
  if (!(arg instanceof trade_pb.TradeProposeRequest)) {
    throw new Error('Expected argument of type TradeProposeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TradeProposeRequest(buffer_arg) {
  return trade_pb.TradeProposeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradeService = exports.TradeService = {
  // Handshake
connect: {
    path: '/Trade/Connect',
    requestStream: false,
    responseStream: false,
    requestType: handshake_pb.Init,
    responseType: handshake_pb.Ack,
    requestSerialize: serialize_Init,
    requestDeserialize: deserialize_Init,
    responseSerialize: serialize_Ack,
    responseDeserialize: deserialize_Ack,
  },
  // Trader interface
markets: {
    path: '/Trade/Markets',
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
    path: '/Trade/Balances',
    requestStream: false,
    responseStream: false,
    requestType: trade_pb.BalancesRequest,
    responseType: trade_pb.BalancesReply,
    requestSerialize: serialize_BalancesRequest,
    requestDeserialize: deserialize_BalancesRequest,
    responseSerialize: serialize_BalancesReply,
    responseDeserialize: deserialize_BalancesReply,
  },
  marketPrice: {
    path: '/Trade/MarketPrice',
    requestStream: false,
    responseStream: false,
    requestType: trade_pb.MarketPriceRequest,
    responseType: trade_pb.MarketPriceReply,
    requestSerialize: serialize_MarketPriceRequest,
    requestDeserialize: deserialize_MarketPriceRequest,
    responseSerialize: serialize_MarketPriceReply,
    responseDeserialize: deserialize_MarketPriceReply,
  },
  tradePropose: {
    path: '/Trade/TradePropose',
    requestStream: false,
    responseStream: true,
    requestType: trade_pb.TradeProposeRequest,
    responseType: trade_pb.TradeProposeReply,
    requestSerialize: serialize_TradeProposeRequest,
    requestDeserialize: deserialize_TradeProposeRequest,
    responseSerialize: serialize_TradeProposeReply,
    responseDeserialize: deserialize_TradeProposeReply,
  },
  tradeComplete: {
    path: '/Trade/TradeComplete',
    requestStream: false,
    responseStream: true,
    requestType: trade_pb.TradeCompleteRequest,
    responseType: trade_pb.TradeCompleteReply,
    requestSerialize: serialize_TradeCompleteRequest,
    requestDeserialize: deserialize_TradeCompleteRequest,
    responseSerialize: serialize_TradeCompleteReply,
    responseDeserialize: deserialize_TradeCompleteReply,
  },
  // Encrypted RPCs
unarySecret: {
    path: '/Trade/UnarySecret',
    requestStream: false,
    responseStream: false,
    requestType: handshake_pb.SecretMessage,
    responseType: handshake_pb.SecretMessage,
    requestSerialize: serialize_SecretMessage,
    requestDeserialize: deserialize_SecretMessage,
    responseSerialize: serialize_SecretMessage,
    responseDeserialize: deserialize_SecretMessage,
  },
  streamSecret: {
    path: '/Trade/StreamSecret',
    requestStream: false,
    responseStream: true,
    requestType: handshake_pb.SecretMessage,
    responseType: handshake_pb.SecretMessage,
    requestSerialize: serialize_SecretMessage,
    requestDeserialize: deserialize_SecretMessage,
    responseSerialize: serialize_SecretMessage,
    responseDeserialize: deserialize_SecretMessage,
  },
};

exports.TradeClient = grpc.makeGenericClientConstructor(TradeService);
