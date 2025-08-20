import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoIosArrowUp } from "react-icons/io";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;

    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setScrollPercent(percent);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="right-5 z-50 fixed bottom-10 h-14 w-14 flex items-center justify-center cursor-pointer"
          style={{
            borderRadius: "50%",
            background: `conic-gradient(green ${scrollPercent}%, transparent 0)`,  
            transition: "background 0.2s linear",
          }}
        >
          <div className="h-11 w-11 flex items-center justify-center rounded-full bg-white text-green-800 shadow-lg">
            <IoIosArrowUp className="text-2xl hover:scale-130 transition-all 0.3s" />
          </div>
        </div>
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
