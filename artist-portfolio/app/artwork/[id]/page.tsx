import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SplashCursor } from "@/app/components/splash-cursor"

// Cette fonction simule une base de données
function getArtwork(id: string) {
  const artworks = {
    "digital-dreamscape": {
      title: "Digital Dreamscape",
      date: "2024",
      description:
        "Une exploration onirique de l'intersection entre le numérique et le surréalisme. Cette œuvre représente la fusion entre la conscience humaine et l'intelligence artificielle.",
      process:
        "Création numérique utilisant un mélange de techniques de peinture digitale et de génération procédurale. Réalisée sur iPad Pro avec Procreate, puis retravaillée dans Adobe Photoshop.",
      dimensions: "80x120cm",
      medium: "Impression numérique sur toile",
      edition: "Edition limitée de 10",
      nft: "0x1234...5678",
    },
    // Ajoutez d'autres œuvres ici
  }
  return artworks[id as keyof typeof artworks]
}

export default function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = getArtwork(params.id)

  if (!artwork) {
    return <div>Œuvre non trouvée</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-violet-800 to-indigo-700 p-8">
      <SplashCursor />
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-block mb-8">
          <Button
            variant="outline"
            className="gap-2 bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm shadow-xl">
          <div className="p-6 sm:p-8">
            <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>

            <div className="aspect-video bg-gray-200 mb-8">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-600 mb-6">{artwork.description}</p>

                <h2 className="text-xl font-semibold mb-3">Procédé de fabrication</h2>
                <p className="text-gray-600 mb-6">{artwork.process}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Détails techniques</h2>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Date</dt>
                      <dd className="font-medium">{artwork.date}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Dimensions</dt>
                      <dd className="font-medium">{artwork.dimensions}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Medium</dt>
                      <dd className="font-medium">{artwork.medium}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Edition</dt>
                      <dd className="font-medium">{artwork.edition}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-cyan-100 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Certificat d'authenticité & NFT</h2>
                  <p className="text-gray-600 mb-4">
                    Cette œuvre est accompagnée d'un certificat d'authenticité numérique et d'un NFT garantissant son
                    origine.
                  </p>
                  <div className="font-mono text-sm bg-white/50 p-2 rounded">NFT Contract: {artwork.nft}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

