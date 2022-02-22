import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScroll = (n) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0 });

    if (inView) {
        controls.start("show")
    } else {
        controls.start("hidden")
    }

    return [ref, controls];
}

export { useScroll };