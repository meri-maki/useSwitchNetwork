import { createWeb3Modal } from "@web3modal/wagmi/react"
import "~/styles/helpers/resetNew.scss"
import "~/styles/helpers/animations.scss"
import "~/styles/helpers/moving-objects.scss"
import "~/styles/ui/index.scss"
import { walletConnectProvider } from "@web3modal/wagmi"
import ErrorBoundary from "~/ErrorBoundary/ErrorBoundary.jsx"

import { createRoot } from "react-dom/client"

import React from "react"

import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi"
import { polygon, arbitrum, bsc, sepolia } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"

import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"

import Main from "./Main.jsx"
import mainconfig from "./config"

const infuraId = mainconfig.services.infura.key
const projectId = mainconfig.services.walletconnect.key

const selectedChains = [mainnet, polygon, arbitrum, bsc]

const { chains, publicClient, webSocketPublicClient } = configureChains(selectedChains, [infuraProvider({ apiKey: infuraId }), walletConnectProvider({ projectId }), publicProvider()])
const connector = new InjectedConnector({ chains: selectedChains })

const wagmiConfig = createConfig({
	autoConnect: false,
	connectors: [
		connector,
		new MetaMaskConnector({
			chains,
		}),
		new WalletConnectConnector({
			chains,
			options: {
				infuraId,
				projectId: projectId,
				showQrModal: false,
			},
		}),
	],
	publicClient,
	webSocketPublicClient,
})

createWeb3Modal({
	defaultChain: mainnet,
	wagmiConfig,
	projectId,
	chains,
})

const root = createRoot(document.getElementById("page-container"))

root.render(
	<WagmiConfig config={wagmiConfig}>
		<ErrorBoundary>
			<Main />
		</ErrorBoundary>
	</WagmiConfig>
)
