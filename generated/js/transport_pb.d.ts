import * as jspb from 'google-protobuf'



export class Transport extends jspb.Message {
  getType(): ransportType;
  setType(value: ransportType): Transport;

  getName(): string;
  setName(value: string): Transport;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Transport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transport.AsObject;
  static toObject(includeInstance: boolean, msg: Transport): Transport.AsObject;
  static serializeBinaryToWriter(message: Transport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transport;
  static deserializeBinaryFromReader(message: Transport, reader: jspb.BinaryReader): Transport;
}

export namespace Transport {
  export type AsObject = {
    type: ransportType,
    name: string,
    data: Uint8Array | string,
  }
}

export class AvailableTransport extends jspb.Message {
  getTransportList(): Array<ransportType>;
  setTransportList(value: Array<ransportType>): AvailableTransport;
  clearTransportList(): AvailableTransport;
  addTransport(value: ransportType, index?: number): AvailableTransport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableTransport.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableTransport): AvailableTransport.AsObject;
  static serializeBinaryToWriter(message: AvailableTransport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableTransport;
  static deserializeBinaryFromReader(message: AvailableTransport, reader: jspb.BinaryReader): AvailableTransport;
}

export namespace AvailableTransport {
  export type AsObject = {
    transportList: Array<ransportType>,
  }
}

export enum TransportType { 
  INSECURE = 0,
  ONION = 1,
  TLS = 2,
  MTLS = 3,
  NOISE = 4,
}
