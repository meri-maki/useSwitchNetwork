import { useAccount, useNetwork, useSwitchNetwork } from "wagmi"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import React from "react"

function Account() {
	return <w3m-account-button balance={false} />
}

function Chain() {
	return <w3m-network-button />
}

export default function ConnectButton(props) {
	const { open } = useWeb3Modal()
	const { isConnected } = useAccount()
	const network = useSwitchNetwork({
		onSuccess(data) {
			console.log("Success", data)
		},
	})

	return (
		<>
			{isConnected ? (
				<>
					<Chain />
					<Account />
				</>
			) : (
				<button
					onClick={() => {
						open()
					}}
				>
					Connect Wallet
				</button>
			)}
		</>
	)
}
