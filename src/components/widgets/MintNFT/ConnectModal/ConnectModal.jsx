/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { useWeb3Modal } from "@web3modal/wagmi/react"

import Button from "../../../ui/Button/Button"
import { Modal } from "../../../ui/Modal/Modal.jsx"
import cls from "./ConnectModal.module.scss"
import MM from "@/mm.svg"
import WC from "@/wc.svg"

import { ampli, track } from "../../../../helpers/amplitude"
import { Links } from "../../../../helpers/texts"
import Link from "../../../ui/Link/Link"

function ConnectorButton(props) {
	const { open } = useWeb3Modal()

	const { connector, onClose } = props
	return (
		<>
			{connector == "mm" ? (
				<Button link href={Links.metamask} modal onClick={() => track(ampli.connectModal, { connector: "MetaMask" })}>
					<img src={MM} width="80" height="80" data-img />
					<h4>MetaMask</h4>
					<p>Connect to your MetaMask Wallet</p>
					<Link arrow>Connect</Link>
				</Button>
			) : (
				<Button
					modal
					onClick={() => {
						track(ampli.connectModal, { connector: "WalletConnect" })
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
			)}
		</>
	)
}

const ConnectModal = (props) => {
	const { isOpen, onClose } = props
	return (
		<Modal className={cls.ConnectModal} isOpen={isOpen} onClose={onClose}>
			<h3>Choose one</h3>
			<div className={cls.cardsBlock}>
				<ConnectorButton connector="mm" />
				<ConnectorButton onClose={onClose} connector="wc" />
			</div>
		</Modal>
	)
}
export default ConnectModal
