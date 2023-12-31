import { createWeb3Modal } from "@web3modal/wagmi/react"
import "~/styles/helpers/resetNew.scss"

import { walletConnectProvider } from "@web3modal/wagmi"
import { createRoot } from "react-dom/client"

import React from "react"

import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi"
import { optimism } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"

import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"

import Main from "./Main.jsx"
import mainconfig from "./config"

const infuraId = mainconfig.services.infura.key
const projectId = mainconfig.services.walletconnect.key

const selectedChains = [optimism]

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
	defaultChain: optimism,
	wagmiConfig,
	projectId,
	chains,
})

const root = createRoot(document.getElementById("page-container"))

root.render(
	<WagmiConfig config={wagmiConfig}>
		<Main />
	</WagmiConfig>
)
