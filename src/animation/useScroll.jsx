import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScroll = (n) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: `${n}` });

    console.log(inView);

    if (inView) {
        controls.start("show")
    } else {
        controls.start("hidden")
    }

    return [ref, controls];
}

export { useScroll };