'use client';

import Image from "next/image";
import Navbar from "./component/Navigation/Navbar";
import { FlipWords } from "./component/ui/flip-words";
import { Vortex } from "./component/ui/vortex";
import { TextHoverEffect } from "./component/ui/text-hover-effect";
import { TextGenerateEffect } from "./component/ui/text-generate-effect";
import { Timeline } from "./component/ui/timeline";

import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance, FaYoutube } from 'react-icons/fa';  // Import React Icons

import { ExpandableCardDemo } from "./component/section/card/ExpandableCardDemo";
import VideoSection from "./component/section/YouTubeVideo/VideoSection";

import { HeroParallaxDemo } from "./component/section/HeroParallaxDemo/HeroParallaxDemo";

import Footer from "./component/section/Footer/Footer";
import { Button } from "./component/ui/moving-border";


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
        <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Diploma in Software Engineering <br />
          Completed with a GPA of 3.84 <br />
          2020 - 2021
        </p>
      ),
    },
    {
      title: "Sabaragamuwa University Of Sri Lanka",
      content: (
        <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          BSc Hons in Computing Information Systems <br />
         
          2021 - Present
        </p>
      ),
    },
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
      <div className="w-full flex justify-center mt-8">
        <Navbar />
      </div>
      <div className=" text-white relative ml-80">
        {/* Fixed Left Section */}
        <div className="-ml-64  mt-40">
          <h1 className="font-bold text-3xl ">
            I&apos;m <span >Heshan Navindu</span>,<br />
          </h1>
          <div className="mt-2 font-bold">
            <FlipWords words={words}></FlipWords> <br />
          </div>
          <div className="flex gap-4 mt-2 mb-6">
          <Button
        borderRadius="1.75rem"
        className="text-sm text-white dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Downloard CV
      </Button>
<button  className=" rounded-3xl border-white border-x-1 px-5 bg-orange-400 text-white font-semibold">
Hire me
</button>
            
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-12 mt-8 text-white">
  <a
    href="https://www.facebook.com/heshan.navindu?mibextid=ZbWKwL"
    className="text-white text-4xl transition duration-300 ease-in-out hover:text-blue-600"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.behance.net/iamHesha/"
    className="text-white text-4xl transition duration-300 ease-in-out hover:text-blue-400"
  >
    <FaBehance />
  </a>
  <a
    href="https://www.youtube.com/@iamHesha"
    className="text-white text-4xl transition duration-300 ease-in-out hover:text-red-600"
  >
    <FaYoutube />
  </a>
  <a
    href="https://www.linkedin.com/in/heshan-7-navindu/"
    className="text-white text-4xl transition duration-300 ease-in-out hover:text-blue-700"
  >
    <FaLinkedinIn />
  </a>
  <a
    href="https://github.com/HeshanNavindu-7"
    className="text-white text-4xl transition duration-300 ease-in-out hover:text-gray-800"
  >
    <FaGithub />
  </a>
</div>

        </div>

        {/* Right Section with Image */}
        <div className="ml-72 -mt-96 ">
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
      <section id="about" className="w-full mt-4  text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-center">About Me</h2>
          <TextGenerateEffect words={words_about} />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="w-full py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-left">Education</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2">
              <Timeline data={timelineData} />
            </div>
            <div className="md:w-1/2 flex float-right gap-4 justify-center">
              <Image
                src="/images/sabaragamuwa.jpg"
                alt="Timeline Image 1"
                width={300}
                height={100}
                className="rounded-lg mt-24 ml-8 "
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <ExpandableCardDemo/>
      </section>
      <section id="youtube" className="w-full py-16 text-white">
 

      </section>


<section>
<HeroParallaxDemo/>
</section>
<section>
<VideoSection />
</section>
<Footer/>

    </main>
  );
}
