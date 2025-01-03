import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface SidebarItemProps {
  icon: StaticImageData;
  label: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
}) => {
  return (
    <Link
      href={href}
      className="flex items-center p-3 hover:bg-gray-700 transition-colors"
    >
      <span className="md:hidden">
        <Image src={Icon.src} height={36} width={36} className="w-6 h-6 text-[#8C734A] " alt={label} />
      </span>

      <div className="hidden md:flex items-center space-x-2">
        {/* <Icon className="w-6 h-6 text-[#8C734A]" /> */}
        <Image src={Icon.src} className="w-7 h-7"  height={36} width={36} alt={label}/>
        <span className="text-md">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarItem;
