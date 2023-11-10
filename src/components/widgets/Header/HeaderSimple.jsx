import React, { useState, useEffect } from "react"
import Back from "@/UI/icons/ArrowLeft.svg"
import cls from "./Header.module.scss"
import { classNames } from "~/tools/classNames"

export default function HeaderSimple(props) {
	const { children, link, className } = props
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
				<div className={cls.logo}>
					<a href={link}>
						<img src={Back} className={cls.arrow} />
						ToON.ORG
					</a>
				</div>
				{children}
			</div>
		</header>
	)
}
