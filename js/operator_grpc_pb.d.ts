// package: 
// file: operator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as operator_pb from "./operator_pb";

interface IOperatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    depositAddress: IOperatorService_IDepositAddress;
    feeDepositAddress: IOperatorService_IFeeDepositAddress;
    feeBalance: IOperatorService_IFeeBalance;
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
interface IOperatorService_IFeeDepositAddress extends grpc.MethodDefinition<operator_pb.FeeDepositAddressRequest, operator_pb.FeeDepositAddressReply> {
    path: string; // "/.Operator/FeeDepositAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<operator_pb.FeeDepositAddressRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.FeeDepositAddressRequest>;
    responseSerialize: grpc.serialize<operator_pb.FeeDepositAddressReply>;
    responseDeserialize: grpc.deserialize<operator_pb.FeeDepositAddressReply>;
}
interface IOperatorService_IFeeBalance extends grpc.MethodDefinition<operator_pb.FeeBalanceRequest, operator_pb.FeeBalanceReply> {
    path: string; // "/.Operator/FeeBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<operator_pb.FeeBalanceRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.FeeBalanceRequest>;
    responseSerialize: grpc.serialize<operator_pb.FeeBalanceReply>;
    responseDeserialize: grpc.deserialize<operator_pb.FeeBalanceReply>;
}

export const OperatorService: IOperatorService;

export interface IOperatorServer {
    depositAddress: grpc.handleUnaryCall<operator_pb.DepositAddressRequest, operator_pb.DepositAddressReply>;
    feeDepositAddress: grpc.handleUnaryCall<operator_pb.FeeDepositAddressRequest, operator_pb.FeeDepositAddressReply>;
    feeBalance: grpc.handleUnaryCall<operator_pb.FeeBalanceRequest, operator_pb.FeeBalanceReply>;
}

export interface IOperatorClient {
    depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
}

export class OperatorClient extends grpc.Client implements IOperatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
}
