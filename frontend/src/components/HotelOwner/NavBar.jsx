import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8     py-3 bg-red-500 transition-all duration-300">
      <Link to="/">
        <h1 className="text-7xl font-bold text-green-800">RaniHOTEL</h1>
      </Link>
      <button>
        <UserButton />
      </button>
    </div>
  );
};

export default NavBar;
