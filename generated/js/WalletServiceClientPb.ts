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
  ChangePasswordRequest,
  ChangePasswordResponse,
  GenSeedRequest,
  GenSeedResponse,
  InitWalletRequest,
  InitWalletResponse,
  SendToManyReply,
  SendToManyRequest,
  UnlockWalletRequest,
  UnlockWalletResponse,
  WalletBalanceRequest,
  WalletBalanceResponse} from './wallet_pb';

export class WalletClient {
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

  methodInfoGenSeed = new grpcWeb.AbstractClientBase.MethodInfo(
    GenSeedResponse,
    (request: GenSeedRequest) => {
      return request.serializeBinary();
    },
    GenSeedResponse.deserializeBinary
  );

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenSeedResponse>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenSeedResponse) => void): grpcWeb.ClientReadableStream<GenSeedResponse>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenSeedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/GenSeed', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenSeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/GenSeed',
    request,
    metadata || {},
    this.methodInfoGenSeed);
  }

  methodInfoInitWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    InitWalletResponse,
    (request: InitWalletRequest) => {
      return request.serializeBinary();
    },
    InitWalletResponse.deserializeBinary
  );

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<InitWalletResponse>;

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InitWalletResponse) => void): grpcWeb.ClientReadableStream<InitWalletResponse>;

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: InitWalletResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/InitWallet', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoInitWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/InitWallet',
    request,
    metadata || {},
    this.methodInfoInitWallet);
  }

  methodInfoUnlockWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    UnlockWalletResponse,
    (request: UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    UnlockWalletResponse.deserializeBinary
  );

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<UnlockWalletResponse>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnlockWalletResponse) => void): grpcWeb.ClientReadableStream<UnlockWalletResponse>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UnlockWalletResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/UnlockWallet', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoUnlockWallet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/UnlockWallet',
    request,
    metadata || {},
    this.methodInfoUnlockWallet);
  }

  methodInfoChangePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    ChangePasswordResponse,
    (request: ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<ChangePasswordResponse>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<ChangePasswordResponse>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ChangePasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/ChangePassword', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/ChangePassword',
    request,
    metadata || {},
    this.methodInfoChangePassword);
  }

  methodInfoWalletBalance = new grpcWeb.AbstractClientBase.MethodInfo(
    WalletBalanceResponse,
    (request: WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    WalletBalanceResponse.deserializeBinary
  );

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<WalletBalanceResponse>;

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WalletBalanceResponse) => void): grpcWeb.ClientReadableStream<WalletBalanceResponse>;

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WalletBalanceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/WalletBalance', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoWalletBalance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/WalletBalance',
    request,
    metadata || {},
    this.methodInfoWalletBalance);
  }

  methodInfoSendToMany = new grpcWeb.AbstractClientBase.MethodInfo(
    SendToManyReply,
    (request: SendToManyRequest) => {
      return request.serializeBinary();
    },
    SendToManyReply.deserializeBinary
  );

  sendToMany(
    request: SendToManyRequest,
    metadata: grpcWeb.Metadata | null): Promise<SendToManyReply>;

  sendToMany(
    request: SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SendToManyReply) => void): grpcWeb.ClientReadableStream<SendToManyReply>;

  sendToMany(
    request: SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: SendToManyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/SendToMany', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoSendToMany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/SendToMany',
    request,
    metadata || {},
    this.methodInfoSendToMany);
  }

}

