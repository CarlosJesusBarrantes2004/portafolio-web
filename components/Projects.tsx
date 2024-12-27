import { projects } from "@/data/projects";
import { Space_Grotesk } from "next/font/google";
import ProjectCard from "./ProjectCard";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen">
      <h2 className={`${spaceGrotesk.className} text-3xl font-bold mb-12`}>
        Mis <span className="text-purple-400">Proyectos</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
