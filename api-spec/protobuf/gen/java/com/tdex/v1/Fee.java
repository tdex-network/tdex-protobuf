// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: v1/types.proto

package com.tdex.v1;

/**
 * <pre>
 * Custom Types
 * </pre>
 *
 * Protobuf type {@code tdex.v1.Fee}
 */
public final class Fee extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tdex.v1.Fee)
    FeeOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Fee.newBuilder() to construct.
  private Fee(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Fee() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Fee();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private Fee(
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
          case 16: {

            basisPoint_ = input.readInt64();
            break;
          }
          case 26: {
            com.tdex.v1.Fixed.Builder subBuilder = null;
            if (fixed_ != null) {
              subBuilder = fixed_.toBuilder();
            }
            fixed_ = input.readMessage(com.tdex.v1.Fixed.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(fixed_);
              fixed_ = subBuilder.buildPartial();
            }

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
    return com.tdex.v1.TypesProto.internal_static_tdex_v1_Fee_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.tdex.v1.TypesProto.internal_static_tdex_v1_Fee_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.tdex.v1.Fee.class, com.tdex.v1.Fee.Builder.class);
  }

  public static final int BASIS_POINT_FIELD_NUMBER = 2;
  private long basisPoint_;
  /**
   * <code>int64 basis_point = 2 [json_name = "basisPoint"];</code>
   * @return The basisPoint.
   */
  @java.lang.Override
  public long getBasisPoint() {
    return basisPoint_;
  }

  public static final int FIXED_FIELD_NUMBER = 3;
  private com.tdex.v1.Fixed fixed_;
  /**
   * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
   * @return Whether the fixed field is set.
   */
  @java.lang.Override
  public boolean hasFixed() {
    return fixed_ != null;
  }
  /**
   * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
   * @return The fixed.
   */
  @java.lang.Override
  public com.tdex.v1.Fixed getFixed() {
    return fixed_ == null ? com.tdex.v1.Fixed.getDefaultInstance() : fixed_;
  }
  /**
   * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
   */
  @java.lang.Override
  public com.tdex.v1.FixedOrBuilder getFixedOrBuilder() {
    return getFixed();
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
    if (basisPoint_ != 0L) {
      output.writeInt64(2, basisPoint_);
    }
    if (fixed_ != null) {
      output.writeMessage(3, getFixed());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (basisPoint_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(2, basisPoint_);
    }
    if (fixed_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getFixed());
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
    if (!(obj instanceof com.tdex.v1.Fee)) {
      return super.equals(obj);
    }
    com.tdex.v1.Fee other = (com.tdex.v1.Fee) obj;

    if (getBasisPoint()
        != other.getBasisPoint()) return false;
    if (hasFixed() != other.hasFixed()) return false;
    if (hasFixed()) {
      if (!getFixed()
          .equals(other.getFixed())) return false;
    }
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
    hash = (37 * hash) + BASIS_POINT_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getBasisPoint());
    if (hasFixed()) {
      hash = (37 * hash) + FIXED_FIELD_NUMBER;
      hash = (53 * hash) + getFixed().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.tdex.v1.Fee parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.Fee parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.Fee parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.Fee parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.Fee parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.tdex.v1.Fee parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.tdex.v1.Fee parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.tdex.v1.Fee parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.tdex.v1.Fee parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.tdex.v1.Fee parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.tdex.v1.Fee parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.tdex.v1.Fee parseFrom(
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
  public static Builder newBuilder(com.tdex.v1.Fee prototype) {
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
   * <pre>
   * Custom Types
   * </pre>
   *
   * Protobuf type {@code tdex.v1.Fee}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tdex.v1.Fee)
      com.tdex.v1.FeeOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.tdex.v1.TypesProto.internal_static_tdex_v1_Fee_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.tdex.v1.TypesProto.internal_static_tdex_v1_Fee_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.tdex.v1.Fee.class, com.tdex.v1.Fee.Builder.class);
    }

    // Construct using com.tdex.v1.Fee.newBuilder()
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
      basisPoint_ = 0L;

      if (fixedBuilder_ == null) {
        fixed_ = null;
      } else {
        fixed_ = null;
        fixedBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.tdex.v1.TypesProto.internal_static_tdex_v1_Fee_descriptor;
    }

    @java.lang.Override
    public com.tdex.v1.Fee getDefaultInstanceForType() {
      return com.tdex.v1.Fee.getDefaultInstance();
    }

    @java.lang.Override
    public com.tdex.v1.Fee build() {
      com.tdex.v1.Fee result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.tdex.v1.Fee buildPartial() {
      com.tdex.v1.Fee result = new com.tdex.v1.Fee(this);
      result.basisPoint_ = basisPoint_;
      if (fixedBuilder_ == null) {
        result.fixed_ = fixed_;
      } else {
        result.fixed_ = fixedBuilder_.build();
      }
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
      if (other instanceof com.tdex.v1.Fee) {
        return mergeFrom((com.tdex.v1.Fee)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.tdex.v1.Fee other) {
      if (other == com.tdex.v1.Fee.getDefaultInstance()) return this;
      if (other.getBasisPoint() != 0L) {
        setBasisPoint(other.getBasisPoint());
      }
      if (other.hasFixed()) {
        mergeFixed(other.getFixed());
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
      com.tdex.v1.Fee parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.tdex.v1.Fee) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long basisPoint_ ;
    /**
     * <code>int64 basis_point = 2 [json_name = "basisPoint"];</code>
     * @return The basisPoint.
     */
    @java.lang.Override
    public long getBasisPoint() {
      return basisPoint_;
    }
    /**
     * <code>int64 basis_point = 2 [json_name = "basisPoint"];</code>
     * @param value The basisPoint to set.
     * @return This builder for chaining.
     */
    public Builder setBasisPoint(long value) {
      
      basisPoint_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>int64 basis_point = 2 [json_name = "basisPoint"];</code>
     * @return This builder for chaining.
     */
    public Builder clearBasisPoint() {
      
      basisPoint_ = 0L;
      onChanged();
      return this;
    }

    private com.tdex.v1.Fixed fixed_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.Fixed, com.tdex.v1.Fixed.Builder, com.tdex.v1.FixedOrBuilder> fixedBuilder_;
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     * @return Whether the fixed field is set.
     */
    public boolean hasFixed() {
      return fixedBuilder_ != null || fixed_ != null;
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     * @return The fixed.
     */
    public com.tdex.v1.Fixed getFixed() {
      if (fixedBuilder_ == null) {
        return fixed_ == null ? com.tdex.v1.Fixed.getDefaultInstance() : fixed_;
      } else {
        return fixedBuilder_.getMessage();
      }
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public Builder setFixed(com.tdex.v1.Fixed value) {
      if (fixedBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        fixed_ = value;
        onChanged();
      } else {
        fixedBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public Builder setFixed(
        com.tdex.v1.Fixed.Builder builderForValue) {
      if (fixedBuilder_ == null) {
        fixed_ = builderForValue.build();
        onChanged();
      } else {
        fixedBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public Builder mergeFixed(com.tdex.v1.Fixed value) {
      if (fixedBuilder_ == null) {
        if (fixed_ != null) {
          fixed_ =
            com.tdex.v1.Fixed.newBuilder(fixed_).mergeFrom(value).buildPartial();
        } else {
          fixed_ = value;
        }
        onChanged();
      } else {
        fixedBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public Builder clearFixed() {
      if (fixedBuilder_ == null) {
        fixed_ = null;
        onChanged();
      } else {
        fixed_ = null;
        fixedBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public com.tdex.v1.Fixed.Builder getFixedBuilder() {
      
      onChanged();
      return getFixedFieldBuilder().getBuilder();
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    public com.tdex.v1.FixedOrBuilder getFixedOrBuilder() {
      if (fixedBuilder_ != null) {
        return fixedBuilder_.getMessageOrBuilder();
      } else {
        return fixed_ == null ?
            com.tdex.v1.Fixed.getDefaultInstance() : fixed_;
      }
    }
    /**
     * <code>.tdex.v1.Fixed fixed = 3 [json_name = "fixed"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.tdex.v1.Fixed, com.tdex.v1.Fixed.Builder, com.tdex.v1.FixedOrBuilder> 
        getFixedFieldBuilder() {
      if (fixedBuilder_ == null) {
        fixedBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.tdex.v1.Fixed, com.tdex.v1.Fixed.Builder, com.tdex.v1.FixedOrBuilder>(
                getFixed(),
                getParentForChildren(),
                isClean());
        fixed_ = null;
      }
      return fixedBuilder_;
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


    // @@protoc_insertion_point(builder_scope:tdex.v1.Fee)
  }

  // @@protoc_insertion_point(class_scope:tdex.v1.Fee)
  private static final com.tdex.v1.Fee DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.tdex.v1.Fee();
  }

  public static com.tdex.v1.Fee getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Fee>
      PARSER = new com.google.protobuf.AbstractParser<Fee>() {
    @java.lang.Override
    public Fee parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new Fee(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Fee> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Fee> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.tdex.v1.Fee getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

