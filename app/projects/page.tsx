"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { FluidBackground } from "@/components/fluid-background"

// Project data
const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A comprehensive SaaS platform featuring user management, analytics dashboard, and automated workflows. Built with modern technologies for scalability and performance.",
    category: "SaaS",
    type: "Web App",
    link: "https://project-alpha.example.com",
    image: "/mocks/nexus.png",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Professional landing page with modern design, optimized performance, and conversion-focused layout.",
    category: "Frontend",
    type: "Landing Page",
    link: "https://project-beta.example.com",
    image: "/mocks/purplerain.png"
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "High-performance backend service designed for scalability, security, and reliability in production environments.",
    category: "Backend",
    type: "API Service",
    skills: ["Node.js", "API Design", "Database"],
    link: "https://github.com/yourusername/project-gamma",
    image: "/mocks/fortifynet.png",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "Modern web application with responsive design and intuitive user experience.",
    category: "UI/UX",
    type: "Web App",
    link: "https://project-delta.example.com",
    image: "/mocks/cyphersec.jpeg",
  },
]

export default function ProjectsPage() {
  const router = useRouter()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <div className="bg-black text-white min-h-screen relative font-[var(--font-plus-jakarta)]">
      {/* Fluid background with reduced opacity for projects page */}
      <div className="absolute inset-0 opacity-50">
        <FluidBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-12 pb-24 px-6">
        {/* Back button */}
        <div className="max-w-7xl mx-auto mb-12">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight font-[var(--font-plus-jakarta)]">
            My <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            A collection of my work across various technologies and domains.
            From web applications to system utilities and design projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-card-landscape bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.03] will-change-transform shadow-xl hover:shadow-2xl hover:shadow-white/10 relative">
                {/* Project Image */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs text-white font-medium font-[var(--font-plus-jakarta)] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-gray-300 font-medium font-[var(--font-plus-jakarta)] bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white font-[var(--font-plus-jakarta)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  {project.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-white/10 px-2 py-1 rounded-md text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">{new URL(project.link).hostname}</span>
                    <div className="text-white/70 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cursor Following Button */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button className="bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2 border border-white/40 button-glow shadow-2xl">
              <span className="text-sm">View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
