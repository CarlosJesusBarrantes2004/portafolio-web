"use client";

import { Space_Grotesk } from "next/font/google";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const Hero = () => {
  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1X7uoKzgTJxzVlqRYxLNkxOyFwzA0Gswv/view?usp=sharing"
    );
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold`}
            >
              ¡Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Carlos Barrantes
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-medium">
              Fullstack Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Transformando ideas en soluciones digitales innovadoras.
              Especializado en crear experiencias web únicas y funcionales.
            </p>
          </div>
          <button
            onClick={downloadCv}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors group"
          >
            <span>Descargar CV</span>
            <ArrowDownToLine className="w-4 h-4 group-hover:translate-y-1 transition-transform"></ArrowDownToLine>
          </button>
        </div>
        <div className="relative h-[400px] lg:h-[600px] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-gray-500/10 rounded-2xl overflow-hidden">
            <Image
              src={"/carlos-barrantes.jpg"}
              alt="Carlos Barrantes"
              fill
              className="object-cover mix-blend-overlay"
              priority
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
