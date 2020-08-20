// package: 
// file: operator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as operator_pb from "./operator_pb";
import * as types_pb from "./types_pb";

interface IOperatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    depositAddress: IOperatorService_IDepositAddress;
    listDepositAddress: IOperatorService_IListDepositAddress;
    feeDepositAddress: IOperatorService_IFeeDepositAddress;
    feeBalance: IOperatorService_IFeeBalance;
    openMarket: IOperatorService_IOpenMarket;
    closeMarket: IOperatorService_ICloseMarket;
    updateFee: IOperatorService_IUpdateFee;
}

interface IOperatorService_IDepositAddress extends grpc.MethodDefinition<operator_pb.DepositAddressRequest, operator_pb.DepositAddressReply> {
    path: string; // "/.Operator/DepositAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DepositAddressRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositAddressRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositAddressReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositAddressReply>;
}
interface IOperatorService_IListDepositAddress extends grpc.MethodDefinition<operator_pb.ListDepositAddressRequest, operator_pb.ListDepositAddressReply> {
    path: string; // "/.Operator/ListDepositAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListDepositAddressRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListDepositAddressRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListDepositAddressReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListDepositAddressReply>;
}
interface IOperatorService_IFeeDepositAddress extends grpc.MethodDefinition<operator_pb.FeeDepositAddressRequest, operator_pb.FeeDepositAddressReply> {
    path: string; // "/.Operator/FeeDepositAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.FeeDepositAddressRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.FeeDepositAddressRequest>;
    responseSerialize: grpc.serialize<operator_pb.FeeDepositAddressReply>;
    responseDeserialize: grpc.deserialize<operator_pb.FeeDepositAddressReply>;
}
interface IOperatorService_IFeeBalance extends grpc.MethodDefinition<operator_pb.FeeBalanceRequest, operator_pb.FeeBalanceReply> {
    path: string; // "/.Operator/FeeBalance"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.FeeBalanceRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.FeeBalanceRequest>;
    responseSerialize: grpc.serialize<operator_pb.FeeBalanceReply>;
    responseDeserialize: grpc.deserialize<operator_pb.FeeBalanceReply>;
}
interface IOperatorService_IOpenMarket extends grpc.MethodDefinition<operator_pb.OpenMarketRequest, operator_pb.OpenMarketReply> {
    path: string; // "/.Operator/OpenMarket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.OpenMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.OpenMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.OpenMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.OpenMarketReply>;
}
interface IOperatorService_ICloseMarket extends grpc.MethodDefinition<operator_pb.CloseMarketRequest, operator_pb.CloseMarketReply> {
    path: string; // "/.Operator/CloseMarket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.CloseMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.CloseMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.CloseMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.CloseMarketReply>;
}
interface IOperatorService_IUpdateFee extends grpc.MethodDefinition<operator_pb.UpdateFeeRequest, operator_pb.UpdateFeeReply> {
    path: string; // "/.Operator/UpdateFee"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateFeeRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateFeeRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateFeeReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateFeeReply>;
}

export const OperatorService: IOperatorService;

export interface IOperatorServer {
    depositAddress: grpc.handleUnaryCall<operator_pb.DepositAddressRequest, operator_pb.DepositAddressReply>;
    listDepositAddress: grpc.handleUnaryCall<operator_pb.ListDepositAddressRequest, operator_pb.ListDepositAddressReply>;
    feeDepositAddress: grpc.handleUnaryCall<operator_pb.FeeDepositAddressRequest, operator_pb.FeeDepositAddressReply>;
    feeBalance: grpc.handleUnaryCall<operator_pb.FeeBalanceRequest, operator_pb.FeeBalanceReply>;
    openMarket: grpc.handleUnaryCall<operator_pb.OpenMarketRequest, operator_pb.OpenMarketReply>;
    closeMarket: grpc.handleUnaryCall<operator_pb.CloseMarketRequest, operator_pb.CloseMarketReply>;
    updateFee: grpc.handleUnaryCall<operator_pb.UpdateFeeRequest, operator_pb.UpdateFeeReply>;
}

export interface IOperatorClient {
    depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    listDepositAddress(request: operator_pb.ListDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    listDepositAddress(request: operator_pb.ListDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    listDepositAddress(request: operator_pb.ListDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    updateFee(request: operator_pb.UpdateFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
    updateFee(request: operator_pb.UpdateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
    updateFee(request: operator_pb.UpdateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
}

export class OperatorClient extends grpc.Client implements IOperatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public depositAddress(request: operator_pb.DepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public depositAddress(request: operator_pb.DepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositAddressReply) => void): grpc.ClientUnaryCall;
    public listDepositAddress(request: operator_pb.ListDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    public listDepositAddress(request: operator_pb.ListDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    public listDepositAddress(request: operator_pb.ListDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeDepositAddress(request: operator_pb.FeeDepositAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeDepositAddressReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    public feeBalance(request: operator_pb.FeeBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.FeeBalanceReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public updateFee(request: operator_pb.UpdateFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
    public updateFee(request: operator_pb.UpdateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
    public updateFee(request: operator_pb.UpdateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateFeeReply) => void): grpc.ClientUnaryCall;
}
