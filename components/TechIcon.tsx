import { iconsMap } from "@/data/projects";
import Image from "next/image";

const TechIcon = ({ name }: { name: string }) => {
  return (
    <div className="w-8 h-8 relative">
      <Image
        src={iconsMap[name.toLocaleLowerCase()] || ""}
        alt={name}
        fill
        className="object-contain"
      ></Image>
    </div>
  );
};

export default TechIcon;
