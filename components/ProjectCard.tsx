import Image from "next/image";
import TechIcon from "./TechIcon";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        ></Image>
      </div>
      <div className="bg-gray-800/50 p-6 backdrop-blur-sm relative flex flex-1">
        <div className="flex flex-col flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
          <p className="text-gray-300">{description}</p>
          <div className="flex flex-col space-y-4 flex-1 justify-end">
            <div className="flex gap-3">
              {technologies.map((tech) => (
                <TechIcon key={tech} name={tech}></TechIcon>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                Ver Demo
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4"></Github>
                Ver Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
