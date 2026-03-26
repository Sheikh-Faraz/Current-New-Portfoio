"use client";

import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    overlayDirection?: "left" | "right" | "up" | "down";
}


export const Reveal = ({ children, width = "fit-content", overlayDirection = "left" }: Props) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();


    const overlayVariants = {
    hidden:
        overlayDirection === "left"
            ? { left: 0 }
            : overlayDirection === "right"
            ? { left: 0 }
            : overlayDirection === "up"
            ? { top: 0 }
            : { top: 0 },

    visible:
        overlayDirection === "left"
            ? { left: "100%" }       // left → right
            : overlayDirection === "right"
            ? { left: "-100%" }      // right → left
            : overlayDirection === "up"
            ? { top: "-100%" }       // bottom → up
            : { top: "100%" },       // top → down
};


    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [inView]);

    return(
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>

            <motion.div
                variants={overlayVariants}

                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#CF5A1F",
                    zIndex: 20,
                }}
            />
        </div>

    );
};