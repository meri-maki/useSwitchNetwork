import React, { useCallback, useEffect, useRef, useState } from "react"
import { classNames } from "~/tools/classNames.js"
import Cross from "@/UI/icons/cross.svg"
import { Portal } from "../Portal/Portal"
import cls from "./Modal.module.scss"

const ANIMATION_DELAY = 500

export const Modal = (props) => {
	const { className, children, isOpen, onClose } = props
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef()
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])
	const onKeyDown = useCallback(
		(e) => {
			if (e.key === "Escape") {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const onContentClick = (e) => {
		e.stopPropagation()
	}

	const mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.wrapper}>
						<img src={Cross} className={cls.cross} onClick={closeHandler} />
						<div className={cls.content} onClick={onContentClick}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</Portal>
	)
}
