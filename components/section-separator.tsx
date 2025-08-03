"use client"

// Export the component properly as a named export
export function SectionSeparator() {
  return (
    // This outer div is just for spacing
    <div className="relative py-12">
      <div
        className="
          // Core positioning: center the element
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2

          // LAYER 1: The glowing line itself (most important layer)
          // Set the width of the line/glow area. h-px makes it a line.
          w-[950px] h-px 
          // The line is a gradient that's bright in the middle and fades out.
          // This removes the need for a separate, full-width line.
          bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)]

          // LAYER 2: The large, upward glow (using ::before)
          before:absolute
          before:bottom-0      // Position it to start from the line and go up
          before:left-1/2      // Center it
          before:-translate-x-1/2
          before:w-[900px]     // Make the glow wider than the line for a soft falloff
          before:h-[280px]      // This is the Upward Light Diffusion
          // The radial gradient creates the main glow shape. It's a soft white.
          before:bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(255,255,255,0.2),transparent)]

          // LAYER 3: The subtle downward glow/reflection (using ::after)
          after:absolute
          after:top-0          // Position it to start from the line and go down
          after:left-1/2       // Center it
          after:-translate-x-1/2
          after:w-[700px]      // Match the width of the top glow
          after:h-[20px]       // Make it much smaller than the top glow
          // This gradient is very subtle, creating just a hint of light below the line.
          after:bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(255,255,255,0.1),transparent)]
        "
        aria-hidden="true"
      />
    </div>
  )
}

// Also add a default export for flexibility
export default SectionSeparator
