import cls from "./BurgerIcon.module.scss"
import Menu from "@/UI/icons/menu.svg"
import Cross from "@/UI/icons/cross.svg"
import React from "react"

export default function BurgerIcon(props) {
	const { isOpen, toggleBurger } = props
	return (
		<div className={cls.burgerIcon} onClick={() => toggleBurger()}>
			{isOpen ? (
				<div className={cls.opened}>
					<img src={Cross} alt="burger menu icon" width="32" height="32" />
				</div>
			) : (
				<div className={cls.closed}>
					<img src={Menu} alt="burger menu icon" width="32" height="32" />
				</div>
			)}
		</div>
	)
}
