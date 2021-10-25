# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [swap.proto](#swap.proto)
    - [SwapAccept](#.SwapAccept)
    - [SwapAccept.InputBlindingKeyEntry](#.SwapAccept.InputBlindingKeyEntry)
    - [SwapAccept.OutputBlindingKeyEntry](#.SwapAccept.OutputBlindingKeyEntry)
    - [SwapComplete](#.SwapComplete)
    - [SwapFail](#.SwapFail)
    - [SwapRequest](#.SwapRequest)
    - [SwapRequest.InputBlindingKeyEntry](#.SwapRequest.InputBlindingKeyEntry)
    - [SwapRequest.OutputBlindingKeyEntry](#.SwapRequest.OutputBlindingKeyEntry)
  
- [trade.proto](#trade.proto)
    - [BalancesReply](#.BalancesReply)
    - [BalancesRequest](#.BalancesRequest)
    - [MarketPriceReply](#.MarketPriceReply)
    - [MarketPriceRequest](#.MarketPriceRequest)
    - [MarketsReply](#.MarketsReply)
    - [MarketsRequest](#.MarketsRequest)
    - [TradeCompleteReply](#.TradeCompleteReply)
    - [TradeCompleteRequest](#.TradeCompleteRequest)
    - [TradeProposeReply](#.TradeProposeReply)
    - [TradeProposeRequest](#.TradeProposeRequest)
  
    - [TradeType](#.TradeType)
  
    - [Trade](#.Trade)
  
- [types.proto](#types.proto)
    - [AddressWithBlindingKey](#.AddressWithBlindingKey)
    - [Balance](#.Balance)
    - [BalanceWithFee](#.BalanceWithFee)
    - [Fee](#.Fee)
    - [Fixed](#.Fixed)
    - [Market](#.Market)
    - [MarketWithFee](#.MarketWithFee)
    - [Price](#.Price)
    - [PriceWithFee](#.PriceWithFee)
  
- [Scalar Value Types](#scalar-value-types)



<a name="swap.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## swap.proto



<a name=".SwapAccept"></a>

### SwapAccept



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Random unique identifier for the current message |
| request_id | [string](#string) |  | indetifier of the SwapRequest message |
| transaction | [string](#string) |  | The partial signed transaction base64 encoded containing the Responder&#39;s signed inputs in a PSBT format |
| input_blinding_key | [SwapAccept.InputBlindingKeyEntry](#SwapAccept.InputBlindingKeyEntry) | repeated | In case of a confidential transaction the blinding key of each confidential input is included. Each blinding key is identified by the prevout script hex encoded. |
| output_blinding_key | [SwapAccept.OutputBlindingKeyEntry](#SwapAccept.OutputBlindingKeyEntry) | repeated | In case of a confidential transaction the blinding key of each confidential output is included. Each blinding key is identified by the output script hex encoded. |






<a name=".SwapAccept.InputBlindingKeyEntry"></a>

### SwapAccept.InputBlindingKeyEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |






<a name=".SwapAccept.OutputBlindingKeyEntry"></a>

### SwapAccept.OutputBlindingKeyEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |






<a name=".SwapComplete"></a>

### SwapComplete



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Random unique identifier for the current message |
| accept_id | [string](#string) |  | indetifier of the SwapAccept message |
| transaction | [string](#string) |  | The signed transaction base64 encoded containing the Proposers&#39;s signed inputs in a PSBT format |






<a name=".SwapFail"></a>

### SwapFail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Random unique identifier for the current message |
| message_id | [string](#string) |  | indetifier of either SwapRequest or SwapAccept message. It can be empty |
| failure_code | [uint32](#uint32) |  | The failure code. It can be empty |
| failure_message | [string](#string) |  | The failure reason messaged |






<a name=".SwapRequest"></a>

### SwapRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Random unique identifier for the current message |
| amount_p | [uint64](#uint64) |  | The proposer&#39;s quantity |
| asset_p | [string](#string) |  | The proposer&#39;s asset hash |
| amount_r | [uint64](#uint64) |  | The responder&#39;s quantity |
| asset_r | [string](#string) |  | The responder&#39;s asset hash |
| transaction | [string](#string) |  | The proposer&#39;s unsigned transaction in PSBT format (base64 string) |
| input_blinding_key | [SwapRequest.InputBlindingKeyEntry](#SwapRequest.InputBlindingKeyEntry) | repeated | In case of a confidential transaction the blinding key of each confidential input is included. Each blinding key is identified by the prevout script hex encoded. |
| output_blinding_key | [SwapRequest.OutputBlindingKeyEntry](#SwapRequest.OutputBlindingKeyEntry) | repeated | In case of a confidential transaction the blinding key of each confidential output is included. Each blinding key is identified by the output script hex encoded. |






<a name=".SwapRequest.InputBlindingKeyEntry"></a>

### SwapRequest.InputBlindingKeyEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |






<a name=".SwapRequest.OutputBlindingKeyEntry"></a>

### SwapRequest.OutputBlindingKeyEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |





 

 

 

 



<a name="trade.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## trade.proto



<a name=".BalancesReply"></a>

### BalancesReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [BalanceWithFee](#BalanceWithFee) | repeated |  |






<a name=".BalancesRequest"></a>

### BalancesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| market | [Market](#Market) |  |  |






<a name=".MarketPriceReply"></a>

### MarketPriceReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prices | [PriceWithFee](#PriceWithFee) | repeated |  |






<a name=".MarketPriceRequest"></a>

### MarketPriceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| market | [Market](#Market) |  |  |
| type | [TradeType](#TradeType) |  |  |
| amount | [uint64](#uint64) |  |  |
| asset | [string](#string) |  |  |






<a name=".MarketsReply"></a>

### MarketsReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| markets | [MarketWithFee](#MarketWithFee) | repeated |  |






<a name=".MarketsRequest"></a>

### MarketsRequest
BOTD#4 Service&#39;s messages






<a name=".TradeCompleteReply"></a>

### TradeCompleteReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txid | [string](#string) |  |  |
| swap_fail | [SwapFail](#SwapFail) |  |  |






<a name=".TradeCompleteRequest"></a>

### TradeCompleteRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| swap_complete | [SwapComplete](#SwapComplete) |  |  |
| swap_fail | [SwapFail](#SwapFail) |  |  |






<a name=".TradeProposeReply"></a>

### TradeProposeReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| swap_accept | [SwapAccept](#SwapAccept) |  |  |
| swap_fail | [SwapFail](#SwapFail) |  |  |
| expiry_time_unix | [uint64](#uint64) |  |  |






<a name=".TradeProposeRequest"></a>

### TradeProposeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| market | [Market](#Market) |  |  |
| type | [TradeType](#TradeType) |  |  |
| swap_request | [SwapRequest](#SwapRequest) |  |  |





 


<a name=".TradeType"></a>

### TradeType


| Name | Number | Description |
| ---- | ------ | ----------- |
| BUY | 0 |  |
| SELL | 1 |  |


 

 


<a name=".Trade"></a>

### Trade


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Markets | [.MarketsRequest](#MarketsRequest) | [.MarketsReply](#MarketsReply) | Markets: List all the markets open for trading. |
| Balances | [.BalancesRequest](#BalancesRequest) | [.BalancesReply](#BalancesReply) | Balances: Gets the balances of the two current reserves in the given market. |
| MarketPrice | [.MarketPriceRequest](#MarketPriceRequest) | [.MarketPriceReply](#MarketPriceReply) | MarketPrice: Gets the current market price. In case of AMM startegy, the trade type and the amount of asset to be either sent or received.

BUY = quote asset as input SELL = base asset as input

If the type of the trade is BUY it means the base asset will be received by the trader.

If the type of the trade is SELL it means the base asset will be sent by the trader. |
| TradePropose | [.TradeProposeRequest](#TradeProposeRequest) | [.TradeProposeReply](#TradeProposeReply) stream | TradePropose: Sends a swap request message containing a partial signed transaction.

BUY = quote asset as input SELL = base asset as input

If the type of the trade is BUY it means the base asset will be received by the trader.

If the type of the trade is SELL it means the base asset will be sent by the trader. |
| TradeProposeUnary | [.TradeProposeRequest](#TradeProposeRequest) | [.TradeProposeReply](#TradeProposeReply) | Unary RPC for TradePropose. |
| TradeComplete | [.TradeCompleteRequest](#TradeCompleteRequest) | [.TradeCompleteReply](#TradeCompleteReply) stream | TradeComplete: Sends the trader&#39;s counter-signed transaction to the provider. If something wrong, a swap fail message is sent. It returns the transaction hash of the broadcasted transaction. |
| TradeCompleteUnary | [.TradeCompleteRequest](#TradeCompleteRequest) | [.TradeCompleteReply](#TradeCompleteReply) | Unary RPC for TradeComplete. |

 



<a name="types.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## types.proto



<a name=".AddressWithBlindingKey"></a>

### AddressWithBlindingKey



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | The confidential address encoded using a blech32 format. |
| blinding | [string](#string) |  | The blinding private key for the given address encoded in hex format |






<a name=".Balance"></a>

### Balance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_amount | [uint64](#uint64) |  |  |
| quote_amount | [uint64](#uint64) |  |  |






<a name=".BalanceWithFee"></a>

### BalanceWithFee



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balance | [Balance](#Balance) |  |  |
| fee | [Fee](#Fee) |  |  |






<a name=".Fee"></a>

### Fee
Custom Types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basis_point | [int64](#int64) |  |  |
| fixed | [Fixed](#Fixed) |  |  |






<a name=".Fixed"></a>

### Fixed



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_fee | [int64](#int64) |  |  |
| quote_fee | [int64](#int64) |  |  |






<a name=".Market"></a>

### Market



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_asset | [string](#string) |  |  |
| quote_asset | [string](#string) |  |  |






<a name=".MarketWithFee"></a>

### MarketWithFee



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| market | [Market](#Market) |  |  |
| fee | [Fee](#Fee) |  |  |






<a name=".Price"></a>

### Price



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_price | [float](#float) |  |  |
| quote_price | [float](#float) |  |  |






<a name=".PriceWithFee"></a>

### PriceWithFee



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| price | [Price](#Price) |  |  |
| fee | [Fee](#Fee) |  |  |
| amount | [uint64](#uint64) |  |  |
| asset | [string](#string) |  |  |
| balance | [Balance](#Balance) |  |  |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

