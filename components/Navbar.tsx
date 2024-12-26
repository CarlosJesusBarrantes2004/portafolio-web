import { links } from "@/data/projects";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-md bg-gray-900/80 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1
              className={`${spaceGrotesk.className} font-bold text-2xl uppercase`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-purple-500">
                Carlos Barrantes
              </span>
            </h1>
            <div className="flex gap-6">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
