const bs58 = require('bs58')
const CryptoJS = require('crypto-js');

var privkey = process.argv[2]

if(privkey.length < 64){
    //ensure it'll be 64 characters
    for(var i=0; i<64-process.argv[2].length; i++){
        privkey = "0" + privkey
    }
    
}

privateKeyWIF(privkey, process.argv[3], process.argv[4])

// Taken from: https://stackoverflow.com/a/34356351/19985220
function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

function privateKeyWIF(private_key, network, compressed){
    console.log("Private Key (32 bytes): " + private_key)
    if(network != null){
        console.log("Network: " + network)
    }else{
        console.log("Network: mainnet")
    }
    if(network != null){
        console.log("Compressed: " + compressed)
    }else{
        console.log("Compressed: true")
    }
   
    var prefix;
    if(network == null || network == "mainnet"){
        prefix = "80"; //main net by default
    }else if(network == "testnet"){
        prefix = "ef";
    }
    var extended = prefix + private_key
    if(compressed != "false" && compressed != "FALSE"){
        extended += "01"
    }
    
    // Hash the extended twice, and get its checksum
    var hash1 = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(extended)).toString();
    var hash2 = CryptoJS.SHA256(CryptoJS.enc.Hex.parse(hash1)).toString();
    var checksum = hash2.substring(0, 8)
    
    // WIF = Base58(extended + checksum)
    const WIF = bs58.encode(hexToBytes(extended + checksum))
    console.log("------------------------------------------------------------\nWIF: " + WIF)
}
