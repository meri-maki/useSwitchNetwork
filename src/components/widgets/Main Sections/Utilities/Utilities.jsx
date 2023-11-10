/* eslint-disable react/no-unescaped-entities */
import cls from "./Utilities.module.scss"
import Heart from "@/UTIL/heart.webp"
import Knot2 from "@/UTIL/knot2.webp"
import Knot3 from "@/UTIL/knot3.webp"
import Diamond from "@/UTIL/diamond.webp"
import Small from "@/UTIL/diamond-small.webp"
import Discord from "@/NFT/discord.webp"
import Chat from "@/UTIL/chat.webp"

import React, { useEffect, useRef } from "react"
import { Links } from "../../../../helpers/texts"
import { ampli, track } from "../../../../helpers/amplitude"

export default function Utilities() {
	const revealElements = useRef(null)
	useEffect(() => {
		const elements = revealElements.current.querySelectorAll("[data-reveal]")
		const options = {
			threshold: 0.1,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animated")
					observer.unobserve(entry.target)
				}
			})
		}, options)
		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])
	return (
		<section className={cls.utilities} ref={revealElements} data-scroll-place-id="token utilities">
			<div data-content className={cls.content}>
				<img src={Diamond} className={cls.diamond} data-reveal="2" data-absolute data-object alt="diamond" width="88" height="88" />
				<img src={Small} className={cls.small} data-reveal="3" data-absolute data-object alt="diamond" width="48" height="48" />

				<div className={cls.mainBlock}>
					<h2 data-reveal>Token Utilities</h2>
					<div className={cls.cardBlock}>
						<div className={cls.card} data-reveal="1">
							<div className={cls.cardFlex}>
								<img src={Knot2} alt="icon" width="80" height="80" />
								<h4>Governance</h4>
							</div>

							<p>Holding tokens grants voting power in the DAO. This helps influence project development, features, products and more.</p>
						</div>
						<div className={cls.card} data-reveal="1">
							<div className={cls.cardFlex}>
								<img src={Knot3} alt="icon" width="80" height="80" />
								<h4>Exclusive features</h4>
							</div>

							<p>Token holders enjoy exclusive privileges by gaining early access to upcoming features and products within our ecosystem.</p>
						</div>
						<div className={cls.card} data-reveal="1">
							<div className={cls.cardFlex}>
								<img src={Heart} alt="icon" width="80" height="80" />
								<h4>Charity</h4>
							</div>

							<p>Holding ToON tokens means you're already supporting charitable causes as all funds conducted during the minting process is dedicated to charity.</p>
						</div>
					</div>
				</div>
				<div className={cls.addedBlock}>
					<div className={cls.card} data-reveal>
						<img src={Chat} alt="chat" width="80" height="80" className={cls.chat} data-absolute data-reveal="2" />
						<h4>Public offering date</h4>
						<p>To be announced soon.</p>
					</div>
					<div className={cls.card} data-reveal>
						<img src={Discord} alt="discord" width="88" height="88" className={cls.discord} data-reveal="2" data-absolute />
						<h4>Early adopter offering date</h4>
						<p>
							We are preparing a special offer for our early adopters, and it will be announced on our{" "}
							<a target="_blank" className="bold discord" href={Links.discord} onClick={() => track(ampli.utilClick, { link: "Discord" })} rel="noreferrer">
								Discord
							</a>{" "}
							soon.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
