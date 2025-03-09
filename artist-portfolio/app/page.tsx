import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { SplashCursor } from "./components/splash-cursor"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-violet-800 to-indigo-700 text-white">
      <SplashCursor />
      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

