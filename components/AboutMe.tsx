import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Code2, Dumbbell, GraduationCap, Brain } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-8`}>
            Sobre <span className="text-purple-400">mí</span>
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Soy un joven desarrollador web junior de 20 años, actualmente
              cursando Ingeniería de Sistemas. Mi pasión por la tecnología me ha
              llevado a especializarme en el desarrollo full stack, con un
              enfoque particular en tecnologías modernas como React, Next.js,
              Express y TypeScript.
            </p>
            <p>
              Como autodidacta, disfruto enfrentando nuevos desafíos técnicos y
              manteniéndome actualizado con las últimas tendencias en desarrollo
              web. Mi objetivo es crear aplicaciones que no solo sean
              funcionales, sino también intuitivas y agradables para el usuario.
            </p>
            <p>
              Fuera del mundo del código, mantengo un estilo de vida activo
              practicando calistenia, corriendo y entrenando en el gimnasio. El
              deporte, especialmente el fútbol, es una de mis grandes pasiones
              junto a la programación.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="flex items-center gap-3 text-gray-300">
              <GraduationCap className="w-5 h-5 text-purple-400"></GraduationCap>
              <span>Ing. de Sistemas</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Code2 className="w-5 h-5 text-purple-400"></Code2>
              <span>Desarrollador Web</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Brain className="w-5 h-5 text-purple-400"></Brain>
              <span>Autodidacta</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Dumbbell className="w-5 h-5 text-purple-400"></Dumbbell>
              <span>Deportista</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-500/10 to-gray-500/10">
            <Image
              src={"/carlos-barrantes.jpg"}
              alt="Carlos Barrantes"
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
