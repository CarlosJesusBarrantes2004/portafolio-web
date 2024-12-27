import technologies from "@/data/technologies";
import { Space_Grotesk } from "next/font/google";
import TechIcon from "./TechIcon";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen">
      <div className="flex flex-col space-y-4">
        <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-8`}>
          <span className="text-purple-400">Skills</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-2xl mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.frontend.map((tech) => (
                <TechIcon key={tech} name={tech}></TechIcon>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.backend.map((tech) => (
                <TechIcon key={tech} name={tech}></TechIcon>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
