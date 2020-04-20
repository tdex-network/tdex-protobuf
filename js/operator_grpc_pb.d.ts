// package: 
// file: operator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as operator_pb from "./operator_pb";

interface IOperatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    depositAddress: IOperatorService_IDepositAddress;
}

interface IOperatorService_IDepositAddress extends grpc.MethodDefinition<operator_pb.DepositAddressRequest, operator_pb.DepositAddressReply> {
    path: string; // "/.Operator/DepositAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<operator_pb.DepositAddressRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositAddressRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositAddressReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositAddressReply>;
}

export const OperatorService: IOperatorService;

export interface IOperatorServer {
    depositAddress: grpc.handleUnaryCall<operator_pb.DepositAddressRequest, operator_pb.DepositAddressReply>;
}

export interface IOperatorClient {
    depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
}

export class OperatorClient extends grpc.Client implements IOperatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
}
