"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { BookOpen, Star, Grid, List, Home, Heart, Settings, ArrowLeft, ArrowRight, X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const allBooks = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    rating: 4.8,
    cover: "/cien-anos-soledad-cover.png",
    description: "La historia épica de la familia Buendía en el pueblo ficticio de Macondo.",
    pages: 471,
    year: 1967,
    tags: ["clásico", "latinoamericano", "realismo mágico"],
    content: `Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.`,
    chapters: [
      {
        id: 1,
        title: "Capítulo 1",
        content: `Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.

El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo. Todos los años, por el mes de marzo, una familia de gitanos desarrapados plantaba su carpa cerca de la aldea, y con un grande alboroto de pitos y timbales daban a conocer los nuevos inventos.

Primero llevaron el imán. Un gitano corpulento, de barba montaraz y manos de gorrión, que se presentó con el nombre de Melquíades, hizo una truculenta demostración pública de lo que él mismo llamaba la octava maravilla de los sabios alquimistas de Macedonia.`,
      },
      {
        id: 2,
        title: "Capítulo 2",
        content: `José Arcadio Buendía, que era el hombre más emprendedor que se vería jamás en la aldea, había dispuesto de tal modo la posición de las casas, que desde todas podía llegarse al río y abastecerse de agua con igual esfuerzo, y trazó las calles con tan buen sentido que ninguna casa recibía más sol que otra a la hora del calor.

Dentro de pocos años, Macondo fue una aldea más ordenada y laboriosa que cualquiera de las conocidas hasta entonces por sus 300 habitantes. Era en verdad una aldea feliz, donde nadie era mayor de treinta años y donde nadie había muerto.`,
      },
    ],
  },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Novela",
    rating: 4.9,
    cover: "/don-quijote-book-cover.png",
    description: "Las aventuras del ingenioso hidalgo Don Quijote de la Mancha.",
    pages: 863,
    year: 1605,
    tags: ["clásico", "español", "aventura"],
    content: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.`,
    chapters: [
      {
        id: 1,
        title: "Capítulo I",
        content: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.

El resto la llevaban sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo, los días de entre semana se honraba con su vellori de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.`,
      },
      {
        id: 2,
        title: "Capítulo II",
        content: `Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner en efeto su pensamiento, apretándole a ello la falta que él pensaba que hacía en el mundo su tardanza, según eran los agravios que pensaba deshacer, tuertos que enderezar, sinrazones que enmendar y abusos que mejorar y deudas que satisfacer.

Y así, sin dar parte a persona alguna de su intención y sin que nadie le viese, una mañana, antes del día, que era uno de los calurosos del mes de julio, se armó de todas sus armas, subió sobre Rocinante, puesta su mal compuesta celada, embrazó su adarga, tomó su lanza, y por la puerta falsa de un corral salió al campo.`,
      },
    ],
  },
  {
    id: 3,
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    genre: "Realismo mágico",
    rating: 4.7,
    cover: "/house-of-the-spirits-cover.png",
    description: "La saga de la familia del Valle y de los Trueba a lo largo de cuatro generaciones.",
    pages: 433,
    year: 1982,
    tags: ["realismo mágico", "familia", "chile"],
    content: `Barrabás llegó a la familia por vía marítima, anotó la niña Clara con su delicada caligrafía.`,
    chapters: [
      {
        id: 1,
        title: "Rosa la Bella",
        content: `Barrabás llegó a la familia por vía marítima, anotó la niña Clara con su delicada caligrafía. Ya entonces tenía el hábito de escribir las cosas importantes y más tarde, cuando se quedó muda, escribía también las trivialidades, sin sospechar que cincuenta años después, sus cuadernos me servirían para rescatar la memoria del pasado y para sobrevivir a mi propio espanto.

El día que llegó Barrabás era Jueves Santo. Venía en una jaula indigna, cubierto de sus propios excrementos y orines, con una mirada extraviada de preso miserable, pero ya se adivinaba —por el porte real de su cabeza y el tamaño de su esqueleto— el gigante legendario que llegó a ser.`,
      },
      {
        id: 2,
        title: "Las Tres Marías",
        content: `Esteban Trueba se bajó en la estación San Lucas porque el conductor le dijo que por allí pasaba el ramal que podía llevarlo a Las Tres Marías, pero no había tal ramal y tuvo que hacer el viaje en una carreta de verduras, caminando parte del trayecto. Llevaba dos maletas de cuero con ropa de ciudad, que resultó completamente inadecuada para la vida del campo.`,
      },
    ],
  },
  {
    id: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    genre: "Novela experimental",
    rating: 4.6,
    cover: "/rayuela-book-cover.png",
    description: "Una novela que puede leerse de múltiples maneras, explorando el amor y la búsqueda existencial.",
    pages: 635,
    year: 1963,
    tags: ["experimental", "existencial", "amor"],
    content: `¿Encontraría a la Maga? Tantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y apenas la luz de ceniza y olivo que flota sobre el río me dejaba distinguir las formas, ya su silueta delgada se inscribía en el Pont des Arts.`,
    chapters: [
      {
        id: 1,
        title: "Del lado de allá - 1",
        content: `¿Encontraría a la Maga? Tantas veces me había bastado asomarme, viniendo por la rue de Seine, al arco que da al Quai de Conti, y apenas la luz de ceniza y olivo que flota sobre el río me dejaba distinguir las formas, ya su silueta delgada se inscribía en el Pont des Arts, a veces andando de un lado a otro, a veces apoyada en el hierro, inclinada sobre el agua.

Y era tan natural cruzar la calle, subir los peldaños del puente, entrar en su delgada cintura y acercarme a la Maga que sonreía sin sorpresa, convencida como yo de que un encuentro casual era lo menos casual en nuestras vidas.`,
      },
      {
        id: 2,
        title: "Del lado de allá - 2",
        content: `Ahora que la pienso desde este día gris, me parece que la Maga era como un espejo terrible, uno de esos espejos excepcionales que devuelven una imagen inesperada, que muestran como somos en vez de como creemos ser. Cuando yo me miraba en sus ojos veía aparecer cosas que no estaban en mí pero que debían estar para que ella las viera.`,
      },
    ],
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
    tags: ["cuentos", "filosofía", "laberintos"],
    content: `La candente mañana de febrero en que Beatriz Viterbo murió, después de una imperiosa agonía que no se rebajó un solo instante ni al sentimentalismo ni al miedo, noté que las carteleras de fierro de la Plaza Constitución habían renovado no sé qué aviso de cigarrillos rubios.`,
    chapters: [
      {
        id: 1,
        title: "El Aleph",
        content: `La candente mañana de febrero en que Beatriz Viterbo murió, después de una imperiosa agonía que no se rebajó un solo instante ni al sentimentalismo ni al miedo, noté que las carteleras de fierro de la Plaza Constitución habían renovado no sé qué aviso de cigarrillos rubios; el hecho me dolió, pues comprendí que el incesante y vasto universo ya se apartaba de ella y que ese cambio era el primero de una serie infinita.

Cambiará el universo pero yo no, pensé con melancólica vanidad; alguna vez, lo sé, mi vana devoción la había exasperado; muerta, yo podía consagrarme a su memoria, sin esperanza, pero también sin humillación.`,
      },
      {
        id: 2,
        title: "El Zahir",
        content: `En Buenos Aires el Zahir es una moneda común de veinte centavos; marcas de navaja o de cortaplumas rayan las letras N T y el número dos; 1929 es la fecha grabada en el anverso. Hoy es el trece de noviembre; el Zahir me fue dado el siete de junio. Al principio lo tuve en la palma de la mano; después en el bolsillo del saco; después en el bolsillo del pantalón.`,
      },
    ],
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
    tags: ["realismo mágico", "méxico", "fantasmas"],
    content: `—Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera.`,
    chapters: [
      {
        id: 1,
        title: "Fragmento 1",
        content: `—Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera. Le apreté sus manos en señal de que lo haría, pues ella estaba por morirse y yo en un plan de prometerle todo.

"No dejes de ir a visitarlo —me recomendó—. Se llama de este modo y de este otro. Estoy segura de que le dará gusto conocerte." Entonces no pude hacer otra cosa sino decirle que así lo haría, y de tanto decírselo se lo seguí diciendo aun después que a mis manos les costó trabajo zafarse de sus manos muertas.`,
      },
      {
        id: 2,
        title: "Fragmento 2",
        content: `Era ese tiempo de la canícula, cuando el aire de agosto sopla caliente, envenenado por el olor podrido de las saponarias. El camino subía y bajaba: "Sube o baja según se va o se viene. Para el que va, sube; para el que viene, baja."

—¿Cómo dice usted que se llama el pueblo que se ve allá abajo?
—Comala, señor.
—¿Está seguro de que ya es Comala?
—Seguro, señor.`,
      },
    ],
  },
]

const LibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBooks, setFilteredBooks] = useState(allBooks)
  const [viewMode, setViewMode] = useState("grid")
  const [selectedGenre, setSelectedGenre] = useState("")
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const [sortBy, setSortBy] = useState("title")
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentBook, setCurrentBook] = useState<any>(null)
  const [currentChapter, setCurrentChapter] = useState(0)
  const [fontSize, setFontSize] = useState(16)
  const [readingTheme, setReadingTheme] = useState("light")
  const [readingProgress, setReadingProgress] = useState<{ [key: number]: number }>({})
  const readerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const results = allBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesGenre = selectedGenre === "" || book.genre === selectedGenre
      const matchesAuthor = selectedAuthor === "" || book.author === selectedAuthor

      return matchesSearch && matchesGenre && matchesAuthor
    })

    results.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "author":
          return a.author.localeCompare(b.author)
        case "rating":
          return b.rating - a.rating
        case "year":
          return b.year - a.year
        default:
          return 0
      }
    })

    setFilteredBooks(results)
  }, [searchTerm, selectedGenre, selectedAuthor, sortBy])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!currentBook) return

      switch (e.key.toLowerCase()) {
        case "t":
          e.preventDefault()
          setReadingTheme((prev) => (prev === "light" ? "dark" : "light"))
          break
        case "arrowleft":
          e.preventDefault()
          if (currentChapter > 0) {
            setCurrentChapter((prev) => prev - 1)
          }
          break
        case "arrowright":
          e.preventDefault()
          if (currentChapter < currentBook.chapters.length - 1) {
            setCurrentChapter((prev) => prev + 1)
          }
          break
        case "+":
        case "=":
          e.preventDefault()
          setFontSize((prev) => Math.min(prev + 2, 24))
          break
        case "-":
          e.preventDefault()
          setFontSize((prev) => Math.max(prev - 2, 12))
          break
        case "b":
          e.preventDefault()
          toggleFavorite(currentBook.id)
          break
        case "escape":
          e.preventDefault()
          setCurrentBook(null)
          break
      }
    }

    if (currentBook) {
      window.addEventListener("keydown", handleKeyPress)
      return () => window.removeEventListener("keydown", handleKeyPress)
    }
  }, [currentBook, currentChapter])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode)
  }

  const toggleFavorite = (bookId: number) => {
    setFavorites((prev) => (prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]))
  }

  const startReading = (book: any) => {
    setCurrentBook(book)
    setCurrentChapter(0)
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [book.id]: (prev[book.id] || 0) + 1,
    }))
  }

  const closeReader = () => {
    setCurrentBook(null)
  }

  const nextChapter = () => {
    if (currentBook && currentChapter < currentBook.chapters.length - 1) {
      setCurrentChapter((prev) => prev + 1)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter((prev) => prev - 1)
    }
  }

  const genres = [...new Set(allBooks.map((book) => book.genre))]
  const authors = [...new Set(allBooks.map((book) => book.author))]

  if (currentBook) {
    const chapter = currentBook.chapters[currentChapter]
    const themeClasses = readingTheme === "dark" ? "bg-gray-900 text-gray-100" : "bg-amber-50 text-gray-900"

    return (
      <div className={`min-h-screen ${themeClasses} transition-colors duration-300`} ref={readerRef}>
        {/* Reader Header */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b p-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={closeReader} className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Cerrar
              </Button>
              <div>
                <h1 className="font-semibold text-lg">{currentBook.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{currentBook.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Font Size Controls */}
              <Button variant="ghost" size="sm" onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-sm px-2">{fontSize}px</span>
              <Button variant="ghost" size="sm" onClick={() => setFontSize((prev) => Math.min(prev + 2, 24))}>
                <Plus className="h-4 w-4" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setReadingTheme((prev) => (prev === "light" ? "dark" : "light"))}
              >
                <Settings className="h-4 w-4" />
              </Button>

              {/* Bookmark */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleFavorite(currentBook.id)}
                className={favorites.includes(currentBook.id) ? "text-red-500" : ""}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(currentBook.id) ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Atajos: T (tema) • ← → (capítulos) • + - (tamaño) • B (favorito) • Esc (cerrar)
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={prevChapter}
              disabled={currentChapter === 0}
              className="flex items-center gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </Button>

            <div className="text-center">
              <h2 className="font-semibold text-xl mb-1">{chapter.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Capítulo {currentChapter + 1} de {currentBook.chapters.length}
              </p>
            </div>

            <Button
              variant="outline"
              onClick={nextChapter}
              disabled={currentChapter === currentBook.chapters.length - 1}
              className="flex items-center gap-2 bg-transparent"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Chapter Content */}
          <div
            className="prose prose-lg max-w-none leading-relaxed"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
          >
            <div className="whitespace-pre-line">{chapter.content}</div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 mb-4">
            <Progress value={((currentChapter + 1) / currentBook.chapters.length) * 100} className="w-full" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              Progreso: {Math.round(((currentChapter + 1) / currentBook.chapters.length) * 100)}%
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-700">
                <Home className="h-5 w-5" />
                <span className="font-semibold">Inicio</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Biblioteca</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/recommendations" className="text-amber-600 hover:text-amber-700 font-medium">
                Recomendaciones
              </Link>
              <Link href="/profile" className="text-amber-600 hover:text-amber-700 font-medium">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <Input
              type="text"
              placeholder="Buscar libros..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="lg:col-span-2"
            />

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700"
            >
              <option value="">Todos los géneros</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700"
            >
              <option value="">Todos los autores</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700"
            >
              <option value="title">Ordenar por título</option>
              <option value="author">Ordenar por autor</option>
              <option value="rating">Ordenar por rating</option>
              <option value="year">Ordenar por año</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredBooks.length} libro{filteredBooks.length !== 1 ? "s" : ""} encontrado
              {filteredBooks.length !== 1 ? "s" : ""}
            </p>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("grid")}
                className="flex items-center gap-2"
              >
                <Grid className="h-4 w-4" />
                Cuadrícula
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("list")}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                Lista
              </Button>
            </div>
          </div>
        </div>

        {/* Books Grid/List */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 font-medium">
                      {book.author}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(book.id)}
                    className={`${favorites.includes(book.id) ? "text-red-500" : "text-gray-400"} hover:text-red-500`}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(book.id) ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                  >
                    {book.genre}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{book.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{book.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{book.pages} páginas</span>
                  <span>{book.year}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {book.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {readingProgress[book.id] && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Progreso de lectura</span>
                      <span>{readingProgress[book.id]}% completado</span>
                    </div>
                    <Progress value={readingProgress[book.id]} className="h-2" />
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => startReading(book)}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Leer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No se encontraron libros</h3>
            <p className="text-gray-600 dark:text-gray-400">Intenta ajustar tus filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LibraryPage
