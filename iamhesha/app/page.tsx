'use client';

import Image from "next/image";
import Navbar from "./component/Navigation/Navbar";
import { FlipWords } from "./component/ui/flip-words";
import { Vortex } from "./component/ui/vortex";
import { TextHoverEffect } from "./component/ui/text-hover-effect";
import { TextGenerateEffect } from "./component/ui/text-generate-effect";
import { Timeline } from "./component/ui/timeline";
import ProjectCard from "./component/ui/ProjectCard";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';  // Import React Icons

export default function Home() {
  const words = ["YouTuber", "Web Developer", "Mobile Developer", "UI/UX Designer", "AI/ML Enthusiast"];
  const words_about = `Motivated undergraduate student majoring in Computing Information Systems with a strong passion
for web, mobile, and desktop development, and a keen interest in AI/ML. An energetic team player
who thrives in dynamic environments, eager to contribute skills and gain hands-on experience in
software engineering.`;

  const timelineData = [
    {
      title: "National Institute of Business Management",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Diploma in Software Engineering <br />
          Completed with a GPA of 3.84 <br />
          2020 - 2021
        </p>
      ),
    },
    {
      title: "Sabaragamuwa University Of Sri Lanka",
      content: (
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Bachelor in Information Systems <br />
          Ongoing with a GPA of 3.70 <br />
          2021 - Present
        </p>
      ),
    },
  ];

  const projects = [
    {
      title: "Tech Project One",
      description: "A groundbreaking project involving modern technologies.",
      imageUrl: "/images/hero1.png",
      link: "#"
    },
    {
      title: "Tech Project Two",
      description: "An innovative project showcasing new tech developments.",
      imageUrl: "/images/hero1.png",
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Vortex
        backgroundColor="black"
        rangeY={700}
        particleCount={300}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Navbar />
        <div className="flex justify-between items-center px-10 text-white relative">
          <div className="max-w-xl">
            <h1 className="font-bold mb-6 text-4xl">
              I&apos;m <span className="from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">Heshan Navindu</span>,<br />
              <FlipWords words={words} /> <br />
            </h1>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="px-6 py-2 rounded-full bg-[#3533cd] text-white font-semibold"
              >
                Download CV
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold"
              >
                Hire me
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 text-white">
              <a href="#" className="text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white text-xl">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/hero1.png"
              alt="Heshan Navindu"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </Vortex>
      
      {/* IAMHESHA Section */}
      <div className="h-[20rem] flex items-center justify-center">
        <TextHoverEffect text="IAMHESHA" />
      </div>

      {/* About Me Section */}
      <section id="about" className="w-full py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-center">About Me</h2>
          <TextGenerateEffect words={words_about} />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-left">Education</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2">
              <Timeline data={timelineData} />
            </div>
            <div className="md:w-1/2 flex flex-wrap gap-4 justify-center">
              <Image
                src="/images/timeline-image1.png"
                alt="Timeline Image 1"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/timeline-image2.png"
                alt="Timeline Image 2"
                width={300}
                height={300}
                className="rounded-lg"
              />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
