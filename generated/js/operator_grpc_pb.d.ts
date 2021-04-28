// package: 
// file: operator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as operator_pb from "./operator_pb";
import * as types_pb from "./types_pb";

interface IOperatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    depositMarket: IOperatorService_IDepositMarket;
    listDepositMarket: IOperatorService_IListDepositMarket;
    depositFeeAccount: IOperatorService_IDepositFeeAccount;
    balanceFeeAccount: IOperatorService_IBalanceFeeAccount;
    claimMarketDeposit: IOperatorService_IClaimMarketDeposit;
    claimFeeDeposit: IOperatorService_IClaimFeeDeposit;
    openMarket: IOperatorService_IOpenMarket;
    closeMarket: IOperatorService_ICloseMarket;
    listMarket: IOperatorService_IListMarket;
    updateMarketFee: IOperatorService_IUpdateMarketFee;
    updateMarketPrice: IOperatorService_IUpdateMarketPrice;
    updateMarketStrategy: IOperatorService_IUpdateMarketStrategy;
    withdrawMarket: IOperatorService_IWithdrawMarket;
    listTrades: IOperatorService_IListTrades;
    reportMarketFee: IOperatorService_IReportMarketFee;
    reloadUtxos: IOperatorService_IReloadUtxos;
    listUtxos: IOperatorService_IListUtxos;
    dropMarket: IOperatorService_IDropMarket;
}

interface IOperatorService_IDepositMarket extends grpc.MethodDefinition<operator_pb.DepositMarketRequest, operator_pb.DepositMarketReply> {
    path: "/Operator/DepositMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DepositMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositMarketReply>;
}
interface IOperatorService_IListDepositMarket extends grpc.MethodDefinition<operator_pb.ListDepositMarketRequest, operator_pb.ListDepositMarketReply> {
    path: "/Operator/ListDepositMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListDepositMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListDepositMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListDepositMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListDepositMarketReply>;
}
interface IOperatorService_IDepositFeeAccount extends grpc.MethodDefinition<operator_pb.DepositFeeAccountRequest, operator_pb.DepositFeeAccountReply> {
    path: "/Operator/DepositFeeAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DepositFeeAccountRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DepositFeeAccountRequest>;
    responseSerialize: grpc.serialize<operator_pb.DepositFeeAccountReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DepositFeeAccountReply>;
}
interface IOperatorService_IBalanceFeeAccount extends grpc.MethodDefinition<operator_pb.BalanceFeeAccountRequest, operator_pb.BalanceFeeAccountReply> {
    path: "/Operator/BalanceFeeAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.BalanceFeeAccountRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.BalanceFeeAccountRequest>;
    responseSerialize: grpc.serialize<operator_pb.BalanceFeeAccountReply>;
    responseDeserialize: grpc.deserialize<operator_pb.BalanceFeeAccountReply>;
}
interface IOperatorService_IClaimMarketDeposit extends grpc.MethodDefinition<operator_pb.ClaimMarketDepositRequest, operator_pb.ClaimMarketDepositReply> {
    path: "/Operator/ClaimMarketDeposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ClaimMarketDepositRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ClaimMarketDepositRequest>;
    responseSerialize: grpc.serialize<operator_pb.ClaimMarketDepositReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ClaimMarketDepositReply>;
}
interface IOperatorService_IClaimFeeDeposit extends grpc.MethodDefinition<operator_pb.ClaimFeeDepositRequest, operator_pb.ClaimFeeDepositReply> {
    path: "/Operator/ClaimFeeDeposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ClaimFeeDepositRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ClaimFeeDepositRequest>;
    responseSerialize: grpc.serialize<operator_pb.ClaimFeeDepositReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ClaimFeeDepositReply>;
}
interface IOperatorService_IOpenMarket extends grpc.MethodDefinition<operator_pb.OpenMarketRequest, operator_pb.OpenMarketReply> {
    path: "/Operator/OpenMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.OpenMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.OpenMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.OpenMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.OpenMarketReply>;
}
interface IOperatorService_ICloseMarket extends grpc.MethodDefinition<operator_pb.CloseMarketRequest, operator_pb.CloseMarketReply> {
    path: "/Operator/CloseMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.CloseMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.CloseMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.CloseMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.CloseMarketReply>;
}
interface IOperatorService_IListMarket extends grpc.MethodDefinition<operator_pb.ListMarketRequest, operator_pb.ListMarketReply> {
    path: "/Operator/ListMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListMarketReply>;
}
interface IOperatorService_IUpdateMarketFee extends grpc.MethodDefinition<operator_pb.UpdateMarketFeeRequest, operator_pb.UpdateMarketFeeReply> {
    path: "/Operator/UpdateMarketFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateMarketFeeRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateMarketFeeRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateMarketFeeReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateMarketFeeReply>;
}
interface IOperatorService_IUpdateMarketPrice extends grpc.MethodDefinition<operator_pb.UpdateMarketPriceRequest, operator_pb.UpdateMarketPriceReply> {
    path: "/Operator/UpdateMarketPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateMarketPriceRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateMarketPriceRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateMarketPriceReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateMarketPriceReply>;
}
interface IOperatorService_IUpdateMarketStrategy extends grpc.MethodDefinition<operator_pb.UpdateMarketStrategyRequest, operator_pb.UpdateMarketStrategyReply> {
    path: "/Operator/UpdateMarketStrategy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.UpdateMarketStrategyRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.UpdateMarketStrategyRequest>;
    responseSerialize: grpc.serialize<operator_pb.UpdateMarketStrategyReply>;
    responseDeserialize: grpc.deserialize<operator_pb.UpdateMarketStrategyReply>;
}
interface IOperatorService_IWithdrawMarket extends grpc.MethodDefinition<operator_pb.WithdrawMarketRequest, operator_pb.WithdrawMarketReply> {
    path: "/Operator/WithdrawMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.WithdrawMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.WithdrawMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.WithdrawMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.WithdrawMarketReply>;
}
interface IOperatorService_IListTrades extends grpc.MethodDefinition<operator_pb.ListTradesRequest, operator_pb.ListTradesReply> {
    path: "/Operator/ListTrades";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListTradesRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListTradesRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListTradesReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListTradesReply>;
}
interface IOperatorService_IReportMarketFee extends grpc.MethodDefinition<operator_pb.ReportMarketFeeRequest, operator_pb.ReportMarketFeeReply> {
    path: "/Operator/ReportMarketFee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ReportMarketFeeRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ReportMarketFeeRequest>;
    responseSerialize: grpc.serialize<operator_pb.ReportMarketFeeReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ReportMarketFeeReply>;
}
interface IOperatorService_IReloadUtxos extends grpc.MethodDefinition<operator_pb.ReloadUtxosRequest, operator_pb.ReloadUtxosReply> {
    path: "/Operator/ReloadUtxos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ReloadUtxosRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ReloadUtxosRequest>;
    responseSerialize: grpc.serialize<operator_pb.ReloadUtxosReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ReloadUtxosReply>;
}
interface IOperatorService_IListUtxos extends grpc.MethodDefinition<operator_pb.ListUtxosRequest, operator_pb.ListUtxosReply> {
    path: "/Operator/ListUtxos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.ListUtxosRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.ListUtxosRequest>;
    responseSerialize: grpc.serialize<operator_pb.ListUtxosReply>;
    responseDeserialize: grpc.deserialize<operator_pb.ListUtxosReply>;
}
interface IOperatorService_IDropMarket extends grpc.MethodDefinition<operator_pb.DropMarketRequest, operator_pb.DropMarketReply> {
    path: "/Operator/DropMarket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operator_pb.DropMarketRequest>;
    requestDeserialize: grpc.deserialize<operator_pb.DropMarketRequest>;
    responseSerialize: grpc.serialize<operator_pb.DropMarketReply>;
    responseDeserialize: grpc.deserialize<operator_pb.DropMarketReply>;
}

export const OperatorService: IOperatorService;

export interface IOperatorServer {
    depositMarket: grpc.handleUnaryCall<operator_pb.DepositMarketRequest, operator_pb.DepositMarketReply>;
    listDepositMarket: grpc.handleUnaryCall<operator_pb.ListDepositMarketRequest, operator_pb.ListDepositMarketReply>;
    depositFeeAccount: grpc.handleUnaryCall<operator_pb.DepositFeeAccountRequest, operator_pb.DepositFeeAccountReply>;
    balanceFeeAccount: grpc.handleUnaryCall<operator_pb.BalanceFeeAccountRequest, operator_pb.BalanceFeeAccountReply>;
    claimMarketDeposit: grpc.handleUnaryCall<operator_pb.ClaimMarketDepositRequest, operator_pb.ClaimMarketDepositReply>;
    claimFeeDeposit: grpc.handleUnaryCall<operator_pb.ClaimFeeDepositRequest, operator_pb.ClaimFeeDepositReply>;
    openMarket: grpc.handleUnaryCall<operator_pb.OpenMarketRequest, operator_pb.OpenMarketReply>;
    closeMarket: grpc.handleUnaryCall<operator_pb.CloseMarketRequest, operator_pb.CloseMarketReply>;
    listMarket: grpc.handleUnaryCall<operator_pb.ListMarketRequest, operator_pb.ListMarketReply>;
    updateMarketFee: grpc.handleUnaryCall<operator_pb.UpdateMarketFeeRequest, operator_pb.UpdateMarketFeeReply>;
    updateMarketPrice: grpc.handleUnaryCall<operator_pb.UpdateMarketPriceRequest, operator_pb.UpdateMarketPriceReply>;
    updateMarketStrategy: grpc.handleUnaryCall<operator_pb.UpdateMarketStrategyRequest, operator_pb.UpdateMarketStrategyReply>;
    withdrawMarket: grpc.handleUnaryCall<operator_pb.WithdrawMarketRequest, operator_pb.WithdrawMarketReply>;
    listTrades: grpc.handleUnaryCall<operator_pb.ListTradesRequest, operator_pb.ListTradesReply>;
    reportMarketFee: grpc.handleUnaryCall<operator_pb.ReportMarketFeeRequest, operator_pb.ReportMarketFeeReply>;
    reloadUtxos: grpc.handleUnaryCall<operator_pb.ReloadUtxosRequest, operator_pb.ReloadUtxosReply>;
    listUtxos: grpc.handleUnaryCall<operator_pb.ListUtxosRequest, operator_pb.ListUtxosReply>;
    dropMarket: grpc.handleUnaryCall<operator_pb.DropMarketRequest, operator_pb.DropMarketReply>;
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
    claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    listMarket(request: operator_pb.ListMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    listMarket(request: operator_pb.ListMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    listMarket(request: operator_pb.ListMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    listTrades(request: operator_pb.ListTradesRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    listTrades(request: operator_pb.ListTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    listTrades(request: operator_pb.ListTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    reloadUtxos(request: operator_pb.ReloadUtxosRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    reloadUtxos(request: operator_pb.ReloadUtxosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    reloadUtxos(request: operator_pb.ReloadUtxosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    listUtxos(request: operator_pb.ListUtxosRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    listUtxos(request: operator_pb.ListUtxosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    listUtxos(request: operator_pb.ListUtxosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    dropMarket(request: operator_pb.DropMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
    dropMarket(request: operator_pb.DropMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
    dropMarket(request: operator_pb.DropMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
}

export class OperatorClient extends grpc.Client implements IOperatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
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
    public claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    public claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    public claimMarketDeposit(request: operator_pb.ClaimMarketDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimMarketDepositReply) => void): grpc.ClientUnaryCall;
    public claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    public claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    public claimFeeDeposit(request: operator_pb.ClaimFeeDepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ClaimFeeDepositReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public openMarket(request: operator_pb.OpenMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.OpenMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public closeMarket(request: operator_pb.CloseMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.CloseMarketReply) => void): grpc.ClientUnaryCall;
    public listMarket(request: operator_pb.ListMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    public listMarket(request: operator_pb.ListMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    public listMarket(request: operator_pb.ListMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListMarketReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public updateMarketFee(request: operator_pb.UpdateMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketFeeReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketPrice(request: operator_pb.UpdateMarketPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketPriceReply) => void): grpc.ClientUnaryCall;
    public updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    public updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    public updateMarketStrategy(request: operator_pb.UpdateMarketStrategyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.UpdateMarketStrategyReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public withdrawMarket(request: operator_pb.WithdrawMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.WithdrawMarketReply) => void): grpc.ClientUnaryCall;
    public listTrades(request: operator_pb.ListTradesRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    public listTrades(request: operator_pb.ListTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    public listTrades(request: operator_pb.ListTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListTradesReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    public reportMarketFee(request: operator_pb.ReportMarketFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReportMarketFeeReply) => void): grpc.ClientUnaryCall;
    public reloadUtxos(request: operator_pb.ReloadUtxosRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    public reloadUtxos(request: operator_pb.ReloadUtxosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    public reloadUtxos(request: operator_pb.ReloadUtxosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ReloadUtxosReply) => void): grpc.ClientUnaryCall;
    public listUtxos(request: operator_pb.ListUtxosRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    public listUtxos(request: operator_pb.ListUtxosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    public listUtxos(request: operator_pb.ListUtxosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.ListUtxosReply) => void): grpc.ClientUnaryCall;
    public dropMarket(request: operator_pb.DropMarketRequest, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
    public dropMarket(request: operator_pb.DropMarketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
    public dropMarket(request: operator_pb.DropMarketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operator_pb.DropMarketReply) => void): grpc.ClientUnaryCall;
}
