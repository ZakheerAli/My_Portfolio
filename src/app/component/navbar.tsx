"use client";

import { useState, useEffect } from "react";
import 'remixicon/fonts/remixicon.css';
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-transparent ${scrolled ? 'border-b border-gray-800/50' : 'border-b border-transparent'} px-4 py-4 md:px-12 fixed w-full top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with matching hero gradient */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text tracking-wide hover:scale-105 transition-transform">
          ZAKHEER ALI.
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white/90 text-base font-medium">
          <li className="group relative">
            <Link href="/" className="hover:text-teal-400 transition duration-300 flex items-center">
              Home
              <i className="ri-arrow-right-up-line ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="group relative">
            <Link href="/allprojects" className="hover:text-teal-400 transition duration-300 flex items-center">
              Projects
              <i className="ri-download-line ml-1"></i>
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="group relative">
            <Link href="/contact" className="hover:text-teal-400 transition duration-300 flex items-center">
              Contact
              <i className="ri-send-plane-line ml-1"></i>
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden focus:outline-none bg-gray-900 p-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-2xl ${isOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm mt-4 rounded-lg p-4 animate-slide-in">
          <ul className="flex flex-col space-y-4 text-white/90 font-medium">
            <li>
              <a 
                href="/allprojects" 
                className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                <span>Projects</span>
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </li>
            <li>
              <a 
                href="#resume" 
                className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                <span>Resume</span>
                <i className="ri-download-line"></i>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                <span>Contact</span>
                <i className="ri-send-plane-line"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import 'remixicon/fonts/remixicon.css';
// import Link from "next/link";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`bg-transparent ${scrolled ? 'border-b border-gray-800/50' : 'border-b border-transparent'} px-4 py-4 md:px-12 fixed w-full top-0 z-50 transition-all duration-300`}>
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo with matching hero gradient */}
//         <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text tracking-wide hover:scale-105 transition-transform">
//           ZAKHEER ALI.
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8 text-white/90 text-base font-medium">
//           <li className="group relative">
//             <Link href="/" className="hover:text-teal-400 transition duration-300 flex items-center">
//               Home
//               <i className="ri-arrow-right-up-line ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
//             </Link>
//             <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
//           </li>
//           <li className="group relative">
//             <Link href="/allprojects" className="hover:text-teal-400 transition duration-300 flex items-center">
//               Projects
//               <i className="ri-download-line ml-1"></i>
//             </Link>
//             <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
//           </li>
//           <li className="group relative">
//             <Link href="/contact" className="hover:text-teal-400 transition duration-300 flex items-center">
//               Contact
//               <i className="ri-send-plane-line ml-1"></i>
//             </Link>
//             <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
//           </li>
//           <li className="ml-4">
//             <button className="border border-teal-400/50 hover:border-teal-400 hover:bg-teal-400/10 px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300">
//               <i className="ri-moon-fill text-teal-400"></i>
//               <span className="text-sm">Dark</span>
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="text-white md:hidden focus:outline-none bg-gray-900 p-2 rounded-lg hover:bg-gray-800 transition"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <i className={`text-2xl ${isOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
//         </button>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900/95 backdrop-blur-sm mt-4 rounded-lg p-4 animate-slide-in">
//           <ul className="flex flex-col space-y-4 text-white/90 font-medium">
//             <li>
//               <a 
//                 href="/allprojects" 
//                 className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <span>Projects</span>
//                 <i className="ri-arrow-right-up-line"></i>
//               </a>
//             </li>
//             <li>
//               <a 
//                 href="#resume" 
//                 className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <span>Resume</span>
//                 <i className="ri-download-line"></i>
//               </a>
//             </li>
//             <li>
//               <a 
//                 href="#contact" 
//                 className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <span>Contact</span>
//                 <i className="ri-send-plane-line"></i>
//               </a>
//             </li>
//             <li className="pt-2 border-t border-gray-800">
//               <button className="w-full border border-teal-400/50 hover:border-teal-400 hover:bg-teal-400/10 px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300">
//                 <i className="ri-moon-fill text-teal-400"></i>
//                 <span>Dark Mode</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

