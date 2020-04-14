/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.SwapAccept', null, global);
goog.exportSymbol('proto.SwapComplete', null, global);
goog.exportSymbol('proto.SwapFail', null, global);
goog.exportSymbol('proto.SwapRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SwapRequest.displayName = 'proto.SwapRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amountP: jspb.Message.getFieldWithDefault(msg, 2, 0),
    assetP: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amountR: jspb.Message.getFieldWithDefault(msg, 4, 0),
    assetR: jspb.Message.getFieldWithDefault(msg, 5, ""),
    transaction: jspb.Message.getFieldWithDefault(msg, 6, ""),
    inputBlindingKeyMap: (f = msg.getInputBlindingKeyMap()) ? f.toObject(includeInstance, undefined) : [],
    outputBlindingKeyMap: (f = msg.getOutputBlindingKeyMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwapRequest}
 */
proto.SwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapRequest;
  return proto.SwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapRequest}
 */
proto.SwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountP(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetP(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountR(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetR(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransaction(value);
      break;
    case 7:
      var value = msg.getInputBlindingKeyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    case 8:
      var value = msg.getOutputBlindingKeyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmountP();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAssetP();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmountR();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAssetR();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTransaction();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInputBlindingKeyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getOutputBlindingKeyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.SwapRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SwapRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 amount_p = 2;
 * @return {number}
 */
proto.SwapRequest.prototype.getAmountP = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SwapRequest.prototype.setAmountP = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset_p = 3;
 * @return {string}
 */
proto.SwapRequest.prototype.getAssetP = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.SwapRequest.prototype.setAssetP = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 amount_r = 4;
 * @return {number}
 */
proto.SwapRequest.prototype.getAmountR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SwapRequest.prototype.setAmountR = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string asset_r = 5;
 * @return {string}
 */
proto.SwapRequest.prototype.getAssetR = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.SwapRequest.prototype.setAssetR = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string transaction = 6;
 * @return {string}
 */
proto.SwapRequest.prototype.getTransaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.SwapRequest.prototype.setTransaction = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, bytes> input_blinding_key = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.SwapRequest.prototype.getInputBlindingKeyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


proto.SwapRequest.prototype.clearInputBlindingKeyMap = function() {
  this.getInputBlindingKeyMap().clear();
};


/**
 * map<string, bytes> output_blinding_key = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.SwapRequest.prototype.getOutputBlindingKeyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


proto.SwapRequest.prototype.clearOutputBlindingKeyMap = function() {
  this.getOutputBlindingKeyMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwapAccept = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapAccept, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SwapAccept.displayName = 'proto.SwapAccept';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwapAccept.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapAccept.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapAccept} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapAccept.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transaction: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputBlindingKeyMap: (f = msg.getInputBlindingKeyMap()) ? f.toObject(includeInstance, undefined) : [],
    outputBlindingKeyMap: (f = msg.getOutputBlindingKeyMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwapAccept}
 */
proto.SwapAccept.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapAccept;
  return proto.SwapAccept.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapAccept} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapAccept}
 */
proto.SwapAccept.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransaction(value);
      break;
    case 4:
      var value = msg.getInputBlindingKeyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    case 5:
      var value = msg.getOutputBlindingKeyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwapAccept.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapAccept.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapAccept} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapAccept.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransaction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputBlindingKeyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getOutputBlindingKeyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.SwapAccept.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SwapAccept.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string request_id = 2;
 * @return {string}
 */
proto.SwapAccept.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SwapAccept.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction = 3;
 * @return {string}
 */
proto.SwapAccept.prototype.getTransaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.SwapAccept.prototype.setTransaction = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, bytes> input_blinding_key = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.SwapAccept.prototype.getInputBlindingKeyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.SwapAccept.prototype.clearInputBlindingKeyMap = function() {
  this.getInputBlindingKeyMap().clear();
};


/**
 * map<string, bytes> output_blinding_key = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.SwapAccept.prototype.getOutputBlindingKeyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


proto.SwapAccept.prototype.clearOutputBlindingKeyMap = function() {
  this.getOutputBlindingKeyMap().clear();
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwapComplete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapComplete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SwapComplete.displayName = 'proto.SwapComplete';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwapComplete.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapComplete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapComplete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapComplete.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    acceptId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transaction: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwapComplete}
 */
proto.SwapComplete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapComplete;
  return proto.SwapComplete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapComplete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapComplete}
 */
proto.SwapComplete.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceptId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwapComplete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapComplete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapComplete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapComplete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAcceptId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransaction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.SwapComplete.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SwapComplete.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accept_id = 2;
 * @return {string}
 */
proto.SwapComplete.prototype.getAcceptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SwapComplete.prototype.setAcceptId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction = 3;
 * @return {string}
 */
proto.SwapComplete.prototype.getTransaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.SwapComplete.prototype.setTransaction = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwapFail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwapFail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SwapFail.displayName = 'proto.SwapFail';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwapFail.prototype.toObject = function(opt_includeInstance) {
  return proto.SwapFail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwapFail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapFail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    failureCode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    failureMessage: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwapFail}
 */
proto.SwapFail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwapFail;
  return proto.SwapFail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwapFail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwapFail}
 */
proto.SwapFail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFailureCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailureMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwapFail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwapFail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwapFail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwapFail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFailureCode();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getFailureMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.SwapFail.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SwapFail.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_id = 2;
 * @return {string}
 */
proto.SwapFail.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SwapFail.prototype.setMessageId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 failure_code = 3;
 * @return {number}
 */
proto.SwapFail.prototype.getFailureCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SwapFail.prototype.setFailureCode = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string failure_message = 4;
 * @return {string}
 */
proto.SwapFail.prototype.getFailureMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.SwapFail.prototype.setFailureMessage = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto);
