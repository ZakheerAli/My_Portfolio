"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  // Frontend Projects
  {
    id: 1,
    title: "Modern Landing Page",
    description: "A responsive landing page with sleek animations and modern UI design built with HTML/CSS/JS",
    tags: ["HTML", "CSS"],
    type: "frontend",
    image: "/modern landing.PNG",
    demoUrl: "https://modern-landing-page-html-css.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Responsive Portfolio",
    description: "Modern website using html ,css ,js and gsap",
    tags: ["HTML", "CSS","","Typescript", "Responsive Design"],
    type: "frontend",
    image: "/resume.PNG",
    demoUrl: "https://milestone-3-responsive-dynamic-resume.vercel.app",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Modern web",
    description: "Interactive e-commerce interface with product listings and shopping cart functionality",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "frontend",
    image: "/modern web.PNG",
    demoUrl: "https://modern-web-html-css-js.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Taiwind Practice project",
    description: "Admin dashboard built with Next.js featuring responsive layout and data visualization",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    type: "frontend",
    image: "/white space.PNG",
    demoUrl: "https://nextjs-third-assignment-using-tailwindcss.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "UI/UX Challenge",
    description: "Hackathon-winning UI/UX design implementation with focus on accessibility",
    tags: ["Next.js", "UI/UX", "Accessibility"],
    type: "frontend",
    image: "/eccom.PNG",
    demoUrl: "https://nextjs-ui-ux-hackathone.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Responsive E commerce",
    description: "Content-focused blog website with responsive layout and clean typography",
    tags: ["Next.js", "Responsive Design", "CMS"],
    type: "frontend",
    image: "/shop.PNG",
    demoUrl: "https://nextjs-fourth-assignment-responsive-website.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "HTML/CSS Assignment",
    description: "Semantic HTML and modern CSS techniques implementation",
    tags: ["HTML5", "CSS3", "Semantic Markup"],
    type: "frontend",
    image: "/final.PNG",
    demoUrl: "https://final-html-css-assignment.vercel.app/",
    githubUrl: "#"
  },
  {
    id: 8,
    title: "Lemon Landing Page",
    description: "Vibrant landing page for a lemon product with responsive design",
    tags: ["HTML", "CSS", "Responsive"],
    type: "frontend",
    image: "/lemon.PNG",
    demoUrl: "https://responsive-landing-page-lemon.vercel.app/",
    githubUrl: "#"
  },

  // Streamlit Projects
  {
    id: 9,
    title: "Data Sweeper",
    description: "Convert your csv file in to excel",
    tags: ["Python", "Streamlit"],
    type: "streamlit",
    image: "/data sweeper.PNG",
    demoUrl: "https://growthmindsetchallengeprojectbypythongit-czps3v4hhqnsqq4c98r3f.streamlit.app/",
    githubUrl: "https://github.com/ZakheerAli/Growth_Mindset_challenge_project-PYTHON-"
  },
  {
    id: 10,
    title: "Password Strength Checker",
    description: "This app wil help to make password stronger",
    tags: ["Python", "Streamlit"],
    type: "streamlit",
    image: "/password checker.PNG",
    demoUrl: "https://password-strength-checker-with-zakheerali.streamlit.app/",
    githubUrl: "https://github.com/ZakheerAli/Password-Strength-Checker-using-python-and-streamlit"
  },
  {
    id: 11,
    title: "Unit Converter",
    description: "This app allows users to convert between different units of length, weight, and time. Whether you're a student, a professional, or just someone who loves to cook, this app is for you!",
    tags: ["Python", "Streamlit"],
    type: "streamlit",
    image: "/unit con.PNG",
    demoUrl: "https://zakheer-ali-unit-converter-app-using-python74.streamlit.app/",
    githubUrl: "https://github.com/ZakheerAli/Unit-Converter-App-using-python-and-streamlit"
  },

  // Python CLI Projects
  {
    id: 12,
    title:"Personal Library Manager",
    description: "Organize Your Book Collection Like a Pro!",
    tags: ["Python","CLI"],
    type: "cli",
    icon: "ri-terminal-line",
    githubUrl: "https://github.com/ZakheerAli/Personal-Library-Manager-using-Python"
  },
  {
    id: 13,
    title: "Hangman Project",
    description: "Find a word.",
    tags: ["Python", "CLI"],
    type: "cli",
    icon: "ri-lock-password-line",
    githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
  },
  {
    id: 14,
    title: "Number Guessing Game",
    description: "Guess a number",
    tags: ["Python", "CLI"],
    type: "cli",
    icon: "ri-download-line",
    githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
  },
  {
    id: 15,
    title: "Countdown Timer",
    description: "Start your timer",
    tags: ["Python" ,"CLI"],
    type: "cli",
    icon: "ri-download-line",
    githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  // const [hoveredId, setHoveredId] = useState(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collection of my frontend websites, Streamlit dashboards, and Python CLI tools
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "all" 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("frontend")}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "frontend" 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter("streamlit")}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "streamlit" 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Streamlit
          </button>
          <button
            onClick={() => setActiveFilter("cli")}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "cli" 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            CLI Tools
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group h-full flex flex-col"
            >
              {/* Image Section (for frontend/streamlit) or Icon (for CLI) */}
              {project.image ? (
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl flex items-center justify-center">
                  <i className={`${project.icon} text-6xl text-blue-400`}></i>
                </div>
              )}

              {/* Content Section */}
              <div className="bg-gray-900 p-6 rounded-b-xl border border-gray-800 border-t-0 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.type === 'frontend' ? 'bg-purple-900 text-purple-300' :
                    project.type === 'streamlit' ? 'bg-emerald-900 text-emerald-300' :
                    'bg-blue-900 text-blue-300'
                  }`}>
                    {project.type.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-800 text-teal-400 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-white bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <i className="ri-external-link-line"></i> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      project.demoUrl ? 'bg-gray-800 hover:bg-gray-700' : 'bg-teal-600 hover:bg-teal-500'
                    }`}
                  >
                    <i className="ri-github-fill"></i> Code
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              {hoveredId === project.id && (
                <motion.div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.demoUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-medium flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
                  >
                    {project.demoUrl ? 'View Live Demo' : 'View Source Code'} <i className="ri-arrow-right-line"></i>
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const projects = [
//   // Frontend Projects
//   {
//     id: 1,
//     title: "IntenseProxy",
//     description: "Proxy provider website including authentication, dashboard and dynamic features",
//     tags: ["React", "Bootstrap", "Styled Components"],
//     type: "frontend",
//     image: "/projects/intenseproxy.jpg",
//     demoUrl: "#",
//     githubUrl: "#"
//   },
//   {
//     id: 2,
//     title: "$AAPE Coin",
//     description: "Site for a BBC based coin called $AAPE",
//     tags: ["Blockchain", "Web3", "Crypto"],
//     type: "frontend",
//     image: "/projects/aape-coin.jpg",
//     demoUrl: "#",
//     githubUrl: "#"
//   },
//   {
//     id: 3,
//     title: "Blockchain Explorer",
//     description: "Hive Attention Tokens explorer (block explorer) for transactions",
//     tags: ["React", "TehnincGS", "Context API"],
//     type: "frontend",
//     image: "/projects/blockchain-explorer.jpg",
//     demoUrl: "#",
//     githubUrl: "#"
//   },
//   // Streamlit Projects
//   {
//     id: 4,
//     title: "Data Sweeper",
//     description: "Interactive data visualization dashboard built with Streamlit",
//     tags: ["Python", "Streamlit"],
//     type: "streamlit",
//     image: "/data sweeper.PNG",
//     demoUrl: "https://growthmindsetchallengeprojectbypythongit-czps3v4hhqnsqq4c98r3f.streamlit.app/",
//     githubUrl: "https://github.com/ZakheerAli/Growth_Mindset_challenge_project-PYTHON-"
//   },
//   {
//     id: 5,
//     title: "Password Strength Checker",
//     description: "Interactive data visualization dashboard built with Streamlit",
//     tags: ["Python", "Streamlit"],
//     type: "streamlit",
//     image: "/password checker.PNG",
//     demoUrl: "https://password-strength-checker-with-zakheerali.streamlit.app/",
//     githubUrl: "https://github.com/ZakheerAli/Password-Strength-Checker-using-python-and-streamlit"
//   },
//   {
//     id: 6,
//     title: "Unit Converter",
//     description: "Interactive data visualization dashboard built with Streamlit",
//     tags: ["Python", "Streamlit"],
//     type: "streamlit",
//     image: "/unit con.PNG",
//     demoUrl: "https://zakheer-ali-unit-converter-app-using-python74.streamlit.app/",
//     githubUrl: "https://github.com/ZakheerAli/Unit-Converter-App-using-python-and-streamlit"
//   },
//   // Python CLI Projects
//   {
//     id: 7,
//     title:"Personal Library Manager",
//     description: "Automatically organizes files by extension with configurable rules",
//     tags: ["Python","CLI"],
//     type: "cli",
//     icon: "ri-terminal-line",
//     githubUrl: "https://github.com/ZakheerAli/Personal-Library-Manager-using-Python"
//   },
//   {
//     id: 8,
//     title: "Hangman Project",
//     description: "Secure command-line password manager with encryption",
//     tags: ["Python", "CLI"],
//     type: "cli",
//     icon: "ri-lock-password-line",
//     githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
//   },
//   {
//     id: 9,
//     title: "Number Guessing Game",
//     description: "Command-line tool for scraping and analyzing website data",
//     tags: ["Python", "CLI"],
//     type: "cli",
//     icon: "ri-download-line",
//     githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
//   },
//   {
//     id: 10,
//     title: "Countdown Timer",
//     description: "Command-line tool for scraping and analyzing website data",
//     tags: ["Python" ,"CLI"],
//     type: "cli",
//     icon: "ri-download-line",
//     githubUrl: "https://github.com/ZakheerAli/python-project4-assignments/tree/main/Assignment%201%20to%206"
//   }
// ];

// export default function ProjectsSection() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [hoveredId, setHoveredId] = useState(null);

//   const filteredProjects = activeFilter === "all" 
//     ? projects 
//     : projects.filter(project => project.type === activeFilter);

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
//               My Projects
//             </span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Showcase of my work across frontend, Streamlit apps, and Python CLI tools
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           <button
//             onClick={() => setActiveFilter("all")}
//             className={`px-4 py-2 rounded-full transition-colors ${
//               activeFilter === "all" 
//                 ? 'bg-teal-600 text-white' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//             }`}
//           >
//             All Projects
//           </button>
//           <button
//             onClick={() => setActiveFilter("frontend")}
//             className={`px-4 py-2 rounded-full transition-colors ${
//               activeFilter === "frontend" 
//                 ? 'bg-purple-600 text-white' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//             }`}
//           >
//             Frontend
//           </button>
//           <button
//             onClick={() => setActiveFilter("streamlit")}
//             className={`px-4 py-2 rounded-full transition-colors ${
//               activeFilter === "streamlit" 
//                 ? 'bg-emerald-600 text-white' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//             }`}
//           >
//             Streamlit
//           </button>
//           <button
//             onClick={() => setActiveFilter("cli")}
//             className={`px-4 py-2 rounded-full transition-colors ${
//               activeFilter === "cli" 
//                 ? 'bg-blue-600 text-white' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//             }`}
//           >
//             CLI Tools
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: project.id * 0.1 }}
//               viewport={{ once: true }}
//               onMouseEnter={() => setHoveredId(project.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               className="relative group"
//             >
//               {/* Image Section (for frontend/streamlit) or Icon (for CLI) */}
//               {project.image ? (
//                 <div className="relative h-64 overflow-hidden rounded-t-xl">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-70'}`} />
//                 </div>
//               ) : (
//                 <div className="h-64 bg-gray-800 rounded-t-xl flex items-center justify-center">
//                   <i className={`${project.icon} text-6xl ${project.type === 'cli' ? 'text-blue-400' : 'text-gray-400'}`}></i>
//                 </div>
//               )}

//               {/* Content Section */}
//               <div className="bg-gray-900 p-6 rounded-b-xl border border-gray-800 border-t-0">
//                 <div className="flex items-start justify-between gap-2">
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                     <p className="text-gray-400 mb-4">{project.description}</p>
//                   </div>
//                   <span className={`text-xs px-2 py-1 rounded-full ${
//                     project.type === 'frontend' ? 'bg-purple-900 text-purple-300' :
//                     project.type === 'streamlit' ? 'bg-emerald-900 text-emerald-300' :
//                     'bg-blue-900 text-blue-300'
//                   }`}>
//                     {project.type.toUpperCase()}
//                   </span>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="text-xs bg-gray-800 text-teal-400 px-3 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   {project.demoUrl && (
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center text-white bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
//                     >
//                       <i className="ri-external-link-line"></i> Demo
//                     </a>
//                   )}
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`flex-1 text-center text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
//                       project.demoUrl ? 'bg-gray-800 hover:bg-gray-700' : 'bg-teal-600 hover:bg-teal-500'
//                     }`}
//                   >
//                     <i className="ri-github-fill"></i> Code
//                   </a>
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               {hoveredId === project.id && (
//                 <motion.div 
//                   className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <a
//                     href={project.demoUrl || project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white text-lg font-medium flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
//                   >
//                     {project.demoUrl ? 'View Project' : 'View Code'} <i className="ri-arrow-right-line"></i>
//                   </a>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

