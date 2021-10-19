package network.tdex.trade;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.38.0)",
    comments = "Source: trade.proto")
public final class TradeGrpc {

  private TradeGrpc() {}

  public static final String SERVICE_NAME = "Trade";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketsRequest,
      network.tdex.trade.TradeOuterClass.MarketsReply> getMarketsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Markets",
      requestType = network.tdex.trade.TradeOuterClass.MarketsRequest.class,
      responseType = network.tdex.trade.TradeOuterClass.MarketsReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketsRequest,
      network.tdex.trade.TradeOuterClass.MarketsReply> getMarketsMethod() {
    io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketsRequest, network.tdex.trade.TradeOuterClass.MarketsReply> getMarketsMethod;
    if ((getMarketsMethod = TradeGrpc.getMarketsMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getMarketsMethod = TradeGrpc.getMarketsMethod) == null) {
          TradeGrpc.getMarketsMethod = getMarketsMethod =
              io.grpc.MethodDescriptor.<network.tdex.trade.TradeOuterClass.MarketsRequest, network.tdex.trade.TradeOuterClass.MarketsReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Markets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.MarketsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.MarketsReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("Markets"))
              .build();
        }
      }
    }
    return getMarketsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.BalancesRequest,
      network.tdex.trade.TradeOuterClass.BalancesReply> getBalancesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Balances",
      requestType = network.tdex.trade.TradeOuterClass.BalancesRequest.class,
      responseType = network.tdex.trade.TradeOuterClass.BalancesReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.BalancesRequest,
      network.tdex.trade.TradeOuterClass.BalancesReply> getBalancesMethod() {
    io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.BalancesRequest, network.tdex.trade.TradeOuterClass.BalancesReply> getBalancesMethod;
    if ((getBalancesMethod = TradeGrpc.getBalancesMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getBalancesMethod = TradeGrpc.getBalancesMethod) == null) {
          TradeGrpc.getBalancesMethod = getBalancesMethod =
              io.grpc.MethodDescriptor.<network.tdex.trade.TradeOuterClass.BalancesRequest, network.tdex.trade.TradeOuterClass.BalancesReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Balances"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.BalancesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.BalancesReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("Balances"))
              .build();
        }
      }
    }
    return getBalancesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketPriceRequest,
      network.tdex.trade.TradeOuterClass.MarketPriceReply> getMarketPriceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketPrice",
      requestType = network.tdex.trade.TradeOuterClass.MarketPriceRequest.class,
      responseType = network.tdex.trade.TradeOuterClass.MarketPriceReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketPriceRequest,
      network.tdex.trade.TradeOuterClass.MarketPriceReply> getMarketPriceMethod() {
    io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.MarketPriceRequest, network.tdex.trade.TradeOuterClass.MarketPriceReply> getMarketPriceMethod;
    if ((getMarketPriceMethod = TradeGrpc.getMarketPriceMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getMarketPriceMethod = TradeGrpc.getMarketPriceMethod) == null) {
          TradeGrpc.getMarketPriceMethod = getMarketPriceMethod =
              io.grpc.MethodDescriptor.<network.tdex.trade.TradeOuterClass.MarketPriceRequest, network.tdex.trade.TradeOuterClass.MarketPriceReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketPrice"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.MarketPriceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.MarketPriceReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("MarketPrice"))
              .build();
        }
      }
    }
    return getMarketPriceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeProposeRequest,
      network.tdex.trade.TradeOuterClass.TradeProposeReply> getTradeProposeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradePropose",
      requestType = network.tdex.trade.TradeOuterClass.TradeProposeRequest.class,
      responseType = network.tdex.trade.TradeOuterClass.TradeProposeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeProposeRequest,
      network.tdex.trade.TradeOuterClass.TradeProposeReply> getTradeProposeMethod() {
    io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeProposeRequest, network.tdex.trade.TradeOuterClass.TradeProposeReply> getTradeProposeMethod;
    if ((getTradeProposeMethod = TradeGrpc.getTradeProposeMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getTradeProposeMethod = TradeGrpc.getTradeProposeMethod) == null) {
          TradeGrpc.getTradeProposeMethod = getTradeProposeMethod =
              io.grpc.MethodDescriptor.<network.tdex.trade.TradeOuterClass.TradeProposeRequest, network.tdex.trade.TradeOuterClass.TradeProposeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradePropose"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.TradeProposeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.TradeProposeReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("TradePropose"))
              .build();
        }
      }
    }
    return getTradeProposeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeCompleteRequest,
      network.tdex.trade.TradeOuterClass.TradeCompleteReply> getTradeCompleteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradeComplete",
      requestType = network.tdex.trade.TradeOuterClass.TradeCompleteRequest.class,
      responseType = network.tdex.trade.TradeOuterClass.TradeCompleteReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeCompleteRequest,
      network.tdex.trade.TradeOuterClass.TradeCompleteReply> getTradeCompleteMethod() {
    io.grpc.MethodDescriptor<network.tdex.trade.TradeOuterClass.TradeCompleteRequest, network.tdex.trade.TradeOuterClass.TradeCompleteReply> getTradeCompleteMethod;
    if ((getTradeCompleteMethod = TradeGrpc.getTradeCompleteMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getTradeCompleteMethod = TradeGrpc.getTradeCompleteMethod) == null) {
          TradeGrpc.getTradeCompleteMethod = getTradeCompleteMethod =
              io.grpc.MethodDescriptor.<network.tdex.trade.TradeOuterClass.TradeCompleteRequest, network.tdex.trade.TradeOuterClass.TradeCompleteReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradeComplete"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.TradeCompleteRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.trade.TradeOuterClass.TradeCompleteReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("TradeComplete"))
              .build();
        }
      }
    }
    return getTradeCompleteMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TradeStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradeStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradeStub>() {
        @java.lang.Override
        public TradeStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradeStub(channel, callOptions);
        }
      };
    return TradeStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TradeBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradeBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradeBlockingStub>() {
        @java.lang.Override
        public TradeBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradeBlockingStub(channel, callOptions);
        }
      };
    return TradeBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TradeFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradeFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradeFutureStub>() {
        @java.lang.Override
        public TradeFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradeFutureStub(channel, callOptions);
        }
      };
    return TradeFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class TradeImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Markets: List all the markets open for trading.
     * </pre>
     */
    public void markets(network.tdex.trade.TradeOuterClass.MarketsRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketsReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public void balances(network.tdex.trade.TradeOuterClass.BalancesRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.BalancesReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBalancesMethod(), responseObserver);
    }

    /**
     * <pre>
     * MarketPrice: Gets the current market price. In case of AMM startegy, the
     * trade type and
     * the amount of asset to be either sent or received.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void marketPrice(network.tdex.trade.TradeOuterClass.MarketPriceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketPriceReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketPriceMethod(), responseObserver);
    }

    /**
     * <pre>
     * TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void tradePropose(network.tdex.trade.TradeOuterClass.TradeProposeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeProposeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradeProposeMethod(), responseObserver);
    }

    /**
     * <pre>
     * TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public void tradeComplete(network.tdex.trade.TradeOuterClass.TradeCompleteRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeCompleteReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradeCompleteMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getMarketsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.trade.TradeOuterClass.MarketsRequest,
                network.tdex.trade.TradeOuterClass.MarketsReply>(
                  this, METHODID_MARKETS)))
          .addMethod(
            getBalancesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.trade.TradeOuterClass.BalancesRequest,
                network.tdex.trade.TradeOuterClass.BalancesReply>(
                  this, METHODID_BALANCES)))
          .addMethod(
            getMarketPriceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.trade.TradeOuterClass.MarketPriceRequest,
                network.tdex.trade.TradeOuterClass.MarketPriceReply>(
                  this, METHODID_MARKET_PRICE)))
          .addMethod(
            getTradeProposeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.trade.TradeOuterClass.TradeProposeRequest,
                network.tdex.trade.TradeOuterClass.TradeProposeReply>(
                  this, METHODID_TRADE_PROPOSE)))
          .addMethod(
            getTradeCompleteMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.trade.TradeOuterClass.TradeCompleteRequest,
                network.tdex.trade.TradeOuterClass.TradeCompleteReply>(
                  this, METHODID_TRADE_COMPLETE)))
          .build();
    }
  }

  /**
   */
  public static final class TradeStub extends io.grpc.stub.AbstractAsyncStub<TradeStub> {
    private TradeStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradeStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradeStub(channel, callOptions);
    }

    /**
     * <pre>
     * Markets: List all the markets open for trading.
     * </pre>
     */
    public void markets(network.tdex.trade.TradeOuterClass.MarketsRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketsReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public void balances(network.tdex.trade.TradeOuterClass.BalancesRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.BalancesReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBalancesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * MarketPrice: Gets the current market price. In case of AMM startegy, the
     * trade type and
     * the amount of asset to be either sent or received.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void marketPrice(network.tdex.trade.TradeOuterClass.MarketPriceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketPriceReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketPriceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void tradePropose(network.tdex.trade.TradeOuterClass.TradeProposeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeProposeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradeProposeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public void tradeComplete(network.tdex.trade.TradeOuterClass.TradeCompleteRequest request,
        io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeCompleteReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradeCompleteMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class TradeBlockingStub extends io.grpc.stub.AbstractBlockingStub<TradeBlockingStub> {
    private TradeBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradeBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradeBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Markets: List all the markets open for trading.
     * </pre>
     */
    public network.tdex.trade.TradeOuterClass.MarketsReply markets(network.tdex.trade.TradeOuterClass.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public network.tdex.trade.TradeOuterClass.BalancesReply balances(network.tdex.trade.TradeOuterClass.BalancesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBalancesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * MarketPrice: Gets the current market price. In case of AMM startegy, the
     * trade type and
     * the amount of asset to be either sent or received.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public network.tdex.trade.TradeOuterClass.MarketPriceReply marketPrice(network.tdex.trade.TradeOuterClass.MarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketPriceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public network.tdex.trade.TradeOuterClass.TradeProposeReply tradePropose(network.tdex.trade.TradeOuterClass.TradeProposeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradeProposeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public network.tdex.trade.TradeOuterClass.TradeCompleteReply tradeComplete(network.tdex.trade.TradeOuterClass.TradeCompleteRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradeCompleteMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class TradeFutureStub extends io.grpc.stub.AbstractFutureStub<TradeFutureStub> {
    private TradeFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradeFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradeFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Markets: List all the markets open for trading.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.trade.TradeOuterClass.MarketsReply> markets(
        network.tdex.trade.TradeOuterClass.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.trade.TradeOuterClass.BalancesReply> balances(
        network.tdex.trade.TradeOuterClass.BalancesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBalancesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * MarketPrice: Gets the current market price. In case of AMM startegy, the
     * trade type and
     * the amount of asset to be either sent or received.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.trade.TradeOuterClass.MarketPriceReply> marketPrice(
        network.tdex.trade.TradeOuterClass.MarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketPriceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.trade.TradeOuterClass.TradeProposeReply> tradePropose(
        network.tdex.trade.TradeOuterClass.TradeProposeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradeProposeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.trade.TradeOuterClass.TradeCompleteReply> tradeComplete(
        network.tdex.trade.TradeOuterClass.TradeCompleteRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradeCompleteMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_MARKETS = 0;
  private static final int METHODID_BALANCES = 1;
  private static final int METHODID_MARKET_PRICE = 2;
  private static final int METHODID_TRADE_PROPOSE = 3;
  private static final int METHODID_TRADE_COMPLETE = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TradeImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TradeImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_MARKETS:
          serviceImpl.markets((network.tdex.trade.TradeOuterClass.MarketsRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketsReply>) responseObserver);
          break;
        case METHODID_BALANCES:
          serviceImpl.balances((network.tdex.trade.TradeOuterClass.BalancesRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.BalancesReply>) responseObserver);
          break;
        case METHODID_MARKET_PRICE:
          serviceImpl.marketPrice((network.tdex.trade.TradeOuterClass.MarketPriceRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.MarketPriceReply>) responseObserver);
          break;
        case METHODID_TRADE_PROPOSE:
          serviceImpl.tradePropose((network.tdex.trade.TradeOuterClass.TradeProposeRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeProposeReply>) responseObserver);
          break;
        case METHODID_TRADE_COMPLETE:
          serviceImpl.tradeComplete((network.tdex.trade.TradeOuterClass.TradeCompleteRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.trade.TradeOuterClass.TradeCompleteReply>) responseObserver);
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

  private static abstract class TradeBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TradeBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return network.tdex.trade.TradeOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Trade");
    }
  }

  private static final class TradeFileDescriptorSupplier
      extends TradeBaseDescriptorSupplier {
    TradeFileDescriptorSupplier() {}
  }

  private static final class TradeMethodDescriptorSupplier
      extends TradeBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TradeMethodDescriptorSupplier(String methodName) {
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
      synchronized (TradeGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TradeFileDescriptorSupplier())
              .addMethod(getMarketsMethod())
              .addMethod(getBalancesMethod())
              .addMethod(getMarketPriceMethod())
              .addMethod(getTradeProposeMethod())
              .addMethod(getTradeCompleteMethod())
              .build();
        }
      }
    }
    return result;
  }
}
