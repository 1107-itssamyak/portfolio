const imageFramer = {
    hidden: {
        opacity: 0,
        scale: 1.1
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

const titleFramer = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
    },
    exit: {
        y: -100,
        opacity: 0
    }
}

const spanFramer = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0
    }
}

const defaultFramer = {
    hidden: {
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut' }
    },
    exit: {
        opacity: 0
    }
}

export { imageFramer, titleFramer, spanFramer, defaultFramer };