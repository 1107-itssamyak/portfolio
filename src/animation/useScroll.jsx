import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useScroll = () => {
    const { element, inView } = useInView({ threshold: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        console.log(inView);
        if (inView) {
            controls.start('show');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls])
    return [element, controls]
}

export { useScroll };