const imageReverseFramer = {
	hidden: {
		opacity: 0,
		scale: 0.85
	},
	show: {
		opacity: 1,
		transition: { duration: 1 },
		scale: 1
	},
	exit: {
		opacity: 0
	}
}

const imageFramer = {
	hidden: {
		opacity: 0,
		scale: 0.97
	},
	show: {
		opacity: 1,
		transition: { duration: 1 },
		scale: 1.02
	},
	exit: {
		opacity: 0
	}
}

const scaledFramer = {
	hidden: {
		opacity: 0,
		scale: 0.98
	},
	show: {
		opacity: 1,
		transition: { duration: 1 },
		scale: 1
	},
	exit: {
		opacity: 0
	}
}

const HomePageFramer = {
	hidden: {
		opacity: 0,
		y: -100
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1 },
	},
	exit: {
		opacity: 0,
		y: -100
	}
}

const fade = {
	hidden: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: { duration: 1 },
	},
	exit: {
		opacity: 0
	}
}

export { imageFramer, imageReverseFramer, fade, HomePageFramer, scaledFramer };