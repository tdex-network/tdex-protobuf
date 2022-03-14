// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var v2_transport_pb = require('../v2/transport_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_tdextrade_v2_SupportedContentTypesReply(arg) {
  if (!(arg instanceof v2_transport_pb.SupportedContentTypesReply)) {
    throw new Error('Expected argument of type tdextrade.v2.SupportedContentTypesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_SupportedContentTypesReply(buffer_arg) {
  return v2_transport_pb.SupportedContentTypesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tdextrade_v2_SupportedContentTypesRequest(arg) {
  if (!(arg instanceof v2_transport_pb.SupportedContentTypesRequest)) {
    throw new Error('Expected argument of type tdextrade.v2.SupportedContentTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tdextrade_v2_SupportedContentTypesRequest(buffer_arg) {
  return v2_transport_pb.SupportedContentTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
var TransportService = exports.TransportService = {
  supportedContentTypes: {
    path: '/tdextrade.v2.Transport/SupportedContentTypes',
    requestStream: false,
    responseStream: false,
    requestType: v2_transport_pb.SupportedContentTypesRequest,
    responseType: v2_transport_pb.SupportedContentTypesReply,
    requestSerialize: serialize_tdextrade_v2_SupportedContentTypesRequest,
    requestDeserialize: deserialize_tdextrade_v2_SupportedContentTypesRequest,
    responseSerialize: serialize_tdextrade_v2_SupportedContentTypesReply,
    responseDeserialize: deserialize_tdextrade_v2_SupportedContentTypesReply,
  },
};

exports.TransportClient = grpc.makeGenericClientConstructor(TransportService);
