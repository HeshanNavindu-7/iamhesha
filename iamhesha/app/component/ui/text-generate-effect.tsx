"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();

  // Ensure words is a valid string
  const wordsArray = (typeof words === "string" && words.trim()) ? words.split(" ") : [];

  useEffect(() => {
    if (wordsArray.length === 0) return; // No words to animate

    // Trigger animation on the words
    animate(
      "span",
      {
        opacity: [0, 1],
        filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
      },
      {
        duration: duration,
        delay: stagger(0.2),
        ease: "easeOut", // Added easing for smoother animation
      }
    );
  }, [animate, filter, duration, wordsArray]);

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className="text-generate-effect dark:text-gray-300 text-white"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
