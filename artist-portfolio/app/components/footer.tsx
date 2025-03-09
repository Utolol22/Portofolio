export default function Footer() {
  return (
    <footer className="border-t-4 border-yellow-400 py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white font-medium">
            © {new Date().getFullYear()} Nina Alexandre. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-yellow-300 font-bold transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-bold transition-colors">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-yellow-300 font-bold transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

