// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: v1/types.proto

package com.tdex.v1;

/**
 * Protobuf type {@code tdex.v1.Fixed}
 */
public  final class Fixed extends
    com.google.protobuf.GeneratedMessageLite<
        Fixed, Fixed.Builder> implements
    // @@protoc_insertion_point(message_implements:tdex.v1.Fixed)
    FixedOrBuilder {
  private Fixed() {
  }
  public static final int BASE_FEE_FIELD_NUMBER = 1;
  private long baseFee_;
  /**
   * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
   * @return The baseFee.
   */
  @java.lang.Override
  public long getBaseFee() {
    return baseFee_;
  }
  /**
   * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
   * @param value The baseFee to set.
   */
  private void setBaseFee(long value) {
    
    baseFee_ = value;
  }
  /**
   * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
   */
  private void clearBaseFee() {
    
    baseFee_ = 0L;
  }

  public static final int QUOTE_FEE_FIELD_NUMBER = 2;
  private long quoteFee_;
  /**
   * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
   * @return The quoteFee.
   */
  @java.lang.Override
  public long getQuoteFee() {
    return quoteFee_;
  }
  /**
   * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
   * @param value The quoteFee to set.
   */
  private void setQuoteFee(long value) {
    
    quoteFee_ = value;
  }
  /**
   * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
   */
  private void clearQuoteFee() {
    
    quoteFee_ = 0L;
  }

  public static com.tdex.v1.Fixed parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data);
  }
  public static com.tdex.v1.Fixed parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data, extensionRegistry);
  }
  public static com.tdex.v1.Fixed parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data);
  }
  public static com.tdex.v1.Fixed parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data, extensionRegistry);
  }
  public static com.tdex.v1.Fixed parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data);
  }
  public static com.tdex.v1.Fixed parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, data, extensionRegistry);
  }
  public static com.tdex.v1.Fixed parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, input);
  }
  public static com.tdex.v1.Fixed parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, input, extensionRegistry);
  }
  public static com.tdex.v1.Fixed parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return parseDelimitedFrom(DEFAULT_INSTANCE, input);
  }
  public static com.tdex.v1.Fixed parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return parseDelimitedFrom(DEFAULT_INSTANCE, input, extensionRegistry);
  }
  public static com.tdex.v1.Fixed parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, input);
  }
  public static com.tdex.v1.Fixed parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageLite.parseFrom(
        DEFAULT_INSTANCE, input, extensionRegistry);
  }

  public static Builder newBuilder() {
    return (Builder) DEFAULT_INSTANCE.createBuilder();
  }
  public static Builder newBuilder(com.tdex.v1.Fixed prototype) {
    return (Builder) DEFAULT_INSTANCE.createBuilder(prototype);
  }

  /**
   * Protobuf type {@code tdex.v1.Fixed}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageLite.Builder<
        com.tdex.v1.Fixed, Builder> implements
      // @@protoc_insertion_point(builder_implements:tdex.v1.Fixed)
      com.tdex.v1.FixedOrBuilder {
    // Construct using com.tdex.v1.Fixed.newBuilder()
    private Builder() {
      super(DEFAULT_INSTANCE);
    }


    /**
     * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
     * @return The baseFee.
     */
    @java.lang.Override
    public long getBaseFee() {
      return instance.getBaseFee();
    }
    /**
     * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
     * @param value The baseFee to set.
     * @return This builder for chaining.
     */
    public Builder setBaseFee(long value) {
      copyOnWrite();
      instance.setBaseFee(value);
      return this;
    }
    /**
     * <code>int64 base_fee = 1 [json_name = "baseFee"];</code>
     * @return This builder for chaining.
     */
    public Builder clearBaseFee() {
      copyOnWrite();
      instance.clearBaseFee();
      return this;
    }

    /**
     * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
     * @return The quoteFee.
     */
    @java.lang.Override
    public long getQuoteFee() {
      return instance.getQuoteFee();
    }
    /**
     * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
     * @param value The quoteFee to set.
     * @return This builder for chaining.
     */
    public Builder setQuoteFee(long value) {
      copyOnWrite();
      instance.setQuoteFee(value);
      return this;
    }
    /**
     * <code>int64 quote_fee = 2 [json_name = "quoteFee"];</code>
     * @return This builder for chaining.
     */
    public Builder clearQuoteFee() {
      copyOnWrite();
      instance.clearQuoteFee();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:tdex.v1.Fixed)
  }
  @java.lang.Override
  @java.lang.SuppressWarnings({"unchecked", "fallthrough"})
  protected final java.lang.Object dynamicMethod(
      com.google.protobuf.GeneratedMessageLite.MethodToInvoke method,
      java.lang.Object arg0, java.lang.Object arg1) {
    switch (method) {
      case NEW_MUTABLE_INSTANCE: {
        return new com.tdex.v1.Fixed();
      }
      case NEW_BUILDER: {
        return new Builder();
      }
      case BUILD_MESSAGE_INFO: {
          java.lang.Object[] objects = new java.lang.Object[] {
            "baseFee_",
            "quoteFee_",
          };
          java.lang.String info =
              "\u0000\u0002\u0000\u0000\u0001\u0002\u0002\u0000\u0000\u0000\u0001\u0002\u0002\u0002" +
              "";
          return newMessageInfo(DEFAULT_INSTANCE, info, objects);
      }
      // fall through
      case GET_DEFAULT_INSTANCE: {
        return DEFAULT_INSTANCE;
      }
      case GET_PARSER: {
        com.google.protobuf.Parser<com.tdex.v1.Fixed> parser = PARSER;
        if (parser == null) {
          synchronized (com.tdex.v1.Fixed.class) {
            parser = PARSER;
            if (parser == null) {
              parser =
                  new DefaultInstanceBasedParser<com.tdex.v1.Fixed>(
                      DEFAULT_INSTANCE);
              PARSER = parser;
            }
          }
        }
        return parser;
    }
    case GET_MEMOIZED_IS_INITIALIZED: {
      return (byte) 1;
    }
    case SET_MEMOIZED_IS_INITIALIZED: {
      return null;
    }
    }
    throw new UnsupportedOperationException();
  }


  // @@protoc_insertion_point(class_scope:tdex.v1.Fixed)
  private static final com.tdex.v1.Fixed DEFAULT_INSTANCE;
  static {
    Fixed defaultInstance = new Fixed();
    // New instances are implicitly immutable so no need to make
    // immutable.
    DEFAULT_INSTANCE = defaultInstance;
    com.google.protobuf.GeneratedMessageLite.registerDefaultInstance(
      Fixed.class, defaultInstance);
  }

  public static com.tdex.v1.Fixed getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static volatile com.google.protobuf.Parser<Fixed> PARSER;

  public static com.google.protobuf.Parser<Fixed> parser() {
    return DEFAULT_INSTANCE.getParserForType();
  }
}

