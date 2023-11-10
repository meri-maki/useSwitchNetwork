import { classNames } from "~/tools/classNames"
import React from "react"

import cls from "./Link.module.scss"
import Arrow from "@/UI/icons/arrow_right.svg"
//<div className={`flex ${className} ${cls.wrapper}`}></div>

export default function Link(props) {
	const { href, className, children, arrow, target, onClick, ...otherProps } = props
	const mods = {
		[cls.arrow]: arrow,
	}
	return (
		<>
			{href ? (
				<a href={href} target={target ? target : "_blank"} rel="noreferrer" className={classNames(cls.link, mods, [className])} onClick={onClick} {...otherProps}>
					{children}
					{arrow && <img src={Arrow} className={cls.arrow} alt="arrow link" width="24" height="24" />}
				</a>
			) : (
				<div className={classNames(cls.link, mods, [className])} onClick={onClick} {...otherProps}>
					{children}
					{arrow && <img src={Arrow} className={cls.arrow} alt="arrow link" width="24" height="24" />}
				</div>
			)}
		</>
	)
}
