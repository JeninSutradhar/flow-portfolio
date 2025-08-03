"use client"

import { useEffect, useState } from "react"

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y)
      if (target) {
        const computedStyle = window.getComputedStyle(target)
        setIsPointer(computedStyle.cursor === "pointer")
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.documentElement.style.cursor = "none"
    
    window.addEventListener("mousemove", updateCursor)
    window.addEventListener("mousemove", updateCursorStyle)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.documentElement.style.cursor = "auto"
      window.removeEventListener("mousemove", updateCursor)
      window.removeEventListener("mousemove", updateCursorStyle)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [position.x, position.y])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[99999] transition-transform duration-100 ${
          isClicking ? "scale-75" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference"
        }}
      >
        <div
          className={`w-3 h-3 bg-white rounded-full relative ${
            isPointer ? "animate-ping-slow" : ""
          }`}
        >
          {/* Outer ring */}
          <div
            className={`absolute -inset-3 border-2 border-white rounded-full transition-all duration-200 ${
              isPointer ? "scale-150 opacity-100" : "scale-100 opacity-75"
            }`}
          />
          {/* Glow effect */}
          <div className="absolute -inset-6 bg-white/10 rounded-full blur-md" />
        </div>
      </div>
    </>
  )
} 