

"use client"
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="bg-black min-h-screen flex items-center text-white px-6 lg:px-24 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="mt-16 lg:max-w-2xl max-w-xl w-full">
          <p className="text-sm text-gray-400 mb-2 font-mono">Hey there, I&apos;m</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text block">
              ZAKHEER ALI
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
          Frontend Developer | Advanced Python & Agentic AI Explorer
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
          I specialize in frontend development and am currently advancing my skills in Python and Modern AI, with a strong focus on Agentic AI systems. My passion lies in building cutting-edge digital solutions by combining intuitive design with intelligent technologies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            <Link href="mailto:zakheerali@email.com" className="border border-blue-500 px-4 py-2 flex items-center justify-center gap-2 rounded-md hover:bg-blue-600 transition hover:border-transparent">
              <i className="ri-mail-fill text-xl"></i> Email
            </Link>
            <Link href="https://www.linkedin.com/in/zakheer-ali-57a8a1335/" target='_blank' className="border border-teal-400 px-4 py-2 flex items-center justify-center gap-2 rounded-md hover:bg-teal-600 transition hover:border-transparent">
              <i className="ri-linkedin-fill text-xl"></i> LinkedIn
            </Link>
            <Link href="https://github.com/ZakheerAli" target='_blank' className="border border-emerald-500 px-4 py-2 flex items-center justify-center gap-2 rounded-md hover:bg-emerald-600 transition hover:border-transparent">
              <i className="ri-github-fill text-xl"></i> GitHub
            </Link>
            {/* <a href="#" className="border border-blue-400 px-4 py-2 flex items-center justify-center gap-2 rounded-md hover:bg-blue-500 transition hover:border-transparent">
              <i className="ri-file-text-fill text-xl"></i> Resume
            </a> */}
          </div>

          {/* <div className="animate-bounce">
            <i className="ri-arrow-down-line text-3xl text-gray-400"></i>
          </div> */}
        </div>

        {/* Tech Graphic Element */}
        <div className="hidden lg:flex items-center justify-center w-[34rem] h-[34rem] relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-teal-400/20 to-emerald-500/20 blur-3xl animate-pulse"></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated circuits */}
            <div className="absolute border-2 border-blue-500/30 rounded-full w-full h-full animate-spin-slow [mask-image:linear-gradient(to_bottom,transparent_10%,white_50%,transparent_90%)]"></div>
            <div className="absolute border-2 border-teal-400/30 rounded-full w-3/4 h-3/4 animate-spin-slow-reverse [mask-image:linear-gradient(to_right,transparent_10%,white_50%,transparent_90%)]"></div>
            <div className="absolute border border-emerald-500/20 rounded-full w-1/2 h-1/2 animate-spin-medium [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white_70%,transparent_90%)]"></div>
            
            {/* Hexagon Center */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
              <div className="hexagon bg-gradient-to-br from-blue-600 to-emerald-600 p-2 mb-6">
                <div className="hexagon-inner bg-black flex items-center justify-center w-24 h-24">
                  <i className="ri-cpu-line text-4xl text-blue-400"></i>
                </div>
              </div>
              
              <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                TECH + AI
              </div>
              
              <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 my-4"></div>
              
              <div className="text-md text-gray-300 max-w-xs font-mono">
                Next-Gen Solutions
              </div>
            </div>
            
            {/* Floating Tech Icons - strategically placed */}
            <div className="absolute top-4 left-8 text-blue-400 text-3xl hover:scale-125 transition-transform"><i className="ri-reactjs-line"></i></div>
            <div className="absolute bottom-8 right-8 text-teal-400 text-3xl hover:scale-125 transition-transform"><i className="ri-python-line"></i></div>
            <div className="absolute bottom-16 left-16 text-emerald-400 text-3xl hover:scale-125 transition-transform"><i className="ri-artificial-intelligence-line"></i></div>
            <div className="absolute top-1/4 right-4 text-blue-300 text-3xl hover:scale-125 transition-transform"><i className="ri-javascript-line"></i></div>
            <div className="absolute top-1/2 left-0 text-teal-300 text-3xl hover:scale-125 transition-transform"><i className="ri-database-2-line"></i></div>
            <div className="absolute top-3/4 right-0 text-emerald-300 text-3xl hover:scale-125 transition-transform"><i className="ri-neural-network-line"></i></div>
            <div className="absolute top-0 right-1/4 text-blue-200 text-3xl hover:scale-125 transition-transform"><i className="ri-terminal-line"></i></div>
            <div className="absolute bottom-4 left-1/4 text-teal-200 text-3xl hover:scale-125 transition-transform">{"</>"}</div>
          </div>
        </div>
      </div>

      {/* Hexagon CSS */}
      <style jsx>{`
        .hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          width: 7rem;
          height: 7rem;
        }
        .hexagon-inner {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
}


