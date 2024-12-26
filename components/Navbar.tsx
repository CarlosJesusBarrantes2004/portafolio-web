import { links } from "@/data";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 px-14 py-7 flex justify-between">
      <h1 className={`${spaceGrotesk.className} font-bold text-2xl uppercase`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
          Carlos Barrantes
        </span>
      </h1>
      <div className="flex gap-4">
        {links.map((item) => (
          <button key={item.name} className="text-sm font-light ">
            <a href={item.link}>{item.name}</a>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
