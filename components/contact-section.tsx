"use client"

import { Twitter, Linkedin, Github } from "lucide-react"
import { useRouter } from "next/navigation"

export const ContactSection = () => {
  const router = useRouter()

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-gray-400 text-lg italic font-light font-[var(--font-playfair)]">Reach out anytime</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-light mb-12 leading-tight font-[var(--font-plus-jakarta)]">
          Let's Stay <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Connected</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light max-w-2xl mx-auto leading-relaxed font-[var(--font-plus-jakarta)]">
          Got questions or want to collaborate? Feel free to reach out—I'm open to new projects or just a casual chat!
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-12 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center mx-auto text-lg font-medium mb-16 button-glow"
        >
          Contact Me
          <svg
            className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://twitter.com/jeninsutradhar" aria-label="Twitter Profile" className="group">
            <Twitter className="w-8 h-8 text-gray-400 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://linkedin.com/in/jenin-sutrahdar" aria-label="LinkedIn Profile" className="group">
            <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white cursor-pointer transition-colors" />
          </a>
          <a
            href="https://github.com/JeninSutrahdar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group"
          >
            <Github className="w-8 h-8 text-gray-400 group-hover:text-white cursor-pointer transition-colors" />
          </a>
        </div>

        <div className="text-gray-400 text-lg font-medium font-[var(--font-plus-jakarta)]">
          <a href="mailto:jeninsutrahdar@gmail.com" className="hover:text-white transition-colors underline">
            jeninsutrahdar@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
