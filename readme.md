
# Ethereum Wallet Creator

This simple Node.js script allows you to generate a new Ethereum wallet, including its public address, private key, and mnemonic phrase.

## Features

- Generates a new random Ethereum wallet.
- Displays the public address, private key, and mnemonic phrase.
- Provides a crucial warning about securing your private key and mnemonic.

## Prerequisites

Before running this script, you need to have Node.js installed on your system.

## Installation

1.  **Clone the repository (or create the file manually):**

    If you're cloning a repository that contains this file:
    ```bash
    git https://github.com/Teteration/makeCryptoWallet.git
    cd makeCryptoWallet
    ```

    If you're creating the file manually, save the provided code as `createWallet.js`.

2.  **Install dependencies:**

    This script uses the `ethers.js` library. You need to install it:
    ```bash
    npm install ethers
    ```

## Usage

To generate a new Ethereum wallet, simply run the script from your terminal:

```bash
node createWallet.js
```

## Output Example

    📄 Public Address: 0x31862Af875FD6cA85Ad4768589faD6B7D2577747
    🤫 Private Key: 0xe9e2d024c6740a90b360f1ffee10d93a112794d72278a3ac60633e0ef93d8afe
    🔑 Mnemonic Phrase: favorite south pen loop shrimp flower mask forget muscle scout myth ask
