/* ------------------------------- LOADED TIME ------------------------------ */

export const getTime = () => {
	const loadedMonth = new Date().getMonth() + 1
	const loadedDay = new Date().getDate()
	const loadedHour = new Date().getHours()
	const loadedMinutes = new Date().getMinutes()
	let time
	if (loadedMonth < 10 && loadedDay < 10) {
		time = "0" + loadedDay + "/0" + loadedMonth + " " + loadedHour + ":" + loadedMinutes
	} else if (loadedMonth < 10 && loadedDay > 9) {
		time = loadedDay + "/0" + loadedMonth + " " + loadedHour + ":" + loadedMinutes
	} else {
		time = loadedDay + "/" + loadedMonth + " " + loadedHour + ":" + loadedMinutes
	}
	return time
}

export const preventScroll = () => (document.documentElement.style.overflow = "hidden")
export const enableScroll = () => (document.documentElement.style.overflow = "inherit")

export const animateOnScroll = () => {
	const scrollElements = document.querySelectorAll(".reveal")

	let options = {
		threshold: 0, //0.1
	}
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated")
				observer.unobserve(entry.target)
			}
		})
	}, options)

	document.addEventListener("DOMContentLoaded", function () {
		scrollElements.forEach((el) => observer.observe(el))
	})
}

export const toElement = (ref) => {
	if (!ref.current) {
		return
	}
	const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY - 100

	window.scroll({
		top: elementPosition,
		behavior: "smooth",
	})
}

export const toNFT = () => {
	const NFT = document.getElementById("mintID")
	if (!NFT) {
		console.error("Element not found.")
		return
	}
	const elementPosition = NFT.getBoundingClientRect().top + window.scrollY - 100
	window.scroll({
		top: elementPosition,
		behavior: "smooth",
	})
}
