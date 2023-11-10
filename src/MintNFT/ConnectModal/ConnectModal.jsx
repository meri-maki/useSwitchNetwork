/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import Button from "../../ui/Button/Button"
import Link from "../../ui/Link/Link"

import cls from "./ConnectModal.module.scss"
import MM from "@/mm.svg"
import WC from "@/wc.svg"

function WCConnector(props) {
	const { open } = useWeb3Modal()
	const { onClose } = props
	return (
		<Button
			modal
			onClick={() => {
				onClose()
				open()
			}}
		>
			<img src={WC} width="80" height="80" data-img />
			<h4>WalletConnect</h4>
			<p>Use WalletConnect to connect</p>
			<Link arrow className={cls.link}>
				Connect
			</Link>
		</Button>
	)
}

function MMConnector() {
	return (
		<Button link href={""} modal>
			<img src={MM} width="80" height="80" data-img />
			<h4>MetaMask</h4>
			<p>Connect to your MetaMask Wallet</p>
			<Link arrow>Connect</Link>
		</Button>
	)
}

const ConnectModal = (props) => {
	const { isOpen, onClose } = props
	return (
		<Modal className={cls.ConnectModal} isOpen={isOpen} onClose={onClose}>
			<h3>Choose one</h3>
			<div className={cls.cardsBlock}>
				<MMConnector />
				<WCConnector onClose={onClose} />
			</div>
		</Modal>
	)
}
export default ConnectModal
