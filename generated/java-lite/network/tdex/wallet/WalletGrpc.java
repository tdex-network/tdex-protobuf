package network.tdex.wallet;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 **
 * Service for Liquidity Providers to manage funds via wallet RPC
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.38.0)",
    comments = "Source: wallet.proto")
public final class WalletGrpc {

  private WalletGrpc() {}

  public static final String SERVICE_NAME = "Wallet";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.GenSeedRequest,
      network.tdex.wallet.WalletOuterClass.GenSeedReply> getGenSeedMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GenSeed",
      requestType = network.tdex.wallet.WalletOuterClass.GenSeedRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.GenSeedReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.GenSeedRequest,
      network.tdex.wallet.WalletOuterClass.GenSeedReply> getGenSeedMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.GenSeedRequest, network.tdex.wallet.WalletOuterClass.GenSeedReply> getGenSeedMethod;
    if ((getGenSeedMethod = WalletGrpc.getGenSeedMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getGenSeedMethod = WalletGrpc.getGenSeedMethod) == null) {
          WalletGrpc.getGenSeedMethod = getGenSeedMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.GenSeedRequest, network.tdex.wallet.WalletOuterClass.GenSeedReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GenSeed"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.GenSeedRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.GenSeedReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getGenSeedMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.InitWalletRequest,
      network.tdex.wallet.WalletOuterClass.InitWalletReply> getInitWalletMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "InitWallet",
      requestType = network.tdex.wallet.WalletOuterClass.InitWalletRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.InitWalletReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.InitWalletRequest,
      network.tdex.wallet.WalletOuterClass.InitWalletReply> getInitWalletMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.InitWalletRequest, network.tdex.wallet.WalletOuterClass.InitWalletReply> getInitWalletMethod;
    if ((getInitWalletMethod = WalletGrpc.getInitWalletMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getInitWalletMethod = WalletGrpc.getInitWalletMethod) == null) {
          WalletGrpc.getInitWalletMethod = getInitWalletMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.InitWalletRequest, network.tdex.wallet.WalletOuterClass.InitWalletReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "InitWallet"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.InitWalletRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.InitWalletReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getInitWalletMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.UnlockWalletRequest,
      network.tdex.wallet.WalletOuterClass.UnlockWalletReply> getUnlockWalletMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UnlockWallet",
      requestType = network.tdex.wallet.WalletOuterClass.UnlockWalletRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.UnlockWalletReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.UnlockWalletRequest,
      network.tdex.wallet.WalletOuterClass.UnlockWalletReply> getUnlockWalletMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.UnlockWalletRequest, network.tdex.wallet.WalletOuterClass.UnlockWalletReply> getUnlockWalletMethod;
    if ((getUnlockWalletMethod = WalletGrpc.getUnlockWalletMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getUnlockWalletMethod = WalletGrpc.getUnlockWalletMethod) == null) {
          WalletGrpc.getUnlockWalletMethod = getUnlockWalletMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.UnlockWalletRequest, network.tdex.wallet.WalletOuterClass.UnlockWalletReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UnlockWallet"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.UnlockWalletRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.UnlockWalletReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getUnlockWalletMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.ChangePasswordRequest,
      network.tdex.wallet.WalletOuterClass.ChangePasswordReply> getChangePasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ChangePassword",
      requestType = network.tdex.wallet.WalletOuterClass.ChangePasswordRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.ChangePasswordReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.ChangePasswordRequest,
      network.tdex.wallet.WalletOuterClass.ChangePasswordReply> getChangePasswordMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.ChangePasswordRequest, network.tdex.wallet.WalletOuterClass.ChangePasswordReply> getChangePasswordMethod;
    if ((getChangePasswordMethod = WalletGrpc.getChangePasswordMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getChangePasswordMethod = WalletGrpc.getChangePasswordMethod) == null) {
          WalletGrpc.getChangePasswordMethod = getChangePasswordMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.ChangePasswordRequest, network.tdex.wallet.WalletOuterClass.ChangePasswordReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ChangePassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.ChangePasswordRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.ChangePasswordReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getChangePasswordMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletAddressRequest,
      network.tdex.wallet.WalletOuterClass.WalletAddressReply> getWalletAddressMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "WalletAddress",
      requestType = network.tdex.wallet.WalletOuterClass.WalletAddressRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.WalletAddressReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletAddressRequest,
      network.tdex.wallet.WalletOuterClass.WalletAddressReply> getWalletAddressMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletAddressRequest, network.tdex.wallet.WalletOuterClass.WalletAddressReply> getWalletAddressMethod;
    if ((getWalletAddressMethod = WalletGrpc.getWalletAddressMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getWalletAddressMethod = WalletGrpc.getWalletAddressMethod) == null) {
          WalletGrpc.getWalletAddressMethod = getWalletAddressMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.WalletAddressRequest, network.tdex.wallet.WalletOuterClass.WalletAddressReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "WalletAddress"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.WalletAddressRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.WalletAddressReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getWalletAddressMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletBalanceRequest,
      network.tdex.wallet.WalletOuterClass.WalletBalanceReply> getWalletBalanceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "WalletBalance",
      requestType = network.tdex.wallet.WalletOuterClass.WalletBalanceRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.WalletBalanceReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletBalanceRequest,
      network.tdex.wallet.WalletOuterClass.WalletBalanceReply> getWalletBalanceMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.WalletBalanceRequest, network.tdex.wallet.WalletOuterClass.WalletBalanceReply> getWalletBalanceMethod;
    if ((getWalletBalanceMethod = WalletGrpc.getWalletBalanceMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getWalletBalanceMethod = WalletGrpc.getWalletBalanceMethod) == null) {
          WalletGrpc.getWalletBalanceMethod = getWalletBalanceMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.WalletBalanceRequest, network.tdex.wallet.WalletOuterClass.WalletBalanceReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "WalletBalance"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.WalletBalanceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.WalletBalanceReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getWalletBalanceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.SendToManyRequest,
      network.tdex.wallet.WalletOuterClass.SendToManyReply> getSendToManyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SendToMany",
      requestType = network.tdex.wallet.WalletOuterClass.SendToManyRequest.class,
      responseType = network.tdex.wallet.WalletOuterClass.SendToManyReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.SendToManyRequest,
      network.tdex.wallet.WalletOuterClass.SendToManyReply> getSendToManyMethod() {
    io.grpc.MethodDescriptor<network.tdex.wallet.WalletOuterClass.SendToManyRequest, network.tdex.wallet.WalletOuterClass.SendToManyReply> getSendToManyMethod;
    if ((getSendToManyMethod = WalletGrpc.getSendToManyMethod) == null) {
      synchronized (WalletGrpc.class) {
        if ((getSendToManyMethod = WalletGrpc.getSendToManyMethod) == null) {
          WalletGrpc.getSendToManyMethod = getSendToManyMethod =
              io.grpc.MethodDescriptor.<network.tdex.wallet.WalletOuterClass.SendToManyRequest, network.tdex.wallet.WalletOuterClass.SendToManyReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SendToMany"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.SendToManyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.lite.ProtoLiteUtils.marshaller(
                  network.tdex.wallet.WalletOuterClass.SendToManyReply.getDefaultInstance()))
              .build();
        }
      }
    }
    return getSendToManyMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WalletStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WalletStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WalletStub>() {
        @java.lang.Override
        public WalletStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WalletStub(channel, callOptions);
        }
      };
    return WalletStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WalletBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WalletBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WalletBlockingStub>() {
        @java.lang.Override
        public WalletBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WalletBlockingStub(channel, callOptions);
        }
      };
    return WalletBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WalletFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<WalletFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<WalletFutureStub>() {
        @java.lang.Override
        public WalletFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new WalletFutureStub(channel, callOptions);
        }
      };
    return WalletFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   **
   * Service for Liquidity Providers to manage funds via wallet RPC
   * </pre>
   */
  public static abstract class WalletImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     *GenSeed is the first method that should be used to instantiate a new tdexd
     *instance. This method allows a caller to generate a new HD Wallet.
     *Once the seed is obtained and verified by the user, the InitWallet
     *method should be used to commit the newly generated seed, and create the
     *wallet.
     * </pre>
     */
    public void genSeed(network.tdex.wallet.WalletOuterClass.GenSeedRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.GenSeedReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGenSeedMethod(), responseObserver);
    }

    /**
     * <pre>
     *InitWallet is used when tdexd is starting up for the first time to fully
     *initialize the daemon and its internal wallet. At the very least a mnemonic
     *and a wallet password must be provided. This will be used to encrypt sensitive
     *material on disk. Alternatively, this can be used along with the GenSeed RPC
     *to obtain a seed, then present it to the user. Once it has been verified by
     *the user, the seed can be fed into this RPC in order to commit the new wallet.
     * </pre>
     */
    public void initWallet(network.tdex.wallet.WalletOuterClass.InitWalletRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.InitWalletReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInitWalletMethod(), responseObserver);
    }

    /**
     * <pre>
     *UnlockWallet is used at startup of tdexd to provide a password to unlock
     *the wallet database.
     * </pre>
     */
    public void unlockWallet(network.tdex.wallet.WalletOuterClass.UnlockWalletRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.UnlockWalletReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUnlockWalletMethod(), responseObserver);
    }

    /**
     * <pre>
     *ChangePassword changes the password of the encrypted wallet. This will
     *automatically unlock the wallet database if successful.
     * </pre>
     */
    public void changePassword(network.tdex.wallet.WalletOuterClass.ChangePasswordRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.ChangePasswordReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getChangePasswordMethod(), responseObserver);
    }

    /**
     * <pre>
     *WalletAddress returns a Liquid confidential p2wpkh address (BLECH32)
     * </pre>
     */
    public void walletAddress(network.tdex.wallet.WalletOuterClass.WalletAddressRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletAddressReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getWalletAddressMethod(), responseObserver);
    }

    /**
     * <pre>
     *WalletBalance returns total unspent outputs (confirmed and unconfirmed), all
     *confirmed unspent outputs and all unconfirmed unspent outputs under control
     *of the wallet.
     * </pre>
     */
    public void walletBalance(network.tdex.wallet.WalletOuterClass.WalletBalanceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletBalanceReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getWalletBalanceMethod(), responseObserver);
    }

    /**
     * <pre>
     *SendToMany sends funds to many outputs 
     * </pre>
     */
    public void sendToMany(network.tdex.wallet.WalletOuterClass.SendToManyRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.SendToManyReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSendToManyMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGenSeedMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.GenSeedRequest,
                network.tdex.wallet.WalletOuterClass.GenSeedReply>(
                  this, METHODID_GEN_SEED)))
          .addMethod(
            getInitWalletMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.InitWalletRequest,
                network.tdex.wallet.WalletOuterClass.InitWalletReply>(
                  this, METHODID_INIT_WALLET)))
          .addMethod(
            getUnlockWalletMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.UnlockWalletRequest,
                network.tdex.wallet.WalletOuterClass.UnlockWalletReply>(
                  this, METHODID_UNLOCK_WALLET)))
          .addMethod(
            getChangePasswordMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.ChangePasswordRequest,
                network.tdex.wallet.WalletOuterClass.ChangePasswordReply>(
                  this, METHODID_CHANGE_PASSWORD)))
          .addMethod(
            getWalletAddressMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.WalletAddressRequest,
                network.tdex.wallet.WalletOuterClass.WalletAddressReply>(
                  this, METHODID_WALLET_ADDRESS)))
          .addMethod(
            getWalletBalanceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.WalletBalanceRequest,
                network.tdex.wallet.WalletOuterClass.WalletBalanceReply>(
                  this, METHODID_WALLET_BALANCE)))
          .addMethod(
            getSendToManyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.wallet.WalletOuterClass.SendToManyRequest,
                network.tdex.wallet.WalletOuterClass.SendToManyReply>(
                  this, METHODID_SEND_TO_MANY)))
          .build();
    }
  }

  /**
   * <pre>
   **
   * Service for Liquidity Providers to manage funds via wallet RPC
   * </pre>
   */
  public static final class WalletStub extends io.grpc.stub.AbstractAsyncStub<WalletStub> {
    private WalletStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WalletStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WalletStub(channel, callOptions);
    }

    /**
     * <pre>
     *GenSeed is the first method that should be used to instantiate a new tdexd
     *instance. This method allows a caller to generate a new HD Wallet.
     *Once the seed is obtained and verified by the user, the InitWallet
     *method should be used to commit the newly generated seed, and create the
     *wallet.
     * </pre>
     */
    public void genSeed(network.tdex.wallet.WalletOuterClass.GenSeedRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.GenSeedReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGenSeedMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *InitWallet is used when tdexd is starting up for the first time to fully
     *initialize the daemon and its internal wallet. At the very least a mnemonic
     *and a wallet password must be provided. This will be used to encrypt sensitive
     *material on disk. Alternatively, this can be used along with the GenSeed RPC
     *to obtain a seed, then present it to the user. Once it has been verified by
     *the user, the seed can be fed into this RPC in order to commit the new wallet.
     * </pre>
     */
    public void initWallet(network.tdex.wallet.WalletOuterClass.InitWalletRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.InitWalletReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getInitWalletMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *UnlockWallet is used at startup of tdexd to provide a password to unlock
     *the wallet database.
     * </pre>
     */
    public void unlockWallet(network.tdex.wallet.WalletOuterClass.UnlockWalletRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.UnlockWalletReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUnlockWalletMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *ChangePassword changes the password of the encrypted wallet. This will
     *automatically unlock the wallet database if successful.
     * </pre>
     */
    public void changePassword(network.tdex.wallet.WalletOuterClass.ChangePasswordRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.ChangePasswordReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getChangePasswordMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *WalletAddress returns a Liquid confidential p2wpkh address (BLECH32)
     * </pre>
     */
    public void walletAddress(network.tdex.wallet.WalletOuterClass.WalletAddressRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletAddressReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getWalletAddressMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *WalletBalance returns total unspent outputs (confirmed and unconfirmed), all
     *confirmed unspent outputs and all unconfirmed unspent outputs under control
     *of the wallet.
     * </pre>
     */
    public void walletBalance(network.tdex.wallet.WalletOuterClass.WalletBalanceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletBalanceReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getWalletBalanceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     *SendToMany sends funds to many outputs 
     * </pre>
     */
    public void sendToMany(network.tdex.wallet.WalletOuterClass.SendToManyRequest request,
        io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.SendToManyReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSendToManyMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   **
   * Service for Liquidity Providers to manage funds via wallet RPC
   * </pre>
   */
  public static final class WalletBlockingStub extends io.grpc.stub.AbstractBlockingStub<WalletBlockingStub> {
    private WalletBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WalletBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WalletBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     *GenSeed is the first method that should be used to instantiate a new tdexd
     *instance. This method allows a caller to generate a new HD Wallet.
     *Once the seed is obtained and verified by the user, the InitWallet
     *method should be used to commit the newly generated seed, and create the
     *wallet.
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.GenSeedReply genSeed(network.tdex.wallet.WalletOuterClass.GenSeedRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGenSeedMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *InitWallet is used when tdexd is starting up for the first time to fully
     *initialize the daemon and its internal wallet. At the very least a mnemonic
     *and a wallet password must be provided. This will be used to encrypt sensitive
     *material on disk. Alternatively, this can be used along with the GenSeed RPC
     *to obtain a seed, then present it to the user. Once it has been verified by
     *the user, the seed can be fed into this RPC in order to commit the new wallet.
     * </pre>
     */
    public java.util.Iterator<network.tdex.wallet.WalletOuterClass.InitWalletReply> initWallet(
        network.tdex.wallet.WalletOuterClass.InitWalletRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getInitWalletMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *UnlockWallet is used at startup of tdexd to provide a password to unlock
     *the wallet database.
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.UnlockWalletReply unlockWallet(network.tdex.wallet.WalletOuterClass.UnlockWalletRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUnlockWalletMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *ChangePassword changes the password of the encrypted wallet. This will
     *automatically unlock the wallet database if successful.
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.ChangePasswordReply changePassword(network.tdex.wallet.WalletOuterClass.ChangePasswordRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getChangePasswordMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *WalletAddress returns a Liquid confidential p2wpkh address (BLECH32)
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.WalletAddressReply walletAddress(network.tdex.wallet.WalletOuterClass.WalletAddressRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getWalletAddressMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *WalletBalance returns total unspent outputs (confirmed and unconfirmed), all
     *confirmed unspent outputs and all unconfirmed unspent outputs under control
     *of the wallet.
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.WalletBalanceReply walletBalance(network.tdex.wallet.WalletOuterClass.WalletBalanceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getWalletBalanceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     *SendToMany sends funds to many outputs 
     * </pre>
     */
    public network.tdex.wallet.WalletOuterClass.SendToManyReply sendToMany(network.tdex.wallet.WalletOuterClass.SendToManyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSendToManyMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   **
   * Service for Liquidity Providers to manage funds via wallet RPC
   * </pre>
   */
  public static final class WalletFutureStub extends io.grpc.stub.AbstractFutureStub<WalletFutureStub> {
    private WalletFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WalletFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new WalletFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     *GenSeed is the first method that should be used to instantiate a new tdexd
     *instance. This method allows a caller to generate a new HD Wallet.
     *Once the seed is obtained and verified by the user, the InitWallet
     *method should be used to commit the newly generated seed, and create the
     *wallet.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.GenSeedReply> genSeed(
        network.tdex.wallet.WalletOuterClass.GenSeedRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGenSeedMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *UnlockWallet is used at startup of tdexd to provide a password to unlock
     *the wallet database.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.UnlockWalletReply> unlockWallet(
        network.tdex.wallet.WalletOuterClass.UnlockWalletRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUnlockWalletMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *ChangePassword changes the password of the encrypted wallet. This will
     *automatically unlock the wallet database if successful.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.ChangePasswordReply> changePassword(
        network.tdex.wallet.WalletOuterClass.ChangePasswordRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getChangePasswordMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *WalletAddress returns a Liquid confidential p2wpkh address (BLECH32)
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.WalletAddressReply> walletAddress(
        network.tdex.wallet.WalletOuterClass.WalletAddressRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getWalletAddressMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *WalletBalance returns total unspent outputs (confirmed and unconfirmed), all
     *confirmed unspent outputs and all unconfirmed unspent outputs under control
     *of the wallet.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.WalletBalanceReply> walletBalance(
        network.tdex.wallet.WalletOuterClass.WalletBalanceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getWalletBalanceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     *SendToMany sends funds to many outputs 
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.wallet.WalletOuterClass.SendToManyReply> sendToMany(
        network.tdex.wallet.WalletOuterClass.SendToManyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSendToManyMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GEN_SEED = 0;
  private static final int METHODID_INIT_WALLET = 1;
  private static final int METHODID_UNLOCK_WALLET = 2;
  private static final int METHODID_CHANGE_PASSWORD = 3;
  private static final int METHODID_WALLET_ADDRESS = 4;
  private static final int METHODID_WALLET_BALANCE = 5;
  private static final int METHODID_SEND_TO_MANY = 6;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final WalletImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(WalletImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GEN_SEED:
          serviceImpl.genSeed((network.tdex.wallet.WalletOuterClass.GenSeedRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.GenSeedReply>) responseObserver);
          break;
        case METHODID_INIT_WALLET:
          serviceImpl.initWallet((network.tdex.wallet.WalletOuterClass.InitWalletRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.InitWalletReply>) responseObserver);
          break;
        case METHODID_UNLOCK_WALLET:
          serviceImpl.unlockWallet((network.tdex.wallet.WalletOuterClass.UnlockWalletRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.UnlockWalletReply>) responseObserver);
          break;
        case METHODID_CHANGE_PASSWORD:
          serviceImpl.changePassword((network.tdex.wallet.WalletOuterClass.ChangePasswordRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.ChangePasswordReply>) responseObserver);
          break;
        case METHODID_WALLET_ADDRESS:
          serviceImpl.walletAddress((network.tdex.wallet.WalletOuterClass.WalletAddressRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletAddressReply>) responseObserver);
          break;
        case METHODID_WALLET_BALANCE:
          serviceImpl.walletBalance((network.tdex.wallet.WalletOuterClass.WalletBalanceRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.WalletBalanceReply>) responseObserver);
          break;
        case METHODID_SEND_TO_MANY:
          serviceImpl.sendToMany((network.tdex.wallet.WalletOuterClass.SendToManyRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.wallet.WalletOuterClass.SendToManyReply>) responseObserver);
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

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (WalletGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .addMethod(getGenSeedMethod())
              .addMethod(getInitWalletMethod())
              .addMethod(getUnlockWalletMethod())
              .addMethod(getChangePasswordMethod())
              .addMethod(getWalletAddressMethod())
              .addMethod(getWalletBalanceMethod())
              .addMethod(getSendToManyMethod())
              .build();
        }
      }
    }
    return result;
  }
}
