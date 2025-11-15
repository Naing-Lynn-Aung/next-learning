import Image from "next/image";
import logo from "../public/logo.png";
import profile from "../public/profile.png";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <div className="flex items-center justify-center space-x-4">
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="font-bold">
          Web <span className="text-main">Forum</span>
        </h1>
      </div>
      <div className="w-[600px]">
        <SearchInput />
      </div>
      <div>
        <Image
          src={profile}
          alt="profile"
          width={45}
          height={45}
          className="rounded-full object-cover aspect-square"
        />
      </div>
    </nav>
  );
}

export default Navbar;
