const imageFramer = {
    hidden: {
        opacity: 0,
        scale: 1.25
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

const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1 },
    },
    exit: {
        opacity: 0,
    }
}

export { imageFramer, fade };