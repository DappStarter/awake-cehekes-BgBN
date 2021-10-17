require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach razor pave pulp grace office army giant'; 
let testAccounts = [
"0x2172b4702bc493d0df85d47c12ed1564e516147b50532c0442e0be0e4f150313",
"0x37be3d9b99ffdfdc960951f0b2532b7b14fbfe6ccb49bf9c2c0a515c82d8deb3",
"0x7d343b1e3dd228881447962179066ee30f0e5caa2b9098f5102ca176273865cb",
"0xd11af92f6de468e87db11b4aa97ef0b590a831353c0d72934fecb076064d8196",
"0xa169e9f3f05f895632adfc53176bb9f3e7ae820a530d6e7b60f02abb1649c3ba",
"0x77242504804932913b6592ca2874f1d31b5391f4696bb4fc55e882781b2fac2d",
"0x8426365b32ac87db47ebf2f370c91da9a9c1815adbb8c5fb5ef06c483fb177f1",
"0x2697436a531a2ce92767db4d29b9909e6bcdf2262eb1fd19e83fb1bba3359a43",
"0x87237fcbdedc08633140038d79a557295f1c898e8d80c45ab03a21003be8c5a7",
"0xcf09e87192c0641310ff582804bc95ee29e978f7ade29dcd60d52bf358068aac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


