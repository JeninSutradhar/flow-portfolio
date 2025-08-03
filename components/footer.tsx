"use client"

import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 footer-grid-background"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-gray-400 text-sm font-[var(--font-plus-jakarta)]">
            © {new Date().getFullYear()} Jenin Sutrahdar. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/JeninSutrahdar/fade-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center text-xs font-medium button-glow"
            >
              <Github className="w-3.5 h-3.5 mr-2" />
              View Source
            </a>
          </div>

          <div className="text-gray-500 text-xs font-[var(--font-plus-jakarta)] flex items-center">
            Built with
            <span className="text-white font-medium mx-1.5">
              Next.js & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
