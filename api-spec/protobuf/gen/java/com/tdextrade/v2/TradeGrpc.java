package com.tdextrade.v2;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.42.1)",
    comments = "Source: v2/trade.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class TradeGrpc {

  private TradeGrpc() {}

  public static final String SERVICE_NAME = "tdextrade.v2.Trade";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.MarketsRequest,
      com.tdextrade.v2.MarketsReply> getMarketsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Markets",
      requestType = com.tdextrade.v2.MarketsRequest.class,
      responseType = com.tdextrade.v2.MarketsReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.MarketsRequest,
      com.tdextrade.v2.MarketsReply> getMarketsMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.MarketsRequest, com.tdextrade.v2.MarketsReply> getMarketsMethod;
    if ((getMarketsMethod = TradeGrpc.getMarketsMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getMarketsMethod = TradeGrpc.getMarketsMethod) == null) {
          TradeGrpc.getMarketsMethod = getMarketsMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.MarketsRequest, com.tdextrade.v2.MarketsReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Markets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.MarketsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.MarketsReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("Markets"))
              .build();
        }
      }
    }
    return getMarketsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.BalancesRequest,
      com.tdextrade.v2.BalancesReply> getBalancesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Balances",
      requestType = com.tdextrade.v2.BalancesRequest.class,
      responseType = com.tdextrade.v2.BalancesReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.BalancesRequest,
      com.tdextrade.v2.BalancesReply> getBalancesMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.BalancesRequest, com.tdextrade.v2.BalancesReply> getBalancesMethod;
    if ((getBalancesMethod = TradeGrpc.getBalancesMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getBalancesMethod = TradeGrpc.getBalancesMethod) == null) {
          TradeGrpc.getBalancesMethod = getBalancesMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.BalancesRequest, com.tdextrade.v2.BalancesReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Balances"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.BalancesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.BalancesReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("Balances"))
              .build();
        }
      }
    }
    return getBalancesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.MarketPriceRequest,
      com.tdextrade.v2.MarketPriceReply> getMarketPriceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketPrice",
      requestType = com.tdextrade.v2.MarketPriceRequest.class,
      responseType = com.tdextrade.v2.MarketPriceReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.MarketPriceRequest,
      com.tdextrade.v2.MarketPriceReply> getMarketPriceMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.MarketPriceRequest, com.tdextrade.v2.MarketPriceReply> getMarketPriceMethod;
    if ((getMarketPriceMethod = TradeGrpc.getMarketPriceMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getMarketPriceMethod = TradeGrpc.getMarketPriceMethod) == null) {
          TradeGrpc.getMarketPriceMethod = getMarketPriceMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.MarketPriceRequest, com.tdextrade.v2.MarketPriceReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketPrice"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.MarketPriceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.MarketPriceReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("MarketPrice"))
              .build();
        }
      }
    }
    return getMarketPriceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.TradeProposeRequest,
      com.tdextrade.v2.TradeProposeReply> getTradeProposeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradePropose",
      requestType = com.tdextrade.v2.TradeProposeRequest.class,
      responseType = com.tdextrade.v2.TradeProposeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.TradeProposeRequest,
      com.tdextrade.v2.TradeProposeReply> getTradeProposeMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.TradeProposeRequest, com.tdextrade.v2.TradeProposeReply> getTradeProposeMethod;
    if ((getTradeProposeMethod = TradeGrpc.getTradeProposeMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getTradeProposeMethod = TradeGrpc.getTradeProposeMethod) == null) {
          TradeGrpc.getTradeProposeMethod = getTradeProposeMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.TradeProposeRequest, com.tdextrade.v2.TradeProposeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradePropose"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.TradeProposeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.TradeProposeReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("TradePropose"))
              .build();
        }
      }
    }
    return getTradeProposeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.ProposeTradeRequest,
      com.tdextrade.v2.ProposeTradeReply> getProposeTradeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ProposeTrade",
      requestType = com.tdextrade.v2.ProposeTradeRequest.class,
      responseType = com.tdextrade.v2.ProposeTradeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.ProposeTradeRequest,
      com.tdextrade.v2.ProposeTradeReply> getProposeTradeMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.ProposeTradeRequest, com.tdextrade.v2.ProposeTradeReply> getProposeTradeMethod;
    if ((getProposeTradeMethod = TradeGrpc.getProposeTradeMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getProposeTradeMethod = TradeGrpc.getProposeTradeMethod) == null) {
          TradeGrpc.getProposeTradeMethod = getProposeTradeMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.ProposeTradeRequest, com.tdextrade.v2.ProposeTradeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ProposeTrade"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.ProposeTradeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.ProposeTradeReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("ProposeTrade"))
              .build();
        }
      }
    }
    return getProposeTradeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.TradeCompleteRequest,
      com.tdextrade.v2.TradeCompleteReply> getTradeCompleteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradeComplete",
      requestType = com.tdextrade.v2.TradeCompleteRequest.class,
      responseType = com.tdextrade.v2.TradeCompleteReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.TradeCompleteRequest,
      com.tdextrade.v2.TradeCompleteReply> getTradeCompleteMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.TradeCompleteRequest, com.tdextrade.v2.TradeCompleteReply> getTradeCompleteMethod;
    if ((getTradeCompleteMethod = TradeGrpc.getTradeCompleteMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getTradeCompleteMethod = TradeGrpc.getTradeCompleteMethod) == null) {
          TradeGrpc.getTradeCompleteMethod = getTradeCompleteMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.TradeCompleteRequest, com.tdextrade.v2.TradeCompleteReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradeComplete"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.TradeCompleteRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.TradeCompleteReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("TradeComplete"))
              .build();
        }
      }
    }
    return getTradeCompleteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.tdextrade.v2.CompleteTradeRequest,
      com.tdextrade.v2.CompleteTradeReply> getCompleteTradeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CompleteTrade",
      requestType = com.tdextrade.v2.CompleteTradeRequest.class,
      responseType = com.tdextrade.v2.CompleteTradeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.tdextrade.v2.CompleteTradeRequest,
      com.tdextrade.v2.CompleteTradeReply> getCompleteTradeMethod() {
    io.grpc.MethodDescriptor<com.tdextrade.v2.CompleteTradeRequest, com.tdextrade.v2.CompleteTradeReply> getCompleteTradeMethod;
    if ((getCompleteTradeMethod = TradeGrpc.getCompleteTradeMethod) == null) {
      synchronized (TradeGrpc.class) {
        if ((getCompleteTradeMethod = TradeGrpc.getCompleteTradeMethod) == null) {
          TradeGrpc.getCompleteTradeMethod = getCompleteTradeMethod =
              io.grpc.MethodDescriptor.<com.tdextrade.v2.CompleteTradeRequest, com.tdextrade.v2.CompleteTradeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CompleteTrade"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.CompleteTradeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.tdextrade.v2.CompleteTradeReply.getDefaultInstance()))
              .setSchemaDescriptor(new TradeMethodDescriptorSupplier("CompleteTrade"))
              .build();
        }
      }
    }
    return getCompleteTradeMethod;
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
    public void markets(com.tdextrade.v2.MarketsRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketsReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public void balances(com.tdextrade.v2.BalancesRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.BalancesReply> responseObserver) {
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
    public void marketPrice(com.tdextrade.v2.MarketPriceRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketPriceReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketPriceMethod(), responseObserver);
    }

    /**
     * <pre>
     * DEPRECATED TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void tradePropose(com.tdextrade.v2.TradeProposeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeProposeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradeProposeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Unary RPC for TradePropose.
     * </pre>
     */
    public void proposeTrade(com.tdextrade.v2.ProposeTradeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.ProposeTradeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getProposeTradeMethod(), responseObserver);
    }

    /**
     * <pre>
     * DEPRECATED TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public void tradeComplete(com.tdextrade.v2.TradeCompleteRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeCompleteReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradeCompleteMethod(), responseObserver);
    }

    /**
     * <pre>
     * Unary RPC for TradeComplete.
     * </pre>
     */
    public void completeTrade(com.tdextrade.v2.CompleteTradeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.CompleteTradeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCompleteTradeMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getMarketsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdextrade.v2.MarketsRequest,
                com.tdextrade.v2.MarketsReply>(
                  this, METHODID_MARKETS)))
          .addMethod(
            getBalancesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdextrade.v2.BalancesRequest,
                com.tdextrade.v2.BalancesReply>(
                  this, METHODID_BALANCES)))
          .addMethod(
            getMarketPriceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdextrade.v2.MarketPriceRequest,
                com.tdextrade.v2.MarketPriceReply>(
                  this, METHODID_MARKET_PRICE)))
          .addMethod(
            getTradeProposeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                com.tdextrade.v2.TradeProposeRequest,
                com.tdextrade.v2.TradeProposeReply>(
                  this, METHODID_TRADE_PROPOSE)))
          .addMethod(
            getProposeTradeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdextrade.v2.ProposeTradeRequest,
                com.tdextrade.v2.ProposeTradeReply>(
                  this, METHODID_PROPOSE_TRADE)))
          .addMethod(
            getTradeCompleteMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                com.tdextrade.v2.TradeCompleteRequest,
                com.tdextrade.v2.TradeCompleteReply>(
                  this, METHODID_TRADE_COMPLETE)))
          .addMethod(
            getCompleteTradeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                com.tdextrade.v2.CompleteTradeRequest,
                com.tdextrade.v2.CompleteTradeReply>(
                  this, METHODID_COMPLETE_TRADE)))
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
    public void markets(com.tdextrade.v2.MarketsRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketsReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public void balances(com.tdextrade.v2.BalancesRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.BalancesReply> responseObserver) {
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
    public void marketPrice(com.tdextrade.v2.MarketPriceRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketPriceReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketPriceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DEPRECATED TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public void tradePropose(com.tdextrade.v2.TradeProposeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeProposeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getTradeProposeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Unary RPC for TradePropose.
     * </pre>
     */
    public void proposeTrade(com.tdextrade.v2.ProposeTradeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.ProposeTradeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getProposeTradeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DEPRECATED TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public void tradeComplete(com.tdextrade.v2.TradeCompleteRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeCompleteReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getTradeCompleteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Unary RPC for TradeComplete.
     * </pre>
     */
    public void completeTrade(com.tdextrade.v2.CompleteTradeRequest request,
        io.grpc.stub.StreamObserver<com.tdextrade.v2.CompleteTradeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCompleteTradeMethod(), getCallOptions()), request, responseObserver);
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
    public com.tdextrade.v2.MarketsReply markets(com.tdextrade.v2.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public com.tdextrade.v2.BalancesReply balances(com.tdextrade.v2.BalancesRequest request) {
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
    public com.tdextrade.v2.MarketPriceReply marketPrice(com.tdextrade.v2.MarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketPriceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * DEPRECATED TradePropose: Sends a swap request message containing a partial signed
     * transaction.
     * BUY = quote asset as input
     * SELL = base asset as input
     * If the type of the trade is BUY it means the base asset will be received by
     * the trader.
     * If the type of the trade is SELL it means the base asset will be sent by
     * the trader.
     * </pre>
     */
    public java.util.Iterator<com.tdextrade.v2.TradeProposeReply> tradePropose(
        com.tdextrade.v2.TradeProposeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getTradeProposeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Unary RPC for TradePropose.
     * </pre>
     */
    public com.tdextrade.v2.ProposeTradeReply proposeTrade(com.tdextrade.v2.ProposeTradeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getProposeTradeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * DEPRECATED TradeComplete: Sends the trader's counter-signed transaction to the
     * provider. If something wrong, a swap fail message is sent. It returns the
     * transaction hash of the broadcasted transaction.
     * </pre>
     */
    public java.util.Iterator<com.tdextrade.v2.TradeCompleteReply> tradeComplete(
        com.tdextrade.v2.TradeCompleteRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getTradeCompleteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Unary RPC for TradeComplete.
     * </pre>
     */
    public com.tdextrade.v2.CompleteTradeReply completeTrade(com.tdextrade.v2.CompleteTradeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCompleteTradeMethod(), getCallOptions(), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.tdextrade.v2.MarketsReply> markets(
        com.tdextrade.v2.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Balances: Gets the balances of the two current reserves in the given
     * market.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tdextrade.v2.BalancesReply> balances(
        com.tdextrade.v2.BalancesRequest request) {
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
    public com.google.common.util.concurrent.ListenableFuture<com.tdextrade.v2.MarketPriceReply> marketPrice(
        com.tdextrade.v2.MarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketPriceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Unary RPC for TradePropose.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tdextrade.v2.ProposeTradeReply> proposeTrade(
        com.tdextrade.v2.ProposeTradeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getProposeTradeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Unary RPC for TradeComplete.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tdextrade.v2.CompleteTradeReply> completeTrade(
        com.tdextrade.v2.CompleteTradeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCompleteTradeMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_MARKETS = 0;
  private static final int METHODID_BALANCES = 1;
  private static final int METHODID_MARKET_PRICE = 2;
  private static final int METHODID_TRADE_PROPOSE = 3;
  private static final int METHODID_PROPOSE_TRADE = 4;
  private static final int METHODID_TRADE_COMPLETE = 5;
  private static final int METHODID_COMPLETE_TRADE = 6;

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
          serviceImpl.markets((com.tdextrade.v2.MarketsRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketsReply>) responseObserver);
          break;
        case METHODID_BALANCES:
          serviceImpl.balances((com.tdextrade.v2.BalancesRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.BalancesReply>) responseObserver);
          break;
        case METHODID_MARKET_PRICE:
          serviceImpl.marketPrice((com.tdextrade.v2.MarketPriceRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.MarketPriceReply>) responseObserver);
          break;
        case METHODID_TRADE_PROPOSE:
          serviceImpl.tradePropose((com.tdextrade.v2.TradeProposeRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeProposeReply>) responseObserver);
          break;
        case METHODID_PROPOSE_TRADE:
          serviceImpl.proposeTrade((com.tdextrade.v2.ProposeTradeRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.ProposeTradeReply>) responseObserver);
          break;
        case METHODID_TRADE_COMPLETE:
          serviceImpl.tradeComplete((com.tdextrade.v2.TradeCompleteRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.TradeCompleteReply>) responseObserver);
          break;
        case METHODID_COMPLETE_TRADE:
          serviceImpl.completeTrade((com.tdextrade.v2.CompleteTradeRequest) request,
              (io.grpc.stub.StreamObserver<com.tdextrade.v2.CompleteTradeReply>) responseObserver);
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
      return com.tdextrade.v2.TradeProto.getDescriptor();
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
              .addMethod(getProposeTradeMethod())
              .addMethod(getTradeCompleteMethod())
              .addMethod(getCompleteTradeMethod())
              .build();
        }
      }
    }
    return result;
  }
}
