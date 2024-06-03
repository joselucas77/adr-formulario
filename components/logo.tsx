import Image from "next/image";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <div className="w-20 h-20 shadow-inner rounded-lg ring-2 ring-gray-300 dark:ring-gray-900">
      <Image className="w-full h-full p-3" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
