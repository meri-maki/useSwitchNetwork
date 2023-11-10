/* eslint-disable react/no-unescaped-entities */
import cls from "./Values.module.scss"
import React, { useEffect, useRef } from "react"

import Earth from "@/VALUES/earth.webp"
import Tree from "@/VALUES/tree.webp"
import Vote from "@/VALUES/vote.webp"
import Link from "../../../ui/Link/Link"
import { Links } from "../../../../helpers/texts"
import { ampli, track } from "../../../../helpers/amplitude"

export default function Values() {
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
		<section className={cls.values} data-nomg ref={revealElements} data-scroll-place-id="our values">
			<div data-content>
				<h2 data-reveal>Our Values</h2>
				<div className={cls.cardBlock}>
					<div className={cls.card} data-reveal="1">
						<div className={cls.cardFlex}>
							<img className={cls.img} src={Vote} alt="icon" width="64" height="64" />
							<h4>Community-Based Governance</h4>
						</div>

						<div className={cls.infoBlock}>
							<p>Harnessing collective intelligence, we set the benchmark in DAO governance—ensuring every voice is heard and optimizing the voting process.</p>
							<Link arrow href={Links.gitbook.governance} onClick={() => track(ampli.valuesClick({ link: "Community-Based Governance" }))}>
								Read
							</Link>
						</div>
					</div>
					<div className={cls.card} data-reveal="1">
						<div className={cls.cardFlex}>
							<img className={cls.img} src={Tree} alt="icon" width="64" height="64" />
							<h4>
								Community-Powered <br />
								Project Growth
							</h4>
						</div>

						<div className={cls.infoBlock}>
							<p>Our tools, designed for universal accessibility, leverage virality to drive ecosystem growth in the Web3 space.</p>
							<Link arrow href={Links.gitbook.methods} onClick={() => track(ampli.valuesClick({ link: "Community-Powered Project Growth" }))}>
								Read
							</Link>
						</div>
					</div>
					<div className={cls.card} data-reveal="1">
						<div className={cls.cardFlex}>
							<img className={cls.img} src={Earth} alt="icon" width="64" height="64" />
							<h4>Charity</h4>
						</div>

						<div className={cls.infoBlock}>
							<p>At ToON DAO's core, our dedication to charity drives meaningful social change, fostering partnerships and expanding community outreach.</p>
							<Link arrow href={Links.gitbook.charity} onClick={() => track(ampli.valuesClick({ link: "Charity" }))}>
								Discover
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
