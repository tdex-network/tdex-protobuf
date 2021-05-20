# 👓 tdex-protobuf
Protocol Buffers spec defintions for TDEX

## Requirements

* protoc
* Docker (for docgen)
* java protoc plugin (https://github.com/grpc/grpc-java/tree/master/compiler)

## Compile

Build stubs for JavaScript & TypeScript

```sh
$ make js
```

Build for Go

```sh
$ make go
```

Build for Java

```sh
$ make java
```

## Documentation

Automatically generate HTML and Markdown documentation (Docker running is required)

```sh
$ make doc
```

## Usage

### JavaScript&Typescript

```sh
$ npm install tdex-network/tdex-protobuf
```

### Go

```sh
$ go get github.com/tdex-network/tdex-protobuf
```

