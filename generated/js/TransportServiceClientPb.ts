/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as transport_pb from './transport_pb';


export class TransportClient {
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

  methodInfoSupportedContentTypes = new grpcWeb.AbstractClientBase.MethodInfo(
    transport_pb.SupportedContentTypesReply,
    (request: transport_pb.SupportedContentTypesRequest) => {
      return request.serializeBinary();
    },
    transport_pb.SupportedContentTypesReply.deserializeBinary
  );

  supportedContentTypes(
    request: transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<transport_pb.SupportedContentTypesReply>;

  supportedContentTypes(
    request: transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: transport_pb.SupportedContentTypesReply) => void): grpcWeb.ClientReadableStream<transport_pb.SupportedContentTypesReply>;

  supportedContentTypes(
    request: transport_pb.SupportedContentTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: transport_pb.SupportedContentTypesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Transport/SupportedContentTypes',
        request,
        metadata || {},
        this.methodInfoSupportedContentTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Transport/SupportedContentTypes',
    request,
    metadata || {},
    this.methodInfoSupportedContentTypes);
  }

}

