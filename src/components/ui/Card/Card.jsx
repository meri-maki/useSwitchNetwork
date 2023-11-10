import { classNames } from "~/tools/classNames"
import cls from "./Card.module.scss"
import React, { forwardRef } from "react"

const Card = forwardRef((props, ref) => {
	const { color, className, children } = props
	const mods = {
		[cls[color]]: color,
	}
	return (
		<div data-reveal className={classNames(cls.card, mods, [className])} ref={ref}>
			{children}
		</div>
	)
})

export default Card
