"use client"

import { Twitter, Linkedin, Github } from "lucide-react"

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/hero.png"
              alt="Profile Picture"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Available for work */}
        <div className="flex items-center justify-center mb-5">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse">
              <div className="absolute -inset-1 bg-green-500/30 rounded-full animate-ping"></div>
            </div>
          </div>
          <span className="text-green-400 text-xs">available for work</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light mb-3">
          Jenin <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Sutradhar</span>
        </h1>

        {/* Job Title */}
        <p className="text-sm text-gray-400 mb-8">Full Stack & Blockchain Developer based in India</p>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mb-10">
          <a href="#" aria-label="Twitter Profile" className="group">
            <Twitter className="w-5 h-5 text-gray-500 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn Profile" className="group">
            <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a
            href="https://github.com/JeninSutradhar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group"
          >
            <Github className="w-5 h-5 text-gray-500 group-hover:text-white cursor-pointer transition-colors" />
          </a>
        </div>

        {/* Contact Button */}
        <button
          onClick={scrollToContact}
          className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center mx-auto text-lg font-medium button-glow"
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Me
          <svg
            className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

