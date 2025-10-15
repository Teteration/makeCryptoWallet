const ethers = require('ethers');

async function createNewWallet() {
    try {
        console.log("🚀 در حال ساخت یک کیف پول جدید اتریوم...");

        const wallet = ethers.Wallet.createRandom();

        console.log("\n✅ کیف پول با موفقیت ساخته شد!");
        console.log("==================================================================");
        
        console.log(`📄 آدرس عمومی (Public Address): ${wallet.address}`);
        console.log(`🤫 کلید خصوصی (Private Key): ${wallet.privateKey}`);
        
        console.log(`🔑 کلمات بازیابی (Mnemonic Phrase): ${wallet.mnemonic.phrase}`);
        
        console.log("==================================================================");
        console.log("\n⚠️ هشدار جدی: کلید خصوصی و کلمات بازیابی خود را در مکانی امن و آفلاین ذخیره کنید.");
        console.log("هر کسی با دسترسی به این اطلاعات، کنترل کامل دارایی‌های شما را خواهد داشت.");

    } catch (error) {
        console.error("خطا در ساخت کیف پول:", error);
    }
}

createNewWallet();