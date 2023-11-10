import * as amplitude from "@amplitude/analytics-browser"

export function track(eventName, eventParams) {
	if (eventParams) {
		amplitude.track(eventName, eventParams)
	} else {
		amplitude.track(eventName)
	}
}

export const ampliEvents = {
	test: "TEST",
	ethConnect: "eth_connect",
	ethConnected: "eth_connected",
	ethConnectError: "eth_connect_error",
	cryptoSelect: "crypto_select",
	cryptoSelectButton: "crypto_select_button",
	scrollPlace: "scroll_place",
	purchase: "purchase",
	purchaseSuccess: "purchase_success",
	purchaseFailure: "purchase_failure",
	purchaseTx: "purchase_transaction",

	connectWalletButton: "connect_wallet_button_click",
	connectWalletError: "connect_wallet_error",
	connectWalletSuccess: "connect_wallet_success",
	purchaseSubmit: "mint_submit",
	purchaseError: "purchase_error",
	purchaseInput: "mint_input_active",
	etherscanClick: "etherscan_click",
}

export const ampli = {
	navClick: "NavigationClick",
	walletHeader: "HeaderConnectWalletClick",
	ecoClick: "EcosystemClick",
	valuesClick: "ValuesClick",
	tokenClick: "TokenomicClick",
	utilClick: "UtilitiesClick",

	walletMint: "MintConnectWalletClick",
	mintNFT: "MintMintToonClick",
	footerClick: "FooterClick",

	walletSuccess: "Successful Wallet Connect",
	walletSuccessBalance: "Successful Wallet Connect Balance",

	walletError: "Error Wallet Connect",
	mintError: "Mint NFT error",
	mintSuccess: "Mint NFT success",
	chain: "Chain Switch",
	discordCom: "Discord Community Click",

	pageLoad: "Page Load",
	pageScroll: "Page Scrolled",

	connectModal: "Mobile Connect Modal",
	join: "Join Us Click",
	disconnect: "Wallet Disconnected",
	closeModal: "Mobile Connect Modal Closed",
}
