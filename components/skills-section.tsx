"use client"

import { SectionSeparator } from "@/components/section-separator"

const skills = [
  "Rust",
  "Go",
  "Python",
  "TypeScript",
  "React",
  "Solana",
  "Blockchain",
  "Docker",
  "Cloud",
  "Linux",
  "Git",
  "SQL",
  "Network Security",
  "Tailwind CSS",
  "CI/CD"
]

const experience = [
  {
    role: "Senior Developer",
    company: "Company A",
    period: "2024 - Present",
  },
  {
    role: "Full Stack Developer",
    company: "Company B",
    period: "2023 - 2024",
  },
  {
    role: "Frontend Developer",
    company: "Company C",
    period: "2022 - 2023",
  },
  {
    role: "Junior Developer",
    company: "Company D",
    period: "2021 - 2022",
  },
]

export const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gray-400 text-lg italic font-light font-[var(--font-playfair)]">
              Skills & Experience
            </span>
          </div>

          {/* Skills Pills */}
          <div className="mb-24">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-3 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-colors cursor-default font-[var(--font-plus-jakarta)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded-xl transition-all duration-300 hover:border-white/20 px-6 -mx-6 group cursor-default"
              >
                <div className="text-xl md:text-2xl text-white font-light font-[var(--font-plus-jakarta)] group-hover:text-white/90 transition-colors">
                  {exp.role}
                </div>
                <div className="text-xl md:text-2xl text-gray-300 font-light font-[var(--font-plus-jakarta)] group-hover:text-white/80 transition-colors">
                  {exp.company}
                </div>
                <div className="text-xl md:text-2xl text-gray-400 font-light md:text-right font-[var(--font-plus-jakarta)] group-hover:text-white/70 transition-colors">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful separator after Skills section */}
      <SectionSeparator />
    </>
  )
}

