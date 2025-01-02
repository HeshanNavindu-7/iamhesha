"use client"
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";


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
    youtube?: string;
    github?: string;
    behance?: string;
    linkedin?: string;
  };
  technologies?: { name: string; description: string }[];
  achievements?: { title: string; status: string }[];
};

const SocialLinks = ({ socialLinks }: { socialLinks: Card["socialLinks"] }) => {
  return (
    <div className="social-links flex justify-evenly mt-4 text-white text-xl">
      {socialLinks.github && (
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}  className="text-white text-xl" />
        </a>
      )}
      {socialLinks.behance && (
        <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faBehance} className="text-white text-xl"  />
        </a>
      )}
      {socialLinks.linkedin && (
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}  className="text-white text-xl"  />
        </a>
      )}
      {socialLinks.youtube && (
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube}  className="text-white text-xl" />
        </a>
      )}
    </div>
  );
};
const cards: Card[] = [
  {
    title: "AgriConnect 🌱🚀",
    src: "/images/tadde.jpeg",
    description: "A digital marketplace mobile application for farmers and buyers.",
    ctaText: "Learn More",
    ctaLink: "https://github.com/HeshanNavindu-7/AgriConnect_mobile_app.git",
    category: "Mobile",
    extraImages: ["/images/tadd.jpeg", "/images/tads.jpeg"],
    content: "AgriConnect is a digital marketplace mobile application built using React Native. It connects farmers directly with buyers, enabling fair pricing and personalized crop recommendations through AI-driven insights.",
    details: "Features 🌟\n\n- Crop Recommendation Tool: AI-powered crop suggestions based on location, soil, and climate.\n- Marketplace: Farmers list produce, negotiate prices, and connect with buyers directly.\n- User-Friendly Interface: Simple, multilingual design for ease of use.",
    reviews: [
      ],
    socialLinks: {
      github: "https://github.com/HeshanNavindu-7/AgriConnect_mobile_app.git",
      behance: "https://www.behance.net/iamHesha/",
      linkedin: "",
      youtube:"https://youtu.be/VhYeVgs0El8?si=TGKkX6T2rLOoOaLz"
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
    "src": "/images/glova.PNG",
    "description": "Mobile application that offers personalized skincare routines and product recommendations.",
    "ctaText": "Learn More",
    "ctaLink": "https://github.com/Vishwa0416/Glova-Front-end",
    "category": "Mobile",
    "extraImages": [
      "/images/insl.jpeg",
      "/images/insl1.jpeg"
    ],
    "content": "Glova is a groundbreaking skincare app that integrates facial recognition technology and artificial intelligence to offer personalized skincare routines and product recommendations.",
    "details": "Key Features 🌟\n\n- Facial Recognition Technology: Analyzes and assesses skin types and conditions with a simple scan.\n- AI-Generated Skincare Routines: Generates tailor-made routines based on individual skin analysis.\n- Product Recommendations: Suggests specific products suited to the user's unique skin profile.\n- Real-time Updates and Adjustments: Adapts to changes in skin condition and lifestyle.\n- Education and Insights: Provides valuable insights and updates on skincare science.\n- Privacy and Security: Ensures secure processing and storage of facial recognition data.",
    "reviews": [
       ],
    "socialLinks": {
      "github": "https://github.com/Vishwa0416/Glova-Front-end",
      "behance": "",
      "linkedin": "https://www.linkedin.com/posts/ieee-student-branch-of-susl_ieee-insl23-ypsl-activity-7160104760782548992-bg7w?utm_source=share&utm_medium=member_desktop",
       "youtube":""
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
    "title": "Pastry Shop Management System 🚀",
    "src": "/images/pestry.PNG",
    "description": "Developed a Java-based system to manage pastry shop operations, allowing admins to handle items, categories, and suppliers effortlessly.",
    "ctaText": "Learn More",
    "ctaLink": "https://www.linkedin.com/posts/heshan-7-navindu_java-projectshowcase-codingjourney-activity-7135607367685066752-gaKA?utm_source=share&utm_medium=member_desktop",
    "category": "Desktop",
    "extraImages": ["/images/pestry.PNG", "/images/pestry.PNG"],
    "content": "Developed a Java-based system to manage pastry shop operations, allowing admins to handle items, categories, and suppliers effortlessly. Cashiers can generate bills swiftly, and everyone can enjoy an intuitive dashboard for real-time insights.",
    "details": "Login System: Role-based access for admin and cashier.\nInventory Management: Add, edit, delete bakery items and categories.\nBilling: Manage bills and generate invoices.\nSupplier Management: Add, edit, and delete supplier details (Admin only).\nCashier Management: Administer cashier details (Admin only).\nReports: Generate reports on sales, inventory, and billing.\nDashboard: Visualize key shop metrics such as daily profits and top-selling items.",
    "technologies": [
      { "name": "Java", "description": "Core language for development." },
      { "name": "MySQL", "description": "Database to store shop data." },
      { "name": "Java Swing", "description": "User interface design." },
      { "name": "JasperReports", "description": "For report generation." },
      { "name": "MVC Architecture", "description": "Application architecture." }
    ],
    socialLinks: {
      github: "https://github.com/HeshanNavindu-7/Pestry-Shop-Management-System.git",
      behance: "",
      linkedin: "https://www.linkedin.com/posts/heshan-7-navindu_java-projectshowcase-codingjourney-activity-7135607367685066752-gaKA?utm_source=share&utm_medium=member_desktop",
       "youtube":""
    }
  },
  {
    "title": "MedAssist Mobile App 🚀",
    "src": "/images/medassist.PNG",
    "description": "An AI-based mobile app for simplifying medical reports and providing personalized healthcare guidance.",
    "ctaText": "Learn More",
    "ctaLink": "https://github.com/HeshanNavindu-7/MedAssist-frontend.git",
    "category": "Mobile",
    "extraImages": ["/images/medassist.PNG", "/images/medassist.PNG"],
    "content": "Developed an AI-based mobile app for simplifying medical reports and providing personalized healthcare guidance. Features include medical report analysis, doctor recommendations, an AI chatbot for health information, and image classification for early diagnosis through scan analysis. Also integrated a feedback portal for rating healthcare providers.",
    "details": "Medical Report Analysis: Upload and analyze medical reports with easy-to-understand explanations. 📄🔍\nDoctor Recommendations: Personalized healthcare provider suggestions based on the user’s medical condition. 🏥👨‍⚕️👩‍⚕️\nAI Chatbot: A virtual assistant offering healthcare information and answering user questions. 🤖💬\nImage Classification: Analyze CT, X-ray, MRI, and PET scans to provide preliminary diagnoses. 🩺🖼️\nUser Feedback Portal: Users can rate and provide feedback on their healthcare experiences. ⭐📝",
    "technologies": [
      { "name": "Flutter", "description": "Frontend for cross-platform mobile app development." },
      { "name": "Dart", "description": "Primary programming language for Flutter." },
      { "name": "Django", "description": "Backend framework for APIs, authentication, and data processing." },
      { "name": "Firebase", "description": "Handles user authentication and real-time updates." },
      { "name": "REST API", "description": "Integrates Django backend services for report analysis, doctor recommendations, and chatbot functionality." }
    ],
     "socialLinks": {
      "github": "https://github.com/HeshanNavindu-7/MedAssist-frontend.git",
      "behance": "",
      "linkedin": "https://www.linkedin.com/posts/heshan-7-navindu_medassist-healthcaretech-mobileappdevelopment-activity-7234984783267688448-11HD?utm_source=share&utm_medium=member_desktop",
       "youtube":""
    }
  },
  {
    "title": "South Asian Youth Table Tennis Championship Website 🏓",
    "src": "/images/say.jpeg",
    "description": "Official website for the South Asian Youth Table Tennis Championship (SAYTTC), providing event information, live scores, dynamic leaderboard, and more.",
    "ctaText": "Visit Website",
    "ctaLink": "https://www.sayttc.com/",
    "category": "Web",
    "extraImages": ["/images/say.jpeg", "/images/sayttc.jpeg"],
    "content": "This project is the official website for the South Asian Youth Table Tennis Championship (SAYTTC), held in Sri Lanka. The website provides event information, real-time live scores, a dynamic leaderboard, updates, and more for the tournament.",
    "details": "Live Score Updates: Real-time match scores and results.\nLeaderboard: Dynamic leaderboard to track the standings and performance of teams throughout the tournament.\nResponsive Design: Optimized for a seamless experience across all devices.\nFirebase Integration: Secure, scalable data storage and hosting using Firebase.",
    "technologies": [
      { "name": "React.js", "description": "Frontend development framework for building interactive UI." },
      { "name": "Firebase Hosting", "description": "For hosting the website with fast and secure delivery." },
      { "name": "Firebase Firestore", "description": "Real-time database for live score and leaderboard updates." },
      { "name": "Custom Domain", "description": "Integrated with https://www.sayttc.com for official tournament access." }
    ],
    "socialLinks": {
      "github": "https://github.com/HeshanNavindu-7/South-Asian-Youth-Table-Tennis-Championship.git",
      "behance": "",
      "linkedin": "https://www.linkedin.com/posts/heshan-7-navindu_officially-launched-one-of-the-website-activity-7168717098800672768-kGdo?utm_source=share&utm_medium=member_desktop",
       "youtube":"https://www.linkedin.com/posts/heshan-7-navindu_officially-launched-one-of-the-website-activity-7168717098800672768-kGdo?utm_source=share&utm_medium=member_desktop"
    }
  }
  ,
  
  
 
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
            className={`px-4 py-2 rounded-lg ${filter === category ? "bg-[#3533cd] text-white" : "bg-gray-900 text-white"}`}
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
                  width={400}
                  height={100}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-44 object-cover object-top"
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
 {/* Card List */}
<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 mx-12">
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
      <div className="">
      <SocialLinks   socialLinks={card.socialLinks} />
      </div>
      
     
    </motion.div>

      
  ))}
     
</div>
 {/* See More Button */}
 {filteredCards.length > 2 && (
 <div className="flex justify-center text-center my-4">
      <div className="flex justify-center text-center my-4">
          <Link href="/Pages/projects" className="px-6 py-2 rounded-xl bg-[#3533cd] text-white  hover:bg-[#1f1c85] transition-colors">
            See More Projects
          </Link>
        </div>
</div>
      )}

    </>
  );
}
