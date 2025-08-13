import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 text-gray-900 font-sans min-h-screen">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vishal</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#about" className="block hover:underline">About</a>
            <a href="#skills" className="block hover:underline">Skills</a>
            <a href="#projects" className="block hover:underline">Projects</a>
            <a href="#education" className="block hover:underline">Education</a>
            <a href="#contact" className="block hover:underline">Contact</a>
          </div>
        )}
      </header>

      {/* About Section */}
      <section id="about" className="p-6 text-center">
        <img
          src="/vishal.jpg"
          alt="Vishal"
          className="w-24 sm:w-32 h-24 sm:h-32 rounded-full mx-auto shadow-lg border-4 border-purple-400"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold mt-4">Hi, I'm Vishal</h2>
        <p className="mt-2 text-gray-700 max-w-md mx-auto text-sm sm:text-base">
          Android Developer skilled in Kotlin, Jetpack Compose, Xml, MVVM, Clean Architecture, Firebase and Android Security. Passionate about building impactful mobile applications.
        </p>
        <div className="flex justify-center mt-4 space-x-4 text-xl sm:text-2xl text-purple-600">
          <a href="https://github.com/Vishalkumar800" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vishal-vishal-514537294/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/vishalghskh/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="mailto:vishal4744168@gmail.com"><FaEnvelope /></a>
        </div>

        {/* Resume Download Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1yfBwIiZDSjYIrG5MVx9pjtLiRA5iFS2N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[
            "Kotlin", "Python", "Jetpack Compose", "XML", "Android SDK",
            "Firebase", "Room Database", "MVVM", "Clean Architecture",
            "GitHub", "Android Security"
          ].map(skill => (
            <div key={skill} className="bg-white p-4 shadow rounded hover:bg-purple-100 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
     {/* Projects */}
<section id="projects" className="p-6 sm:p-8">
  <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* List of projects */}
    {[
      {
        img: "/lawyer.png",
        alt: "Lawyer Consultation App",
        title: "Lawyer Consultation App",
        desc: "Connect users with lawyers for consultations. Features calling, payments, search, and filters.",
        links: [{ text: "GitHub", url: "https://github.com/Vishalkumar800/lawyer_consultation.git" }],
      },
      {
        img: "/habittime.png",
        alt: "Habittime App",
        title: "Habittime: Screen Time",
        desc: "Track screen time, set usage limits, and get alerts. Built with Room DB, StateFlow, and Dagger Hilt.",
        links: [
          { text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rach.habitchange" },
          { text: "GitHub", url: "https://github.com/Vishalkumar800/habbitime-App.git" },
        ],
      },
      {
        img: "/sleepguard.png",
        alt: "Sleep Guard App",
        title: "Sleep Guard",
        desc: "Locks phone at user-set bedtime. Uses WorkManager, Room, and Notifications.",
        links: [{ text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rach.sleepguard" }],
      },
      {
        img: "/quizapp.png", // Replace with your actual image path
        alt: "Quiz App",
        title: "Quiz App",
        desc: "A fun and interactive Quiz App. Test knowledge across topics, keeps track of scores.",
        links: [
          { text: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rach.co" }
        ],
      },
    ].map((project) => (
      <div
        key={project.title}
        className="bg-white shadow-lg rounded p-4 border-l-4 border-purple-400"
      >
        <img
          src={project.img}
          alt={project.alt}
          className="w-full h-40 object-cover rounded"
          onError={(e) => (e.target.src = "/default_project.png")}
        />
        <h3 className="font-semibold text-lg mt-3">{project.title}</h3>
        <p className="text-gray-700">{project.desc}</p>
        <div className="mt-2 space-x-2">
          {project.links.map((link) => (
            <a key={link.text}
               className="text-purple-600"
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Education */}
      <section id="education" className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded p-4 border-l-4 border-purple-400">
          <h3 className="font-semibold">BCA (Bachelor of Computer Applications)</h3>
          <p className="text-gray-700">Deen Dayal Gorakhpur University, Uttar Pradesh (2023 – 2026)</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>Email: <a className="text-purple-600" href="mailto:vishal4744168@gmail.com">vishal4744168@gmail.com</a></p>
        <p>Phone: <span className="text-gray-800 font-semibold">+91 9519803181</span></p>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-inner p-4 text-center text-sm sm:text-base">
        © {new Date().getFullYear()} Vishal. All rights reserved.
      </footer>
    </div>
  );
}
