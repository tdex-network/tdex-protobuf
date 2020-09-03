// package: 
// file: handshake.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as handshake_pb from "./handshake_pb";

interface IHandshakeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    info: IHandshakeService_IInfo;
    connect: IHandshakeService_IConnect;
    unarySecret: IHandshakeService_IUnarySecret;
    streamSecret: IHandshakeService_IStreamSecret;
}

interface IHandshakeService_IInfo extends grpc.MethodDefinition<handshake_pb.InfoRequest, handshake_pb.InfoReply> {
    path: string; // "/.Handshake/Info"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<handshake_pb.InfoRequest>;
    requestDeserialize: grpc.deserialize<handshake_pb.InfoRequest>;
    responseSerialize: grpc.serialize<handshake_pb.InfoReply>;
    responseDeserialize: grpc.deserialize<handshake_pb.InfoReply>;
}
interface IHandshakeService_IConnect extends grpc.MethodDefinition<handshake_pb.Init, handshake_pb.Ack> {
    path: string; // "/.Handshake/Connect"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<handshake_pb.Init>;
    requestDeserialize: grpc.deserialize<handshake_pb.Init>;
    responseSerialize: grpc.serialize<handshake_pb.Ack>;
    responseDeserialize: grpc.deserialize<handshake_pb.Ack>;
}
interface IHandshakeService_IUnarySecret extends grpc.MethodDefinition<handshake_pb.SecretMessage, handshake_pb.SecretMessage> {
    path: string; // "/.Handshake/UnarySecret"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    requestDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
    responseSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    responseDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
}
interface IHandshakeService_IStreamSecret extends grpc.MethodDefinition<handshake_pb.SecretMessage, handshake_pb.SecretMessage> {
    path: string; // "/.Handshake/StreamSecret"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    requestDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
    responseSerialize: grpc.serialize<handshake_pb.SecretMessage>;
    responseDeserialize: grpc.deserialize<handshake_pb.SecretMessage>;
}

export const HandshakeService: IHandshakeService;

export interface IHandshakeServer {
    info: grpc.handleUnaryCall<handshake_pb.InfoRequest, handshake_pb.InfoReply>;
    connect: grpc.handleUnaryCall<handshake_pb.Init, handshake_pb.Ack>;
    unarySecret: grpc.handleUnaryCall<handshake_pb.SecretMessage, handshake_pb.SecretMessage>;
    streamSecret: grpc.handleServerStreamingCall<handshake_pb.SecretMessage, handshake_pb.SecretMessage>;
}

export interface IHandshakeClient {
    info(request: handshake_pb.InfoRequest, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    info(request: handshake_pb.InfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    info(request: handshake_pb.InfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    connect(request: handshake_pb.Init, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    connect(request: handshake_pb.Init, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    connect(request: handshake_pb.Init, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    unarySecret(request: handshake_pb.SecretMessage, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    streamSecret(request: handshake_pb.SecretMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
    streamSecret(request: handshake_pb.SecretMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
}

export class HandshakeClient extends grpc.Client implements IHandshakeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public info(request: handshake_pb.InfoRequest, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    public info(request: handshake_pb.InfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    public info(request: handshake_pb.InfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.InfoReply) => void): grpc.ClientUnaryCall;
    public connect(request: handshake_pb.Init, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public connect(request: handshake_pb.Init, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public connect(request: handshake_pb.Init, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.Ack) => void): grpc.ClientUnaryCall;
    public unarySecret(request: handshake_pb.SecretMessage, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public unarySecret(request: handshake_pb.SecretMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: handshake_pb.SecretMessage) => void): grpc.ClientUnaryCall;
    public streamSecret(request: handshake_pb.SecretMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
    public streamSecret(request: handshake_pb.SecretMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<handshake_pb.SecretMessage>;
}
