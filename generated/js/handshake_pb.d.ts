import * as jspb from "google-protobuf"

export class SecretMessage extends jspb.Message {
  getLenght(): number;
  setLenght(value: number): SecretMessage;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): SecretMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecretMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SecretMessage): SecretMessage.AsObject;
  static serializeBinaryToWriter(message: SecretMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecretMessage;
  static deserializeBinaryFromReader(message: SecretMessage, reader: jspb.BinaryReader): SecretMessage;
}

export namespace SecretMessage {
  export type AsObject = {
    lenght: number,
    payload: Uint8Array | string,
  }
}

export class InfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InfoRequest): InfoRequest.AsObject;
  static serializeBinaryToWriter(message: InfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoRequest;
  static deserializeBinaryFromReader(message: InfoRequest, reader: jspb.BinaryReader): InfoRequest;
}

export namespace InfoRequest {
  export type AsObject = {
  }
}

export class InfoReply extends jspb.Message {
  getPubkey(): Uint8Array | string;
  getPubkey_asU8(): Uint8Array;
  getPubkey_asB64(): string;
  setPubkey(value: Uint8Array | string): InfoReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: InfoReply): InfoReply.AsObject;
  static serializeBinaryToWriter(message: InfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoReply;
  static deserializeBinaryFromReader(message: InfoReply, reader: jspb.BinaryReader): InfoReply;
}

export namespace InfoReply {
  export type AsObject = {
    pubkey: Uint8Array | string,
  }
}

export class Init extends jspb.Message {
  getId(): string;
  setId(value: string): Init;

  getSenderPubkey(): Uint8Array | string;
  getSenderPubkey_asU8(): Uint8Array;
  getSenderPubkey_asB64(): string;
  setSenderPubkey(value: Uint8Array | string): Init;

  getRecipientPubkey(): Uint8Array | string;
  getRecipientPubkey_asU8(): Uint8Array;
  getRecipientPubkey_asB64(): string;
  setRecipientPubkey(value: Uint8Array | string): Init;

  getEphemeralPubkey(): Uint8Array | string;
  getEphemeralPubkey_asU8(): Uint8Array;
  getEphemeralPubkey_asB64(): string;
  setEphemeralPubkey(value: Uint8Array | string): Init;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Init;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Init.AsObject;
  static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
  static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Init;
  static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
}

export namespace Init {
  export type AsObject = {
    id: string,
    senderPubkey: Uint8Array | string,
    recipientPubkey: Uint8Array | string,
    ephemeralPubkey: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class Ack extends jspb.Message {
  getId(): string;
  setId(value: string): Ack;

  getInitId(): string;
  setInitId(value: string): Ack;

  getEphemeralPubkey(): Uint8Array | string;
  getEphemeralPubkey_asU8(): Uint8Array;
  getEphemeralPubkey_asB64(): string;
  setEphemeralPubkey(value: Uint8Array | string): Ack;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): Ack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ack.AsObject;
  static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
  static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ack;
  static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
}

export namespace Ack {
  export type AsObject = {
    id: string,
    initId: string,
    ephemeralPubkey: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

