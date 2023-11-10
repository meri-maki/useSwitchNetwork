import { useWeb3Modal } from "@web3modal/wagmi/react"
import React, { useState, useCallback } from "react"
import Button from "../ui/Button/Button"

import mainconfig, { supportedChains } from "../config"
import ConnectModal from "./ConnectModal/ConnectModal"
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

	const [connectModal, setConnectModal] = useState(false)
	const onCloseModal = useCallback(() => {
		setConnectModal(false)
	}, [])
	return (
		<>
			{isConnected ? (
				<>
					{isMetaMask && header === false && supportedChains.includes(chain.id) && <Chain />}
					{!isMetaMask && header === false && supportedChains.includes(chain.id) && <Chain />}
					<Account header={header} />
				</>
			) : (
				<>
					<Button
						headerBtn={header}
						pink
						connect={connect}
						onClick={() => {
							if (action) {
								action()
							}
							if (isMobile && !isMetaMask) {
								setConnectModal(true)
							} else {
								open()
							}
						}}
					>
						Connect Wallet
						<div className="sh"></div>
					</Button>
					{connectModal && <ConnectModal isOpen={connectModal} onClose={onCloseModal} />}
				</>
			)}
		</>
	)
}
export default React.memo(ConnectButton)
