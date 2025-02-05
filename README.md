# Mnemonic Generator & Wallet Address Creator

This is a **Next.js** project that generates a **BIP-39 mnemonic** and derives **Ethereum** and **Solana** wallet addresses from it.

## Features
- Generate a **BIP-39 mnemonic** using the `bip39` npm package
- Derive **Ethereum** addresses from the mnemonic
- Derive **Solana** addresses from the mnemonic
- Simple and user-friendly UI with Next.js

## Tech Stack
- **Next.js** - React framework for server-side rendering
- **bip39** - Mnemonic generation and validation
- **ethers.js** - Ethereum wallet derivation
- **@solana/web3.js** - Solana wallet derivation

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/rajtilak01/web-wallet.git
cd web-wallet
```

### 2. Install Dependencies
```bash
npm install  # or yarn install
```

### 3. Run the Development Server
```bash
npm run dev  # or yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
1. Click the **Generate Mnemonic** button to create a new mnemonic phrase.
2. View the generated **Ethereum** and **Solana** wallet addresses.
3. Copy and save your mnemonic safely, as it can restore your wallets.


## Security Notice
- **Do NOT use this tool for real funds** unless you fully understand the security risks.
- **Always keep your mnemonic private** and never share it online.

## License
This project is licensed under the **MIT License**.

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

**Author:** Rajtilak Pandey

