/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Button from "../../ui/Button/Button"
import { Modal } from "../../ui/Modal/Modal.jsx"
import cls from "./MintSuccess.module.scss"
import Card from "@/NFT/CARDS.webp"
import Blue from "@/NFT/diamond-blue-success.webp"
import Small from "@/NFT/diamond-blue-small.webp"
import Desk from "@/NFT/diamond-purple-success.webp"
import DiscordIcon from "@/UI/icons/discord.svg"

import Purple from "@/TOKENOMIC/diamond.webp"

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
				Join our <b>exclusive Discord community</b> for early adopters now - click the{" "}
				<a href={Links.discord} className="bold primary-200" target="_blank" rel="noreferrer">
					secret link
				</a>{" "}
				and <b>grab your perks</b>!
			</h5>
			<Button link discord yellow className={cls.button}>
				<img src={DiscordIcon} alt="x" width="16" height="16" />
				<span>Join now 🔥</span>
				<div className="sh"></div>
			</Button>
		</Modal>
	)
}
export default MintSuccess
