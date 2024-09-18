"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

type Card = {
  title: string;
  src: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  category: string;
  extraImages?: string[];
  content: string | (() => React.ReactNode);
  details?: string;
  reviews?: { reviewer: string; review: string }[];
  socialLinks: {
    github: string;
    behance: string;
    linkedin: string;
  };
  technologies?: { name: string; description: string }[];
  achievements?: { title: string; status: string }[];
};

const cards: Card[] = [
  {
    title: "AgriConnect 🌱🚀",
    src: "/path/to/agriconnect-image.jpg",
    description: "A digital marketplace mobile application for farmers and buyers.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/agriconnect",
    category: "Mobile",
    extraImages: ["/path/to/extra1.jpg", "/path/to/extra2.jpg"],
    content: "AgriConnect is a digital marketplace mobile application built using React Native. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.",
    details: "Features 🌟\n\n- **Crop Recommendation Tool**: AI-powered crop suggestions based on location, soil, and climate.\n- **Marketplace**: Farmers list produce, negotiate prices, and connect with buyers directly.\n- **User-Friendly Interface**: Simple, multilingual design for ease of use.",
    reviews: [
      { reviewer: "John Doe", review: "A revolutionary app for the agriculture sector!" },
      { reviewer: "Jane Smith", review: "Highly recommend for its ease of use and effective features." }
    ],
    socialLinks: {
      github: "https://github.com/agriconnect",
      behance: "https://behance.net/agriconnect",
      linkedin: "https://linkedin.com/company/agriconnect"
    },
    technologies: [
      { name: "React Native", description: "For building cross-platform mobile apps." },
      { name: "JavaScript", description: "Core language for React Native app development." },
      { name: "Axios", description: "For API requests." },
      { name: "Redux", description: "State management." },
      { name: "React Navigation", description: "Navigation between screens." }
    ]
  },
  {
    "title": "Glova innovative AI-powered skincare app🚀",
    "src": "/path/to/glova-image.jpg",
    "description": "Mobile application that offers personalized skincare routines and product recommendations.",
    "ctaText": "Learn More",
    "ctaLink": "https://example.com/glova",
    "category": "Mobile",
    "extraImages": [
      "/path/to/extra1.jpg",
      "/path/to/extra2.jpg"
    ],
    "content": "Glova is a groundbreaking skincare app that integrates facial recognition technology and artificial intelligence to offer personalized skincare routines and product recommendations.",
    "details": "Key Features 🌟\n\n- **Facial Recognition Technology**: Analyzes and assesses skin types and conditions with a simple scan.\n- **AI-Generated Skincare Routines**: Generates tailor-made routines based on individual skin analysis.\n- **Product Recommendations**: Suggests specific products suited to the user's unique skin profile.\n- **Real-time Updates and Adjustments**: Adapts to changes in skin condition and lifestyle.\n- **Education and Insights**: Provides valuable insights and updates on skincare science.\n- **Privacy and Security**: Ensures secure processing and storage of facial recognition data.",
    "reviews": [
      { "reviewer": "Samantha Lee", "review": "An incredible app that revolutionizes skincare with cutting-edge technology!" },
      { "reviewer": "Michael Brown", "review": "Glova's personalized approach is a game changer for anyone serious about their skincare routine." }
    ],
    "socialLinks": {
      "github": "https://github.com/glova",
      "behance": "https://behance.net/glova",
      "linkedin": "https://linkedin.com/company/glova"
    },
    "technologies": [
      { "name": "Flutter", "description": "Framework for building natively compiled applications for mobile, web, and desktop from a single codebase." },
      { "name": "Python", "description": "Programming language used for backend development and AI integration." },
      { "name": "Django", "description": "Web framework for building the app's backend." },
      { "name": "Machine Learning (ML)", "description": "Technology for analyzing skin conditions and generating skincare routines." },
      { "name": "Gemini API", "description": "API for integrating facial recognition technology." }
    ],
    "achievements": [
      { "title": "IEEE INSL Sabaragamuwa Province 2023", "status": "Achieved Winner" }
    ]
  }
  ,
  {
    title: "AgriConnect 🌱🚀",
    src: "/path/to/agriconnect-image.jpg",
    description: "A digital marketplace mobile application for farmers and buyers.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/agriconnect",
    category: "Mobile",
    extraImages: ["/path/to/extra1.jpg", "/path/to/extra2.jpg"],
    content: "AgriConnect is a digital marketplace mobile application built using React Native. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.",
    details: "Features 🌟\n\n- **Crop Recommendation Tool**: AI-powered crop suggestions based on location, soil, and climate.\n- **Marketplace**: Farmers list produce, negotiate prices, and connect with buyers directly.\n- **User-Friendly Interface**: Simple, multilingual design for ease of use.",
    reviews: [
      { reviewer: "John Doe", review: "A revolutionary app for the agriculture sector!" },
      { reviewer: "Jane Smith", review: "Highly recommend for its ease of use and effective features." }
    ],
    socialLinks: {
      github: "https://github.com/agriconnect",
      behance: "https://behance.net/agriconnect",
      linkedin: "https://linkedin.com/company/agriconnect"
    },
    technologies: [
      { name: "React Native", description: "For building cross-platform mobile apps." },
      { name: "JavaScript", description: "Core language for React Native app development." },
      { name: "Axios", description: "For API requests." },
      { name: "Redux", description: "State management." },
      { name: "React Navigation", description: "Navigation between screens." }
    ]
  },
  {
    title: "AgriConnect 🌱🚀",
    src: "/path/to/agriconnect-image.jpg",
    description: "A digital marketplace mobile application for farmers and buyers.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/agriconnect",
    category: "Mobile",
    extraImages: ["/path/to/extra1.jpg", "/path/to/extra2.jpg"],
    content: "AgriConnect is a digital marketplace mobile application built using React Native. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.",
    details: "Features 🌟\n\n- **Crop Recommendation Tool**: AI-powered crop suggestions based on location, soil, and climate.\n- **Marketplace**: Farmers list produce, negotiate prices, and connect with buyers directly.\n- **User-Friendly Interface**: Simple, multilingual design for ease of use.",
    reviews: [
      { reviewer: "John Doe", review: "A revolutionary app for the agriculture sector!" },
      { reviewer: "Jane Smith", review: "Highly recommend for its ease of use and effective features." }
    ],
    socialLinks: {
      github: "https://github.com/agriconnect",
      behance: "https://behance.net/agriconnect",
      linkedin: "https://linkedin.com/company/agriconnect"
    },
    technologies: [
      { name: "React Native", description: "For building cross-platform mobile apps." },
      { name: "JavaScript", description: "Core language for React Native app development." },
      { name: "Axios", description: "For API requests." },
      { name: "Redux", description: "State management." },
      { name: "React Navigation", description: "Navigation between screens." }
    ]
  },
  {
    title: "AgriConnect 🌱🚀",
    src: "/path/to/agriconnect-image.jpg",
    description: "A digital marketplace mobile application for farmers and buyers.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/agriconnect",
    category: "Mobile",
    extraImages: ["/path/to/extra1.jpg", "/path/to/extra2.jpg"],
    content: "AgriConnect is a digital marketplace mobile application built using React Native. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.",
    details: "Features 🌟\n\n- **Crop Recommendation Tool**: AI-powered crop suggestions based on location, soil, and climate.\n- **Marketplace**: Farmers list produce, negotiate prices, and connect with buyers directly.\n- **User-Friendly Interface**: Simple, multilingual design for ease of use.",
    reviews: [
      { reviewer: "John Doe", review: "A revolutionary app for the agriculture sector!" },
      { reviewer: "Jane Smith", review: "Highly recommend for its ease of use and effective features." }
    ],
    socialLinks: {
      github: "https://github.com/agriconnect",
      behance: "https://behance.net/agriconnect",
      linkedin: "https://linkedin.com/company/agriconnect"
    },
    technologies: [
      { name: "React Native", description: "For building cross-platform mobile apps." },
      { name: "JavaScript", description: "Core language for React Native app development." },
      { name: "Axios", description: "For API requests." },
      { name: "Redux", description: "State management." },
      { name: "React Navigation", description: "Navigation between screens." }
    ]
  },
  // Add more card objects here
];

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const [filter, setFilter] = useState("All");
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredCards = filter === "All" ? cards : cards.filter((card) => card.category === filter);

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

      {/* Overlay when active */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card View */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[120]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[1000px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-950 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              <div className="flex-1 overflow-auto p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h1
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white text-xl"
                    >
                      {active.title}
                    </motion.h1>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <button
                    className="absolute top-2 right-2 lg:hidden p-2 bg-red-500 rounded-full"
                    onClick={() => setActive(null)}
                  >dfd
                    {/* <FontAwesomeIcon icon={faTimes} className="text-white" /> */}
                  </button>

                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-[#3533cd] text-white"
                  >
                    {active.ctaText}
                  </a>
                </div>

                {/* Additional Images */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {active.extraImages?.map((imageSrc, index) => (
                    <Image
                      key={index}
                      src={imageSrc}
                      width={80}
                      height={80}
                      alt={`Extra image ${index + 1}`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>

                {/* Details Section */}
                {active.details && (
                  <div className="text-white mb-4">
                    <h4 className="font-bold text-lg">Features & Details</h4>
                    <p>{active.details}</p>
                  </div>
                )}

                {/* Technologies Used Section */}
                {active.technologies && (
                  <div className="text-neutral-400 mb-4">
                    <h4 className="font-bold text-lg">Technologies Used</h4>
                    <ul>
                      {active.technologies.map((tech, index) => (
                        <li key={index} className="mb-2">
                          <strong>{tech.name}:</strong> {tech.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

          {/* Achievements Section */}
{active.achievements && (
  <div className="text-neutral-400 mb-4">
    <h4 className="font-bold text-lg">Achievements</h4>
    <ul>
      {active.achievements.map((achievement, index) => (
        <li key={index} className="mb-2">
          <strong>{achievement.title}:</strong> {achievement.status}
        </li>
      ))}
    </ul>
  </div>
)}


                {/* Social Links Section */}
                <div className="flex justify-between mt-4">
                  <a href={active.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
                  </a>
                  <a href={active.socialLinks.behance} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBehance} className="text-white text-xl" />
                  </a>
                  <a href={active.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card List */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {filteredCards.map((card) => (
          <motion.div
            key={card.title}
            onClick={() => setActive(card)}
            className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            layoutId={`card-${card.title}-${id}`}
          >
            <Image
              src={card.src}
              width={400}
              height={200}
              alt={card.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="font-bold text-white text-center text-xl">{card.title}</h2>
            <p className="text-neutral-400">{card.description}</p>
            <div className="flex justify-evenly mt-4">
              <a href={card.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
              </a>
              <a href={card.socialLinks.behance} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBehance} className="text-white text-xl" />
              </a>
              <a href={card.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </>
  );
}
