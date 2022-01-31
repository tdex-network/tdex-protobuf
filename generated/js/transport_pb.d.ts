// package: 
// file: transport.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SupportedContentTypesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportedContentTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SupportedContentTypesRequest): SupportedContentTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportedContentTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportedContentTypesRequest;
    static deserializeBinaryFromReader(message: SupportedContentTypesRequest, reader: jspb.BinaryReader): SupportedContentTypesRequest;
}

export namespace SupportedContentTypesRequest {
    export type AsObject = {
    }
}

export class SupportedContentTypesReply extends jspb.Message { 
    clearAcceptedTypesList(): void;
    getAcceptedTypesList(): Array<ContentType>;
    setAcceptedTypesList(value: Array<ContentType>): SupportedContentTypesReply;
    addAcceptedTypes(value: ContentType, index?: number): ContentType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportedContentTypesReply.AsObject;
    static toObject(includeInstance: boolean, msg: SupportedContentTypesReply): SupportedContentTypesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportedContentTypesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportedContentTypesReply;
    static deserializeBinaryFromReader(message: SupportedContentTypesReply, reader: jspb.BinaryReader): SupportedContentTypesReply;
}

export namespace SupportedContentTypesReply {
    export type AsObject = {
        acceptedTypesList: Array<ContentType>,
    }
}

export enum ContentType {
    JSON = 0,
    GRPC = 1,
    GRPCWEB = 2,
    GRPCWEBTEXT = 3,
}
