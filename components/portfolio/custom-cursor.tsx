"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let hovering = false
    let clicking = false
    let visible = false
    let raf = 0

    // Use direct style writes — no React state, no re-renders
    const applyRing = () => {
      const size = clicking ? 28 : hovering ? 50 : 36
      ring.style.width = ring.style.height = `${size}px`
      ring.style.borderColor = "white"
      ring.style.backgroundColor = hovering ? "rgba(255,255,255,0.1)" : "transparent"
    }

    const applyDot = () => {
      const size = clicking ? 6 : 8
      dot.children[0] && ((dot.children[0] as HTMLElement).style.width = (dot.children[0] as HTMLElement).style.height = `${size}px`)
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      if (!visible) {
        visible = true
        dot.style.opacity = ring.style.opacity = "1"
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const next = !!t.closest("a,button,[role='button'],input,textarea,select")
      if (next !== hovering) { hovering = next; applyRing() }
    }

    const onDown = () => { clicking = true; applyRing(); applyDot() }
    const onUp = () => { clicking = false; applyRing(); applyDot() }
    const onLeave = () => { visible = false; dot.style.opacity = ring.style.opacity = "0" }
    const onEnter = () => { visible = true; dot.style.opacity = ring.style.opacity = "1" }

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mouseenter", onEnter)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mouseenter", onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ opacity: 0, willChange: "transform" }}
      >
        <div className="rounded-full -translate-x-1/2 -translate-y-1/2 bg-white" style={{ width: 8, height: 8, transition: "width 0.15s, height 0.15s" }} />
      </div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{ opacity: 0, willChange: "transform" }}
      >
        <div className="rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-white" style={{ width: 36, height: 36, transition: "width 0.2s, height 0.2s, background-color 0.2s" }} />
      </div>
    </>
  )
}
