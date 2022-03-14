package com.tdexswap.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 * Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.42.1)",
    comments = "Source: v1/transport.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class TransportGrpc {

  private TransportGrpc() {}

  public static final String SERVICE_NAME = "tdexswap.v1.Transport";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.tdexswap.v1.SupportedContentTypesRequest,
      com.tdexswap.v1.SupportedContentTypesReply> getSupportedContentTypesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SupportedContentTypes",
      requestType = com.tdexswap.v1.SupportedContentTypesRequest.class,
      responseType = com.tdexswap.v1.SupportedContentTypesReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdexswap.v1.SupportedContentTypesRequest,
      com.tdexswap.v1.SupportedContentTypesReply> getSupportedContentTypesMethod() {
    io.grpc.MethodDescriptor<com.tdexswap.v1.SupportedContentTypesRequest, com.tdexswap.v1.SupportedContentTypesReply> getSupportedContentTypesMethod;
    if ((getSupportedContentTypesMethod = TransportGrpc.getSupportedContentTypesMethod) == null) {
      synchronized (TransportGrpc.class) {
        if ((getSupportedContentTypesMethod = TransportGrpc.getSupportedContentTypesMethod) == null) {
          TransportGrpc.getSupportedContentTypesMethod = getSupportedContentTypesMethod =
              io.grpc.MethodDescriptor.<com.tdexswap.v1.SupportedContentTypesRequest, com.tdexswap.v1.SupportedContentTypesReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SupportedContentTypes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdexswap.v1.SupportedContentTypesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdexswap.v1.SupportedContentTypesReply.getDefaultInstance()))
              .setSchemaDescriptor(new TransportMethodDescriptorSupplier("SupportedContentTypes"))
              .build();
        }
      }
    }
    return getSupportedContentTypesMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TransportStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TransportStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TransportStub>() {
        @java.lang.Override
        public TransportStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TransportStub(channel, callOptions);
        }
      };
    return TransportStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TransportBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TransportBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TransportBlockingStub>() {
        @java.lang.Override
        public TransportBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TransportBlockingStub(channel, callOptions);
        }
      };
    return TransportBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TransportFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TransportFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TransportFutureStub>() {
        @java.lang.Override
        public TransportFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TransportFutureStub(channel, callOptions);
        }
      };
    return TransportFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
   * </pre>
   */
  public static abstract class TransportImplBase implements io.grpc.BindableService {

    /**
     */
    public void supportedContentTypes(com.tdexswap.v1.SupportedContentTypesRequest request,
        io.grpc.stub.StreamObserver<com.tdexswap.v1.SupportedContentTypesReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSupportedContentTypesMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSupportedContentTypesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdexswap.v1.SupportedContentTypesRequest,
                com.tdexswap.v1.SupportedContentTypesReply>(
                  this, METHODID_SUPPORTED_CONTENT_TYPES)))
          .build();
    }
  }

  /**
   * <pre>
   * Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
   * </pre>
   */
  public static final class TransportStub extends io.grpc.stub.AbstractAsyncStub<TransportStub> {
    private TransportStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TransportStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TransportStub(channel, callOptions);
    }

    /**
     */
    public void supportedContentTypes(com.tdexswap.v1.SupportedContentTypesRequest request,
        io.grpc.stub.StreamObserver<com.tdexswap.v1.SupportedContentTypesReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSupportedContentTypesMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
   * </pre>
   */
  public static final class TransportBlockingStub extends io.grpc.stub.AbstractBlockingStub<TransportBlockingStub> {
    private TransportBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TransportBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TransportBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.tdexswap.v1.SupportedContentTypesReply supportedContentTypes(com.tdexswap.v1.SupportedContentTypesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSupportedContentTypesMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Service used by Liquidity providers to announce the accepted content type for incoming HTTP request messages
   * </pre>
   */
  public static final class TransportFutureStub extends io.grpc.stub.AbstractFutureStub<TransportFutureStub> {
    private TransportFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TransportFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TransportFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tdexswap.v1.SupportedContentTypesReply> supportedContentTypes(
        com.tdexswap.v1.SupportedContentTypesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSupportedContentTypesMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SUPPORTED_CONTENT_TYPES = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TransportImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TransportImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SUPPORTED_CONTENT_TYPES:
          serviceImpl.supportedContentTypes((com.tdexswap.v1.SupportedContentTypesRequest) request,
              (io.grpc.stub.StreamObserver<com.tdexswap.v1.SupportedContentTypesReply>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class TransportBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TransportBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.tdexswap.v1.TransportProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Transport");
    }
  }

  private static final class TransportFileDescriptorSupplier
      extends TransportBaseDescriptorSupplier {
    TransportFileDescriptorSupplier() {}
  }

  private static final class TransportMethodDescriptorSupplier
      extends TransportBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TransportMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (TransportGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TransportFileDescriptorSupplier())
              .addMethod(getSupportedContentTypesMethod())
              .build();
        }
      }
    }
    return result;
  }
}
