/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Button from "../../../ui/Button/Button"
import { Modal } from "../../../ui/Modal/Modal.jsx"
import cls from "./MintSuccess.module.scss"
import Card from "@/NFT/CARDS.webp"
import Blue from "@/NFT/diamond-blue-success.webp"
import Small from "@/NFT/diamond-blue-small.webp"
import Desk from "@/NFT/diamond-purple-success.webp"

import Purple from "@/TOKENOMIC/diamond.webp"
import { ampli, track } from "../../../../helpers/amplitude"
import { Links } from "../../../../helpers/texts"

const MintSuccess = (props) => {
	const { isOpen, onClose } = props
	return (
		<Modal className={cls.MintSuccess} isOpen={isOpen} onClose={onClose}>
			<h3>
				Congratulations!
				<br /> You're In!
			</h3>
			<div className={cls.imagesBlock}>
				<img alt="icon" src={Blue} width="35" height="auto" className={cls.blue} data-absolute />
				<img alt="icon" src={Purple} width="39" height="auto" className={cls.purple} data-absolute />
				<img alt="icon" src={Desk} width="40" height="auto" className={cls.desk} data-absolute />

				<img alt="icon" src={Card} className={cls.card} width="320" height="auto" />
				<img alt="icon" src={Small} width="21" height="auto" className={cls.small} data-absolute />
			</div>
			<h5>
				You've just secured your <b>ToON Pass</b>, marking you as an early member of our digital frontier. Dive into our exclusive community created just for early adopters like you.
			</h5>
			<Button link href={Links.discord} onClick={() => track(ampli.discordCom)}>
				Join the Exclusive Circle Now
			</Button>
		</Modal>
	)
}
export default MintSuccess
