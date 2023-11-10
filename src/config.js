const query = "1"
const isDebug = !!query["debug"]
const isProduction = true
const clientToken = window.localStorage["tooncoin:client_token"] || makeClientToken()

window.localStorage["tooncoin:client_token"] = clientToken
window.localStorage["tooncoin:first_visit_at"] = window.localStorage["tooncoin:first_visit_at"] || Date.now()

let injectedProvider = false

if (typeof window.ethereum !== "undefined") {
	injectedProvider = true
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false
export const supportedChains = [1, 56, 137, 42161]

const mainconfig = {
	query: query,
	isDebug: isDebug,
	isProduction: isProduction,
	isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
	isMobile: /iphone|ipad|android/i.test(window.navigator.userAgent),
	isMetaMask: isMetaMask, //testing whether the user's browser is running the MetaMask extension
	clientToken: clientToken,
	locale: query["locale"] || query["lang"] || window.navigator.language || undefined,
	ethAmountQueryKey: "eth_amount",
	contract: {
		address: {
			mainnet: "0xE8078B5198E572Be8D8D412511d48b7D0f5E9a1c",
			goerli: "0x7E3BA0bCD192155ac7b9E51613C639e4e026d2dD",
		},
		abiPath: "./R2d2V0Extended.abi.json",
	},
	services: {
		walletconnect: {
			key: "08d390b3c49fa9c71e72aed16e58d580",
		},
		infura: {
			key: "5871ff536f3d43e59131d71f88c2b0b5",
		},
		alchemy: {
			key: "wg6wp8N_jgPqBLyx94PxLRrNLVer2Elb",
		},
		amplitude: {
			key: "a280a03e71325ce92bb0695610481006",
		},
	},
}

export default mainconfig

function makeClientToken() {
	let platformSegment = "u"
	const userAgent = navigator.userAgent || navigator.vendor || window.opera
	if (/android/i.test(userAgent)) {
		platformSegment = "a"
	} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		platformSegment = "i"
	}

	let result = ""
	const map = "abcdef0123456789"
	for (let i = 0; i < 32; i++) {
		result += map.charAt(Math.floor(Math.random() * map.length))
	}

	return ["b", platformSegment, result].join(":")
}
