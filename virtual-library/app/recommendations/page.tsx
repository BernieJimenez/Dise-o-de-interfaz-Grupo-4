"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, BookOpen, Star, Heart, TrendingUp, Users, Sparkles, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const allBooks = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    rating: 4.8,
    cover: "/cien-anos-soledad-cover.png",
    description: "Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía.",
    pages: 432,
    year: 1967,
    tags: ["clásico", "realismo mágico", "colombia", "familia"],
    popularity: 95,
    trending: true,
  },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Clásico",
    rating: 4.7,
    cover: "/don-quijote-book-cover.png",
    description: "La historia del ingenioso hidalgo y sus aventuras por los campos de La Mancha.",
    pages: 863,
    year: 1605,
    tags: ["clásico", "aventura", "españa", "caballería"],
    popularity: 88,
    trending: false,
  },
  {
    id: 3,
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    genre: "Ficción histórica",
    rating: 4.6,
    cover: "/house-of-the-spirits-cover.png",
    description: "Una saga familiar que abarca varias generaciones en un país latinoamericano.",
    pages: 448,
    year: 1982,
    tags: ["saga familiar", "chile", "política", "mujeres"],
    popularity: 82,
    trending: false,
  },
  {
    id: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    genre: "Literatura experimental",
    rating: 4.5,
    cover: "/rayuela-book-cover.png",
    description: "Una novela innovadora que puede leerse de múltiples maneras.",
    pages: 635,
    year: 1963,
    tags: ["experimental", "argentina", "parís", "amor"],
    popularity: 75,
    trending: true,
  },
  {
    id: 5,
    title: "El Aleph",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    rating: 4.9,
    cover: "/el-aleph-book-cover.png",
    description: "Una colección de cuentos que exploran los laberintos de la realidad y la ficción.",
    pages: 189,
    year: 1949,
    tags: ["cuentos", "filosofía", "argentina", "metafísica"],
    popularity: 91,
    trending: false,
  },
  {
    id: 6,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    genre: "Realismo mágico",
    rating: 4.7,
    cover: "/pedro-paramo-book-cover.png",
    description: "Una novela sobre un pueblo fantasma y los secretos de sus habitantes.",
    pages: 124,
    year: 1955,
    tags: ["realismo mágico", "méxico", "muerte", "pueblo"],
    popularity: 79,
    trending: false,
  },
  {
    id: 7,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    rating: 4.8,
    cover: "/ficciones-book-cover.png",
    description: "Cuentos que desafían la percepción de la realidad y el tiempo.",
    pages: 174,
    year: 1944,
    tags: ["cuentos", "laberintos", "filosofía", "argentina"],
    popularity: 86,
    trending: true,
  },
  {
    id: 8,
    title: "Klara y el Sol",
    author: "Kazuo Ishiguro",
    genre: "Ciencia ficción",
    rating: 4.4,
    cover: "/klara-y-el-sol-inspired-cover.png",
    description: "Una historia conmovedora sobre la inteligencia artificial y el amor.",
    pages: 320,
    year: 2021,
    tags: ["ciencia ficción", "inteligencia artificial", "amor", "futuro"],
    popularity: 73,
    trending: true,
  },
  {
    id: 9,
    title: "El Silmarillion",
    author: "J.R.R. Tolkien",
    genre: "Fantasía",
    rating: 4.3,
    cover: "/placeholder-q1j78.png",
    description: "La historia de los Días Antiguos de la Tierra Media.",
    pages: 480,
    year: 2023,
    tags: ["fantasía", "mitología", "tierra media", "épico"],
    popularity: 68,
    trending: true,
  },
  {
    id: 10,
    title: "Hamnet",
    author: "Maggie O'Farrell",
    genre: "Ficción histórica",
    rating: 4.6,
    cover: "/hamnet-book-cover.png",
    description: "Una reimaginación de la vida de Shakespeare y la muerte de su hijo.",
    pages: 352,
    year: 2024,
    tags: ["ficción histórica", "shakespeare", "familia", "drama"],
    popularity: 71,
    trending: true,
  },
]

// Simulated user data
const userReadingHistory = [1, 5] // Read "Cien años de soledad" and "El Aleph"
const userPreferences = ["realismo mágico", "cuentos", "filosofía", "argentina"]
const userFavoriteAuthors = ["Jorge Luis Borges", "Gabriel García Márquez"]

export default function RecommendationsPage() {
  const [favorites, setFavorites] = useState<number[]>([])

  // Recommendation algorithms
  const personalizedRecommendations = useMemo(() => {
    const readBooks = new Set(userReadingHistory)
    const availableBooks = allBooks.filter((book) => !readBooks.has(book.id))

    return availableBooks
      .map((book) => {
        let score = 0

        // Boost for preferred genres/tags
        if (userPreferences.includes(book.genre.toLowerCase())) score += 3
        book.tags.forEach((tag) => {
          if (userPreferences.includes(tag)) score += 2
        })

        // Boost for favorite authors
        if (userFavoriteAuthors.includes(book.author)) score += 4

        // Boost for high ratings
        score += book.rating

        // Boost for similar authors (same nationality/style)
        const readAuthors = userReadingHistory.map((id) => allBooks.find((b) => b.id === id)?.author)
        if (readAuthors.includes("Jorge Luis Borges") && book.tags.includes("argentina")) score += 2
        if (readAuthors.includes("Gabriel García Márquez") && book.tags.includes("realismo mágico")) score += 2

        return { ...book, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
  }, [])

  const trendingBooks = useMemo(() => {
    return allBooks
      .filter((book) => book.trending)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 6)
  }, [])

  const similarToRead = useMemo(() => {
    const readBooks = userReadingHistory.map((id) => allBooks.find((book) => book.id === id)!).filter(Boolean)
    const readGenres = [...new Set(readBooks.map((book) => book.genre))]
    const readTags = [...new Set(readBooks.flatMap((book) => book.tags))]

    return allBooks
      .filter((book) => !userReadingHistory.includes(book.id))
      .map((book) => {
        let similarity = 0
        if (readGenres.includes(book.genre)) similarity += 3
        book.tags.forEach((tag) => {
          if (readTags.includes(tag)) similarity += 1
        })
        return { ...book, similarity }
      })
      .filter((book) => book.similarity > 0)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 6)
  }, [])

  const highlyRated = useMemo(() => {
    return allBooks
      .filter((book) => !userReadingHistory.includes(book.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6)
  }, [])

  const quickReads = useMemo(() => {
    return allBooks
      .filter((book) => book.pages <= 300 && !userReadingHistory.includes(book.id))
      .sort((a, b) => a.pages - b.pages)
      .slice(0, 6)
  }, [])

  const toggleFavorite = (bookId: number) => {
    setFavorites((prev) => (prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]))
  }

  const BookCard = ({ book, showPopularity = false }: { book: any; showPopularity?: boolean }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {book.trending && <Badge className="absolute top-2 left-2 bg-orange-500 text-white">Trending</Badge>}
          {showPopularity && (
            <Badge className="absolute top-2 left-2 bg-blue-500 text-white">{book.popularity}% popular</Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background"
            onClick={() => toggleFavorite(book.id)}
          >
            <Heart
              className={`w-4 h-4 ${
                favorites.includes(book.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
              }`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col h-full">
        <CardTitle className="text-base mb-2 line-clamp-2 flex-shrink-0">{book.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 flex-shrink-0">{book.author}</CardDescription>
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <Badge variant="secondary" className="text-xs">
            {book.genre}
          </Badge>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{book.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">{book.description}</p>
        <div className="flex gap-2 flex-shrink-0">
          <Link href="/" className="flex-1">
            <Button size="sm" className="w-full">
              <BookOpen className="w-4 h-4 mr-2" />
              Leer
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            Guardar
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Inicio
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Recomendaciones</h1>
              <p className="text-sm text-muted-foreground">Descubre tu próxima lectura favorita</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Recomendaciones Personalizadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basadas en tu historial de lectura y preferencias: {userPreferences.join(", ")}
          </p>
        </section>

        {/* Personalized Recommendations */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Target className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Para Ti</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personalizedRecommendations.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Trending Books */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Tendencias</h3>
            <Badge className="ml-3 bg-orange-500 text-white">Popular</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingBooks.map((book) => (
              <BookCard key={book.id} book={book} showPopularity />
            ))}
          </div>
        </section>

        {/* Similar to What You've Read */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Similar a lo que has leído</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Basado en: {userReadingHistory.map((id) => allBooks.find((b) => b.id === id)?.title).join(", ")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {similarToRead.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Highly Rated */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Mejor Calificados</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlyRated.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Quick Reads */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-green-500 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Lecturas Rápidas</h3>
            <Badge className="ml-3 bg-green-500 text-white">Menos de 300 páginas</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickReads.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Reading Stats */}
        <section className="bg-muted rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Tu Perfil de Lectura</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{userReadingHistory.length}</div>
                <p className="text-muted-foreground">Libros leídos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{userPreferences.length}</div>
                <p className="text-muted-foreground">Géneros favoritos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{userFavoriteAuthors.length}</div>
                <p className="text-muted-foreground">Autores favoritos</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-foreground mb-3">Tus géneros preferidos:</h4>
            <div className="flex flex-wrap gap-2">
              {userPreferences.map((pref, index) => (
                <Badge key={index} variant="outline" className="capitalize">
                  {pref}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
