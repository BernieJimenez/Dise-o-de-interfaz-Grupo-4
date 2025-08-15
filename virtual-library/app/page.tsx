"use client"

import { useState, useMemo } from "react"
import {
  Search,
  BookOpen,
  Star,
  Heart,
  User,
  Menu,
  X,
  ArrowLeft,
  Settings,
  Bookmark,
  Filter,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
    content: `Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.

El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos.

Primero llevaron el imán. Un gitano corpulento, de barba montaraz y manos de gorrión, que se presentó con el nombre de Melquíades, hizo una truculenta demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia. Fue de casa en casa arrastrando dos lingotes metálicos, y todo el mundo se espantó al ver que los calderos, las pailas, las tenazas y los anafes se caían de su sitio, y las maderas crujían por la desesperación de los clavos y los tornillos tratando de desenclavarse, y aun los objetos perdidos desde hacía mucho tiempo aparecían por donde más se les había buscado, y se arrastraban en desbandada turbulenta detrás de los fierros mágicos de Melquíades.

«Las cosas tienen vida propia —pregonaba el gitano con áspero acento—, todo es cuestión de despertarles el ánima.» José Arcadio Buendía, cuya desaforada imaginación iba siempre más lejos que el ingenio de la naturaleza, y aun más allá del milagro y la magia, pensó que era posible servirse de aquella invención inútil para desentrañar el oro de la tierra.

CAPÍTULO DOS

Cuando los piratas de Francis Drake asaltaron a Riohacha, en el siglo XVI, la bisabuela de Úrsula Iguarán se asustó tanto con el toque de rebato y el estampido de los cañones, que perdió el control de los nervios y se sentó en un fogón encendido. Las quemaduras la dejaron convertida en una esposa inútil para toda la vida. No podía sentarse sino de medio lado, acomodada en cojines, y algo extraño debió quedarle en la manera de caminar, porque nunca más volvió a caminar en público.

Su hija, la abuela de Úrsula, heredó de ella no sólo el miedo sino una tendencia a sentarse de medio lado que se transmitió de generación en generación hasta Úrsula, quien la llevó hasta sus últimos días. Pero a diferencia de sus antecesoras, que habían sucumbido a la fatalidad de su naturaleza, Úrsula determinó luchar contra la adversidad.

CAPÍTULO TRES

Durante los primeros años, José Arcadio Buendía fue una especie de patriarca juvenil, que daba instrucciones para la siembra y consejos para la crianza de los niños y los animales, y colaboraba con todos, aun en el trabajo físico, para la buena marcha de la comunidad. Puesto que su casa fue desde el primer momento la mejor de la aldea, las otras fueron arregladas a su imagen y semejanza.

Tenía una sala amplia y bien iluminada, un comedor en forma de terraza con flores de colores alegres, dos dormitorios, un patio con un castaño gigantesco, un huerto bien plantado y un corral donde vivían en comunidad pacífica los chivos, los cerdos y las gallinas. Los únicos animales prohibidos no sólo en su casa, sino en todo el poblado, eran los gallos de pelea.

La laboriosidad de Úrsula andaba a la par con la de su marido. Activa, menuda, severa, aquella mujer de nervios inquebrantables, a quien en ningún momento de su vida se le oyó cantar, parecía estar en todas partes desde el amanecer hasta muy entrada la noche, siempre perseguida por el suave susurro de sus pollerines de olán.

[Continúa por 400+ páginas más...]`,
    chapters: [
      { id: 1, title: "Capítulo 1: Los Gitanos", startIndex: 0 },
      { id: 2, title: "Capítulo 2: La Herencia", startIndex: 1200 },
      { id: 3, title: "Capítulo 3: La Comunidad", startIndex: 2400 },
    ],
    pages: 432,
    year: 1967,
    language: "Español",
    tags: ["clásico", "realismo mágico", "colombia", "familia"],
    isNew: false,
    trending: true,
    popularity: 95,
  },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Clásico",
    rating: 4.7,
    cover: "/don-quijote-book-cover.png",
    description: "La historia del ingenioso hidalgo y sus aventuras por los campos de La Mancha.",
    content: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.

Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.

El resto la llevaban sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo, los días de entre semana se honraba con su vellori de lo más fino...`,
    pages: 863,
    year: 1605,
    language: "Español",
    tags: ["clásico", "aventura", "españa", "caballería"],
    isNew: false,
    trending: false,
    popularity: 88,
  },
  {
    id: 3,
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    genre: "Ficción histórica",
    rating: 4.6,
    cover: "/house-of-the-spirits-cover.png",
    description: "Una saga familiar que abarca varias generaciones en un país latinoamericano.",
    content: `Barrabás llegó a la familia por vía marítima, anotó la niña Clara con su delicada caligrafía. Ya entonces tenía el hábito de escribir las cosas importantes y más tarde, cuando se quedó muda, escribía también las trivialidades, sin sospechar que cincuenta años después, sus cuadernos me servirían para rescatar la memoria del pasado y para sobrevivir a mi propio espanto.

El día que llegó Barrabás era Jueves Santo. Venía en una jaula indigna, cubierto de sus propios excrementos y orines, con una mirada extraviada de preso miserable, pero ya se adivinaba —por el porte real de su cabeza y el tamaño de su esqueleto— el gigante legendario que llegó a ser...`,
    pages: 448,
    year: 1982,
    language: "Español",
    tags: ["saga familiar", "chile", "política", "mujeres"],
    isNew: false,
    trending: false,
    popularity: 82,
  },
  {
    id: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    genre: "Literatura experimental",
    rating: 4.5,
    cover: "/rayuela-book-cover.png",
    description: "Una novela innovadora que puede leerse de múltiples maneras.",
    content: `¿Encontraría a la Maga? Tantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y apenas la luz de ceniza y olivo que flota sobre el río me dejaba distinguir las formas, ya su silueta delgada se inscribía en el Pont des Arts, a veces andando de un lado a otro, a veces apoyada en el hierro, inclinada sobre el agua.

Y era tan natural cruzar la calle, subir los peldaños del puente, entrar en su delgada cintura y acercarme a la Maga que sonreía sin sorpresa, convencida como yo de que un encuentro casual era lo menos casual en nuestras vidas...`,
    pages: 635,
    year: 1963,
    language: "Español",
    tags: ["experimental", "argentina", "parís", "amor"],
    isNew: false,
    trending: true,
    popularity: 75,
  },
  {
    id: 5,
    title: "El Aleph",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    rating: 4.9,
    cover: "/el-aleph-book-cover.png",
    description: "Una colección de cuentos que exploran los laberintos de la realidad y la ficción.",
    content: `O God, I could be bounded in a nutshell and count myself a King of infinite space. Hamlet, II, 2

But they will teach us that Eternity is the Standing still of the Present Time, a Nunc-stans (as the Schools call it); which neither they, nor any else understand, no more than they would a Hic-stans for an Infinite greatness of Place. Leviathan, IV, 46

La candente mañana de febrero en que Beatriz Viterbo murió, después de una imperiosa agonía que no se rebajó un solo instante ni al sentimentalismo ni al miedo, noté que las carteleras de fierro de la Plaza Constitución habían renovado no sé qué aviso de cigarrillos rubios; el hecho me dolió, pues comprendí que el incesante y vasto universo ya se apartaba de ella y que ese cambio era el primero de una serie infinita...`,
    pages: 189,
    year: 1949,
    language: "Español",
    tags: ["cuentos", "filosofía", "argentina", "metafísica"],
    isNew: false,
    trending: false,
    popularity: 91,
  },
  {
    id: 6,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    genre: "Realismo mágico",
    rating: 4.7,
    cover: "/pedro-paramo-book-cover.png",
    description: "Una novela sobre un pueblo fantasma y los secretos de sus habitantes.",
    content: `Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera. Le apreté sus manos en señal de que lo haría, pues ella estaba por morirse y yo en un plan de prometerle todo.

"No dejes de ir a visitarlo —me recomendó—. Se llama de este modo y de este otro. Estoy segura de que le dará gusto conocerte." Entonces no pude hacer otra cosa sino decirle que así lo haría, y de tanto decírselo se lo seguí diciendo aun después que a mis manos les costó trabajo zafarse de sus manos muertas...`,
    pages: 124,
    year: 1955,
    language: "Español",
    tags: ["realismo mágico", "méxico", "muerte", "pueblo"],
    isNew: false,
    trending: false,
    popularity: 79,
  },
  {
    id: 7,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    rating: 4.8,
    cover: "/ficciones-book-cover.png",
    description: "Cuentos que desafían la percepción de la realidad y el tiempo.",
    content: `Debo a la conjunción de un espejo y de una enciclopedia el descubrimiento de Uqbar. El espejo inquietaba el fondo de un corredor en una quinta de la calle Gaona, en Ramos Mejía; la enciclopedia falazmente se llama The Anglo-American Cyclopaedia (New York, 1917) y es una reimpresión literal, pero también morosa, de la Encyclopaedia Britannica de 1902.

El hecho se produjo hará unos cinco años. Bioy Casares había cenado conmigo esa noche y nos demoró una vasta polémica sobre la ejecución de una novela en primera persona, cuyo narrador omitiera o desfigurara los hechos e incurriera en diversas contradicciones, que permitieran a unos pocos lectores —a muy pocos lectores— la adivinación de una realidad atroz o banal...`,
    pages: 174,
    year: 1944,
    language: "Español",
    tags: ["cuentos", "laberintos", "filosofía", "argentina"],
    isNew: false,
    trending: true,
    popularity: 86,
  },
  {
    id: 8,
    title: "Klara y el Sol",
    author: "Kazuo Ishiguro",
    genre: "Ciencia ficción",
    rating: 4.4,
    cover: "/klara-y-el-sol-inspired-cover.png",
    description: "Una historia conmovedora sobre la inteligencia artificial y el amor.",
    content: `La primera vez que vi a AF Klara, estaba en la tienda de la Sra. Chrissie, sentada en su silla especial junto a la ventana, observando a los transeúntes con esa expresión de curiosidad perpetua que caracterizaba a todos los Amigos Artificiales de su generación...`,
    pages: 320,
    year: 2021,
    language: "Español",
    tags: ["ciencia ficción", "inteligencia artificial", "amor", "futuro"],
    isNew: true,
    trending: true,
    popularity: 73,
  },
  {
    id: 9,
    title: "El Silmarillion",
    author: "J.R.R. Tolkien",
    genre: "Fantasía",
    rating: 4.3,
    cover: "/placeholder-q1j78.png",
    description: "La historia de los Días Antiguos de la Tierra Media.",
    content: `Hubo Eru, el Único, que en Arda es llamado Ilúvatar; y primero hizo a los Ainur, los Sagrados, que fueron vástagos de su pensamiento, y estuvieron con él antes que se hiciera alguna otra cosa...`,
    pages: 480,
    year: 2023,
    language: "Español",
    tags: ["fantasía", "mitología", "tierra media", "épico"],
    isNew: true,
    trending: true,
    popularity: 68,
  },
  {
    id: 10,
    title: "Hamnet",
    author: "Maggie O'Farrell",
    genre: "Ficción histórica",
    rating: 4.6,
    cover: "/hamnet-book-cover.png",
    description: "Una reimaginación de la vida de Shakespeare y la muerte de su hijo.",
    content: `En el verano de 1596, un niño de once años en Stratford-upon-Avon toma a su hermana gemela de la mano. No sabe que nunca más volverá a hacerlo, que en cuestión de días estará muerto...`,
    pages: 352,
    year: 2024,
    language: "Español",
    tags: ["ficción histórica", "shakespeare", "familia", "drama"],
    isNew: true,
    trending: true,
    popularity: 71,
  },
]

const genres = [...new Set(allBooks.map((book) => book.genre))]
const authors = [...new Set(allBooks.map((book) => book.author))]

export default function VirtualLibrary() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentBook, setCurrentBook] = useState<(typeof allBooks)[0] | null>(null)
  const [readingHistory, setReadingHistory] = useState<number[]>([])
  const [userPreferences, setUserPreferences] = useState<string[]>(["realismo mágico", "clásico"])
  const [selectedGenre, setSelectedGenre] = useState("")
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const [showNewReleases, setShowNewReleases] = useState(false)
  const [showTrending, setShowTrending] = useState(false)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  const [readingProgress, setReadingProgress] = useState<{ [key: number]: number }>({})
  const [readingPreferences, setReadingPreferences] = useState({
    fontSize: 16,
    fontFamily: "serif",
    theme: "light",
    lineHeight: 1.6,
  })
  const [currentChapter, setCurrentChapter] = useState(0)
  const [bookmarks, setBookmarks] = useState<{ [key: number]: number[] }>({})

  const filteredBooks = useMemo(() => {
    let filtered = allBooks

    // Text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.genre.toLowerCase().includes(query) ||
          book.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          book.description.toLowerCase().includes(query),
      )
    }

    // Genre filter
    if (selectedGenre) {
      filtered = filtered.filter((book) => book.genre === selectedGenre)
    }

    // Author filter
    if (selectedAuthor) {
      filtered = filtered.filter((book) => book.author === selectedAuthor)
    }

    // New releases filter
    if (showNewReleases) {
      filtered = filtered.filter((book) => book.isNew)
    }

    // Trending filter
    if (showTrending) {
      filtered = filtered.filter((book) => book.trending)
    }

    return filtered
  }, [searchQuery, selectedGenre, selectedAuthor, showNewReleases, showTrending])

  const recommendations = useMemo(() => {
    const readBooks = new Set(readingHistory)
    const availableBooks = allBooks.filter((book) => !readBooks.has(book.id))

    // Score books based on user preferences
    const scoredBooks = availableBooks.map((book) => {
      let score = 0

      // Boost score for preferred genres
      if (userPreferences.includes(book.genre.toLowerCase())) score += 3

      // Boost score for preferred tags
      book.tags.forEach((tag) => {
        if (userPreferences.includes(tag)) score += 2
      })

      // Boost highly rated books
      score += book.rating

      // Boost books by authors user has read
      const readAuthors = readingHistory.map((id) => allBooks.find((b) => b.id === id)?.author).filter(Boolean)
      if (readAuthors.includes(book.author)) score += 2

      return { ...book, score }
    })

    return scoredBooks.sort((a, b) => b.score - a.score).slice(0, 6)
  }, [readingHistory, userPreferences])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedGenre("")
    setSelectedAuthor("")
    setShowNewReleases(false)
    setShowTrending(false)
  }

  const toggleFavorite = (bookId: number) => {
    setFavorites((prev) => (prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]))
  }

  const startReading = (book: (typeof allBooks)[0]) => {
    setCurrentBook(book)
    setCurrentChapter(0)
    if (!readingHistory.includes(book.id)) {
      setReadingHistory((prev) => [...prev, book.id])
    }
  }

  const updateReadingProgress = (bookId: number, progress: number) => {
    setReadingProgress((prev) => ({ ...prev, [bookId]: progress }))
  }

  const addBookmark = (bookId: number, position: number) => {
    setBookmarks((prev) => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), position],
    }))
  }

  const adjustFontSize = (delta: number) => {
    setReadingPreferences((prev) => ({
      ...prev,
      fontSize: Math.max(12, Math.min(24, prev.fontSize + delta)),
    }))
  }

  const closeReader = () => {
    setCurrentBook(null)
  }

  if (currentBook) {
    return (
      <div className={`min-h-screen ${readingPreferences.theme === "dark" ? "bg-gray-900" : "bg-amber-50"}`}>
        <header
          className={`sticky top-0 z-50 ${readingPreferences.theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-amber-200"} border-b shadow-sm`}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={closeReader} className="hover:bg-amber-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
                <div>
                  <h1
                    className={`text-lg font-bold ${readingPreferences.theme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    {currentBook.title}
                  </h1>
                  <p className={`text-sm ${readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    por {currentBook.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-amber-100 rounded-lg px-2 py-1">
                  <Button variant="ghost" size="sm" onClick={() => adjustFontSize(-1)}>
                    A-
                  </Button>
                  <span className="text-sm font-medium">{readingPreferences.fontSize}px</span>
                  <Button variant="ghost" size="sm" onClick={() => adjustFontSize(1)}>
                    A+
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setReadingPreferences((prev) => ({
                      ...prev,
                      theme: prev.theme === "light" ? "dark" : "light",
                    }))
                  }
                  className="hover:bg-amber-100"
                >
                  {readingPreferences.theme === "light" ? "🌙" : "☀️"}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(currentBook.id)}
                  className="hover:bg-amber-100"
                >
                  <Heart
                    className={`w-4 h-4 ${favorites.includes(currentBook.id) ? "fill-red-500 text-red-500" : "text-gray-500"}`}
                  />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => addBookmark(currentBook.id, 0)}
                  className="hover:bg-amber-100"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="sm" className="hover:bg-amber-100">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Progreso de lectura</span>
                <span>{Math.round((readingProgress[currentBook.id] || 0) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(readingProgress[currentBook.id] || 0) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <div
            className={`${readingPreferences.theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-amber-200"} rounded-xl border shadow-lg p-8 md:p-12`}
          >
            {/* Chapter Navigation */}
            {currentBook.chapters && (
              <div className="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-3">Capítulos</h3>
                <div className="flex flex-wrap gap-2">
                  {currentBook.chapters.map((chapter, index) => (
                    <Button
                      key={chapter.id}
                      variant={currentChapter === index ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentChapter(index)}
                      className="text-xs"
                    >
                      {chapter.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8 border-b border-amber-200 pb-6">
                <h1
                  className={`text-4xl font-bold mb-3 ${readingPreferences.theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {currentBook.title}
                </h1>
                <p className={`text-xl ${readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  por {currentBook.author}
                </p>
                <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                  <span>{currentBook.pages} páginas</span>
                  <span>•</span>
                  <span>{currentBook.year}</span>
                  <span>•</span>
                  <span>{currentBook.language}</span>
                </div>
              </div>

              <div
                className={`leading-relaxed ${readingPreferences.theme === "dark" ? "text-gray-100" : "text-gray-800"}`}
                style={{
                  fontSize: `${readingPreferences.fontSize}px`,
                  fontFamily: readingPreferences.fontFamily === "serif" ? "Georgia, serif" : "system-ui, sans-serif",
                  lineHeight: readingPreferences.lineHeight,
                }}
              >
                {currentBook.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                className={`mt-16 p-8 ${readingPreferences.theme === "dark" ? "bg-gray-700" : "bg-amber-50"} rounded-xl border border-amber-200`}
              >
                <h3
                  className={`text-xl font-bold mb-6 ${readingPreferences.theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  Información del libro
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <span
                      className={`font-semibold block mb-1 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Páginas:
                    </span>
                    <p className={readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                      {currentBook.pages}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold block mb-1 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Año:
                    </span>
                    <p className={readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                      {currentBook.year}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold block mb-1 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Idioma:
                    </span>
                    <p className={readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                      {currentBook.language}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold block mb-1 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Calificación:
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className={readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                        {currentBook.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <span
                    className={`font-semibold block mb-3 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Etiquetas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentBook.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-amber-200 text-amber-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <span
                    className={`font-semibold block mb-2 ${readingPreferences.theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Descripción:
                  </span>
                  <p className={`text-sm ${readingPreferences.theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {currentBook.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Biblioteca Virtual
                </h1>
                <p className="text-sm text-amber-700">Grupo #4</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 font-medium">
                Inicio
              </Button>
              <Link href="/library">
                <Button variant="ghost" className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 font-medium">
                  Mi Biblioteca
                </Button>
              </Link>
              <Link href="/recommendations">
                <Button variant="ghost" className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 font-medium">
                  Recomendaciones
                </Button>
              </Link>
              <Link href="/profile">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg">
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-amber-200 pt-4">
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start hover:bg-amber-50">
                  Inicio
                </Button>
                <Link href="/library">
                  <Button variant="ghost" className="justify-start w-full hover:bg-amber-50">
                    Mi Biblioteca
                  </Button>
                </Link>
                <Link href="/recommendations">
                  <Button variant="ghost" className="justify-start w-full hover:bg-amber-50">
                    Recomendaciones
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button className="justify-start bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <User className="w-4 h-4 mr-2" />
                    Perfil
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
            Descubre tu próxima lectura
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Busca libros, lee online y recibe recomendaciones personalizadas en nuestra biblioteca virtual
          </p>

          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              type="text"
              placeholder="Buscar libros, autores o géneros..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 pr-6 py-7 text-lg bg-white/80 backdrop-blur-sm border-2 border-amber-200 focus:border-amber-400 rounded-2xl shadow-lg"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button
                variant={selectedGenre ? "default" : "outline"}
                size="sm"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros Avanzados
              </Button>
              <Button
                variant={showNewReleases ? "default" : "outline"}
                size="sm"
                onClick={() => setShowNewReleases(!showNewReleases)}
              >
                <Clock className="w-4 h-4 mr-2" />
                Nuevos Lanzamientos
              </Button>
              <Button
                variant={showTrending ? "default" : "outline"}
                size="sm"
                onClick={() => setShowTrending(!showTrending)}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Tendencias
              </Button>
              <Link href="/library">
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ver Toda la Biblioteca
                </Button>
              </Link>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl bg-white text-gray-700 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    >
                      <option value="">Todos los géneros</option>
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Autor</label>
                    <select
                      value={selectedAuthor}
                      onChange={(e) => setSelectedAuthor(e.target.value)}
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl bg-white text-gray-700 shadow-sm focus:border-amber-400 focus:ring-amber-400"
                    >
                      <option value="">Todos los autores</option>
                      {authors.map((author) => (
                        <option key={author} value={author}>
                          {author}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full bg-transparent hover:bg-amber-50 text-gray-700"
                    >
                      Limpiar Filtros
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {(searchQuery || selectedGenre || selectedAuthor || showNewReleases || showTrending) && (
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600">
                {filteredBooks.length} libro{filteredBooks.length !== 1 ? "s" : ""} encontrado
                {filteredBooks.length !== 1 ? "s" : ""}
                {selectedGenre && ` en ${selectedGenre}`}
                {selectedAuthor && ` por ${selectedAuthor}`}
                {showNewReleases && " (nuevos lanzamientos)"}
                {showTrending && " (tendencias)"}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-10 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/library">
              <Card className="hover:shadow-md transition-shadow cursor-pointer rounded-2xl border-amber-200">
                <CardContent className="p-5 text-center">
                  <BookOpen className="w-9 h-9 text-amber-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-sm text-gray-800">Explorar Biblioteca</h3>
                  <p className="text-xs text-gray-600">{allBooks.length} libros</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/recommendations">
              <Card className="hover:shadow-md transition-shadow cursor-pointer rounded-2xl border-amber-200">
                <CardContent className="p-5 text-center">
                  <Star className="w-9 h-9 text-amber-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-sm text-gray-800">Recomendaciones</h3>
                  <p className="text-xs text-gray-600">Personalizadas</p>
                </CardContent>
              </Card>
            </Link>
            <Card
              className="hover:shadow-md transition-shadow cursor-pointer rounded-2xl border-amber-200"
              onClick={() => setShowTrending(true)}
            >
              <CardContent className="p-5 text-center">
                <TrendingUp className="w-9 h-9 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm text-gray-800">Tendencias</h3>
                <p className="text-xs text-gray-600">{allBooks.filter((b) => b.trending).length} libros</p>
              </CardContent>
            </Card>
            <Card
              className="hover:shadow-md transition-shadow cursor-pointer rounded-2xl border-amber-200"
              onClick={() => setShowNewReleases(true)}
            >
              <CardContent className="p-5 text-center">
                <Clock className="w-9 h-9 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-sm text-gray-800">Nuevos</h3>
                <p className="text-xs text-gray-600">{allBooks.filter((b) => b.isNew).length} lanzamientos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">
            {searchQuery || selectedGenre || selectedAuthor || showNewReleases || showTrending
              ? "Resultados de búsqueda"
              : "Libros Destacados"}
          </h3>

          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-20 h-20 text-gray-400 mx-auto mb-5" />
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">No se encontraron libros</h4>
              <p className="text-gray-600 mb-5">Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button onClick={clearFilters} className="bg-amber-500 hover:bg-amber-600 text-white">
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(searchQuery || selectedGenre || selectedAuthor || showNewReleases || showTrending
                ? filteredBooks
                : allBooks.slice(0, 8)
              ).map((book) => (
                <Card
                  key={book.id}
                  className="group hover:shadow-xl transition-all duration-300 border-amber-200 rounded-2xl"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {book.isNew && (
                        <Badge className="absolute top-3 left-3 bg-green-500 text-white rounded-full px-3 py-1 text-xs shadow-md">
                          Nuevo
                        </Badge>
                      )}
                      {book.trending && !book.isNew && (
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white rounded-full px-3 py-1 text-xs shadow-md">
                          Trending
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full shadow-md"
                        onClick={() => toggleFavorite(book.id)}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(book.id) ? "fill-red-500 text-red-500" : "text-gray-500"
                          }`}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-lg mb-2 line-clamp-2 text-gray-800">{book.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-3">por {book.author}</CardDescription>
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-amber-100 text-amber-700 rounded-full px-3 py-1 shadow-sm"
                      >
                        {book.genre}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium text-gray-700">{book.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-5 line-clamp-2">{book.description}</p>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                        onClick={() => startReading(book)}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Leer
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-700 hover:bg-amber-50 bg-transparent"
                        onClick={() => toggleFavorite(book.id)}
                      >
                        Guardar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {!searchQuery && !selectedGenre && !selectedAuthor && !showNewReleases && !showTrending && (
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-4xl font-bold text-gray-800">Recomendaciones para ti</h3>
              <Link href="/recommendations">
                <Button variant="outline" className="text-gray-700 hover:bg-amber-50 bg-transparent">
                  Ver todas
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {recommendations.map((book) => (
                <Card
                  key={book.id}
                  className="group hover:shadow-md transition-all duration-300 cursor-pointer rounded-2xl border-amber-200"
                  onClick={() => startReading(book)}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-sm mb-1 line-clamp-2 text-gray-800">{book.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-600 mb-2">{book.author}</CardDescription>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="text-xs px-2 py-0 bg-amber-100 text-amber-700 rounded-full shadow-sm"
                      >
                        {book.genre}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-xs text-gray-700">{book.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-gray-800">Biblioteca Virtual</span>
              </div>
              <p className="text-sm text-gray-600">
                Tu biblioteca digital para descubrir, leer y disfrutar los mejores libros.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Explorar</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/library" className="hover:text-amber-600 transition-colors">
                    Libros populares
                  </Link>
                </li>
                <li>
                  <button onClick={() => setShowNewReleases(true)} className="hover:text-amber-600 transition-colors">
                    Nuevos lanzamientos
                  </button>
                </li>
                <li>
                  <Link href="/library" className="hover:text-amber-600 transition-colors">
                    Géneros
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="hover:text-amber-600 transition-colors">
                    Autores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Mi Cuenta</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/library" className="hover:text-amber-600 transition-colors">
                    Mi biblioteca
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-amber-600 transition-colors">
                    Favoritos
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-amber-600 transition-colors">
                    Historial
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-amber-600 transition-colors">
                    Configuración
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/help" className="hover:text-amber-600 transition-colors">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-600 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-amber-600 transition-colors">
                    Términos de uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-amber-600 transition-colors">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 Biblioteca Virtual - Grupo #4. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
