"use client"

import { SectionSeparator } from "@/components/section-separator"

export const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-12 leading-tight font-[var(--font-plus-jakarta)]">
              More about <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">myself</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light font-[var(--font-plus-jakarta)]">
            Hi, I'm [Your Name] — a software developer with expertise in modern web technologies, backend systems, and emerging technologies. I specialize in building scalable applications using React, Next.js, Node.js, and various databases. I'm passionate about creating efficient, secure, and user-friendly solutions.
            </p>
            <button
              onClick={scrollToContact}
              className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center text-lg font-medium button-glow"
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

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm relative">
              <img
                src="https://img.freepik.com/premium-vector/black-white-texture-background-vector-image-overlay-monochrome-grunge-texture_867643-19921.jpg"
                alt="Jenin Sutrahdar Process"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful separator after About section */}
      <SectionSeparator />
    </>
  )
}

