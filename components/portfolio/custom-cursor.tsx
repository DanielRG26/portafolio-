"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (hasTouch) return

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    // Detect hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hoverable = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      setIsHovering(!!hoverable)
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
    document.addEventListener("mouseover", onMouseOver)
    document.documentElement.addEventListener("mouseleave", onMouseLeave)
    document.documentElement.addEventListener("mouseenter", onMouseEnter)

    // Animate ring with lerp
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseover", onMouseOver)
      document.documentElement.removeEventListener("mouseleave", onMouseLeave)
      document.documentElement.removeEventListener("mouseenter", onMouseEnter)
      cancelAnimationFrame(raf.current)
    }
  }, [isVisible])

  // Don't render on touch devices (SSR safe)
  return (
    <>
      {/* Dot - follows mouse exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
          style={{
            width: isClicking ? 6 : 8,
            height: isClicking ? 6 : 8,
            backgroundColor: "white",
          }}
        />
      </div>

      {/* Ring - follows with delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 border-2 transition-all duration-300"
          style={{
            width: isHovering ? 50 : isClicking ? 28 : 36,
            height: isHovering ? 50 : isClicking ? 28 : 36,
            borderColor: "white",
            backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
          }}
        />
      </div>
    </>
  )
}
