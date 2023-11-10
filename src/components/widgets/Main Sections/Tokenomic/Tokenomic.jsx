/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef, useEffect, useRef } from "react"

import cls from "./Tokenomic.module.scss"
import Flat from "@/TOKENOMIC/flat.webp"
import Spiral from "@/TOKENOMIC/spiral.webp"
import Circle from "@/TOKENOMIC/circle.webp"
import Diamond from "@/TOKENOMIC/diamond.webp"

import Card from "../../../ui/Card/Card"
import Link from "../../../ui/Link/Link"
import { Links } from "../../../../helpers/texts"
import { ampli, track } from "../../../../helpers/amplitude"

const Tokenomic = forwardRef((_props, ref) => {
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
		<section className={cls.tokenomic} data-nomg ref={ref} data-scroll-place-id="new tokenomic approach">
			<div data-content className={cls.content} ref={revealElements}>
				<img src={Diamond} className={cls.diamond} data-reveal alt="icon" width="104" height="104" />
				<h2 data-reveal>New Tokenomic Approach</h2>
				<h5 data-reveal>
					We diligently design our token to harmonize diverse market interests, adeptly addressing external factors for project growth while proactively mitigating traditional risks.
				</h5>

				<div className={cls.cardBlock}>
					<Card className={cls.card} color="blue" data-reveal>
						<div>
							<img src={Flat} className={cls.img} alt="icon" width="144" height="144" />
							<h4>Designed for ongoing improvement</h4>
							<p>Our project always has “fuel” for improvement and development, this helps to constantly enhance its features, reach new users, and expand its ecosystem.</p>
						</div>

						<Link arrow href={Links.gitbook.growth} className={cls.link} onClick={() => track(ampli.tokenClick, { link: "Designed for ongoing improvement" })}>
							Read More
						</Link>
					</Card>
					<Card className={cls.card} color="blue" data-reveal>
						<div>
							<img src={Circle} className={cls.img} alt="icon" width="144" height="144" />
							<h4>Zero preallocation policy</h4>
							<p>All tokens distributing under the same conditions among all market participants.</p>
						</div>
						<Link arrow href={Links.gitbook.distribution} className={cls.link} onClick={() => track(ampli.tokenClick, { link: "Zero preallocation policy" })}>
							Read More
						</Link>
					</Card>
					<Card className={cls.card} color="blue" data-reveal>
						<div>
							<img src={Spiral} className={cls.img} alt="icon" width="144" height="144" />
							<h4>Dynamic minting price and supply</h4>
							<p>Our adaptive model ensures stability, incentivizes active participation, and aligns seamlessly with market demands.</p>
						</div>
						<Link arrow href={Links.gitbook.emission} className={cls.link} onClick={() => track(ampli.tokenClick, { link: "Dynamic minting price and supply" })}>
							Read More
						</Link>
					</Card>
				</div>
			</div>
		</section>
	)
})

export default Tokenomic
