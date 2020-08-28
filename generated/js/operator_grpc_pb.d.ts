// package: 
// file: operator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as operator_pb from "./operator_pb";
import * as types_pb from "./types_pb";

interface IOperatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    depositMarket: IOperatorService_IDepositMarket;
    listDepositMarket: IOperatorService_IListDepositMarket;
    depositFeeAccount: IOperatorService_IDepositFeeAccount;
    balanceFeeAccount: IOperatorService_IBalanceFeeAccount;
    openMarket: IOperatorService_IOpenMarket;
    closeMarket: IOperatorService_ICloseMarket;
    updateMarketPrice: IOperatorService_IUpdateMarketPrice;
    updateMarketFee: IOperatorService_IUpdateMarketFee;
    withdrawMarket: IOperatorService_IWithdrawMarket;
    listSwaps: IOperatorService_IListSwaps;
    reportMarketFee: IOperatorService_IReportMarketFee;
}

interface IOperatorService_IDepositMarket extends grpc.MethodDefinition<operator_pb.DepositMarketRequest, operator_pb.DepositMarketReply> {
    path: string; // "/.Operator/DepositMarket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DepositMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositMarketReply>;
}
interface IOperatorService_IListDepositMarket extends grpc.MethodDefinition<operator_pb.ListDepositMarketRequest, operator_pb.ListDepositMarketReply> {
    path: string; // "/.Operator/ListDepositMarket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListDepositMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListDepositMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListDepositMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListDepositMarketReply>;
}
interface IOperatorService_IDepositFeeAccount extends grpc.MethodDefinition<operator_pb.DepositFeeAccountRequest, operator_pb.DepositFeeAccountReply> {
    path: string; // "/.Operator/DepositFeeAccount"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DepositFeeAccountRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositFeeAccountRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositFeeAccountReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositFeeAccountReply>;
}
interface IOperatorService_IBalanceFeeAccount extends grpc.MethodDefinition<operator_pb.BalanceFeeAccountRequest, operator_pb.BalanceFeeAccountReply> {
    path: string; // "/.Operator/BalanceFeeAccount"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.BalanceFeeAccountRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.BalanceFeeAccountRequest>;
    responseSerialize: grpc.serialize<operator_pb.BalanceFeeAccountReply>;
    responseDeserialize: grpc.deserialize<operator_pb.BalanceFeeAccountReply>;
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
interface IOperatorService_IUpdateMarketPrice extends grpc.MethodDefinition<operator_pb.UpdateMarketPriceRequest, operator_pb.UpdateMarketPriceReply> {
    path: string; // "/.Operator/UpdateMarketPrice"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateMarketPriceRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateMarketPriceRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateMarketPriceReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateMarketPriceReply>;
}
interface IOperatorService_IUpdateMarketFee extends grpc.MethodDefinition<operator_pb.UpdateMarketFeeRequest, operator_pb.UpdateMarketFeeReply> {
    path: string; // "/.Operator/UpdateMarketFee"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateMarketFeeRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateMarketFeeRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateMarketFeeReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateMarketFeeReply>;
}
interface IOperatorService_IWithdrawMarket extends grpc.MethodDefinition<operator_pb.WithdrawMarketRequest, operator_pb.WithdrawMarketReply> {
    path: string; // "/.Operator/WithdrawMarket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.WithdrawMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.WithdrawMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.WithdrawMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.WithdrawMarketReply>;
}
interface IOperatorService_IListSwaps extends grpc.MethodDefinition<operator_pb.ListSwapsRequest, operator_pb.ListSwapsReply> {
    path: string; // "/.Operator/ListSwaps"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListSwapsRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListSwapsRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListSwapsReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListSwapsReply>;
}
interface IOperatorService_IReportMarketFee extends grpc.MethodDefinition<operator_pb.ReportMarketFeeRequest, operator_pb.ReportMarketFeeReply> {
    path: string; // "/.Operator/ReportMarketFee"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ReportMarketFeeRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ReportMarketFeeRequest>;
    responseSerialize: grpc.serialize<operator_pb.ReportMarketFeeReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ReportMarketFeeReply>;
}

export const OperatorService: IOperatorService;

export interface IOperatorServer {
    depositMarket: grpc.handleUnaryCall<operator_pb.DepositMarketRequest, operator_pb.DepositMarketReply>;
    listDepositMarket: grpc.handleUnaryCall<operator_pb.ListDepositMarketRequest, operator_pb.ListDepositMarketReply>;
    depositFeeAccount: grpc.handleUnaryCall<operator_pb.DepositFeeAccountRequest, operator_pb.DepositFeeAccountReply>;
    balanceFeeAccount: grpc.handleUnaryCall<operator_pb.BalanceFeeAccountRequest, operator_pb.BalanceFeeAccountReply>;
    openMarket: grpc.handleUnaryCall<operator_pb.OpenMarketRequest, operator_pb.OpenMarketReply>;
    closeMarket: grpc.handleUnaryCall<operator_pb.CloseMarketRequest, operator_pb.CloseMarketReply>;
    updateMarketPrice: grpc.handleUnaryCall<operator_pb.UpdateMarketPriceRequest, operator_pb.UpdateMarketPriceReply>;
    updateMarketFee: grpc.handleUnaryCall<operator_pb.UpdateMarketFeeRequest, operator_pb.UpdateMarketFeeReply>;
    withdrawMarket: grpc.handleUnaryCall<operator_pb.WithdrawMarketRequest, operator_pb.WithdrawMarketReply>;
    listSwaps: grpc.handleUnaryCall<operator_pb.ListSwapsRequest, operator_pb.ListSwapsReply>;
    reportMarketFee: grpc.handleUnaryCall<operator_pb.ReportMarketFeeRequest, operator_pb.ReportMarketFeeReply>;
}

export interface IOperatorClient {
    depositMarket(request: operator_pb.DepositMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    depositMarket(request: operator_pb.DepositMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    depositMarket(request: operator_pb.DepositMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    listDepositMarket(request: operator_pb.ListDepositMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    listDepositMarket(request: operator_pb.ListDepositMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    listDepositMarket(request: operator_pb.ListDepositMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    listSwaps(request: operator_pb.ListSwapsRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    listSwaps(request: operator_pb.ListSwapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    listSwaps(request: operator_pb.ListSwapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
}

export class OperatorClient extends grpc.Client implements IOperatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public depositMarket(request: operator_pb.DepositMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    public depositMarket(request: operator_pb.DepositMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    public depositMarket(request: operator_pb.DepositMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositMarketReply) => void): grpc.ClientUnaryCall;
    public listDepositMarket(request: operator_pb.ListDepositMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    public listDepositMarket(request: operator_pb.ListDepositMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    public listDepositMarket(request: operator_pb.ListDepositMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListDepositMarketReply) => void): grpc.ClientUnaryCall;
    public depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    public depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    public depositFeeAccount(request: operator_pb.DepositFeeAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DepositFeeAccountReply) => void): grpc.ClientUnaryCall;
    public balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    public balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    public balanceFeeAccount(request: operator_pb.BalanceFeeAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.BalanceFeeAccountReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public listSwaps(request: operator_pb.ListSwapsRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    public listSwaps(request: operator_pb.ListSwapsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    public listSwaps(request: operator_pb.ListSwapsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListSwapsReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
}
