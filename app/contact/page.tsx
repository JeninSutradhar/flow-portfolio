"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { FluidBackground } from "@/components/fluid-background"
import { Mail, MapPin, Clock, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting form data:", formData)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Fluid background */}
      <FluidBackground />

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-24 left-6 md:left-12 z-20 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div>
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-light mb-4">
                  Let's <span className="italic font-normal text-gray-400 font-[var(--font-playfair)]">Connect</span>
                </h1>
                <p className="text-gray-400">I'm always interested in hearing about new opportunities and collaborations.</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject of your message"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-6 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-lg font-medium button-glow"
                >
                  Send Message
                  <svg
                    className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </form>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:pl-12 lg:border-l border-white/10">
              <div className="space-y-12">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-light mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-gray-400 mt-1" />
                      <div>
                        <p className="text-gray-400 mb-1">Email</p>
                        <a href="mailto:contact@jeninsutradhar.com" className="text-white hover:text-gray-300 transition-colors">
                          jeninsutradhar@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                      <div>
                        <p className="text-gray-400 mb-1">Location</p>
                        <p className="text-white">Rajasthan, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div>
                  <h3 className="text-2xl font-light mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white mb-2">What services do you offer?</h4>
                      <p className="text-gray-400">I specialize in full-stack development, UI/UX design, and web application development using modern technologies.</p>
                    </div>
                    <div>
                      <h4 className="text-white mb-2">How quickly do you respond?</h4>
                      <p className="text-gray-400">I typically respond to all inquiries within 24-48 hours during business days.</p>
                    </div>
                    <div>
                      <h4 className="text-white mb-2">Do you work remotely?</h4>
                      <p className="text-gray-400">Yes, I'm available for both remote work and local collaborations in Rajasthan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 