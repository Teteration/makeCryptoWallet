// createWallet.js

// 1. وارد کردن کتابخانه ethers
const ethers = require('ethers');

// تابعی برای ساخت و نمایش اطلاعات کیف پول
async function createNewWallet() {
    try {
        console.log("🚀 در حال ساخت یک کیف پول جدید اتریوم...");

        // 2. ساخت یک کیف پول جدید به صورت تصادفی و امن
        const wallet = ethers.Wallet.createRandom();

        console.log("\n✅ کیف پول با موفقیت ساخته شد!");
        console.log("==================================================================");
        
        // 3. نمایش اطلاعات کیف پول
        console.log(`📄 آدرس عمومی (Public Address): ${wallet.address}`);
        console.log(`🤫 کلید خصوصی (Private Key): ${wallet.privateKey}`); // هرگز این را در یک برنامه واقعی نمایش ندهید!
        
        // mnemonic (مجموعه کلمات بازیابی) بسیار مهم است
        console.log(`🔑 کلمات بازیابی (Mnemonic Phrase): ${wallet.mnemonic.phrase}`);
        
        console.log("==================================================================");
        console.log("\n⚠️ هشدار جدی: کلید خصوصی و کلمات بازیابی خود را در مکانی امن و آفلاین ذخیره کنید.");
        console.log("هر کسی با دسترسی به این اطلاعات، کنترل کامل دارایی‌های شما را خواهد داشت.");

    } catch (error) {
        console.error("خطا در ساخت کیف پول:", error);
    }
}

// اجرای تابع
createNewWallet();