"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 1",
      title: "Ethereal Dreams",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 2",
      title: "Urban Symphony",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 3",
      title: "Digital Nostalgia",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Art piece 4",
      title: "Abstract Reality",
    },
  ]

  return (
    <section className="relative py-12">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              backgroundColor: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"][Math.floor(Math.random() * 4)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Œuvres Pop Art
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border-4 border-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 3 : -3,
              }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

