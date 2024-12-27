import { iconsMap, IconName } from "@/data/icons";
import Image from "next/image";

const TechIcon = ({ name }: { name: string }) => {
  const iconKey = name.toLowerCase() as IconName;

  return (
    <div className="w-8 h-8 relative">
      <Image
        src={iconsMap[iconKey] || ""}
        alt={name}
        fill
        className="object-contain"
      ></Image>
    </div>
  );
};

export default TechIcon;
