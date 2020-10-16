// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var wallet_pb = require('./wallet_pb.js');

function serialize_ChangePasswordReply(arg) {
  if (!(arg instanceof wallet_pb.ChangePasswordReply)) {
    throw new Error('Expected argument of type ChangePasswordReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChangePasswordReply(buffer_arg) {
  return wallet_pb.ChangePasswordReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChangePasswordRequest(arg) {
  if (!(arg instanceof wallet_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChangePasswordRequest(buffer_arg) {
  return wallet_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GenSeedReply(arg) {
  if (!(arg instanceof wallet_pb.GenSeedReply)) {
    throw new Error('Expected argument of type GenSeedReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GenSeedReply(buffer_arg) {
  return wallet_pb.GenSeedReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GenSeedRequest(arg) {
  if (!(arg instanceof wallet_pb.GenSeedRequest)) {
    throw new Error('Expected argument of type GenSeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GenSeedRequest(buffer_arg) {
  return wallet_pb.GenSeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InitWalletReply(arg) {
  if (!(arg instanceof wallet_pb.InitWalletReply)) {
    throw new Error('Expected argument of type InitWalletReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InitWalletReply(buffer_arg) {
  return wallet_pb.InitWalletReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InitWalletRequest(arg) {
  if (!(arg instanceof wallet_pb.InitWalletRequest)) {
    throw new Error('Expected argument of type InitWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InitWalletRequest(buffer_arg) {
  return wallet_pb.InitWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendToManyReply(arg) {
  if (!(arg instanceof wallet_pb.SendToManyReply)) {
    throw new Error('Expected argument of type SendToManyReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendToManyReply(buffer_arg) {
  return wallet_pb.SendToManyReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendToManyRequest(arg) {
  if (!(arg instanceof wallet_pb.SendToManyRequest)) {
    throw new Error('Expected argument of type SendToManyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendToManyRequest(buffer_arg) {
  return wallet_pb.SendToManyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnlockWalletReply(arg) {
  if (!(arg instanceof wallet_pb.UnlockWalletReply)) {
    throw new Error('Expected argument of type UnlockWalletReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnlockWalletReply(buffer_arg) {
  return wallet_pb.UnlockWalletReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnlockWalletRequest(arg) {
  if (!(arg instanceof wallet_pb.UnlockWalletRequest)) {
    throw new Error('Expected argument of type UnlockWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnlockWalletRequest(buffer_arg) {
  return wallet_pb.UnlockWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WalletAddressReply(arg) {
  if (!(arg instanceof wallet_pb.WalletAddressReply)) {
    throw new Error('Expected argument of type WalletAddressReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WalletAddressReply(buffer_arg) {
  return wallet_pb.WalletAddressReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WalletAddressRequest(arg) {
  if (!(arg instanceof wallet_pb.WalletAddressRequest)) {
    throw new Error('Expected argument of type WalletAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WalletAddressRequest(buffer_arg) {
  return wallet_pb.WalletAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WalletBalanceReply(arg) {
  if (!(arg instanceof wallet_pb.WalletBalanceReply)) {
    throw new Error('Expected argument of type WalletBalanceReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WalletBalanceReply(buffer_arg) {
  return wallet_pb.WalletBalanceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WalletBalanceRequest(arg) {
  if (!(arg instanceof wallet_pb.WalletBalanceRequest)) {
    throw new Error('Expected argument of type WalletBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WalletBalanceRequest(buffer_arg) {
  return wallet_pb.WalletBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service for Liquidity Providers to manage funds via wallet RPC
var WalletService = exports.WalletService = {
  //
// GenSeed is the first method that should be used to instantiate a new tdexd
// instance. This method allows a caller to generate a new HD Wallet.
// Once the seed is obtained and verified by the user, the InitWallet
// method should be used to commit the newly generated seed, and create the
// wallet.
genSeed: {
    path: '/Wallet/GenSeed',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.GenSeedRequest,
    responseType: wallet_pb.GenSeedReply,
    requestSerialize: serialize_GenSeedRequest,
    requestDeserialize: deserialize_GenSeedRequest,
    responseSerialize: serialize_GenSeedReply,
    responseDeserialize: deserialize_GenSeedReply,
  },
  //
// InitWallet is used when tdexd is starting up for the first time to fully
// initialize the daemon and its internal wallet. At the very least a mnemonic
// and a wallet password must be provided. This will be used to encrypt sensitive
// material on disk. Alternatively, this can be used along with the GenSeed RPC
// to obtain a seed, then present it to the user. Once it has been verified by
// the user, the seed can be fed into this RPC in order to commit the new wallet.
initWallet: {
    path: '/Wallet/InitWallet',
    requestStream: false,
    responseStream: true,
    requestType: wallet_pb.InitWalletRequest,
    responseType: wallet_pb.InitWalletReply,
    requestSerialize: serialize_InitWalletRequest,
    requestDeserialize: deserialize_InitWalletRequest,
    responseSerialize: serialize_InitWalletReply,
    responseDeserialize: deserialize_InitWalletReply,
  },
  //
// UnlockWallet is used at startup of tdexd to provide a password to unlock
// the wallet database.
unlockWallet: {
    path: '/Wallet/UnlockWallet',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.UnlockWalletRequest,
    responseType: wallet_pb.UnlockWalletReply,
    requestSerialize: serialize_UnlockWalletRequest,
    requestDeserialize: deserialize_UnlockWalletRequest,
    responseSerialize: serialize_UnlockWalletReply,
    responseDeserialize: deserialize_UnlockWalletReply,
  },
  //
// ChangePassword changes the password of the encrypted wallet. This will
// automatically unlock the wallet database if successful.
changePassword: {
    path: '/Wallet/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.ChangePasswordRequest,
    responseType: wallet_pb.ChangePasswordReply,
    requestSerialize: serialize_ChangePasswordRequest,
    requestDeserialize: deserialize_ChangePasswordRequest,
    responseSerialize: serialize_ChangePasswordReply,
    responseDeserialize: deserialize_ChangePasswordReply,
  },
  //
// WalletAddress returns a Liquid confidential p2wpkh address (BLECH32)
walletAddress: {
    path: '/Wallet/WalletAddress',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.WalletAddressRequest,
    responseType: wallet_pb.WalletAddressReply,
    requestSerialize: serialize_WalletAddressRequest,
    requestDeserialize: deserialize_WalletAddressRequest,
    responseSerialize: serialize_WalletAddressReply,
    responseDeserialize: deserialize_WalletAddressReply,
  },
  //
// WalletBalance returns total unspent outputs (confirmed and unconfirmed), all
// confirmed unspent outputs and all unconfirmed unspent outputs under control
// of the wallet.
walletBalance: {
    path: '/Wallet/WalletBalance',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.WalletBalanceRequest,
    responseType: wallet_pb.WalletBalanceReply,
    requestSerialize: serialize_WalletBalanceRequest,
    requestDeserialize: deserialize_WalletBalanceRequest,
    responseSerialize: serialize_WalletBalanceReply,
    responseDeserialize: deserialize_WalletBalanceReply,
  },
  // SendToMany sends funds to many outputs 
sendToMany: {
    path: '/Wallet/SendToMany',
    requestStream: false,
    responseStream: false,
    requestType: wallet_pb.SendToManyRequest,
    responseType: wallet_pb.SendToManyReply,
    requestSerialize: serialize_SendToManyRequest,
    requestDeserialize: deserialize_SendToManyRequest,
    responseSerialize: serialize_SendToManyReply,
    responseDeserialize: deserialize_SendToManyReply,
  },
};

exports.WalletClient = grpc.makeGenericClientConstructor(WalletService);
