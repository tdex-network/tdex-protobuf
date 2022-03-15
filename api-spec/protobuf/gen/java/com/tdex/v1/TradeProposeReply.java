// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: v1/trade.proto

package com.tdex.v1;

/**
 * Protobuf type {@code tdex.v1.TradeProposeReply}
 */
public final class TradeProposeReply extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tdex.v1.TradeProposeReply)
    TradeProposeReplyOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TradeProposeReply.newBuilder() to construct.
  private TradeProposeReply(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TradeProposeReply() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TradeProposeReply();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TradeProposeReply(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            com.tdex.v1.SwapAccept.Builder subBuilder = null;
            if (swapAccept_ != null) {
              subBuilder = swapAccept_.toBuilder();
            }
            swapAccept_ = input.readMessage(com.tdex.v1.SwapAccept.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(swapAccept_);
              swapAccept_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            com.tdex.v1.SwapFail.Builder subBuilder = null;
            if (swapFail_ != null) {
              subBuilder = swapFail_.toBuilder();
            }
            swapFail_ = input.readMessage(com.tdex.v1.SwapFail.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(swapFail_);
              swapFail_ = subBuilder.buildPartial();
            }

            break;
          }
          case 24: {

            expiryTimeUnix_ = input.readUInt64();
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.tdex.v1.TradeProto.internal_static_tdex_v1_TradeProposeReply_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.tdex.v1.TradeProto.internal_static_tdex_v1_TradeProposeReply_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.tdex.v1.TradeProposeReply.class, com.tdex.v1.TradeProposeReply.Builder.class);
  }

  public static final int SWAP_ACCEPT_FIELD_NUMBER = 1;
  private com.tdex.v1.SwapAccept swapAccept_;
  /**
   * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
   * @return Whether the swapAccept field is set.
   */
  @java.lang.Override
  public boolean hasSwapAccept() {
    return swapAccept_ != null;
  }
  /**
   * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
   * @return The swapAccept.
   */
  @java.lang.Override
  public com.tdex.v1.SwapAccept getSwapAccept() {
    return swapAccept_ == null ? com.tdex.v1.SwapAccept.getDefaultInstance() : swapAccept_;
  }
  /**
   * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
   */
  @java.lang.Override
  public com.tdex.v1.SwapAcceptOrBuilder getSwapAcceptOrBuilder() {
    return getSwapAccept();
  }

  public static final int SWAP_FAIL_FIELD_NUMBER = 2;
  private com.tdex.v1.SwapFail swapFail_;
  /**
   * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
   * @return Whether the swapFail field is set.
   */
  @java.lang.Override
  public boolean hasSwapFail() {
    return swapFail_ != null;
  }
  /**
   * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
   * @return The swapFail.
   */
  @java.lang.Override
  public com.tdex.v1.SwapFail getSwapFail() {
    return swapFail_ == null ? com.tdex.v1.SwapFail.getDefaultInstance() : swapFail_;
  }
  /**
   * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
   */
  @java.lang.Override
  public com.tdex.v1.SwapFailOrBuilder getSwapFailOrBuilder() {
    return getSwapFail();
  }

  public static final int EXPIRY_TIME_UNIX_FIELD_NUMBER = 3;
  private long expiryTimeUnix_;
  /**
   * <code>uint64 expiry_time_unix = 3 [json_name = "expiryTimeUnix"];</code>
   * @return The expiryTimeUnix.
   */
  @java.lang.Override
  public long getExpiryTimeUnix() {
    return expiryTimeUnix_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (swapAccept_ != null) {
      output.writeMessage(1, getSwapAccept());
    }
    if (swapFail_ != null) {
      output.writeMessage(2, getSwapFail());
    }
    if (expiryTimeUnix_ != 0L) {
      output.writeUInt64(3, expiryTimeUnix_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (swapAccept_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getSwapAccept());
    }
    if (swapFail_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getSwapFail());
    }
    if (expiryTimeUnix_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt64Size(3, expiryTimeUnix_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.tdex.v1.TradeProposeReply)) {
      return super.equals(obj);
    }
    com.tdex.v1.TradeProposeReply other = (com.tdex.v1.TradeProposeReply) obj;

    if (hasSwapAccept() != other.hasSwapAccept()) return false;
    if (hasSwapAccept()) {
      if (!getSwapAccept()
          .equals(other.getSwapAccept())) return false;
    }
    if (hasSwapFail() != other.hasSwapFail()) return false;
    if (hasSwapFail()) {
      if (!getSwapFail()
          .equals(other.getSwapFail())) return false;
    }
    if (getExpiryTimeUnix()
        != other.getExpiryTimeUnix()) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (hasSwapAccept()) {
      hash = (37 * hash) + SWAP_ACCEPT_FIELD_NUMBER;
      hash = (53 * hash) + getSwapAccept().hashCode();
    }
    if (hasSwapFail()) {
      hash = (37 * hash) + SWAP_FAIL_FIELD_NUMBER;
      hash = (53 * hash) + getSwapFail().hashCode();
    }
    hash = (37 * hash) + EXPIRY_TIME_UNIX_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getExpiryTimeUnix());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.tdex.v1.TradeProposeReply parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.tdex.v1.TradeProposeReply parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.tdex.v1.TradeProposeReply parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.tdex.v1.TradeProposeReply parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.tdex.v1.TradeProposeReply prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code tdex.v1.TradeProposeReply}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tdex.v1.TradeProposeReply)
      com.tdex.v1.TradeProposeReplyOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.tdex.v1.TradeProto.internal_static_tdex_v1_TradeProposeReply_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.tdex.v1.TradeProto.internal_static_tdex_v1_TradeProposeReply_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.tdex.v1.TradeProposeReply.class, com.tdex.v1.TradeProposeReply.Builder.class);
    }

    // Construct using com.tdex.v1.TradeProposeReply.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (swapAcceptBuilder_ == null) {
        swapAccept_ = null;
      } else {
        swapAccept_ = null;
        swapAcceptBuilder_ = null;
      }
      if (swapFailBuilder_ == null) {
        swapFail_ = null;
      } else {
        swapFail_ = null;
        swapFailBuilder_ = null;
      }
      expiryTimeUnix_ = 0L;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.tdex.v1.TradeProto.internal_static_tdex_v1_TradeProposeReply_descriptor;
    }

    @java.lang.Override
    public com.tdex.v1.TradeProposeReply getDefaultInstanceForType() {
      return com.tdex.v1.TradeProposeReply.getDefaultInstance();
    }

    @java.lang.Override
    public com.tdex.v1.TradeProposeReply build() {
      com.tdex.v1.TradeProposeReply result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.tdex.v1.TradeProposeReply buildPartial() {
      com.tdex.v1.TradeProposeReply result = new com.tdex.v1.TradeProposeReply(this);
      if (swapAcceptBuilder_ == null) {
        result.swapAccept_ = swapAccept_;
      } else {
        result.swapAccept_ = swapAcceptBuilder_.build();
      }
      if (swapFailBuilder_ == null) {
        result.swapFail_ = swapFail_;
      } else {
        result.swapFail_ = swapFailBuilder_.build();
      }
      result.expiryTimeUnix_ = expiryTimeUnix_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.tdex.v1.TradeProposeReply) {
        return mergeFrom((com.tdex.v1.TradeProposeReply)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.tdex.v1.TradeProposeReply other) {
      if (other == com.tdex.v1.TradeProposeReply.getDefaultInstance()) return this;
      if (other.hasSwapAccept()) {
        mergeSwapAccept(other.getSwapAccept());
      }
      if (other.hasSwapFail()) {
        mergeSwapFail(other.getSwapFail());
      }
      if (other.getExpiryTimeUnix() != 0L) {
        setExpiryTimeUnix(other.getExpiryTimeUnix());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      com.tdex.v1.TradeProposeReply parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.tdex.v1.TradeProposeReply) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private com.tdex.v1.SwapAccept swapAccept_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.SwapAccept, com.tdex.v1.SwapAccept.Builder, com.tdex.v1.SwapAcceptOrBuilder> swapAcceptBuilder_;
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     * @return Whether the swapAccept field is set.
     */
    public boolean hasSwapAccept() {
      return swapAcceptBuilder_ != null || swapAccept_ != null;
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     * @return The swapAccept.
     */
    public com.tdex.v1.SwapAccept getSwapAccept() {
      if (swapAcceptBuilder_ == null) {
        return swapAccept_ == null ? com.tdex.v1.SwapAccept.getDefaultInstance() : swapAccept_;
      } else {
        return swapAcceptBuilder_.getMessage();
      }
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public Builder setSwapAccept(com.tdex.v1.SwapAccept value) {
      if (swapAcceptBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        swapAccept_ = value;
        onChanged();
      } else {
        swapAcceptBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public Builder setSwapAccept(
        com.tdex.v1.SwapAccept.Builder builderForValue) {
      if (swapAcceptBuilder_ == null) {
        swapAccept_ = builderForValue.build();
        onChanged();
      } else {
        swapAcceptBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public Builder mergeSwapAccept(com.tdex.v1.SwapAccept value) {
      if (swapAcceptBuilder_ == null) {
        if (swapAccept_ != null) {
          swapAccept_ =
            com.tdex.v1.SwapAccept.newBuilder(swapAccept_).mergeFrom(value).buildPartial();
        } else {
          swapAccept_ = value;
        }
        onChanged();
      } else {
        swapAcceptBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public Builder clearSwapAccept() {
      if (swapAcceptBuilder_ == null) {
        swapAccept_ = null;
        onChanged();
      } else {
        swapAccept_ = null;
        swapAcceptBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public com.tdex.v1.SwapAccept.Builder getSwapAcceptBuilder() {
      
      onChanged();
      return getSwapAcceptFieldBuilder().getBuilder();
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    public com.tdex.v1.SwapAcceptOrBuilder getSwapAcceptOrBuilder() {
      if (swapAcceptBuilder_ != null) {
        return swapAcceptBuilder_.getMessageOrBuilder();
      } else {
        return swapAccept_ == null ?
            com.tdex.v1.SwapAccept.getDefaultInstance() : swapAccept_;
      }
    }
    /**
     * <code>.tdex.v1.SwapAccept swap_accept = 1 [json_name = "swapAccept"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.SwapAccept, com.tdex.v1.SwapAccept.Builder, com.tdex.v1.SwapAcceptOrBuilder> 
        getSwapAcceptFieldBuilder() {
      if (swapAcceptBuilder_ == null) {
        swapAcceptBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.tdex.v1.SwapAccept, com.tdex.v1.SwapAccept.Builder, com.tdex.v1.SwapAcceptOrBuilder>(
                getSwapAccept(),
                getParentForChildren(),
                isClean());
        swapAccept_ = null;
      }
      return swapAcceptBuilder_;
    }

    private com.tdex.v1.SwapFail swapFail_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.SwapFail, com.tdex.v1.SwapFail.Builder, com.tdex.v1.SwapFailOrBuilder> swapFailBuilder_;
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     * @return Whether the swapFail field is set.
     */
    public boolean hasSwapFail() {
      return swapFailBuilder_ != null || swapFail_ != null;
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     * @return The swapFail.
     */
    public com.tdex.v1.SwapFail getSwapFail() {
      if (swapFailBuilder_ == null) {
        return swapFail_ == null ? com.tdex.v1.SwapFail.getDefaultInstance() : swapFail_;
      } else {
        return swapFailBuilder_.getMessage();
      }
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public Builder setSwapFail(com.tdex.v1.SwapFail value) {
      if (swapFailBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        swapFail_ = value;
        onChanged();
      } else {
        swapFailBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public Builder setSwapFail(
        com.tdex.v1.SwapFail.Builder builderForValue) {
      if (swapFailBuilder_ == null) {
        swapFail_ = builderForValue.build();
        onChanged();
      } else {
        swapFailBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public Builder mergeSwapFail(com.tdex.v1.SwapFail value) {
      if (swapFailBuilder_ == null) {
        if (swapFail_ != null) {
          swapFail_ =
            com.tdex.v1.SwapFail.newBuilder(swapFail_).mergeFrom(value).buildPartial();
        } else {
          swapFail_ = value;
        }
        onChanged();
      } else {
        swapFailBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public Builder clearSwapFail() {
      if (swapFailBuilder_ == null) {
        swapFail_ = null;
        onChanged();
      } else {
        swapFail_ = null;
        swapFailBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public com.tdex.v1.SwapFail.Builder getSwapFailBuilder() {
      
      onChanged();
      return getSwapFailFieldBuilder().getBuilder();
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    public com.tdex.v1.SwapFailOrBuilder getSwapFailOrBuilder() {
      if (swapFailBuilder_ != null) {
        return swapFailBuilder_.getMessageOrBuilder();
      } else {
        return swapFail_ == null ?
            com.tdex.v1.SwapFail.getDefaultInstance() : swapFail_;
      }
    }
    /**
     * <code>.tdex.v1.SwapFail swap_fail = 2 [json_name = "swapFail"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.SwapFail, com.tdex.v1.SwapFail.Builder, com.tdex.v1.SwapFailOrBuilder> 
        getSwapFailFieldBuilder() {
      if (swapFailBuilder_ == null) {
        swapFailBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.tdex.v1.SwapFail, com.tdex.v1.SwapFail.Builder, com.tdex.v1.SwapFailOrBuilder>(
                getSwapFail(),
                getParentForChildren(),
                isClean());
        swapFail_ = null;
      }
      return swapFailBuilder_;
    }

    private long expiryTimeUnix_ ;
    /**
     * <code>uint64 expiry_time_unix = 3 [json_name = "expiryTimeUnix"];</code>
     * @return The expiryTimeUnix.
     */
    @java.lang.Override
    public long getExpiryTimeUnix() {
      return expiryTimeUnix_;
    }
    /**
     * <code>uint64 expiry_time_unix = 3 [json_name = "expiryTimeUnix"];</code>
     * @param value The expiryTimeUnix to set.
     * @return This builder for chaining.
     */
    public Builder setExpiryTimeUnix(long value) {
      
      expiryTimeUnix_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint64 expiry_time_unix = 3 [json_name = "expiryTimeUnix"];</code>
     * @return This builder for chaining.
     */
    public Builder clearExpiryTimeUnix() {
      
      expiryTimeUnix_ = 0L;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:tdex.v1.TradeProposeReply)
  }

  // @@protoc_insertion_point(class_scope:tdex.v1.TradeProposeReply)
  private static final com.tdex.v1.TradeProposeReply DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.tdex.v1.TradeProposeReply();
  }

  public static com.tdex.v1.TradeProposeReply getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TradeProposeReply>
      PARSER = new com.google.protobuf.AbstractParser<TradeProposeReply>() {
    @java.lang.Override
    public TradeProposeReply parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TradeProposeReply(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TradeProposeReply> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TradeProposeReply> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.tdex.v1.TradeProposeReply getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

