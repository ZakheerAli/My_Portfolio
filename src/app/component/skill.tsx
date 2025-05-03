"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faCode, faServer, faBug, faCloud, faPalette } from '@fortawesome/free-solid-svg-icons';

const coreSkills = [
  { 
    name: "TypeScript", 
    icon: faCode, 
    level: 80,
    projects: 22,
    description: "Strongly typed JavaScript for scalable applications",
    color: "text-blue-500"
  },
  { 
    name: "JavaScript", 
    icon: faJs, 
    level: 80,
    projects: 25,
    description: "Versatile language for web development",
    color: "text-yellow-500"
  },
  { 
    name: "React.js", 
    icon: faReact, 
    level: 90,
    projects: 27,
    description: "Building dynamic, component-based UIs",
    color: "text-cyan-500"
  },
  { 
    name: "Next.js", 
    icon: faCode, 
    level: 85,
    projects: 18,
    description: "Production-grade React frameworks",
    color: "text-gray-500"
  },
  { 
    name: "Python", 
    icon: faPython, 
    level: 80,
    projects: 16,
    description: "General-purpose programming for web and automation",
    color: "text-emerald-500"
  },
  { 
    name: "Tailwind CSS", 
    icon: faPalette, 
    level: 95,
    projects: 30,
    description: "Utility-first CSS for rapid UI development",
    color: "text-teal-500"
  }
];

const secondarySkills = [
  { name: "Streamlit", icon: faPython, category: "python web solution" },
  { name: "Git/GitHub", icon: faGithub, category: "DevOps" },
  { name: "REST APIs", icon: faServer, category: "Backend" },
  { name: "Figma", icon: faFigma, category: "Design" },
  { name: "Jest", icon: faBug, category: "Testing" },
  { name: "Vercel", icon: faCloud, category: "DevOps" }
];

export default function Skills() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-gray-950 py-28 px-6 lg:px-24 relative overflow-hidden" id="skills">
      {/* Client-only animated background elements */}
      {isClient && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) % 360;
            const radius = 50 + (i * 5) % 50;
            const x = radius * Math.cos(angle * Math.PI / 180);
            const y = radius * Math.sin(angle * Math.PI / 180);
            const size = 10 + (i * 3) % 20;

            return (
              <motion.div
                key={i}
                animate={{
                  x: [x, x + 50, x],
                  y: [y, y + 25, y],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20 + (i * 2),
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute text-blue-400/20"
                style={{
                  fontSize: `${size}px`,
                  left: `${50 + x}%`,
                  top: `${50 + y}%`
                }}
              >
                {"</>"}
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Technical Mastery
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated showcase of my core competencies and supporting technologies
          </p>
        </motion.div>

        {/* Core Skills - Hexagon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color.split('-')[1]}-400/10 to-emerald-500/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500`}></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_-5px_rgba(94,234,212,0.3)] overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className={`text-4xl ${skill.color}`}
                  />
                  <h3 className="text-2xl font-bold text-gray-100">{skill.name}</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Mastery</span>
                    <span className="text-teal-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 1.5 }}
                      className={`h-full rounded-full bg-gradient-to-r from-${skill.color.split('-')[1]}-400 to-${skill.color.split('-')[1]}-600`}
                    ></motion.div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4">{skill.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="ri-stack-line"></i>
                  <span>{skill.projects}+ projects</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Skills - Radial Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl text-gray-300 mb-8">Supporting Technologies</h3>
          <div className="relative h-64 sm:h-80 md:h-96 mx-auto max-w-2xl">
            {secondarySkills.map((skill, index) => {
              const angle = (index * 360) / secondarySkills.length;
              const radius = 120;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50
                  }}
                  className="absolute top-1/2 left-1/2 origin-center"
                  style={{ x, y }}
                >
                  <div className="bg-gray-900 border border-gray-700 rounded-full w-20 h-20 flex items-center justify-center text-2xl group hover:bg-teal-400/10 hover:border-teal-400 transition-all -translate-x-1/2 -translate-y-1/2">
                    <div className="text-center">
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className={`text-2xl ${index % 2 === 0 ? 'text-blue-400' : 'text-emerald-400'} group-hover:text-teal-400 transition-colors`}
                      />
                      <span className="text-xs text-gray-400 group-hover:text-white mt-1 block">{skill.name}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-teal-400/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gray-900/80 border border-teal-400/20 flex items-center justify-center">
                <span className="text-teal-400 text-sm font-mono">Tech Stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// const coreSkills = [
//   { 
//     name: "TypeScript", 
//     icon: "ri-code-s-slash-line", 
//     level: 88,
//     projects: 24,
//     description: "Strongly typed JavaScript for scalable applications"
//   },
//   { 
//     name: "JavaScript", 
//     icon: "ri-javascript-line", 
//     level: 90,
//     projects: 28,
//     description: "Versatile language for web development"
//   },
//   { 
//     name: "React.js", 
//     icon: "ri-reactjs-line", 
//     level: 92,
//     projects: 32,
//     description: "Building dynamic, component-based UIs"
//   },
//   { 
//     name: "Next.js", 
//     icon: "ri-nextjs-line", 
//     level: 85,
//     projects: 18,
//     description: "Production-grade React frameworks"
//   },
//   { 
//     name: "Python", 
//     icon: '<i className="fa-brands fa-python"></i>', 
//     level: 80,
//     projects: 15,
//     description: "General-purpose programming for web and automation"
//   },
//   { 
//     name: "Tailwind CSS", 
//     icon: "ri-css3-line", 
//     level: 95,
//     projects: 42,
//     description: "Utility-first CSS for rapid UI development"
//   }
// ];

// const secondarySkills = [
//   { name: "Streamlit", icon:<i className="fa-brands fa-python"></i>, category: "python web solution" },
//   { name: "Git/GitHub", icon: "ri-github-fill", category: "DevOps" },
//   { name: "REST APIs", icon: "ri-server-line", category: "Backend" },
//   { name: "Figma", icon: "ri-palette-line", category: "Design" },
//   { name: "Jest", icon: "ri-bug-line", category: "Testing" },
//   { name: "Vercel", icon: "ri-cloud-line", category: "DevOps" }
// ];

// export default function Skills() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <section className="bg-black py-28 px-6 lg:px-24 relative overflow-hidden" id="skills">
//       {/* Client-only animated background elements */}
//       {isClient && (
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
//           {[...Array(12)].map((_, i) => {
//             // Generate stable positions based on index
//             const angle = (i * 30) % 360;
//             const radius = 50 + (i * 5) % 50;
//             const x = radius * Math.cos(angle * Math.PI / 180);
//             const y = radius * Math.sin(angle * Math.PI / 180);
//             const size = 10 + (i * 3) % 20;

//             return (
//               <motion.div
//                 key={i}
//                 animate={{
//                   x: [x, x + 50, x],
//                   y: [y, y + 25, y],
//                   rotate: [0, 360]
//                 }}
//                 transition={{
//                   duration: 20 + (i * 2),
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className="absolute text-blue-400/20"
//                 style={{
//                   fontSize: `${size}px`,
//                   left: `${50 + x}%`,
//                   top: `${50 + y}%`
//                 }}
//               >
//                 {"</>"}
//               </motion.div>
//             );
//           })}
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
//               Technical Mastery
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             A curated showcase of my core competencies and supporting technologies
//           </p>
//         </motion.div>

//         {/* Core Skills - Hexagon Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//           {coreSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
//               <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-teal-400 overflow-hidden">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`text-4xl ${skill.icon} bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent`}></div>
//                   <h3 className="text-2xl font-bold text-gray-100">{skill.name}</h3>
//                 </div>
                
//                 <div className="mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-gray-400">Mastery</span>
//                     <span className="text-teal-400 font-mono">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-gray-800 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       transition={{ delay: index * 0.2 + 0.3, duration: 1.5 }}
//                       className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
//                     ></motion.div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-400 mb-4">{skill.description}</p>
                
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <i className="ri-stack-line"></i>
//                   <span>{skill.projects}+ projects</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Secondary Skills - Radial Layout */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h3 className="text-xl text-gray-300 mb-8">Supporting Technologies</h3>
//           <div className="relative h-64 sm:h-80 md:h-96 mx-auto max-w-2xl">
//             {secondarySkills.map((skill, index) => {
//               const angle = (index * 360) / secondarySkills.length;
//               const radius = 120;
//               const x = radius * Math.cos((angle * Math.PI) / 180);
//               const y = radius * Math.sin((angle * Math.PI) / 180);
              
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 0, y: 0 }}
//                   whileInView={{ opacity: 1, x, y }}
//                   transition={{ 
//                     delay: index * 0.1,
//                     type: "spring",
//                     stiffness: 50
//                   }}
//                   className="absolute top-1/2 left-1/2 origin-center"
//                   style={{ x, y }}
//                 >
//                   <div className="bg-gray-900 border border-gray-800 rounded-full w-20 h-20 flex items-center justify-center text-2xl group hover:bg-teal-400/10 hover:border-teal-400 transition-all -translate-x-1/2 -translate-y-1/2">
//                     <div className="text-center">
//                       <i className={`${skill.icon} block ${index % 2 === 0 ? 'text-blue-400' : 'text-emerald-400'} group-hover:text-teal-400 transition-colors`}></i>
//                       <span className="text-xs text-gray-400 group-hover:text-white mt-1 block">{skill.name}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
            
//             {/* Center circle */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-teal-400/30 flex items-center justify-center">
//               <div className="w-24 h-24 rounded-full bg-gray-900/80 border border-teal-400/20 flex items-center justify-center">
//                 <span className="text-teal-400 text-sm font-mono">Tech Stack</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }










































// "use client";
// import { motion } from "framer-motion";
// import 'remixicon/fonts/remixicon.css'
// const coreSkills = [
//   { 
//     name: "TypeScript", 
//     icon: "ri-code-s-slash-line", 
//     level: 88,
//     projects: 24,
//     description: "Strongly typed JavaScript for scalable applications"
//   },
//   { 
//     name: "React.js", 
//     icon: "ri-reactjs-line", 
//     level: 92,
//     projects: 32,
//     description: "Building dynamic, component-based UIs"
//   },
//   { 
//     name: "Next.js", 
//     icon: "ri-nextjs-line", 
//     level: 85,
//     projects: 18,
//     description: "Production-grade React frameworks"
//   },
//   { 
//     name: "Tailwind CSS", 
//     icon: "ri-css3-line", 
//     level: 95,
//     projects: 42,
//     description: "Utility-first CSS for rapid UI development"
//   },
//   {
//     name:"python",
//     icon:"ri-python-line",
//     level:90,
//     projects:14,
//     description: "Modern AI python"
//   }
// ];

// const secondarySkills = [
//   { name: "Python", icon: "ri-python-line", category: "Backend" },
//   { name: "Git/GitHub", icon: "ri-github-fill", category: "DevOps" },
//   { name: "REST APIs", icon: "ri-server-line", category: "Backend" },
//   { name: "Figma", icon: "ri-palette-line", category: "Design" },
//   { name: "Jest", icon: "ri-bug-line", category: "Testing" },
//   { name: "Vercel", icon: "ri-cloud-line", category: "DevOps" }
// ];

// export default function Skills() {
//   return (
//     <section className="bg-black py-28 px-6 lg:px-24 relative overflow-hidden" id="skills">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               x: [0, 100, 0],
//               y: [0, 50, 0],
//               rotate: [0, 360]
//             }}
//             transition={{
//               duration: 20 + Math.random() * 20,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute text-blue-400/20"
//             style={{
//               fontSize: `${Math.random() * 20 + 10}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`
//             }}
//           >
//             {"</>"}
//           </motion.div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
//               Technical Mastery
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             A curated showcase of my core competencies and supporting technologies
//           </p>
//         </motion.div>

//         {/* Core Skills - Hexagon Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
//           {coreSkills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-2xl transform group-hover:scale-105 transition-all duration-500"></div>
//               <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-teal-400 overflow-hidden">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`text-4xl ${skill.icon} bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent`}></div>
//                   <h3 className="text-2xl font-bold text-gray-100">{skill.name}</h3>
//                 </div>
                
//                 <div className="mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-gray-400">Mastery</span>
//                     <span className="text-teal-400 font-mono">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-gray-800 rounded-full h-2">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       transition={{ delay: index * 0.2 + 0.3, duration: 1.5 }}
//                       className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
//                     ></motion.div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-400 mb-4">{skill.description}</p>
                
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <i className="ri-stack-line"></i>
//                   <span>{skill.projects}+ projects</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Secondary Skills - Radial Layout */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h3 className="text-xl text-gray-300 mb-8">Supporting Technologies</h3>
//           <div className="relative h-64 sm:h-80 md:h-96 mx-auto max-w-2xl">
//             {secondarySkills.map((skill, index) => {
//               const angle = (index * 360) / secondarySkills.length;
//               const radius = 120;
//               const x = radius * Math.cos((angle * Math.PI) / 180);
//               const y = radius * Math.sin((angle * Math.PI) / 180);
              
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 0, y: 0 }}
//                   whileInView={{ opacity: 1, x, y }}
//                   transition={{ 
//                     delay: index * 0.1,
//                     type: "spring",
//                     stiffness: 50
//                   }}
//                   className="absolute top-1/2 left-1/2 origin-center"
//                   style={{ x, y }}
//                 >
//                   <div className="bg-gray-900 border border-gray-800 rounded-full w-20 h-20 flex items-center justify-center text-2xl group hover:bg-teal-400/10 hover:border-teal-400 transition-all -translate-x-1/2 -translate-y-1/2">
//                     <div className="text-center">
//                       <i className={`${skill.icon} block ${index % 2 === 0 ? 'text-blue-400' : 'text-emerald-400'} group-hover:text-teal-400 transition-colors`}></i>
//                       <span className="text-xs text-gray-400 group-hover:text-white mt-1 block">{skill.name}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
            
//             {/* Center circle */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-teal-400/30 flex items-center justify-center">
//               <div className="w-24 h-24 rounded-full bg-gray-900/80 border border-teal-400/20 flex items-center justify-center">
//                 <span className="text-teal-400 text-sm font-mono">Tech Stack</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

