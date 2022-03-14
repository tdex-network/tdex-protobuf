// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var v2_trade_pb = require('../v2/trade_pb.js');
var v2_swap_pb = require('../v2/swap_pb.js');
var v2_types_pb = require('../v2/types_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_tdextrade_v2_BalancesReply(arg) {
  if (!(arg instanceof v2_trade_pb.BalancesReply)) {
    throw new Error('Expected argument of type tdextrade.v2.BalancesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_BalancesReply(buffer_arg) {
  return v2_trade_pb.BalancesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_BalancesRequest(arg) {
  if (!(arg instanceof v2_trade_pb.BalancesRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.BalancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_BalancesRequest(buffer_arg) {
  return v2_trade_pb.BalancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_CompleteTradeReply(arg) {
  if (!(arg instanceof v2_trade_pb.CompleteTradeReply)) {
    throw new Error('Expected argument of type tdextrade.v2.CompleteTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_CompleteTradeReply(buffer_arg) {
  return v2_trade_pb.CompleteTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_CompleteTradeRequest(arg) {
  if (!(arg instanceof v2_trade_pb.CompleteTradeRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.CompleteTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_CompleteTradeRequest(buffer_arg) {
  return v2_trade_pb.CompleteTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_MarketPriceReply(arg) {
  if (!(arg instanceof v2_trade_pb.MarketPriceReply)) {
    throw new Error('Expected argument of type tdextrade.v2.MarketPriceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_MarketPriceReply(buffer_arg) {
  return v2_trade_pb.MarketPriceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_MarketPriceRequest(arg) {
  if (!(arg instanceof v2_trade_pb.MarketPriceRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.MarketPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_MarketPriceRequest(buffer_arg) {
  return v2_trade_pb.MarketPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_MarketsReply(arg) {
  if (!(arg instanceof v2_trade_pb.MarketsReply)) {
    throw new Error('Expected argument of type tdextrade.v2.MarketsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_MarketsReply(buffer_arg) {
  return v2_trade_pb.MarketsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_MarketsRequest(arg) {
  if (!(arg instanceof v2_trade_pb.MarketsRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.MarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_MarketsRequest(buffer_arg) {
  return v2_trade_pb.MarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_ProposeTradeReply(arg) {
  if (!(arg instanceof v2_trade_pb.ProposeTradeReply)) {
    throw new Error('Expected argument of type tdextrade.v2.ProposeTradeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_ProposeTradeReply(buffer_arg) {
  return v2_trade_pb.ProposeTradeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_ProposeTradeRequest(arg) {
  if (!(arg instanceof v2_trade_pb.ProposeTradeRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.ProposeTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_ProposeTradeRequest(buffer_arg) {
  return v2_trade_pb.ProposeTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_TradeCompleteReply(arg) {
  if (!(arg instanceof v2_trade_pb.TradeCompleteReply)) {
    throw new Error('Expected argument of type tdextrade.v2.TradeCompleteReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_TradeCompleteReply(buffer_arg) {
  return v2_trade_pb.TradeCompleteReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_TradeCompleteRequest(arg) {
  if (!(arg instanceof v2_trade_pb.TradeCompleteRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.TradeCompleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_TradeCompleteRequest(buffer_arg) {
  return v2_trade_pb.TradeCompleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_TradeProposeReply(arg) {
  if (!(arg instanceof v2_trade_pb.TradeProposeReply)) {
    throw new Error('Expected argument of type tdextrade.v2.TradeProposeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_TradeProposeReply(buffer_arg) {
  return v2_trade_pb.TradeProposeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_TradeProposeRequest(arg) {
  if (!(arg instanceof v2_trade_pb.TradeProposeRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.TradeProposeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_TradeProposeRequest(buffer_arg) {
  return v2_trade_pb.TradeProposeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradeService = exports.TradeService = {
  // Markets: List all the markets open for trading.
markets: {
    path: '/tdextrade.v2.Trade/Markets',
    requestStream: false,
    responseStream: false,
    requestType: v2_trade_pb.MarketsRequest,
    responseType: v2_trade_pb.MarketsReply,
    requestSerialize: serialize_tdextrade_v2_MarketsRequest,
    requestDeserialize: deserialize_tdextrade_v2_MarketsRequest,
    responseSerialize: serialize_tdextrade_v2_MarketsReply,
    responseDeserialize: deserialize_tdextrade_v2_MarketsReply,
  },
  // Balances: Gets the balances of the two current reserves in the given
// market.
balances: {
    path: '/tdextrade.v2.Trade/Balances',
    requestStream: false,
    responseStream: false,
    requestType: v2_trade_pb.BalancesRequest,
    responseType: v2_trade_pb.BalancesReply,
    requestSerialize: serialize_tdextrade_v2_BalancesRequest,
    requestDeserialize: deserialize_tdextrade_v2_BalancesRequest,
    responseSerialize: serialize_tdextrade_v2_BalancesReply,
    responseDeserialize: deserialize_tdextrade_v2_BalancesReply,
  },
  // MarketPrice: Gets the current market price. In case of AMM startegy, the
// trade type and
// the amount of asset to be either sent or received.
//
// BUY = quote asset as input
// SELL = base asset as input
//
// If the type of the trade is BUY it means the base asset will be received by
// the trader.
//
// If the type of the trade is SELL it means the base asset will be sent by
// the trader.
marketPrice: {
    path: '/tdextrade.v2.Trade/MarketPrice',
    requestStream: false,
    responseStream: false,
    requestType: v2_trade_pb.MarketPriceRequest,
    responseType: v2_trade_pb.MarketPriceReply,
    requestSerialize: serialize_tdextrade_v2_MarketPriceRequest,
    requestDeserialize: deserialize_tdextrade_v2_MarketPriceRequest,
    responseSerialize: serialize_tdextrade_v2_MarketPriceReply,
    responseDeserialize: deserialize_tdextrade_v2_MarketPriceReply,
  },
  // DEPRECATED TradePropose: Sends a swap request message containing a partial signed
// transaction.
//
// BUY = quote asset as input
// SELL = base asset as input
//
//
// If the type of the trade is BUY it means the base asset will be received by
// the trader.
//
// If the type of the trade is SELL it means the base asset will be sent by
// the trader.
tradePropose: {
    path: '/tdextrade.v2.Trade/TradePropose',
    requestStream: false,
    responseStream: true,
    requestType: v2_trade_pb.TradeProposeRequest,
    responseType: v2_trade_pb.TradeProposeReply,
    requestSerialize: serialize_tdextrade_v2_TradeProposeRequest,
    requestDeserialize: deserialize_tdextrade_v2_TradeProposeRequest,
    responseSerialize: serialize_tdextrade_v2_TradeProposeReply,
    responseDeserialize: deserialize_tdextrade_v2_TradeProposeReply,
  },
  // Unary RPC for TradePropose.
proposeTrade: {
    path: '/tdextrade.v2.Trade/ProposeTrade',
    requestStream: false,
    responseStream: false,
    requestType: v2_trade_pb.ProposeTradeRequest,
    responseType: v2_trade_pb.ProposeTradeReply,
    requestSerialize: serialize_tdextrade_v2_ProposeTradeRequest,
    requestDeserialize: deserialize_tdextrade_v2_ProposeTradeRequest,
    responseSerialize: serialize_tdextrade_v2_ProposeTradeReply,
    responseDeserialize: deserialize_tdextrade_v2_ProposeTradeReply,
  },
  // DEPRECATED TradeComplete: Sends the trader's counter-signed transaction to the
// provider. If something wrong, a swap fail message is sent. It returns the
// transaction hash of the broadcasted transaction.
tradeComplete: {
    path: '/tdextrade.v2.Trade/TradeComplete',
    requestStream: false,
    responseStream: true,
    requestType: v2_trade_pb.TradeCompleteRequest,
    responseType: v2_trade_pb.TradeCompleteReply,
    requestSerialize: serialize_tdextrade_v2_TradeCompleteRequest,
    requestDeserialize: deserialize_tdextrade_v2_TradeCompleteRequest,
    responseSerialize: serialize_tdextrade_v2_TradeCompleteReply,
    responseDeserialize: deserialize_tdextrade_v2_TradeCompleteReply,
  },
  // Unary RPC for TradeComplete.
completeTrade: {
    path: '/tdextrade.v2.Trade/CompleteTrade',
    requestStream: false,
    responseStream: false,
    requestType: v2_trade_pb.CompleteTradeRequest,
    responseType: v2_trade_pb.CompleteTradeReply,
    requestSerialize: serialize_tdextrade_v2_CompleteTradeRequest,
    requestDeserialize: deserialize_tdextrade_v2_CompleteTradeRequest,
    responseSerialize: serialize_tdextrade_v2_CompleteTradeReply,
    responseDeserialize: deserialize_tdextrade_v2_CompleteTradeReply,
  },
};

exports.TradeClient = grpc.makeGenericClientConstructor(TradeService);
