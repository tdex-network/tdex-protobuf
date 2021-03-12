/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wallet_pb from './wallet_pb';


export class WalletClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGenSeed = new grpcWeb.AbstractClientBase.MethodInfo(
    wallet_pb.GenSeedReply,
    (request: wallet_pb.GenSeedRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.GenSeedReply.deserializeBinary
  );

  genSeed(
    request: wallet_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.GenSeedReply>;

  genSeed(
    request: wallet_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.GenSeedReply) => void): grpcWeb.ClientReadableStream<wallet_pb.GenSeedReply>;

  genSeed(
    request: wallet_pb.GenSeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.GenSeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/GenSeed',
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
    wallet_pb.InitWalletReply,
    (request: wallet_pb.InitWalletRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.InitWalletReply.deserializeBinary
  );

  initWallet(
    request: wallet_pb.InitWalletRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Wallet/InitWallet',
      request,
      metadata || {},
      this.methodInfoInitWallet);
  }

  methodInfoUnlockWallet = new grpcWeb.AbstractClientBase.MethodInfo(
    wallet_pb.UnlockWalletReply,
    (request: wallet_pb.UnlockWalletRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.UnlockWalletReply.deserializeBinary
  );

  unlockWallet(
    request: wallet_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.UnlockWalletReply>;

  unlockWallet(
    request: wallet_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.UnlockWalletReply) => void): grpcWeb.ClientReadableStream<wallet_pb.UnlockWalletReply>;

  unlockWallet(
    request: wallet_pb.UnlockWalletRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.UnlockWalletReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/UnlockWallet',
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
    wallet_pb.ChangePasswordReply,
    (request: wallet_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.ChangePasswordReply.deserializeBinary
  );

  changePassword(
    request: wallet_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.ChangePasswordReply>;

  changePassword(
    request: wallet_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.ChangePasswordReply) => void): grpcWeb.ClientReadableStream<wallet_pb.ChangePasswordReply>;

  changePassword(
    request: wallet_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.ChangePasswordReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/ChangePassword',
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
    wallet_pb.WalletAddressReply,
    (request: wallet_pb.WalletAddressRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.WalletAddressReply.deserializeBinary
  );

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.WalletAddressReply>;

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.WalletAddressReply) => void): grpcWeb.ClientReadableStream<wallet_pb.WalletAddressReply>;

  walletAddress(
    request: wallet_pb.WalletAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.WalletAddressReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/WalletAddress',
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
    wallet_pb.WalletBalanceReply,
    (request: wallet_pb.WalletBalanceRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.WalletBalanceReply.deserializeBinary
  );

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.WalletBalanceReply) => void): grpcWeb.ClientReadableStream<wallet_pb.WalletBalanceReply>;

  walletBalance(
    request: wallet_pb.WalletBalanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.WalletBalanceReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/WalletBalance',
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
    wallet_pb.SendToManyReply,
    (request: wallet_pb.SendToManyRequest) => {
      return request.serializeBinary();
    },
    wallet_pb.SendToManyReply.deserializeBinary
  );

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wallet_pb.SendToManyReply>;

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: wallet_pb.SendToManyReply) => void): grpcWeb.ClientReadableStream<wallet_pb.SendToManyReply>;

  sendToMany(
    request: wallet_pb.SendToManyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: wallet_pb.SendToManyReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Wallet/SendToMany',
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

