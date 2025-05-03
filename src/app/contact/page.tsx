"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Custom Animated Icons
const MailIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="none" 
    stroke="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </motion.svg>
);

const LinkedInIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </motion.svg>
);

const GithubIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </motion.svg>
);

const SendIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="none" 
    stroke="currentColor"
    whileHover={{ x: 5 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </motion.svg>
);

const UserIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="none" 
    stroke="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </motion.svg>
);

const MessageIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="none" 
    stroke="currentColor"
    whileHover={{ scale: 1.1 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </motion.svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/mldbjwdp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', subject: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Floating Tech Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-blue-500 opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-teal-500 opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-purple-500 opacity-20 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text">
              Let's Connect
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to discuss AI-powered solutions or collaborate on innovative projects?
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-teal-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 w-3 h-3 rounded-full mr-2"></span>
              Send Me a Message
            </h2>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-6 bg-gradient-to-br from-green-900/30 to-teal-900/20 rounded-lg border border-green-800/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-900 to-teal-800 rounded-full mb-4">
                  <SendIcon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-medium text-green-200 mb-2">
                  Message Sent!
                </h3>
                <p className="text-green-300 mb-4">
                  I'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg transition-all"
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-teal-300 transition-colors">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserIcon className="text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-700/50 text-white transition-all group-hover:border-teal-400"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-teal-300 transition-colors">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MessageIcon className="text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-700/50 text-white transition-all group-hover:border-teal-400"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-teal-300 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MailIcon className="text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-700/50 text-white transition-all group-hover:border-teal-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-teal-300 transition-colors">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-3">
                      <MessageIcon className="text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-700/50 text-white transition-all group-hover:border-teal-400"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg"
                >
                  Send Message
                  <SendIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Interactive Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 w-3 h-3 rounded-full mr-2"></span>
              Direct Contacts
            </h2>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-200 border border-transparent hover:border-teal-500/30"
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-900/50 to-teal-900/30 p-3 rounded-lg">
                  <MailIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <Link 
                    href="mailto:zakheer@gmail.com" 
                    target='_blank'
                    className="text-blue-400 hover:text-teal-400 transition-colors"
                  >
                    zakheerali@gmail.com
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-200 border border-transparent hover:border-blue-500/30"
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/30 p-3 rounded-lg">
                  <LinkedInIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                  <Link 
                    href="https://www.linkedin.com/in/zakheer-ali-57a8a1335/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-teal-400 transition-colors"
                  >
                    linkedin.com/in/zakheer-ali
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-200 border border-transparent hover:border-purple-500/30"
              >
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-900/50 to-indigo-900/30 p-3 rounded-lg">
                  <GithubIcon />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">GitHub</h3>
                  <Link 
                    href="https://github.com/ZakheerAli" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-teal-400 transition-colors"
                  >
                    github.com/ZakheerAli
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 w-3 h-3 rounded-full mr-2"></span>
                Current Focus Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Agentic AI', 'Python Automation', 'React 18', 'Next.js', 'LLMs'].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-teal-400 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Looking forward to collaborating on innovative projects!
              </p>
              <p className="text-teal-400 font-medium mt-2">- Zakheer Ali</p>
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



// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// // SVG Icons (unchanged from previous version)
// const MailIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   </svg>
// );

// const LinkedInIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="currentColor">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );

// const GithubIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="currentColor">
//     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//   </svg>
// );

// const SendIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//   </svg>
// );

// const UserIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   </svg>
// );

// const MessageIcon = ({ className = "" }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//   </svg>
// );

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     subject:'',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: '',subject:'', email: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
//       <div className="max-w-6xl mx-auto">
//         {/* Header with darker theme */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500 text-transparent bg-clip-text block">
//               Let's Connect
//             </span>
//           </h1>
//           {/* <h1 className="text-5xl font-bold text-white mb-4">
//             Let's <span className="text-blue-400">Connect</span>
//           </h1> */}
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Have a project in mind or want to discuss AI possibilities? Drop me a message!
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//         >
//           {/* Contact Form - Darker Card */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
//           >
//             <h2 className="text-2xl font-semibold text-white mb-6">
//               Send me a message
//             </h2>
            
//             {submitted ? (
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="text-center p-6 bg-green-900/30 rounded-lg border border-green-800"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900 rounded-full mb-4">
//                   <SendIcon className="w-8 h-8 text-green-400" />
//                 </div>
//                 <h3 className="text-xl font-medium text-green-200 mb-2">
//                   Message Sent!
//                 </h3>
//                 <p className="text-green-300">
//                   I'll get back to you soon. Meanwhile, check out my GitHub for more projects.
//                 </p>
//                 <button
//                   onClick={() => setSubmitted(false)}
//                   className="mt-4 px-4 py-2 text-sm text-green-400 hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                     Your Name
//                   </label>
//                   <div className="relative">
//                     <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-all"
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
//                     Subject
//                   </label>
//                   <div className="relative">
//                     <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                     <input
//                       type="text"
//                       name="subject"
//                       id="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-all"
//                       placeholder="Subject"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-all"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
//                     Your Message
//                   </label>
//                   <div className="relative">
//                     <MessageIcon className="absolute left-3 top-4 text-gray-500" />
//                     <textarea
//                       name="message"
//                       id="message"
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white transition-all"
//                       placeholder="Tell me about your project..."
//                     />
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
//                 >
//                   Send Message
//                   <SendIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>

//           {/* Contact Info - Darker Card */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 h-fit"
//           >
//             <h2 className="text-2xl font-semibold text-white mb-6">
//               Direct Contacts
//             </h2>
            
//             <div className="space-y-6">
//               <motion.div 
//                 whileHover={{ x: 5 }}
//                 className="flex items-start p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
//               >
//                 <div className="flex-shrink-0 bg-blue-900/50 p-3 rounded-lg">
//                   <MailIcon className="w-6 h-6 text-blue-400" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">Email</h3>
//                   <Link 
//                     href="mailto:zakheer@gmail.com" 
//                     className="text-blue-400 hover:underline"
//                   >
//                     zakheer@gmail.com
//                   </Link>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 whileHover={{ x: 5 }}
//                 className="flex items-start p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
//               >
//                 <div className="flex-shrink-0 bg-blue-900/50 p-3 rounded-lg">
//                   <LinkedInIcon className="w-6 h-6 text-blue-400" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">LinkedIn</h3>
//                   <Link 
//                     href="https://www.linkedin.com/in/zakheer-ali-57a8a1335/" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline"
//                   >
//                     linkedin.com/in/zakheer-ali
//                   </Link>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 whileHover={{ x: 5 }}
//                 className="flex items-start p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
//               >
//                 <div className="flex-shrink-0 bg-blue-900/50 p-3 rounded-lg">
//                   <GithubIcon className="w-6 h-6 text-blue-400" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-white">GitHub</h3>
//                   <Link 
//                     href="https://github.com/ZakheerAli" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline"
//                   >
//                     github.com/zakheer-ali
//                   </Link>
//                 </div>
//               </motion.div>
//             </div>

//             <div className="mt-10 pt-6 border-t border-gray-700">
//               <h3 className="text-lg font-medium text-white mb-4">
//                 Currently exploring:
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Agentic AI', 'Python Automation', 'React 18', 'Next.js'].map((tech) => (
//                   <motion.span
//                     key={tech}
//                     whileHover={{ y: -2 }}
//                     className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


