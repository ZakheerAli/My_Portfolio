// app/projects/page.js
import Link from 'next/link';

export default function ProjectSection() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/allprojects" className="bg-gray-900 p-8 rounded-xl hover:border-teal-400 border border-gray-800 transition-all">
            <div className="text-4xl mb-4 text-blue-400">
              <i className="ri-terminal-line"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">CLI Tools</h2>
            <p className="text-gray-400">Python command line utilities</p>
          </Link>
          
          <Link href="/allprojects" className="bg-gray-900 p-8 rounded-xl hover:border-teal-400 border border-gray-800 transition-all">
            <div className="text-4xl mb-4 text-emerald-400">
              <i className="ri-dashboard-line"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Streamlit Apps</h2>
            <p className="text-gray-400">Python and Streamlit project</p>
          </Link>
          
          <Link href="/allprojects" className="bg-gray-900 p-8 rounded-xl hover:border-teal-400 border border-gray-800 transition-all">
            <div className="text-4xl mb-4 text-purple-400">
              <i className="ri-window-line"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Frontend Projects</h2>
            <p className="text-gray-400">Web applications and sites</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// const projects = [
//     {
//       title: "AI Content Generator",
//       description: "Full-stack application using Python and React that generates articles using GPT-3",
//       tags: ["Python", "AI", "React"],
//       link: "#"
//     },
//     {
//       title: "E-commerce Dashboard",
//       description: "Real-time analytics dashboard with Next.js and Node.js backend",
//       tags: ["Next.js", "Node", "MongoDB"],
//       link: "#"
//     }
//   ];
  
//   export default function Projects() {
//     return (
//       <section className="py-20 px-6 lg:px-24 bg-black" id="projects">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//             <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
//             My hands-on experience with modern technologies
//           </p>
  
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-teal-400 transition-all">
//                 <div className="h-48 bg-gradient-to-br from-blue-900/30 to-emerald-900/30"></div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                       <span key={i} className="text-xs bg-gray-800 text-teal-400 px-3 py-1 rounded-full">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <a href={project.link} className="text-teal-400 hover:text-teal-300 flex items-center gap-2">
//                     View Project <i className="ri-arrow-right-line"></i>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }