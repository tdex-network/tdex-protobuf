// package: 
// file: wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GenSeedRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenSeedRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenSeedRequest): GenSeedRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenSeedRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenSeedRequest;
    static deserializeBinaryFromReader(message: GenSeedRequest, reader: jspb.BinaryReader): GenSeedRequest;
}

export namespace GenSeedRequest {
    export type AsObject = {
    }
}

export class GenSeedReply extends jspb.Message { 
    clearSeedMnemonicList(): void;
    getSeedMnemonicList(): Array<string>;
    setSeedMnemonicList(value: Array<string>): GenSeedReply;
    addSeedMnemonic(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenSeedReply.AsObject;
    static toObject(includeInstance: boolean, msg: GenSeedReply): GenSeedReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenSeedReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenSeedReply;
    static deserializeBinaryFromReader(message: GenSeedReply, reader: jspb.BinaryReader): GenSeedReply;
}

export namespace GenSeedReply {
    export type AsObject = {
        seedMnemonicList: Array<string>,
    }
}

export class InitWalletRequest extends jspb.Message { 
    getWalletPassword(): Uint8Array | string;
    getWalletPassword_asU8(): Uint8Array;
    getWalletPassword_asB64(): string;
    setWalletPassword(value: Uint8Array | string): InitWalletRequest;

    clearSeedMnemonicList(): void;
    getSeedMnemonicList(): Array<string>;
    setSeedMnemonicList(value: Array<string>): InitWalletRequest;
    addSeedMnemonic(value: string, index?: number): string;

    getRestore(): boolean;
    setRestore(value: boolean): InitWalletRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InitWalletRequest): InitWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitWalletRequest;
    static deserializeBinaryFromReader(message: InitWalletRequest, reader: jspb.BinaryReader): InitWalletRequest;
}

export namespace InitWalletRequest {
    export type AsObject = {
        walletPassword: Uint8Array | string,
        seedMnemonicList: Array<string>,
        restore: boolean,
    }
}

export class InitWalletReply extends jspb.Message { 
    getAccount(): number;
    setAccount(value: number): InitWalletReply;

    getIndex(): number;
    setIndex(value: number): InitWalletReply;

    getStatus(): InitWalletReply.Status;
    setStatus(value: InitWalletReply.Status): InitWalletReply;

    getData(): string;
    setData(value: string): InitWalletReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitWalletReply.AsObject;
    static toObject(includeInstance: boolean, msg: InitWalletReply): InitWalletReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitWalletReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitWalletReply;
    static deserializeBinaryFromReader(message: InitWalletReply, reader: jspb.BinaryReader): InitWalletReply;
}

export namespace InitWalletReply {
    export type AsObject = {
        account: number,
        index: number,
        status: InitWalletReply.Status,
        data: string,
    }

    export enum Status {
    PROCESSING = 0,
    DONE = 1,
    }

}

export class UnlockWalletRequest extends jspb.Message { 
    getWalletPassword(): Uint8Array | string;
    getWalletPassword_asU8(): Uint8Array;
    getWalletPassword_asB64(): string;
    setWalletPassword(value: Uint8Array | string): UnlockWalletRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlockWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnlockWalletRequest): UnlockWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlockWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlockWalletRequest;
    static deserializeBinaryFromReader(message: UnlockWalletRequest, reader: jspb.BinaryReader): UnlockWalletRequest;
}

export namespace UnlockWalletRequest {
    export type AsObject = {
        walletPassword: Uint8Array | string,
    }
}

export class UnlockWalletReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlockWalletReply.AsObject;
    static toObject(includeInstance: boolean, msg: UnlockWalletReply): UnlockWalletReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlockWalletReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlockWalletReply;
    static deserializeBinaryFromReader(message: UnlockWalletReply, reader: jspb.BinaryReader): UnlockWalletReply;
}

export namespace UnlockWalletReply {
    export type AsObject = {
    }
}

export class ChangePasswordRequest extends jspb.Message { 
    getCurrentPassword(): Uint8Array | string;
    getCurrentPassword_asU8(): Uint8Array;
    getCurrentPassword_asB64(): string;
    setCurrentPassword(value: Uint8Array | string): ChangePasswordRequest;

    getNewPassword(): Uint8Array | string;
    getNewPassword_asU8(): Uint8Array;
    getNewPassword_asB64(): string;
    setNewPassword(value: Uint8Array | string): ChangePasswordRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
    static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
    export type AsObject = {
        currentPassword: Uint8Array | string,
        newPassword: Uint8Array | string,
    }
}

export class ChangePasswordReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordReply.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordReply): ChangePasswordReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordReply;
    static deserializeBinaryFromReader(message: ChangePasswordReply, reader: jspb.BinaryReader): ChangePasswordReply;
}

export namespace ChangePasswordReply {
    export type AsObject = {
    }
}

export class SendToManyRequest extends jspb.Message { 
    clearOutputsList(): void;
    getOutputsList(): Array<TxOut>;
    setOutputsList(value: Array<TxOut>): SendToManyRequest;
    addOutputs(value?: TxOut, index?: number): TxOut;

    getMillisatPerByte(): number;
    setMillisatPerByte(value: number): SendToManyRequest;

    getPush(): boolean;
    setPush(value: boolean): SendToManyRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendToManyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendToManyRequest): SendToManyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendToManyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendToManyRequest;
    static deserializeBinaryFromReader(message: SendToManyRequest, reader: jspb.BinaryReader): SendToManyRequest;
}

export namespace SendToManyRequest {
    export type AsObject = {
        outputsList: Array<TxOut.AsObject>,
        millisatPerByte: number,
        push: boolean,
    }
}

export class SendToManyReply extends jspb.Message { 
    getRawTx(): Uint8Array | string;
    getRawTx_asU8(): Uint8Array;
    getRawTx_asB64(): string;
    setRawTx(value: Uint8Array | string): SendToManyReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendToManyReply.AsObject;
    static toObject(includeInstance: boolean, msg: SendToManyReply): SendToManyReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendToManyReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendToManyReply;
    static deserializeBinaryFromReader(message: SendToManyReply, reader: jspb.BinaryReader): SendToManyReply;
}

export namespace SendToManyReply {
    export type AsObject = {
        rawTx: Uint8Array | string,
    }
}

export class WalletAddressRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WalletAddressRequest): WalletAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletAddressRequest;
    static deserializeBinaryFromReader(message: WalletAddressRequest, reader: jspb.BinaryReader): WalletAddressRequest;
}

export namespace WalletAddressRequest {
    export type AsObject = {
    }
}

export class WalletAddressReply extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): WalletAddressReply;

    getBlinding(): string;
    setBlinding(value: string): WalletAddressReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletAddressReply.AsObject;
    static toObject(includeInstance: boolean, msg: WalletAddressReply): WalletAddressReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletAddressReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletAddressReply;
    static deserializeBinaryFromReader(message: WalletAddressReply, reader: jspb.BinaryReader): WalletAddressReply;
}

export namespace WalletAddressReply {
    export type AsObject = {
        address: string,
        blinding: string,
    }
}

export class BalanceInfo extends jspb.Message { 
    getTotalBalance(): number;
    setTotalBalance(value: number): BalanceInfo;

    getConfirmedBalance(): number;
    setConfirmedBalance(value: number): BalanceInfo;

    getUnconfirmedBalance(): number;
    setUnconfirmedBalance(value: number): BalanceInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceInfo.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceInfo): BalanceInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceInfo;
    static deserializeBinaryFromReader(message: BalanceInfo, reader: jspb.BinaryReader): BalanceInfo;
}

export namespace BalanceInfo {
    export type AsObject = {
        totalBalance: number,
        confirmedBalance: number,
        unconfirmedBalance: number,
    }
}

export class WalletBalanceRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WalletBalanceRequest): WalletBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletBalanceRequest;
    static deserializeBinaryFromReader(message: WalletBalanceRequest, reader: jspb.BinaryReader): WalletBalanceRequest;
}

export namespace WalletBalanceRequest {
    export type AsObject = {
    }
}

export class WalletBalanceReply extends jspb.Message { 

    getBalanceMap(): jspb.Map<string, BalanceInfo>;
    clearBalanceMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletBalanceReply.AsObject;
    static toObject(includeInstance: boolean, msg: WalletBalanceReply): WalletBalanceReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletBalanceReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletBalanceReply;
    static deserializeBinaryFromReader(message: WalletBalanceReply, reader: jspb.BinaryReader): WalletBalanceReply;
}

export namespace WalletBalanceReply {
    export type AsObject = {

        balanceMap: Array<[string, BalanceInfo.AsObject]>,
    }
}

export class TxOut extends jspb.Message { 
    getAsset(): string;
    setAsset(value: string): TxOut;

    getValue(): number;
    setValue(value: number): TxOut;

    getAddress(): string;
    setAddress(value: string): TxOut;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOut.AsObject;
    static toObject(includeInstance: boolean, msg: TxOut): TxOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOut;
    static deserializeBinaryFromReader(message: TxOut, reader: jspb.BinaryReader): TxOut;
}

export namespace TxOut {
    export type AsObject = {
        asset: string,
        value: number,
        address: string,
    }
}
