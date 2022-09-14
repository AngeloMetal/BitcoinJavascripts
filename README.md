# Bitcoin NodeJS toolkit
Utility of ``wif.js``: 32-byte ECDSA private key convertion to WIF.

Arguments for ``wif.js``:

``node wif.js <priv_key> <network> <compressed>``

Options for ``<network>``: "mainnet", "testnet" (by default, it's mainnet)

Options for ``<compressed>``: "true", "false" (by default, it's true)

Example:
```
$ node wif.js 8f0dc902c75db6a6f33b4527df96f6d4c8f19b9956f422d4a1b5e5d3c984981e mainnet true
Private Key (32 bytes): 8f0dc902c75db6a6f33b4527df96f6d4c8f19b9956f422d4a1b5e5d3c984981e
Network: mainnet
Compressed: true
------------------------------------------------------------
WIF: L21ni1VoVBr6fdbPbKajpjykprJKZzG3McAvd5HgfE1QQhkHz3FH
```
