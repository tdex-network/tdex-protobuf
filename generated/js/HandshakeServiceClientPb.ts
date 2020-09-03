/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  Ack,
  InfoReply,
  InfoRequest,
  Init,
  SecretMessage} from './handshake_pb';

export class HandshakeClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    InfoReply,
    (request: InfoRequest) => {
      return request.serializeBinary();
    },
    InfoReply.deserializeBinary
  );

  info(
    request: InfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<InfoReply>;

  info(
    request: InfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InfoReply) => void): grpcWeb.ClientReadableStream<InfoReply>;

  info(
    request: InfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: InfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Handshake/Info', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Handshake/Info',
    request,
    metadata || {},
    this.methodInfoInfo);
  }

  methodInfoConnect = new grpcWeb.AbstractClientBase.MethodInfo(
    Ack,
    (request: Init) => {
      return request.serializeBinary();
    },
    Ack.deserializeBinary
  );

  connect(
    request: Init,
    metadata: grpcWeb.Metadata | null): Promise<Ack>;

  connect(
    request: Init,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Ack) => void): grpcWeb.ClientReadableStream<Ack>;

  connect(
    request: Init,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: Ack) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Handshake/Connect', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoConnect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Handshake/Connect',
    request,
    metadata || {},
    this.methodInfoConnect);
  }

  methodInfoUnarySecret = new grpcWeb.AbstractClientBase.MethodInfo(
    SecretMessage,
    (request: SecretMessage) => {
      return request.serializeBinary();
    },
    SecretMessage.deserializeBinary
  );

  unarySecret(
    request: SecretMessage,
    metadata: grpcWeb.Metadata | null): Promise<SecretMessage>;

  unarySecret(
    request: SecretMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SecretMessage) => void): grpcWeb.ClientReadableStream<SecretMessage>;

  unarySecret(
    request: SecretMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: SecretMessage) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Handshake/UnarySecret', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUnarySecret,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Handshake/UnarySecret',
    request,
    metadata || {},
    this.methodInfoUnarySecret);
  }

  methodInfoStreamSecret = new grpcWeb.AbstractClientBase.MethodInfo(
    SecretMessage,
    (request: SecretMessage) => {
      return request.serializeBinary();
    },
    SecretMessage.deserializeBinary
  );

  streamSecret(
    request: SecretMessage,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/Handshake/StreamSecret', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoStreamSecret);
  }

}

