import "~/styles/helpers/resetNew.scss"
import "~/styles/helpers/animations.scss"
import "~/styles/helpers/moving-objects.scss"
import "~/styles/ui/index.scss"

import { createWeb3Modal } from "@web3modal/wagmi/react"
import { walletConnectProvider } from "@web3modal/wagmi"
import * as amplitude from "@amplitude/analytics-browser"

import { createRoot } from "react-dom/client"

import React from "react"
import ErrorBoundary from "~/providers/ErrorBoundary/ErrorBoundary.jsx"
import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { mainnet, polygon, arbitrum, bsc } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"

import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"

import Main from "~/components/pages/Main/Main"
import mainconfig from "../config"

/* amplitude.init(mainconfig.services.amplitude.key, {
	defaultTracking: true,
}) */

localStorage.clear()

window.onscroll = function () {
	let header = document.querySelector("header")
	if (header) {
		if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
			header.classList.add("scrolled")
		} else {
			header.classList.remove("scrolled")
		}
	}
}

const infuraId = mainconfig.services.infura.key
const alchemyId = mainconfig.services.alchemy.key

const projectId = mainconfig.services.walletconnect.key

const selectedChains = [mainnet, polygon, arbitrum, bsc]

const { chains, publicClient, webSocketPublicClient } = configureChains(
	selectedChains,
	[infuraProvider({ apiKey: infuraId, stallTimeout: 1_000 }), alchemyProvider({ apiKey: alchemyId }), walletConnectProvider({ projectId }), publicProvider()],
	{ stallTimeout: 3000 }
)

const metadata = {
	name: "ToON.ORG",
	description: "ToON.ORG Early Access NFT",
	url: "https://toon.org",
	icons: ["https://toon.org/android-chrome-192x192.png"],
}

const connectors = [
	new InjectedConnector({ chains: selectedChains }),
	/* new CoinbaseWalletConnector({
		chains,
		options: {
			appName: "ToON.ORG",
		},
	}), */
	new WalletConnectConnector({
		chains,
		options: {
			infuraId,
			projectId: projectId,
			showQrModal: false,
			excludeWalletIds: ["c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a", "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"],
			metadata,
			themeVariables: {
				"--wcm-font-family": "Inter, sans-serif",
				"--wcm-accent-color": "#F79F1F",
				"--wcm-overlay-background-color": "rgba(0, 0, 0, 0.6)",
			},
			enableAuthMode: true,
		},
	}),
]

const wagmiConfig = createConfig({
	autoConnect: false,
	connectors: connectors,
	publicClient,
	webSocketPublicClient,
	logger: {
		warn: (message) => console.log(message),
	},
})

createWeb3Modal({
	defaultChain: mainnet,
	wagmiConfig,
	projectId,
	chains,
	enableAnalytics: true,
	privacyPolicyUrl: "https://www.earlyaccess.toon.org",
	excludeWalletIds: ["c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a", "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"],
	themeVariables: {
		"--w3m-accent": "#F79F1F",
		"--w3m-color-mix": "#00C6E0",
		"--w3m-color-mix-strength": 0,
	},
	enableAuthMode: true,
})

const root = createRoot(document.getElementById("page-container"))

root.render(
	<WagmiConfig config={wagmiConfig}>
		<ErrorBoundary>
			<Main />
		</ErrorBoundary>
	</WagmiConfig>
)
