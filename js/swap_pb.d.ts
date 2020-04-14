// package: 
// file: swap.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SwapRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getAmountP(): number;
    setAmountP(value: number): void;

    getAssetP(): string;
    setAssetP(value: string): void;

    getAmountR(): number;
    setAmountR(value: number): void;

    getAssetR(): string;
    setAssetR(value: string): void;

    getTransaction(): string;
    setTransaction(value: string): void;


    getInputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
    clearInputBlindingKeyMap(): void;


    getOutputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
    clearOutputBlindingKeyMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapRequest): SwapRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapRequest;
    static deserializeBinaryFromReader(message: SwapRequest, reader: jspb.BinaryReader): SwapRequest;
}

export namespace SwapRequest {
    export type AsObject = {
        id: string,
        amountP: number,
        assetP: string,
        amountR: number,
        assetR: string,
        transaction: string,

        inputBlindingKeyMap: Array<[string, Uint8Array | string]>,

        outputBlindingKeyMap: Array<[string, Uint8Array | string]>,
    }
}

export class SwapAccept extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getRequestId(): string;
    setRequestId(value: string): void;

    getTransaction(): string;
    setTransaction(value: string): void;


    getInputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
    clearInputBlindingKeyMap(): void;


    getOutputBlindingKeyMap(): jspb.Map<string, Uint8Array | string>;
    clearOutputBlindingKeyMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapAccept.AsObject;
    static toObject(includeInstance: boolean, msg: SwapAccept): SwapAccept.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapAccept, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapAccept;
    static deserializeBinaryFromReader(message: SwapAccept, reader: jspb.BinaryReader): SwapAccept;
}

export namespace SwapAccept {
    export type AsObject = {
        id: string,
        requestId: string,
        transaction: string,

        inputBlindingKeyMap: Array<[string, Uint8Array | string]>,

        outputBlindingKeyMap: Array<[string, Uint8Array | string]>,
    }
}

export class SwapComplete extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getAcceptId(): string;
    setAcceptId(value: string): void;

    getTransaction(): string;
    setTransaction(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapComplete.AsObject;
    static toObject(includeInstance: boolean, msg: SwapComplete): SwapComplete.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapComplete, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapComplete;
    static deserializeBinaryFromReader(message: SwapComplete, reader: jspb.BinaryReader): SwapComplete;
}

export namespace SwapComplete {
    export type AsObject = {
        id: string,
        acceptId: string,
        transaction: string,
    }
}

export class SwapFail extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getMessageId(): string;
    setMessageId(value: string): void;

    getFailureCode(): number;
    setFailureCode(value: number): void;

    getFailureMessage(): string;
    setFailureMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapFail.AsObject;
    static toObject(includeInstance: boolean, msg: SwapFail): SwapFail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapFail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapFail;
    static deserializeBinaryFromReader(message: SwapFail, reader: jspb.BinaryReader): SwapFail;
}

export namespace SwapFail {
    export type AsObject = {
        id: string,
        messageId: string,
        failureCode: number,
        failureMessage: string,
    }
}
