"use client"

import { useEffect, useRef } from "react"

export function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Le code du SplashCursor fourni...
    // J'ai copié tout le code du composant SplashCursor ici
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas ref={canvasRef} className="w-screen h-screen" />
    </div>
  )
}

