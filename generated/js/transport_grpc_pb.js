// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transport_pb = require('./transport_pb.js');

function serialize_SupportedContentTypesReply(arg) {
  if (!(arg instanceof transport_pb.SupportedContentTypesReply)) {
    throw new Error('Expected argument of type SupportedContentTypesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SupportedContentTypesReply(buffer_arg) {
  return transport_pb.SupportedContentTypesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SupportedContentTypesRequest(arg) {
  if (!(arg instanceof transport_pb.SupportedContentTypesRequest)) {
    throw new Error('Expected argument of type SupportedContentTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SupportedContentTypesRequest(buffer_arg) {
  return transport_pb.SupportedContentTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
var TransportService = exports.TransportService = {
  supportedContentTypes: {
    path: '/Transport/SupportedContentTypes',
    requestStream: false,
    responseStream: false,
    requestType: transport_pb.SupportedContentTypesRequest,
    responseType: transport_pb.SupportedContentTypesReply,
    requestSerialize: serialize_SupportedContentTypesRequest,
    requestDeserialize: deserialize_SupportedContentTypesRequest,
    responseSerialize: serialize_SupportedContentTypesReply,
    responseDeserialize: deserialize_SupportedContentTypesReply,
  },
};

exports.TransportClient = grpc.makeGenericClientConstructor(TransportService);
