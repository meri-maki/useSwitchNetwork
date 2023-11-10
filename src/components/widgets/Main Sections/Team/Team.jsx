import cls from "./Team.module.scss"
import Trophy from "@/TEAM/trophy.webp"
import Medal from "@/TEAM/medal.webp"
import React, { useEffect, useRef } from "react"
import { useCountUp } from "react-countup"
import mainconfig from "../../../../config"

export default function Team() {
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
	const isMobile = mainconfig.isAndroid
	const countUpRef = React.useRef(null)
	const countUp2Ref = React.useRef(null)
	const options = {
		start: 0,
		delay: 0,
		duration: 3,
		enableScrollSpy: true,
		scrollSpyDelay: 300,
		scrollSpyOnce: true,
	}

	useCountUp({
		ref: countUpRef,
		end: 200,

		...options,
	})
	useCountUp({
		ref: countUp2Ref,
		end: 320,

		...options,
	})

	return (
		<section className={cls.team} data-scroll-place-id="team" ref={revealElements}>
			<div data-content>
				{!isMobile && <div className={cls.blur}></div>}

				<img src={Medal} className={cls.medal} data-reveal="2" data-object alt="icon" width="72" height="72" />

				<h2 data-reveal>Team</h2>
				<h5 data-reveal="1">
					<b>ToON</b> is a new initiative by the same expert team that launched Photo Lab, ToonMe, and NewProfilePic that went viral and achieved inspiring results:
				</h5>
				<div className={cls.columns}>
					<img src={Trophy} className={cls.trophy} data-reveal="2" data-object alt="icon" width="120" height="120" />
					<div className={cls.numbersColumn}>
						<div data-reveal="1">
							<div className={cls.number}>{isMobile ? "200" : <span ref={countUpRef}></span>} M</div>
							<p>photos were processed since 2021.</p>
						</div>
						<div data-reveal="2">
							<div className={cls.over}>OVER</div>
							<div className={cls.number}> {isMobile ? "320" : <span ref={countUp2Ref}></span>} M</div>
							<p>downloads worldwide.</p>
						</div>
					</div>
					<div className={cls.infoColumn}>
						<div data-reveal="3">
							<p>Our apps were recognized as</p>
							<div className={cls.choice}>Google play editor’s choise.</div>
						</div>
						<div className={cls.positionBlock} data-reveal="4">
							<div className={cls.numberBlock}>
								<div className={cls.number}>#1</div>
								<div className={cls.overall}>overall positions</div>
							</div>
							<p>
								Our apps achieved <b>#1 position</b> in <b>over 84</b> countries, including the United States, the United Kingdom, China, Japan, and more.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
