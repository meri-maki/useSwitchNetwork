/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useRef } from "react"
import cls from "./Hero.module.scss"
import Black from "@/HERO/black.webp"
import Back from "@/HERO/backMBL.webp"

import mainconfig from "../../../../config"
import Button from "../../../ui/Button/Button"
import { toElement } from "../../../../helpers/helpers"
import { ampli, track } from "../../../../helpers/amplitude"

const Hero = forwardRef((props, ref) => {
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
	const { NFTRef } = props
	const isMobile = mainconfig.isMobile
	return (
		<section className={cls.hero} ref={ref} data-scroll-place-id="meet toon">
			<img src={Back} className={cls.back} data-absolute alt="orb" />
			<div className={cls.test}></div>
			<div className={cls.test2}></div>

			<div className={cls.black} data-absolute>
				<img src={Black} alt="black void" />
			</div>
			<div data-content className={cls.content} ref={revealElements}>
				<h1 data-reveal="1">Meet ToON</h1>

				{!isMobile ? (
					<h5 data-reveal="2">
						<b>ToON</b> aims to achieve mass adoption of crypto by developing products that are accessible and user-friendly for both <b>Web2</b> and <b>Web3</b> audiences.&nbsp;
						<br />
						Our DAO is designed to balance the interests of diverse market participants, while also acknowledging external factors that impact to reach our goals.
					</h5>
				) : (
					<h5 data-reveal="2">
						<b>ToON</b> aims to achieve mass adoption of crypto by developing products that are accessible and user-friendly for both <b>Web2</b> and <b>Web3</b> audiences.
					</h5>
				)}
				<div className={cls.button} data-reveal="4">
					<Button
						pink
						onClick={() => {
							track(ampli.join)
							toElement(NFTRef)
						}}
						primary
					>
						Join Us
					</Button>
				</div>
			</div>
		</section>
	)
})

export default Hero
