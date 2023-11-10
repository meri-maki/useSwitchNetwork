import React, { forwardRef, useEffect, useRef } from "react"
import AppButton from "~/components/ui/Button/AppButton.jsx"
import Button from "~/components/ui/Button/Button.jsx"
import Card from "~/components/ui/Card/Card.jsx"
import cls from "./Ecosystem.module.scss"
import Coins from "@/ECOSYSTEM/coins.webp"
import Phone from "@/ECOSYSTEM/iphone.webp"
import PhoneMbl from "@/ECOSYSTEM/iphone-mbl.webp"
import ToonMbl from "@/ECOSYSTEM/toon-mbl.webp"
import img1 from "@/ECOSYSTEM/img1.webp"
import img2 from "@/ECOSYSTEM/img2.webp"
import Telegram from "@/ECOSYSTEM/telegram.webp"
import Diamond from "@/ECOSYSTEM/diamond-3.webp"

import Id from "@/ECOSYSTEM/id-card.webp"
import { Links } from "~/helpers/texts"
import { ampli, track } from "~/helpers/amplitude"

const Ecosystem = forwardRef((props, ref) => {
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
	const { LinkRef } = props
	return (
		<section className={cls.ecosystem} ref={ref} data-scroll-place-id="toon ecosystem">
			<div data-content ref={revealElements}>
				<img src={Telegram} className={cls.telegram} data-reveal data-absolute data-object alt="icon" width="160" height="160" />
				<img src={Diamond} className={cls.diamond} data-reveal data-absolute data-object alt="icon" width="144" height="144" />

				<h2 data-reveal>ToON Ecosystem</h2>
				<div className={cls.cardBlock}>
					<Card color="blue" className={cls.bot}>
						<div className={cls.info}>
							<div className={cls.flexContainer}>
								<div>
									<h3>ToON Telegram Bot</h3>
									<h5>
										Create your bitcoin creative through{" "}
										<a href={Links.bitcoin} className="telegram" target="_blank" rel="noreferrer" onClick={() => track(ampli.ecoClick, { button: "BitcoinArtBot IN TEXT LINK" })}>
											<b>ToON Telegram</b> Bot
										</a>
										.
									</h5>
								</div>
								<div className={cls.phone}>
									<img src={PhoneMbl} className={cls.mbl} alt="icon" width="248" height="248" />
									<img src={Phone} className={cls.desk} alt="icon" width="184" height="360" />
								</div>
							</div>
							<Button link href={Links.bitcoin} blue className={cls.button} onClick={() => track(ampli.ecoClick, { button: "BitcoinArtBot" })}>
								Go To Telegram
							</Button>
						</div>
					</Card>
					<Card color="pink" className={cls.application} ref={LinkRef}>
						<div className={cls.textBlock}>
							<h3>ToON Application</h3>
							<h5>
								Universal application for creating <b>personalised</b> creatives.
							</h5>
						</div>
						<img src={ToonMbl} className={cls.imageMbl} alt="icon" width="262" height="132" />
						<div data-absolute className={cls.imgWrapper}>
							<div className={cls.imageMain}>
								<img src={img1} className={cls.img1} alt="icon" width="160" height="160" />
								<img src={img2} className={cls.img2} alt="icon" width="120" height="120" />
							</div>
						</div>
						<div className={cls.buttonBlock}>
							<AppButton app="apple" />
							<AppButton app="google" />
						</div>
					</Card>
					<Card color="orange" className={cls.bounty}>
						<h3>ToON Bounty Program</h3>
						<h5>Become part of our ecosystem by participating in our activities, complete tasks, share your results and get rewarded.</h5>
						<img src={Coins} className={cls.image} alt="icon" width="160" height="160" />

						<Button disabled>Coming Soon</Button>
					</Card>
					<Card color="blue" className={cls.identity}>
						<h3>ToON Digital Identity</h3>
						<h5>
							Analyze your on-chain data, earn an <b>NFT</b> in return, and showcase your notable blockchain engagements like airdrops, launchpads, and hackathons.
						</h5>
						<img src={Id} className={cls.image} alt="icon" width="160" height="160" />
						<Button disabled blue>
							Coming Soon
						</Button>
					</Card>
				</div>
			</div>
		</section>
	)
})
export default Ecosystem
