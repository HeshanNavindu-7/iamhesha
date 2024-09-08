'use client';
import Image from "next/image";
import Navbar from "./component/Navigation/Navbar";
import { FlipWords } from "./component/ui/flip-words";
import { Vortex } from "./component/ui/vortex";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <Navbar/>
        <div className="flex justify-between items-center py-20 px-10 text-white relative">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6">
              I&apos;m <span className="text-cyan-400">Heshan Navindu</span>,<br />
              <FlipWords words={words} /> <br />
            </h1>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="px-6 py-2 rounded-full bg-cyan-400 text-white font-semibold"
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
            <div className="flex gap-4">
              <a href="#" className="text-white text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white text-xl">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/iamhesha.png"
              alt="Heshan Navindu"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full z-[-1]"></div>
          </div>
        </div>
      </Vortex>
    </main>
  );
}
