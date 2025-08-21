import { UserButton } from "@clerk/clerk-react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaPlusSquare, FaListAlt } from "react-icons/fa";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuLinks = [
    {
      label: "Dashboard",
      to: "/owner",
      icon: <MdDashboard size={20} />,
    },
    {
      label: "Add Room",
      to: "/owner/add-room",
      icon: <FaPlusSquare size={18} />,
    },
    {
      label: "List Room",
      to: "/owner/list-room",
      icon: <FaListAlt size={18} />,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 h-full fixed top-0 z-40 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between items-center md:block">
          Owner Panel
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <RiCloseLine size={24} />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-1">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={() => setIsSidebarOpen(false)} // auto-close on click (mobile)
                  className="flex items-center gap-4 px-5 py-3 hover:bg-gray-700 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Navbar */}
        <header className="border-b h-20 flex items-center justify-between px-6 shadow bg-white z-10">
          {/* Menu toggle (mobile only) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-2xl md:hidden"
          >
            <RiMenu3Fill />
          </button>

          <Link to="/">
            <h2 className="font-bold text-3xl text-green-700">RaniHotel</h2>
          </Link>

          <UserButton />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
