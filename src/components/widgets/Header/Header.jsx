import React, { useState, useEffect } from "react"
import cls from "./Header.module.scss"
import { classNames } from "~/tools/classNames"
import ConnectButton from "../MintNFT/ConnectButton"
import { ampli, track } from "../../../helpers/amplitude"
import { toElement } from "../../../helpers/helpers"

export default function Header(props) {
	const { className, refs } = props
	const { EcoRef, TokenRef, RoadRef, NFTRef, HeroRef, MintRef } = refs
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 40) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header className={classNames(cls.header, { [cls.scrolled]: scrolled }, [className])} id="header">
			<div className={cls.container}>
				<div className={cls.logo} onClick={() => toElement(HeroRef)}>
					ToON.ORG
				</div>
				<div className={cls.listWrapper}>
					<ul className={cls.list}>
						<li
							onClick={() => {
								track(ampli.navClick, { section: "About" })
								toElement(HeroRef)
							}}
						>
							About
						</li>
						<li
							onClick={() => {
								track(ampli.navClick, { section: "ToON Ecosystem" })
								toElement(EcoRef)
							}}
						>
							ToON Ecosystem
						</li>
						<li
							onClick={() => {
								track(ampli.navClick, { section: "Tokenomics" })
								toElement(TokenRef)
							}}
						>
							Tokenomics
						</li>
						<li
							onClick={() => {
								track(ampli.navClick, { section: "Early Access" })
								toElement(NFTRef)
							}}
						>
							Early Access
						</li>
						<li
							onClick={() => {
								track(ampli.navClick, { section: "Roadmap" })

								toElement(RoadRef)
							}}
						>
							Roadmap
						</li>
					</ul>
				</div>

				<ConnectButton
					header={true}
					MintRef={MintRef}
					action={() => {
						toElement(NFTRef)
						track(ampli.walletHeader)
					}}
				/>
			</div>
		</header>
	)
}
