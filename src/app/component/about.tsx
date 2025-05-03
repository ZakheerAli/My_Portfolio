"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-blue-500 opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-teal-500 opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-purple-500 opacity-20 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of technology and artificial intelligence
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Animated Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 relative group"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-2 border-gray-700 flex items-center justify-center">
                <Image src="/my_pic1.png" alt="Profile picture" width={200} height={200} className='rounded-[100%] object-center' />
                {/* <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-blue-400 group-hover:text-teal-300 transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> */}
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 shadow-lg">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-medium">
                ZAKHEER ALI
              </span>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                <span className="text-white font-medium">👋 Hello!</span> I&apos;m <span className="text-blue-400">Zakheer Ali</span>, a passionate <span className="text-teal-400">Frontend Developer</span> with a deep fascination for <span className="text-purple-400">Artificial Intelligence</span> systems. My journey in tech combines elegant interfaces with intelligent algorithms.
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 w-3 h-3 rounded-full mr-2"></span>
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['React', 'Next.js', 'Python', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AI Integration', 'Responsive Design'].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -3 }}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-teal-400 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-teal-400 w-3 h-3 rounded-full mr-2"></span>
                  Current Focus
                </h3>
                <p className="mt-2">
                  Advancing my skills in <span className="text-teal-300">Agentic AI systems</span> and exploring how <span className="text-blue-300">Python automation</span> can enhance development workflows. Currently diving deep into <span className="text-purple-300">LLM integration</span> with modern web applications.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['Agentic AI', 'Python Automation', 'React 18', 'Next.js', 'LLMs'].map((focus) => (
                    <motion.span
                      key={focus}
                      whileHover={{ y: -3 }}
                      className="px-3 py-1 bg-gradient-to-br from-gray-700 to-gray-800 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-blue-400 transition-all"
                    >
                      {focus}
                    </motion.span>
                  ))}
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me <span className="italic text-gray-400">exploring new technologies</span>, contributing to <span className="text-blue-300">open-source projects</span>, or experimenting with <span className="text-teal-300">AI prototypes</span>. My goal is to build solutions that blend intuitive design with cutting-edge intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
}

