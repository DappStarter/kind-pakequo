require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot alcohol remember noise concert hundred light army genre'; 
let testAccounts = [
"0x966812c9ec839299c530c86ebec3d64ba2a9a83c4341cd641940dcae1062efc3",
"0x7328ac636f136377c2bda13fcb75fee1996b4698f8a48979af801e5daeed7112",
"0x068b2fc9ff712dbb335841a4ee02558c3ae507d554d2e6f57738a62f673bc993",
"0xedd6cb9b62cbc980587447da20958139265ef7e445e63fa693ab8a3e1154079f",
"0x142075b54681f5353723cce97fe9d06f918784cf8c0ca8cb70f1237ed37a36d1",
"0xf21cf75e5e2dcbd8625649839f9b43b53360c7340ff225a98dd44b17933c6677",
"0xf2a41de7ad346894801a5662db1db27fbdfa3e2274fc637e27ab90aa90e53a38",
"0x4f33294cc50b1147dad643fcc4516ba9dca29d37e0fe6a7bd373931ee9c92ac1",
"0x96499b021b00ce089512cefdb584026c69eae71712081c16ff6ddbe5d443061d",
"0x1e2134c5ffd1fb428d1d83e6497d2a90aeadb98e9b07fbadd6f44251ec4468cf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
