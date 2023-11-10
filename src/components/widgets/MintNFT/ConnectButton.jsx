import { useWeb3Modal } from "@web3modal/wagmi/react"
import React, { useState, useCallback } from "react"
import Button from "../../ui/Button/Button"
import { toNFT } from "../../../helpers/helpers"
import mainconfig, { supportedChains } from "../../../config"
import ConnectModal from "./ConnectModal/ConnectModal"
import { useToast } from "../../../helpers/hooks/useToast"
import { useAccount } from "wagmi"
import { ampli, track } from "../../../helpers/amplitude"

function Account({ header }) {
	const { dismissAll } = useToast()
	return (
		<div
			className={header ? "disabledChild" : ""}
			onClick={() => {
				if (header) toNFT()
			}}
		>
			<w3m-account-button
				balance={false}
				onClick={() => {
					dismissAll()
				}}
			/>
		</div>
	)
}

function Chain() {
	const { dismissAll } = useToast()

	return <w3m-network-button onClick={() => dismissAll()} />
}

export default function ConnectButton(props) {
	const { action, connect, header, chain } = props
	const { open } = useWeb3Modal()
	const { isConnected } = useAccount()

	const isMetaMask = mainconfig.isMetaMask
	const isMobile = mainconfig.isMobile

	const [connectModal, setConnectModal] = useState(false)
	const onCloseModal = useCallback(() => {
		setConnectModal(false)
		track(ampli.closeModal)
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
