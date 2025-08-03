"use client"

import { useEffect, useState } from "react"

export const FluidBackground = () => {
  // State to track if content is loaded to apply blur effect
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    // Set content as loaded after a short delay
    const timer = setTimeout(() => {
      setContentLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Video background - only for hero */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
