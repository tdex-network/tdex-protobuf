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
  ChangePasswordReply,
  ChangePasswordRequest,
  GenSeedReply,
  GenSeedRequest,
  InitWalletReply,
  InitWalletRequest,
  SendToManyReply,
  SendToManyRequest,
  UnlockWalletReply,
  UnlockWalletRequest,
  WalletAddressReply,
  WalletAddressRequest,
  WalletBalanceReply,
  WalletBalanceRequest} from './wallet_pb';

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
    GenSeedReply,
    (request: GenSeedRequest) => {
      return request.serializeBinary();
    },
    GenSeedReply.deserializeBinary
  );

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenSeedReply>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenSeedReply) => void): grpcWeb.ClientReadableStream<GenSeedReply>;

  genSeed(
    request: GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenSeedReply) => void) {
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
    InitWalletReply,
    (request: InitWalletRequest) => {
      return request.serializeBinary();
    },
    InitWalletReply.deserializeBinary
  );

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<InitWalletReply>;

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: InitWalletReply) => void): grpcWeb.ClientReadableStream<InitWalletReply>;

  initWallet(
    request: InitWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: InitWalletReply) => void) {
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
    UnlockWalletReply,
    (request: UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<UnlockWalletReply>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnlockWalletReply) => void): grpcWeb.ClientReadableStream<UnlockWalletReply>;

  unlockWallet(
    request: UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UnlockWalletReply) => void) {
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
    ChangePasswordReply,
    (request: ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    ChangePasswordReply.deserializeBinary
  );

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<ChangePasswordReply>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChangePasswordReply) => void): grpcWeb.ClientReadableStream<ChangePasswordReply>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ChangePasswordReply) => void) {
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

  methodInfoWalletAddress = new grpcWeb.AbstractClientBase.MethodInfo(
    WalletAddressReply,
    (request: WalletAddressRequest) => {
      return request.serializeBinary();
    },
    WalletAddressReply.deserializeBinary
  );

  walletAddress(
    request: WalletAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<WalletAddressReply>;

  walletAddress(
    request: WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WalletAddressReply) => void): grpcWeb.ClientReadableStream<WalletAddressReply>;

  walletAddress(
    request: WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WalletAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/Wallet/WalletAddress', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoWalletAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Wallet/WalletAddress',
    request,
    metadata || {},
    this.methodInfoWalletAddress);
  }

  methodInfoWalletBalance = new grpcWeb.AbstractClientBase.MethodInfo(
    WalletBalanceReply,
    (request: WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    WalletBalanceReply.deserializeBinary
  );

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<WalletBalanceReply>;

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: WalletBalanceReply) => void): grpcWeb.ClientReadableStream<WalletBalanceReply>;

  walletBalance(
    request: WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: WalletBalanceReply) => void) {
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

