// package: 
// file: wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as wallet_pb from "./wallet_pb";

interface IWalletService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    genSeed: IWalletService_IGenSeed;
    initWallet: IWalletService_IInitWallet;
    unlockWallet: IWalletService_IUnlockWallet;
    changePassword: IWalletService_IChangePassword;
    walletAddress: IWalletService_IWalletAddress;
    walletBalance: IWalletService_IWalletBalance;
    sendToMany: IWalletService_ISendToMany;
}

interface IWalletService_IGenSeed extends grpc.MethodDefinition<wallet_pb.GenSeedRequest, wallet_pb.GenSeedReply> {
    path: string; // "/.Wallet/GenSeed"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.GenSeedRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.GenSeedRequest>;
    responseSerialize: grpc.serialize<wallet_pb.GenSeedReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.GenSeedReply>;
}
interface IWalletService_IInitWallet extends grpc.MethodDefinition<wallet_pb.InitWalletRequest, wallet_pb.InitWalletReply> {
    path: string; // "/.Wallet/InitWallet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.InitWalletRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.InitWalletRequest>;
    responseSerialize: grpc.serialize<wallet_pb.InitWalletReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.InitWalletReply>;
}
interface IWalletService_IUnlockWallet extends grpc.MethodDefinition<wallet_pb.UnlockWalletRequest, wallet_pb.UnlockWalletReply> {
    path: string; // "/.Wallet/UnlockWallet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.UnlockWalletRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.UnlockWalletRequest>;
    responseSerialize: grpc.serialize<wallet_pb.UnlockWalletReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.UnlockWalletReply>;
}
interface IWalletService_IChangePassword extends grpc.MethodDefinition<wallet_pb.ChangePasswordRequest, wallet_pb.ChangePasswordReply> {
    path: string; // "/.Wallet/ChangePassword"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<wallet_pb.ChangePasswordReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.ChangePasswordReply>;
}
interface IWalletService_IWalletAddress extends grpc.MethodDefinition<wallet_pb.WalletAddressRequest, wallet_pb.WalletAddressReply> {
    path: string; // "/.Wallet/WalletAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.WalletAddressRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.WalletAddressRequest>;
    responseSerialize: grpc.serialize<wallet_pb.WalletAddressReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.WalletAddressReply>;
}
interface IWalletService_IWalletBalance extends grpc.MethodDefinition<wallet_pb.WalletBalanceRequest, wallet_pb.WalletBalanceReply> {
    path: string; // "/.Wallet/WalletBalance"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.WalletBalanceRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.WalletBalanceRequest>;
    responseSerialize: grpc.serialize<wallet_pb.WalletBalanceReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.WalletBalanceReply>;
}
interface IWalletService_ISendToMany extends grpc.MethodDefinition<wallet_pb.SendToManyRequest, wallet_pb.SendToManyReply> {
    path: string; // "/.Wallet/SendToMany"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_pb.SendToManyRequest>;
    requestDeserialize: grpc.deserialize<wallet_pb.SendToManyRequest>;
    responseSerialize: grpc.serialize<wallet_pb.SendToManyReply>;
    responseDeserialize: grpc.deserialize<wallet_pb.SendToManyReply>;
}

export const WalletService: IWalletService;

export interface IWalletServer {
    genSeed: grpc.handleUnaryCall<wallet_pb.GenSeedRequest, wallet_pb.GenSeedReply>;
    initWallet: grpc.handleUnaryCall<wallet_pb.InitWalletRequest, wallet_pb.InitWalletReply>;
    unlockWallet: grpc.handleUnaryCall<wallet_pb.UnlockWalletRequest, wallet_pb.UnlockWalletReply>;
    changePassword: grpc.handleUnaryCall<wallet_pb.ChangePasswordRequest, wallet_pb.ChangePasswordReply>;
    walletAddress: grpc.handleUnaryCall<wallet_pb.WalletAddressRequest, wallet_pb.WalletAddressReply>;
    walletBalance: grpc.handleUnaryCall<wallet_pb.WalletBalanceRequest, wallet_pb.WalletBalanceReply>;
    sendToMany: grpc.handleUnaryCall<wallet_pb.SendToManyRequest, wallet_pb.SendToManyReply>;
}

export interface IWalletClient {
    genSeed(request: wallet_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    genSeed(request: wallet_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    genSeed(request: wallet_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    initWallet(request: wallet_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    initWallet(request: wallet_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    initWallet(request: wallet_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    unlockWallet(request: wallet_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    unlockWallet(request: wallet_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    unlockWallet(request: wallet_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    changePassword(request: wallet_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    changePassword(request: wallet_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    changePassword(request: wallet_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    walletAddress(request: wallet_pb.WalletAddressRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    walletAddress(request: wallet_pb.WalletAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    walletAddress(request: wallet_pb.WalletAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    walletBalance(request: wallet_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    walletBalance(request: wallet_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    walletBalance(request: wallet_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    sendToMany(request: wallet_pb.SendToManyRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
    sendToMany(request: wallet_pb.SendToManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
    sendToMany(request: wallet_pb.SendToManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
}

export class WalletClient extends grpc.Client implements IWalletClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public genSeed(request: wallet_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    public genSeed(request: wallet_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    public genSeed(request: wallet_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.GenSeedReply) => void): grpc.ClientUnaryCall;
    public initWallet(request: wallet_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    public initWallet(request: wallet_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    public initWallet(request: wallet_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.InitWalletReply) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: wallet_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: wallet_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: wallet_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.UnlockWalletReply) => void): grpc.ClientUnaryCall;
    public changePassword(request: wallet_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    public changePassword(request: wallet_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    public changePassword(request: wallet_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.ChangePasswordReply) => void): grpc.ClientUnaryCall;
    public walletAddress(request: wallet_pb.WalletAddressRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    public walletAddress(request: wallet_pb.WalletAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    public walletAddress(request: wallet_pb.WalletAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletAddressReply) => void): grpc.ClientUnaryCall;
    public walletBalance(request: wallet_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    public walletBalance(request: wallet_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    public walletBalance(request: wallet_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.WalletBalanceReply) => void): grpc.ClientUnaryCall;
    public sendToMany(request: wallet_pb.SendToManyRequest, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
    public sendToMany(request: wallet_pb.SendToManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
    public sendToMany(request: wallet_pb.SendToManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_pb.SendToManyReply) => void): grpc.ClientUnaryCall;
}
