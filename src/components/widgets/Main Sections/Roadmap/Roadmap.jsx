import { classNames } from "~/tools/classNames"
import React, { useState, forwardRef, useCallback, useRef, useEffect } from "react"
import cls from "./Roadmap.module.scss"
import Animated from "~/components/ui/Animated.jsx"
import Line from "@/ROADMAP/line.svg"
import { Links } from "../../../../helpers/texts"
import mainconfig from "../../../../config"
import { toElement } from "../../../../helpers/helpers"

const Step = (props) => {
	const { className, name, open, children, complete, complex, link, ...otherProps } = props
	const modsExtra = {
		[cls.complete]: complete,
		[cls.complex]: complex,
	}

	const mods = {
		[cls.complete]: complete,
	}

	const [opened, setOpened] = useState(open)

	const handleDivClick = useCallback(() => {
		if (link) {
			window.open(link)
		}
	}, [link])

	return (
		<>
			{complex ? (
				<div className={classNames(cls.step, modsExtra, [className])} {...otherProps} data-reveal="2">
					<div className={cls.mainBlock}>
						<div className={cls.circle}></div>
						<div className={cls.textBlock} onClick={() => setOpened(!opened)}>
							<div>{name}</div>
							{opened ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cls.iconUp}>
									<g clipPath="url(#clip0_723_30317)">
										<path d="M4.5 15L12 7.5L19.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_723_30317">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<g clipPath="url(#clip0_723_30335)">
										<path d="M19.5 9L12 16.5L4.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_723_30335">
											<rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
										</clipPath>
									</defs>
								</svg>
							)}
						</div>
					</div>
					<Animated trigger={opened}>
						<ul className={cls.list}>{children}</ul>
					</Animated>
				</div>
			) : (
				<div className={classNames(cls.step, mods, [className])} {...otherProps} data-reveal="2" onClick={handleDivClick}>
					<div className={cls.circle}></div>
					<div className={cls.textBlock}> {children}</div>
				</div>
			)}
		</>
	)
}

const Roadmap = forwardRef((props, ref) => {
	const { LinkRef } = props
	const isMobile = mainconfig.isMobile
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
		<section className={cls.roadmap} ref={ref} data-scroll-place-id="roadmap">
			<div data-content ref={revealElements}>
				<img src={Line} className={cls.img} alt="line" />
				<h2 data-reveal>Roadmap</h2>
				<div className={cls.line}></div>
				<div className={cls.map}>
					<Step complete complex name="Develop and Implement:" open={isMobile ? false : true}>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>Smart Contract
						</li>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>ToON Token
						</li>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>DAO Mechanism
						</li>
					</Step>
					<Step complete link={Links.gitbook.main} className={cls.gitbook}>
						Publish GitBook
					</Step>

					<Step>Launch Community Bounty Program</Step>
					<Step>List ToON Token on DEXes</Step>
					<Step>
						<div>Introduce Blockchain Bridges</div>
						<p>Establish Connections with Popular Blockchain Platforms</p>
					</Step>
					<Step>Initiate B2B Collaboration and Support Programs</Step>
					<Step complex name="Develop Ecosystem Products:">
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>Launch ToON Wallet
						</li>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>
							<span>
								Integrate ToON Token into{" "}
								<span className="primary-200 pointer" onClick={() => toElement(LinkRef)}>
									ToonCoin App
								</span>
							</span>
						</li>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>Introduce Personalized NFT Creation Tools
						</li>
						<li>
							<div className={cls.circleList}></div>
							<div className={cls.circleSmall}></div>Future Developments (To Be Determined)
						</li>
					</Step>
					<Step>Conduct R&D on Layer 2 (L2) ToON Chain</Step>
				</div>
			</div>
		</section>
	)
})

export default Roadmap
