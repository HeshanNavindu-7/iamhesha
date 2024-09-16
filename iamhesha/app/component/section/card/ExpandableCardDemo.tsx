"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const [filter, setFilter] = useState("All");
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredCards = filter === "All" ? cards : cards.filter(card => card.category === filter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-4">
        {["All", "Web", "Mobile", "UI/UX", "ML"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg ${filter === category ? "bg-[#3533cd] text-white" : "bg-gray-900"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-gray-900 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#3533cd] text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards Layout */}
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {filteredCards.map((card) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={card.title}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950 rounded-xl cursor-pointer border border-white"
    >
      <div className="flex gap-4 flex-col w-full">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-lg object-cover object-top"
          />
        </motion.div>
        <div className="flex justify-center items-center flex-col">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-white dark:text-neutral-200 text-center md:text-left text-base"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-300 dark:text-neutral-400 text-center md:text-left text-base"
          >
            {card.description}
          </motion.p>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href={card.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400" size="lg" />
          </a>
          <a href={card.socialLinks.behance} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} className="text-white hover:text-gray-400" size="lg" />
          </a>
          <a href={card.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" size="lg" />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</ul>


    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// Card Data
const cards = [
  {
    description: "AgriConnect is a digital marketplace mobile application",
    title: "AgriConnect 🌱🚀",
    src: "/images/hy.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    category: "Mobile",
    socialLinks: {
      github: "https://github.com/AgriConnect",
      behance: "https://behance.net/AgriConnect",
      linkedin: "https://linkedin.com/in/AgriConnect",
    },
    content: () => (
      <p>
        AgriConnect is a digital marketplace mobile application. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.
      </p>
    ),
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/default-image.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    category: "Mobile",
    socialLinks: {
      github: "https://github.com/MitranDiChhatri",
      behance: "https://behance.net/MitranDiChhatri",
      linkedin: "https://linkedin.com/in/MitranDiChhatri",
    },
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics.
      </p>
    ),
  },
  // More cards...
];
