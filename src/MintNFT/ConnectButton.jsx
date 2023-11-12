import { useWeb3Modal } from "@web3modal/wagmi/react"
import React from "react"
import Button from "../ui/Button/Button"

import mainconfig, { supportedChains } from "../config"

import { useAccount } from "wagmi"

function Account({ header }) {
	return (
		<div className={header ? "disabledChild" : ""}>
			<w3m-account-button balance={false} />
		</div>
	)
}

function Chain() {
	return <w3m-network-button />
}

const ConnectButton = (props) => {
	const { action, connect, header, chain } = props
	const { open } = useWeb3Modal()
	const { isConnected } = useAccount()

	const isMetaMask = mainconfig.isMetaMask
	const isMobile = mainconfig.isMobile
	return (
		<Button
			headerBtn={header}
			pink
			connect={connect}
			onClick={() => {
				open()
			}}
		>
			Connect Wallet
			<div className="sh"></div>
		</Button>
	)
}
export default React.memo(ConnectButton)
