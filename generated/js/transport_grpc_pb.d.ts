// package: 
// file: transport.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as transport_pb from "./transport_pb";

interface ITransportService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    supportedContentTypes: ITransportService_ISupportedContentTypes;
}

interface ITransportService_ISupportedContentTypes extends grpc.MethodDefinition<transport_pb.SupportedContentTypesRequest, transport_pb.SupportedContentTypesReply> {
    path: "/Transport/SupportedContentTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transport_pb.SupportedContentTypesRequest>;
    requestDeserialize: grpc.deserialize<transport_pb.SupportedContentTypesRequest>;
    responseSerialize: grpc.serialize<transport_pb.SupportedContentTypesReply>;
    responseDeserialize: grpc.deserialize<transport_pb.SupportedContentTypesReply>;
}

export const TransportService: ITransportService;

export interface ITransportServer {
    supportedContentTypes: grpc.handleUnaryCall<transport_pb.SupportedContentTypesRequest, transport_pb.SupportedContentTypesReply>;
}

export interface ITransportClient {
    supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
    supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
    supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
}

export class TransportClient extends grpc.Client implements ITransportClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
    public supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
    public supportedContentTypes(request: transport_pb.SupportedContentTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transport_pb.SupportedContentTypesReply) => void): grpc.ClientUnaryCall;
}
