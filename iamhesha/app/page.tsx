'use client';

import Image from "next/image";
import Navbar from "./component/Navigation/Navbar";
import { FlipWords } from "./component/ui/flip-words";
import { Vortex } from "./component/ui/vortex";
import { TextHoverEffect } from "./component/ui/text-hover-effect";
import { TextGenerateEffect } from "./component/ui/text-generate-effect";
// import { Timeline } from "./component/ui/timeline";

import { FaFacebookF, FaLinkedinIn, FaGithub, FaBehance, FaYoutube } from 'react-icons/fa';  // Import React Icons

import { ExpandableCardDemo } from "./component/section/card/ExpandableCardDemo";
import VideoSection from "./component/section/YouTubeVideo/VideoSection";

import { HeroParallaxDemo } from "./component/section/HeroParallaxDemo/HeroParallaxDemo";

import Footer from "./component/section/Footer/Footer";
import { Button } from "./component/ui/moving-border";
import { useRouter } from "next/navigation";


export default function Home() {
  const words = ["YouTuber", "Web Developer", "Mobile Developer", "UI/UX Designer", "AI/ML Enthusiast"];
  const words_about = `Motivated undergraduate student majoring in Computing Information Systems with a strong passion
for web, mobile, and desktop development, and a keen interest in AI/ML. An energetic team player
who thrives in dynamic environments, eager to contribute skills and gain hands-on experience in
software engineering.`;
const router = useRouter();
  // const timelineData = [
  //   {
  //     title: "National Institute of Business Management",
  //     content: (
  //       <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
  //         Diploma in Software Engineering <br />
  //         Completed with a GPA of 3.84 <br />
  //         2020 - 2021
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Sabaragamuwa University Of Sri Lanka",
  //     content: (
  //       <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
  //         BSc Hons in Computing Information Systems <br />
         
  //         2021 - Present
  //       </p>
  //     ),
  //   },
  // ];



  
  return (
    <main className="flex flex-col items-center justify-between max-w-screen overflow-x-hidden">
  <Vortex
  backgroundColor="black"
  rangeY={700}
  particleCount={300}
  baseHue={120}
  className="flex items-center flex-col justify-center px-4 sm:px-8 md:px-10 py-4 w-full h-full"
>
  <div className="w-full flex justify-center mt-8">
    <Navbar />
  </div>
  <div className="text-white relative flex flex-col md:items-start md:ml-40">
    {/* Fixed Left Section */}
    <div className="mt-24 md:mt-40  md:-ml-48 text-center md:text-left">
      <h1 className="font-bold text-2xl sm:text-3xl">
        I&apos;m <span className="text-[#3533cd]">Heshan Navindu ,</span><br />
      </h1>
      <div className="mt-2 font-bold">
        <FlipWords words={words} /><br />
      </div>
      </div>
      <div className="flex flex-row md:flex-row gap-4 md:mt-8 mb-3 md:-ml-48 items-center justify-center">
        <Button
          as="a" // Make it behave like a link
          href="/CV.pdf" // Ensure the correct path to the PDF
          download // Correct spelling
          borderRadius="1.75rem"
          className="text-sm text-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Download CV
        </Button>
        <button
      onClick={() => router.push("/Pages/contact")}
      className="w-40 h-14 rounded-3xl border-white border-x-1 px-5 bg-[#3533cd] hover:bg-[#2927a1] text-white font-semibold"
    >
      Hire me
    </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center gap-8 mt-4 md:-ml-48 text-white">
        <a
          href="https://www.facebook.com/heshan.navindu?mibextid=ZbWKwL"
          className="text-white text-3xl sm:text-4xl transition duration-300 ease-in-out hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.behance.net/iamHesha/"
          className="text-white text-3xl sm:text-4xl transition duration-300 ease-in-out hover:text-blue-400"
        >
          <FaBehance />
        </a>
        <a
          href="https://www.youtube.com/@iamHesha"
          className="text-white text-3xl sm:text-4xl transition duration-300 ease-in-out hover:text-red-600"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/heshan-7-navindu/"
          className="text-white text-3xl sm:text-4xl transition duration-300 ease-in-out hover:text-blue-700"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/HeshanNavindu-7"
          className="text-white text-3xl sm:text-4xl transition duration-300 ease-in-out hover:text-gray-800"
        >
          <FaGithub />
        </a>
      </div>
    

    {/* Right Section with Image */}
    <div className="mt-10 md:ml-96 md:-mt-96">
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
      <div id="about" className="h-[20rem] font-bold flex items-center justify-center">
        <TextHoverEffect text="IAMHESHA" />
      </div>

      {/* About Me Section */}
      <section  className="w-full mt-4  text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-center">About Me</h2>
          <TextGenerateEffect words={words_about} />
        </div>
      </section>

      {/* Timeline Section
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
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="w-full py-16 text-white">
      <h2 className="text-5xl font-bold mb-6 text-center">Projects</h2>
        <ExpandableCardDemo/>
      </section>
     


<section>
<HeroParallaxDemo/>
</section>
<section id="youtube">
<VideoSection />
</section>

<Footer/>

    </main>
  );
}
