"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "digital", "paintings", "sculptures"]

  const works = [
    {
      id: "digital-dreamscape",
      title: "Digital Dreamscape",
      category: "digital",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: "abstract-harmony",
      title: "Abstract Harmony",
      category: "paintings",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: "metal-flow",
      title: "Metal Flow",
      category: "sculptures",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: "neon-nights",
      title: "Neon Nights",
      category: "digital",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
    {
      id: "natures-whisper",
      title: "Nature's Whisper",
      category: "paintings",
      image: "/placeholder.svg?height=400&width=600",
      year: "2024",
    },
    {
      id: "bronze-echo",
      title: "Bronze Echo",
      category: "sculptures",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize font-bold ${
                selectedCategory === category
                  ? "bg-white text-pink-600 hover:bg-gray-100 hover:text-pink-700"
                  : "bg-transparent border-white text-white hover:bg-white/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                }}
              >
                <Link href={`/artwork/${work.id}`}>
                  <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-4 border-cyan-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500/80 to-purple-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-bold text-white">{work.title}</h3>
                          <p className="mt-2 text-sm text-white font-medium">{work.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

