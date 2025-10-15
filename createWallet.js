const ethers = require('ethers');

async function createNewWallet() {
    try {
        console.log("🚀 Creating a new Ethereum wallet...");

        const wallet = ethers.Wallet.createRandom();

        console.log("\n✅ Wallet created successfully!");
        console.log("==================================================================");
        
        console.log(`📄 Public Address: ${wallet.address}`);
        console.log(`🤫 Private Key: ${wallet.privateKey}`);
        
        console.log(`🔑 Mnemonic Phrase: ${wallet.mnemonic.phrase}`);
        
        console.log("==================================================================");
        console.log("\n⚠️ Serious Warning: Store your private key and mnemonic phrase in a secure, offline location.");
        console.log("Anyone with access to this information will have full control over your assets.");

    } catch (error) {
        console.error("Error creating wallet:", error);
    }
}

createNewWallet();