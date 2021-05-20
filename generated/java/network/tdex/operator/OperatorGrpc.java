package network.tdex.operator;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 * <pre>
 **
 * Service for operators to configure and manage a TDEX daemon
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.38.0)",
    comments = "Source: operator.proto")
public final class OperatorGrpc {

  private OperatorGrpc() {}

  public static final String SERVICE_NAME = "Operator";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositMarketRequest,
      network.tdex.operator.OperatorOuterClass.DepositMarketReply> getDepositMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DepositMarket",
      requestType = network.tdex.operator.OperatorOuterClass.DepositMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.DepositMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositMarketRequest,
      network.tdex.operator.OperatorOuterClass.DepositMarketReply> getDepositMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositMarketRequest, network.tdex.operator.OperatorOuterClass.DepositMarketReply> getDepositMarketMethod;
    if ((getDepositMarketMethod = OperatorGrpc.getDepositMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getDepositMarketMethod = OperatorGrpc.getDepositMarketMethod) == null) {
          OperatorGrpc.getDepositMarketMethod = getDepositMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.DepositMarketRequest, network.tdex.operator.OperatorOuterClass.DepositMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DepositMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DepositMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DepositMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("DepositMarket"))
              .build();
        }
      }
    }
    return getDepositMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest,
      network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> getListDepositMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListDepositMarket",
      requestType = network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ListDepositMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest,
      network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> getListDepositMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest, network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> getListDepositMarketMethod;
    if ((getListDepositMarketMethod = OperatorGrpc.getListDepositMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getListDepositMarketMethod = OperatorGrpc.getListDepositMarketMethod) == null) {
          OperatorGrpc.getListDepositMarketMethod = getListDepositMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest, network.tdex.operator.OperatorOuterClass.ListDepositMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListDepositMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListDepositMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ListDepositMarket"))
              .build();
        }
      }
    }
    return getListDepositMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest,
      network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> getDepositFeeAccountMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DepositFeeAccount",
      requestType = network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest,
      network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> getDepositFeeAccountMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest, network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> getDepositFeeAccountMethod;
    if ((getDepositFeeAccountMethod = OperatorGrpc.getDepositFeeAccountMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getDepositFeeAccountMethod = OperatorGrpc.getDepositFeeAccountMethod) == null) {
          OperatorGrpc.getDepositFeeAccountMethod = getDepositFeeAccountMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest, network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DepositFeeAccount"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("DepositFeeAccount"))
              .build();
        }
      }
    }
    return getDepositFeeAccountMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest,
      network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> getBalanceFeeAccountMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "BalanceFeeAccount",
      requestType = network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest,
      network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> getBalanceFeeAccountMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest, network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> getBalanceFeeAccountMethod;
    if ((getBalanceFeeAccountMethod = OperatorGrpc.getBalanceFeeAccountMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getBalanceFeeAccountMethod = OperatorGrpc.getBalanceFeeAccountMethod) == null) {
          OperatorGrpc.getBalanceFeeAccountMethod = getBalanceFeeAccountMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest, network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "BalanceFeeAccount"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("BalanceFeeAccount"))
              .build();
        }
      }
    }
    return getBalanceFeeAccountMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest,
      network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> getClaimMarketDepositMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ClaimMarketDeposit",
      requestType = network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest,
      network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> getClaimMarketDepositMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest, network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> getClaimMarketDepositMethod;
    if ((getClaimMarketDepositMethod = OperatorGrpc.getClaimMarketDepositMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getClaimMarketDepositMethod = OperatorGrpc.getClaimMarketDepositMethod) == null) {
          OperatorGrpc.getClaimMarketDepositMethod = getClaimMarketDepositMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest, network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ClaimMarketDeposit"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ClaimMarketDeposit"))
              .build();
        }
      }
    }
    return getClaimMarketDepositMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest,
      network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> getClaimFeeDepositMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ClaimFeeDeposit",
      requestType = network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest,
      network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> getClaimFeeDepositMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest, network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> getClaimFeeDepositMethod;
    if ((getClaimFeeDepositMethod = OperatorGrpc.getClaimFeeDepositMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getClaimFeeDepositMethod = OperatorGrpc.getClaimFeeDepositMethod) == null) {
          OperatorGrpc.getClaimFeeDepositMethod = getClaimFeeDepositMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest, network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ClaimFeeDeposit"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ClaimFeeDeposit"))
              .build();
        }
      }
    }
    return getClaimFeeDepositMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.OpenMarketRequest,
      network.tdex.operator.OperatorOuterClass.OpenMarketReply> getOpenMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OpenMarket",
      requestType = network.tdex.operator.OperatorOuterClass.OpenMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.OpenMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.OpenMarketRequest,
      network.tdex.operator.OperatorOuterClass.OpenMarketReply> getOpenMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.OpenMarketRequest, network.tdex.operator.OperatorOuterClass.OpenMarketReply> getOpenMarketMethod;
    if ((getOpenMarketMethod = OperatorGrpc.getOpenMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getOpenMarketMethod = OperatorGrpc.getOpenMarketMethod) == null) {
          OperatorGrpc.getOpenMarketMethod = getOpenMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.OpenMarketRequest, network.tdex.operator.OperatorOuterClass.OpenMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OpenMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.OpenMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.OpenMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("OpenMarket"))
              .build();
        }
      }
    }
    return getOpenMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.CloseMarketRequest,
      network.tdex.operator.OperatorOuterClass.CloseMarketReply> getCloseMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CloseMarket",
      requestType = network.tdex.operator.OperatorOuterClass.CloseMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.CloseMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.CloseMarketRequest,
      network.tdex.operator.OperatorOuterClass.CloseMarketReply> getCloseMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.CloseMarketRequest, network.tdex.operator.OperatorOuterClass.CloseMarketReply> getCloseMarketMethod;
    if ((getCloseMarketMethod = OperatorGrpc.getCloseMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getCloseMarketMethod = OperatorGrpc.getCloseMarketMethod) == null) {
          OperatorGrpc.getCloseMarketMethod = getCloseMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.CloseMarketRequest, network.tdex.operator.OperatorOuterClass.CloseMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CloseMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.CloseMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.CloseMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("CloseMarket"))
              .build();
        }
      }
    }
    return getCloseMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListMarketRequest,
      network.tdex.operator.OperatorOuterClass.ListMarketReply> getListMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListMarket",
      requestType = network.tdex.operator.OperatorOuterClass.ListMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ListMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListMarketRequest,
      network.tdex.operator.OperatorOuterClass.ListMarketReply> getListMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListMarketRequest, network.tdex.operator.OperatorOuterClass.ListMarketReply> getListMarketMethod;
    if ((getListMarketMethod = OperatorGrpc.getListMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getListMarketMethod = OperatorGrpc.getListMarketMethod) == null) {
          OperatorGrpc.getListMarketMethod = getListMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ListMarketRequest, network.tdex.operator.OperatorOuterClass.ListMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ListMarket"))
              .build();
        }
      }
    }
    return getListMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketPercentageFeeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateMarketPercentageFee",
      requestType = network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketPercentageFeeMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketPercentageFeeMethod;
    if ((getUpdateMarketPercentageFeeMethod = OperatorGrpc.getUpdateMarketPercentageFeeMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getUpdateMarketPercentageFeeMethod = OperatorGrpc.getUpdateMarketPercentageFeeMethod) == null) {
          OperatorGrpc.getUpdateMarketPercentageFeeMethod = getUpdateMarketPercentageFeeMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateMarketPercentageFee"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("UpdateMarketPercentageFee"))
              .build();
        }
      }
    }
    return getUpdateMarketPercentageFeeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketFixedFeeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateMarketFixedFee",
      requestType = network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketFixedFeeMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> getUpdateMarketFixedFeeMethod;
    if ((getUpdateMarketFixedFeeMethod = OperatorGrpc.getUpdateMarketFixedFeeMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getUpdateMarketFixedFeeMethod = OperatorGrpc.getUpdateMarketFixedFeeMethod) == null) {
          OperatorGrpc.getUpdateMarketFixedFeeMethod = getUpdateMarketFixedFeeMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateMarketFixedFee"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("UpdateMarketFixedFee"))
              .build();
        }
      }
    }
    return getUpdateMarketFixedFeeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> getUpdateMarketPriceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateMarketPrice",
      requestType = network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> getUpdateMarketPriceMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> getUpdateMarketPriceMethod;
    if ((getUpdateMarketPriceMethod = OperatorGrpc.getUpdateMarketPriceMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getUpdateMarketPriceMethod = OperatorGrpc.getUpdateMarketPriceMethod) == null) {
          OperatorGrpc.getUpdateMarketPriceMethod = getUpdateMarketPriceMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateMarketPrice"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("UpdateMarketPrice"))
              .build();
        }
      }
    }
    return getUpdateMarketPriceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> getUpdateMarketStrategyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateMarketStrategy",
      requestType = network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest,
      network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> getUpdateMarketStrategyMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> getUpdateMarketStrategyMethod;
    if ((getUpdateMarketStrategyMethod = OperatorGrpc.getUpdateMarketStrategyMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getUpdateMarketStrategyMethod = OperatorGrpc.getUpdateMarketStrategyMethod) == null) {
          OperatorGrpc.getUpdateMarketStrategyMethod = getUpdateMarketStrategyMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest, network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateMarketStrategy"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("UpdateMarketStrategy"))
              .build();
        }
      }
    }
    return getUpdateMarketStrategyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest,
      network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> getWithdrawMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "WithdrawMarket",
      requestType = network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.WithdrawMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest,
      network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> getWithdrawMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest, network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> getWithdrawMarketMethod;
    if ((getWithdrawMarketMethod = OperatorGrpc.getWithdrawMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getWithdrawMarketMethod = OperatorGrpc.getWithdrawMarketMethod) == null) {
          OperatorGrpc.getWithdrawMarketMethod = getWithdrawMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest, network.tdex.operator.OperatorOuterClass.WithdrawMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "WithdrawMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.WithdrawMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("WithdrawMarket"))
              .build();
        }
      }
    }
    return getWithdrawMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListTradesRequest,
      network.tdex.operator.OperatorOuterClass.ListTradesReply> getListTradesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListTrades",
      requestType = network.tdex.operator.OperatorOuterClass.ListTradesRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ListTradesReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListTradesRequest,
      network.tdex.operator.OperatorOuterClass.ListTradesReply> getListTradesMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListTradesRequest, network.tdex.operator.OperatorOuterClass.ListTradesReply> getListTradesMethod;
    if ((getListTradesMethod = OperatorGrpc.getListTradesMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getListTradesMethod = OperatorGrpc.getListTradesMethod) == null) {
          OperatorGrpc.getListTradesMethod = getListTradesMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ListTradesRequest, network.tdex.operator.OperatorOuterClass.ListTradesReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListTrades"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListTradesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListTradesReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ListTrades"))
              .build();
        }
      }
    }
    return getListTradesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest,
      network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> getReportMarketFeeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ReportMarketFee",
      requestType = network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest,
      network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> getReportMarketFeeMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest, network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> getReportMarketFeeMethod;
    if ((getReportMarketFeeMethod = OperatorGrpc.getReportMarketFeeMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getReportMarketFeeMethod = OperatorGrpc.getReportMarketFeeMethod) == null) {
          OperatorGrpc.getReportMarketFeeMethod = getReportMarketFeeMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest, network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ReportMarketFee"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ReportMarketFee"))
              .build();
        }
      }
    }
    return getReportMarketFeeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest,
      network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> getReloadUtxosMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ReloadUtxos",
      requestType = network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ReloadUtxosReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest,
      network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> getReloadUtxosMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest, network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> getReloadUtxosMethod;
    if ((getReloadUtxosMethod = OperatorGrpc.getReloadUtxosMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getReloadUtxosMethod = OperatorGrpc.getReloadUtxosMethod) == null) {
          OperatorGrpc.getReloadUtxosMethod = getReloadUtxosMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest, network.tdex.operator.OperatorOuterClass.ReloadUtxosReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ReloadUtxos"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ReloadUtxosReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ReloadUtxos"))
              .build();
        }
      }
    }
    return getReloadUtxosMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListUtxosRequest,
      network.tdex.operator.OperatorOuterClass.ListUtxosReply> getListUtxosMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListUtxos",
      requestType = network.tdex.operator.OperatorOuterClass.ListUtxosRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.ListUtxosReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListUtxosRequest,
      network.tdex.operator.OperatorOuterClass.ListUtxosReply> getListUtxosMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.ListUtxosRequest, network.tdex.operator.OperatorOuterClass.ListUtxosReply> getListUtxosMethod;
    if ((getListUtxosMethod = OperatorGrpc.getListUtxosMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getListUtxosMethod = OperatorGrpc.getListUtxosMethod) == null) {
          OperatorGrpc.getListUtxosMethod = getListUtxosMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.ListUtxosRequest, network.tdex.operator.OperatorOuterClass.ListUtxosReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListUtxos"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListUtxosRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.ListUtxosReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("ListUtxos"))
              .build();
        }
      }
    }
    return getListUtxosMethod;
  }

  private static volatile io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DropMarketRequest,
      network.tdex.operator.OperatorOuterClass.DropMarketReply> getDropMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DropMarket",
      requestType = network.tdex.operator.OperatorOuterClass.DropMarketRequest.class,
      responseType = network.tdex.operator.OperatorOuterClass.DropMarketReply.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DropMarketRequest,
      network.tdex.operator.OperatorOuterClass.DropMarketReply> getDropMarketMethod() {
    io.grpc.MethodDescriptor<network.tdex.operator.OperatorOuterClass.DropMarketRequest, network.tdex.operator.OperatorOuterClass.DropMarketReply> getDropMarketMethod;
    if ((getDropMarketMethod = OperatorGrpc.getDropMarketMethod) == null) {
      synchronized (OperatorGrpc.class) {
        if ((getDropMarketMethod = OperatorGrpc.getDropMarketMethod) == null) {
          OperatorGrpc.getDropMarketMethod = getDropMarketMethod =
              io.grpc.MethodDescriptor.<network.tdex.operator.OperatorOuterClass.DropMarketRequest, network.tdex.operator.OperatorOuterClass.DropMarketReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DropMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DropMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  network.tdex.operator.OperatorOuterClass.DropMarketReply.getDefaultInstance()))
              .setSchemaDescriptor(new OperatorMethodDescriptorSupplier("DropMarket"))
              .build();
        }
      }
    }
    return getDropMarketMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static OperatorStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OperatorStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OperatorStub>() {
        @java.lang.Override
        public OperatorStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OperatorStub(channel, callOptions);
        }
      };
    return OperatorStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static OperatorBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OperatorBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OperatorBlockingStub>() {
        @java.lang.Override
        public OperatorBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OperatorBlockingStub(channel, callOptions);
        }
      };
    return OperatorBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static OperatorFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<OperatorFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<OperatorFutureStub>() {
        @java.lang.Override
        public OperatorFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new OperatorFutureStub(channel, callOptions);
        }
      };
    return OperatorFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   **
   * Service for operators to configure and manage a TDEX daemon
   * </pre>
   */
  public static abstract class OperatorImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Returns a new derived address for the given market.
     * If market field is empty, a new Market is created and MUST be initialized.
     * </pre>
     */
    public void depositMarket(network.tdex.operator.OperatorOuterClass.DepositMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDepositMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Returns the list of previously generated addresses for the given market.
     * </pre>
     */
    public void listDepositMarket(network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListDepositMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Returns a new derived address from the fee account.
     * This is only used to deposit some LBTC to subsidize blockchain fees.
     * </pre>
     */
    public void depositFeeAccount(network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDepositFeeAccountMethod(), responseObserver);
    }

    /**
     * <pre>
     * Returns the aggregated balance of LBTC held in the fee account.
     * </pre>
     */
    public void balanceFeeAccount(network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getBalanceFeeAccountMethod(), responseObserver);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund a new market.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public void claimMarketDeposit(network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getClaimMarketDepositMethod(), responseObserver);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund the fee account.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public void claimFeeDeposit(network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getClaimFeeDepositMethod(), responseObserver);
    }

    /**
     * <pre>
     * Makes the given market tradable
     * </pre>
     */
    public void openMarket(network.tdex.operator.OperatorOuterClass.OpenMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.OpenMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOpenMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Makes the given market NOT tradabale
     * </pre>
     */
    public void closeMarket(network.tdex.operator.OperatorOuterClass.CloseMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.CloseMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCloseMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get extended details for each markets either open, closed or to be funded.
     * </pre>
     */
    public void listMarket(network.tdex.operator.OperatorOuterClass.ListMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Changes the Liquidity Provider percentage fee for the given market. It 
     * should be express in basis point. To change the fee on each swap from 
     * (current) 0.25% to 1% you need to pass down 100 The Market MUST be closed 
     * before doing this change. It's also possible to remove the percentage fee
     * by setting it to 0.
     * </pre>
     */
    public void updateMarketPercentageFee(network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMarketPercentageFeeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Changes the Liquidity provider fixed fees for the given market.
     * They should be expressed in satoshis for both assets of the market.
     * To remove a non-null fixed fee, it's enough to set the fields of the 
     * request to 0.
     * </pre>
     */
    public void updateMarketFixedFee(network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMarketFixedFeeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Manually updates the price for the given market
     * </pre>
     */
    public void updateMarketPrice(network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMarketPriceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Updates the current market making strategy, either using an automated
     * market making formula or a pluggable price feed
     * </pre>
     */
    public void updateMarketStrategy(network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateMarketStrategyMethod(), responseObserver);
    }

    /**
     * <pre>
     * WithdrawMarket allows the operator to withdraw to external wallet funds
     * from a specific market. The Market MUST be closed before doing this change.
     * </pre>
     */
    public void withdrawMarket(network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getWithdrawMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Returs all the trades processed by the daemon (during process, compelted and rejected)
     * </pre>
     */
    public void listTrades(network.tdex.operator.OperatorOuterClass.ListTradesRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListTradesReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListTradesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Displays a report on how much the given market is collecting in Liquidity
     * Provider fees
     * </pre>
     */
    public void reportMarketFee(network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getReportMarketFeeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Triggers reloading of unspents for stored addresses from blockchain
     * </pre>
     */
    public void reloadUtxos(network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getReloadUtxosMethod(), responseObserver);
    }

    /**
     * <pre>
     * Returns all the unspents and locks
     * </pre>
     */
    public void listUtxos(network.tdex.operator.OperatorOuterClass.ListUtxosRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListUtxosReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListUtxosMethod(), responseObserver);
    }

    /**
     * <pre>
     * Deletes Market based on account_index
     * </pre>
     */
    public void dropMarket(network.tdex.operator.OperatorOuterClass.DropMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DropMarketReply> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDropMarketMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDepositMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.DepositMarketRequest,
                network.tdex.operator.OperatorOuterClass.DepositMarketReply>(
                  this, METHODID_DEPOSIT_MARKET)))
          .addMethod(
            getListDepositMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest,
                network.tdex.operator.OperatorOuterClass.ListDepositMarketReply>(
                  this, METHODID_LIST_DEPOSIT_MARKET)))
          .addMethod(
            getDepositFeeAccountMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest,
                network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply>(
                  this, METHODID_DEPOSIT_FEE_ACCOUNT)))
          .addMethod(
            getBalanceFeeAccountMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest,
                network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply>(
                  this, METHODID_BALANCE_FEE_ACCOUNT)))
          .addMethod(
            getClaimMarketDepositMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest,
                network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply>(
                  this, METHODID_CLAIM_MARKET_DEPOSIT)))
          .addMethod(
            getClaimFeeDepositMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest,
                network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply>(
                  this, METHODID_CLAIM_FEE_DEPOSIT)))
          .addMethod(
            getOpenMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.OpenMarketRequest,
                network.tdex.operator.OperatorOuterClass.OpenMarketReply>(
                  this, METHODID_OPEN_MARKET)))
          .addMethod(
            getCloseMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.CloseMarketRequest,
                network.tdex.operator.OperatorOuterClass.CloseMarketReply>(
                  this, METHODID_CLOSE_MARKET)))
          .addMethod(
            getListMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ListMarketRequest,
                network.tdex.operator.OperatorOuterClass.ListMarketReply>(
                  this, METHODID_LIST_MARKET)))
          .addMethod(
            getUpdateMarketPercentageFeeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest,
                network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>(
                  this, METHODID_UPDATE_MARKET_PERCENTAGE_FEE)))
          .addMethod(
            getUpdateMarketFixedFeeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest,
                network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>(
                  this, METHODID_UPDATE_MARKET_FIXED_FEE)))
          .addMethod(
            getUpdateMarketPriceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest,
                network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply>(
                  this, METHODID_UPDATE_MARKET_PRICE)))
          .addMethod(
            getUpdateMarketStrategyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest,
                network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply>(
                  this, METHODID_UPDATE_MARKET_STRATEGY)))
          .addMethod(
            getWithdrawMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest,
                network.tdex.operator.OperatorOuterClass.WithdrawMarketReply>(
                  this, METHODID_WITHDRAW_MARKET)))
          .addMethod(
            getListTradesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ListTradesRequest,
                network.tdex.operator.OperatorOuterClass.ListTradesReply>(
                  this, METHODID_LIST_TRADES)))
          .addMethod(
            getReportMarketFeeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest,
                network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply>(
                  this, METHODID_REPORT_MARKET_FEE)))
          .addMethod(
            getReloadUtxosMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest,
                network.tdex.operator.OperatorOuterClass.ReloadUtxosReply>(
                  this, METHODID_RELOAD_UTXOS)))
          .addMethod(
            getListUtxosMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.ListUtxosRequest,
                network.tdex.operator.OperatorOuterClass.ListUtxosReply>(
                  this, METHODID_LIST_UTXOS)))
          .addMethod(
            getDropMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                network.tdex.operator.OperatorOuterClass.DropMarketRequest,
                network.tdex.operator.OperatorOuterClass.DropMarketReply>(
                  this, METHODID_DROP_MARKET)))
          .build();
    }
  }

  /**
   * <pre>
   **
   * Service for operators to configure and manage a TDEX daemon
   * </pre>
   */
  public static final class OperatorStub extends io.grpc.stub.AbstractAsyncStub<OperatorStub> {
    private OperatorStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OperatorStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OperatorStub(channel, callOptions);
    }

    /**
     * <pre>
     * Returns a new derived address for the given market.
     * If market field is empty, a new Market is created and MUST be initialized.
     * </pre>
     */
    public void depositMarket(network.tdex.operator.OperatorOuterClass.DepositMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDepositMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Returns the list of previously generated addresses for the given market.
     * </pre>
     */
    public void listDepositMarket(network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListDepositMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Returns a new derived address from the fee account.
     * This is only used to deposit some LBTC to subsidize blockchain fees.
     * </pre>
     */
    public void depositFeeAccount(network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDepositFeeAccountMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Returns the aggregated balance of LBTC held in the fee account.
     * </pre>
     */
    public void balanceFeeAccount(network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getBalanceFeeAccountMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund a new market.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public void claimMarketDeposit(network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getClaimMarketDepositMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund the fee account.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public void claimFeeDeposit(network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getClaimFeeDepositMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Makes the given market tradable
     * </pre>
     */
    public void openMarket(network.tdex.operator.OperatorOuterClass.OpenMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.OpenMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOpenMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Makes the given market NOT tradabale
     * </pre>
     */
    public void closeMarket(network.tdex.operator.OperatorOuterClass.CloseMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.CloseMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCloseMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get extended details for each markets either open, closed or to be funded.
     * </pre>
     */
    public void listMarket(network.tdex.operator.OperatorOuterClass.ListMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Changes the Liquidity Provider percentage fee for the given market. It 
     * should be express in basis point. To change the fee on each swap from 
     * (current) 0.25% to 1% you need to pass down 100 The Market MUST be closed 
     * before doing this change. It's also possible to remove the percentage fee
     * by setting it to 0.
     * </pre>
     */
    public void updateMarketPercentageFee(network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMarketPercentageFeeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Changes the Liquidity provider fixed fees for the given market.
     * They should be expressed in satoshis for both assets of the market.
     * To remove a non-null fixed fee, it's enough to set the fields of the 
     * request to 0.
     * </pre>
     */
    public void updateMarketFixedFee(network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMarketFixedFeeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Manually updates the price for the given market
     * </pre>
     */
    public void updateMarketPrice(network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMarketPriceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Updates the current market making strategy, either using an automated
     * market making formula or a pluggable price feed
     * </pre>
     */
    public void updateMarketStrategy(network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateMarketStrategyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * WithdrawMarket allows the operator to withdraw to external wallet funds
     * from a specific market. The Market MUST be closed before doing this change.
     * </pre>
     */
    public void withdrawMarket(network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getWithdrawMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Returs all the trades processed by the daemon (during process, compelted and rejected)
     * </pre>
     */
    public void listTrades(network.tdex.operator.OperatorOuterClass.ListTradesRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListTradesReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListTradesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Displays a report on how much the given market is collecting in Liquidity
     * Provider fees
     * </pre>
     */
    public void reportMarketFee(network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getReportMarketFeeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Triggers reloading of unspents for stored addresses from blockchain
     * </pre>
     */
    public void reloadUtxos(network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getReloadUtxosMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Returns all the unspents and locks
     * </pre>
     */
    public void listUtxos(network.tdex.operator.OperatorOuterClass.ListUtxosRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListUtxosReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListUtxosMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Deletes Market based on account_index
     * </pre>
     */
    public void dropMarket(network.tdex.operator.OperatorOuterClass.DropMarketRequest request,
        io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DropMarketReply> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDropMarketMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   **
   * Service for operators to configure and manage a TDEX daemon
   * </pre>
   */
  public static final class OperatorBlockingStub extends io.grpc.stub.AbstractBlockingStub<OperatorBlockingStub> {
    private OperatorBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OperatorBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OperatorBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Returns a new derived address for the given market.
     * If market field is empty, a new Market is created and MUST be initialized.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.DepositMarketReply depositMarket(network.tdex.operator.OperatorOuterClass.DepositMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDepositMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Returns the list of previously generated addresses for the given market.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ListDepositMarketReply listDepositMarket(network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListDepositMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Returns a new derived address from the fee account.
     * This is only used to deposit some LBTC to subsidize blockchain fees.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply depositFeeAccount(network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDepositFeeAccountMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Returns the aggregated balance of LBTC held in the fee account.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply balanceFeeAccount(network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getBalanceFeeAccountMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund a new market.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply claimMarketDeposit(network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getClaimMarketDepositMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund the fee account.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply claimFeeDeposit(network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getClaimFeeDepositMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Makes the given market tradable
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.OpenMarketReply openMarket(network.tdex.operator.OperatorOuterClass.OpenMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOpenMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Makes the given market NOT tradabale
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.CloseMarketReply closeMarket(network.tdex.operator.OperatorOuterClass.CloseMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCloseMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get extended details for each markets either open, closed or to be funded.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ListMarketReply listMarket(network.tdex.operator.OperatorOuterClass.ListMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Changes the Liquidity Provider percentage fee for the given market. It 
     * should be express in basis point. To change the fee on each swap from 
     * (current) 0.25% to 1% you need to pass down 100 The Market MUST be closed 
     * before doing this change. It's also possible to remove the percentage fee
     * by setting it to 0.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply updateMarketPercentageFee(network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMarketPercentageFeeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Changes the Liquidity provider fixed fees for the given market.
     * They should be expressed in satoshis for both assets of the market.
     * To remove a non-null fixed fee, it's enough to set the fields of the 
     * request to 0.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply updateMarketFixedFee(network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMarketFixedFeeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Manually updates the price for the given market
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply updateMarketPrice(network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMarketPriceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Updates the current market making strategy, either using an automated
     * market making formula or a pluggable price feed
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply updateMarketStrategy(network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateMarketStrategyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * WithdrawMarket allows the operator to withdraw to external wallet funds
     * from a specific market. The Market MUST be closed before doing this change.
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.WithdrawMarketReply withdrawMarket(network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getWithdrawMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Returs all the trades processed by the daemon (during process, compelted and rejected)
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ListTradesReply listTrades(network.tdex.operator.OperatorOuterClass.ListTradesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListTradesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Displays a report on how much the given market is collecting in Liquidity
     * Provider fees
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply reportMarketFee(network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getReportMarketFeeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Triggers reloading of unspents for stored addresses from blockchain
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ReloadUtxosReply reloadUtxos(network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getReloadUtxosMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Returns all the unspents and locks
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.ListUtxosReply listUtxos(network.tdex.operator.OperatorOuterClass.ListUtxosRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListUtxosMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Deletes Market based on account_index
     * </pre>
     */
    public network.tdex.operator.OperatorOuterClass.DropMarketReply dropMarket(network.tdex.operator.OperatorOuterClass.DropMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDropMarketMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   **
   * Service for operators to configure and manage a TDEX daemon
   * </pre>
   */
  public static final class OperatorFutureStub extends io.grpc.stub.AbstractFutureStub<OperatorFutureStub> {
    private OperatorFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected OperatorFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new OperatorFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Returns a new derived address for the given market.
     * If market field is empty, a new Market is created and MUST be initialized.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.DepositMarketReply> depositMarket(
        network.tdex.operator.OperatorOuterClass.DepositMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDepositMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Returns the list of previously generated addresses for the given market.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ListDepositMarketReply> listDepositMarket(
        network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListDepositMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Returns a new derived address from the fee account.
     * This is only used to deposit some LBTC to subsidize blockchain fees.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply> depositFeeAccount(
        network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDepositFeeAccountMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Returns the aggregated balance of LBTC held in the fee account.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply> balanceFeeAccount(
        network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getBalanceFeeAccountMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund a new market.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply> claimMarketDeposit(
        network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getClaimMarketDepositMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Operator can provide transaction(s) outpoints of deposits made to fund the fee account.
     * The transaction must be visible and confirmed, otherwise an error will be returned,
     * inviting the operator to retry again
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply> claimFeeDeposit(
        network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getClaimFeeDepositMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Makes the given market tradable
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.OpenMarketReply> openMarket(
        network.tdex.operator.OperatorOuterClass.OpenMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOpenMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Makes the given market NOT tradabale
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.CloseMarketReply> closeMarket(
        network.tdex.operator.OperatorOuterClass.CloseMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCloseMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get extended details for each markets either open, closed or to be funded.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ListMarketReply> listMarket(
        network.tdex.operator.OperatorOuterClass.ListMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Changes the Liquidity Provider percentage fee for the given market. It 
     * should be express in basis point. To change the fee on each swap from 
     * (current) 0.25% to 1% you need to pass down 100 The Market MUST be closed 
     * before doing this change. It's also possible to remove the percentage fee
     * by setting it to 0.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> updateMarketPercentageFee(
        network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMarketPercentageFeeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Changes the Liquidity provider fixed fees for the given market.
     * They should be expressed in satoshis for both assets of the market.
     * To remove a non-null fixed fee, it's enough to set the fields of the 
     * request to 0.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply> updateMarketFixedFee(
        network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMarketFixedFeeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Manually updates the price for the given market
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply> updateMarketPrice(
        network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMarketPriceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Updates the current market making strategy, either using an automated
     * market making formula or a pluggable price feed
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply> updateMarketStrategy(
        network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateMarketStrategyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * WithdrawMarket allows the operator to withdraw to external wallet funds
     * from a specific market. The Market MUST be closed before doing this change.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.WithdrawMarketReply> withdrawMarket(
        network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getWithdrawMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Returs all the trades processed by the daemon (during process, compelted and rejected)
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ListTradesReply> listTrades(
        network.tdex.operator.OperatorOuterClass.ListTradesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListTradesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Displays a report on how much the given market is collecting in Liquidity
     * Provider fees
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply> reportMarketFee(
        network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getReportMarketFeeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Triggers reloading of unspents for stored addresses from blockchain
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ReloadUtxosReply> reloadUtxos(
        network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getReloadUtxosMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Returns all the unspents and locks
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.ListUtxosReply> listUtxos(
        network.tdex.operator.OperatorOuterClass.ListUtxosRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListUtxosMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Deletes Market based on account_index
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<network.tdex.operator.OperatorOuterClass.DropMarketReply> dropMarket(
        network.tdex.operator.OperatorOuterClass.DropMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDropMarketMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DEPOSIT_MARKET = 0;
  private static final int METHODID_LIST_DEPOSIT_MARKET = 1;
  private static final int METHODID_DEPOSIT_FEE_ACCOUNT = 2;
  private static final int METHODID_BALANCE_FEE_ACCOUNT = 3;
  private static final int METHODID_CLAIM_MARKET_DEPOSIT = 4;
  private static final int METHODID_CLAIM_FEE_DEPOSIT = 5;
  private static final int METHODID_OPEN_MARKET = 6;
  private static final int METHODID_CLOSE_MARKET = 7;
  private static final int METHODID_LIST_MARKET = 8;
  private static final int METHODID_UPDATE_MARKET_PERCENTAGE_FEE = 9;
  private static final int METHODID_UPDATE_MARKET_FIXED_FEE = 10;
  private static final int METHODID_UPDATE_MARKET_PRICE = 11;
  private static final int METHODID_UPDATE_MARKET_STRATEGY = 12;
  private static final int METHODID_WITHDRAW_MARKET = 13;
  private static final int METHODID_LIST_TRADES = 14;
  private static final int METHODID_REPORT_MARKET_FEE = 15;
  private static final int METHODID_RELOAD_UTXOS = 16;
  private static final int METHODID_LIST_UTXOS = 17;
  private static final int METHODID_DROP_MARKET = 18;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final OperatorImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(OperatorImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DEPOSIT_MARKET:
          serviceImpl.depositMarket((network.tdex.operator.OperatorOuterClass.DepositMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositMarketReply>) responseObserver);
          break;
        case METHODID_LIST_DEPOSIT_MARKET:
          serviceImpl.listDepositMarket((network.tdex.operator.OperatorOuterClass.ListDepositMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListDepositMarketReply>) responseObserver);
          break;
        case METHODID_DEPOSIT_FEE_ACCOUNT:
          serviceImpl.depositFeeAccount((network.tdex.operator.OperatorOuterClass.DepositFeeAccountRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DepositFeeAccountReply>) responseObserver);
          break;
        case METHODID_BALANCE_FEE_ACCOUNT:
          serviceImpl.balanceFeeAccount((network.tdex.operator.OperatorOuterClass.BalanceFeeAccountRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.BalanceFeeAccountReply>) responseObserver);
          break;
        case METHODID_CLAIM_MARKET_DEPOSIT:
          serviceImpl.claimMarketDeposit((network.tdex.operator.OperatorOuterClass.ClaimMarketDepositRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimMarketDepositReply>) responseObserver);
          break;
        case METHODID_CLAIM_FEE_DEPOSIT:
          serviceImpl.claimFeeDeposit((network.tdex.operator.OperatorOuterClass.ClaimFeeDepositRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ClaimFeeDepositReply>) responseObserver);
          break;
        case METHODID_OPEN_MARKET:
          serviceImpl.openMarket((network.tdex.operator.OperatorOuterClass.OpenMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.OpenMarketReply>) responseObserver);
          break;
        case METHODID_CLOSE_MARKET:
          serviceImpl.closeMarket((network.tdex.operator.OperatorOuterClass.CloseMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.CloseMarketReply>) responseObserver);
          break;
        case METHODID_LIST_MARKET:
          serviceImpl.listMarket((network.tdex.operator.OperatorOuterClass.ListMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListMarketReply>) responseObserver);
          break;
        case METHODID_UPDATE_MARKET_PERCENTAGE_FEE:
          serviceImpl.updateMarketPercentageFee((network.tdex.operator.OperatorOuterClass.UpdateMarketPercentageFeeRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>) responseObserver);
          break;
        case METHODID_UPDATE_MARKET_FIXED_FEE:
          serviceImpl.updateMarketFixedFee((network.tdex.operator.OperatorOuterClass.UpdateMarketFixedFeeRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketFeeReply>) responseObserver);
          break;
        case METHODID_UPDATE_MARKET_PRICE:
          serviceImpl.updateMarketPrice((network.tdex.operator.OperatorOuterClass.UpdateMarketPriceRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketPriceReply>) responseObserver);
          break;
        case METHODID_UPDATE_MARKET_STRATEGY:
          serviceImpl.updateMarketStrategy((network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.UpdateMarketStrategyReply>) responseObserver);
          break;
        case METHODID_WITHDRAW_MARKET:
          serviceImpl.withdrawMarket((network.tdex.operator.OperatorOuterClass.WithdrawMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.WithdrawMarketReply>) responseObserver);
          break;
        case METHODID_LIST_TRADES:
          serviceImpl.listTrades((network.tdex.operator.OperatorOuterClass.ListTradesRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListTradesReply>) responseObserver);
          break;
        case METHODID_REPORT_MARKET_FEE:
          serviceImpl.reportMarketFee((network.tdex.operator.OperatorOuterClass.ReportMarketFeeRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReportMarketFeeReply>) responseObserver);
          break;
        case METHODID_RELOAD_UTXOS:
          serviceImpl.reloadUtxos((network.tdex.operator.OperatorOuterClass.ReloadUtxosRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ReloadUtxosReply>) responseObserver);
          break;
        case METHODID_LIST_UTXOS:
          serviceImpl.listUtxos((network.tdex.operator.OperatorOuterClass.ListUtxosRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.ListUtxosReply>) responseObserver);
          break;
        case METHODID_DROP_MARKET:
          serviceImpl.dropMarket((network.tdex.operator.OperatorOuterClass.DropMarketRequest) request,
              (io.grpc.stub.StreamObserver<network.tdex.operator.OperatorOuterClass.DropMarketReply>) responseObserver);
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

  private static abstract class OperatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    OperatorBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return network.tdex.operator.OperatorOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Operator");
    }
  }

  private static final class OperatorFileDescriptorSupplier
      extends OperatorBaseDescriptorSupplier {
    OperatorFileDescriptorSupplier() {}
  }

  private static final class OperatorMethodDescriptorSupplier
      extends OperatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    OperatorMethodDescriptorSupplier(String methodName) {
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
      synchronized (OperatorGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new OperatorFileDescriptorSupplier())
              .addMethod(getDepositMarketMethod())
              .addMethod(getListDepositMarketMethod())
              .addMethod(getDepositFeeAccountMethod())
              .addMethod(getBalanceFeeAccountMethod())
              .addMethod(getClaimMarketDepositMethod())
              .addMethod(getClaimFeeDepositMethod())
              .addMethod(getOpenMarketMethod())
              .addMethod(getCloseMarketMethod())
              .addMethod(getListMarketMethod())
              .addMethod(getUpdateMarketPercentageFeeMethod())
              .addMethod(getUpdateMarketFixedFeeMethod())
              .addMethod(getUpdateMarketPriceMethod())
              .addMethod(getUpdateMarketStrategyMethod())
              .addMethod(getWithdrawMarketMethod())
              .addMethod(getListTradesMethod())
              .addMethod(getReportMarketFeeMethod())
              .addMethod(getReloadUtxosMethod())
              .addMethod(getListUtxosMethod())
              .addMethod(getDropMarketMethod())
              .build();
        }
      }
    }
    return result;
  }
}
