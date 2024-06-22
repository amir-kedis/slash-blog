"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useCursor } from "@/utils/CursorContext";

export default function Cursor() {
  const { cursorText, cursorScale } = useCursor();
  const size = 20;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - (size * cursorScale) / 2);
      mouseY.set(e.clientY - (size * cursorScale) / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorScale]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-gray-900 text-gray-100 z-50 grid place-items-center text-center"
      style={{
        width: size,
        height: size,
        pointerEvents: "none",
        x: springX,
        y: springY,
      }}
      animate={{
        width: size * cursorScale,
        height: size * cursorScale,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
      }}
    >
      {cursorText && (
        <span className="text-lg font-playfair-display">{cursorText}</span>
      )}
    </motion.div>
  );
}
