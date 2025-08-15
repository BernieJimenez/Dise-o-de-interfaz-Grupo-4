"use client"

import { useState } from "react"
import { ArrowLeft, User, BookOpen, Heart, Settings, BarChart3, Clock, Edit, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const allBooks = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "Realismo mágico",
    rating: 4.8,
    cover: "/cien-anos-soledad-cover.png",
    readDate: "2024-01-15",
    userRating: 5,
    progress: 100,
  },
  {
    id: 5,
    title: "El Aleph",
    author: "Jorge Luis Borges",
    genre: "Cuentos",
    rating: 4.9,
    cover: "/el-aleph-book-cover.png",
    readDate: "2024-02-20",
    userRating: 5,
    progress: 100,
  },
  {
    id: 3,
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    genre: "Ficción histórica",
    rating: 4.6,
    cover: "/house-of-the-spirits-cover.png",
    readDate: null,
    userRating: null,
    progress: 45,
  },
]

const favoriteBooks = [
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    cover: "/don-quijote-book-cover.png",
  },
  {
    id: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    cover: "/rayuela-book-cover.png",
  },
  {
    id: 6,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    cover: "/pedro-paramo-book-cover.png",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: "María González",
    email: "maria.gonzalez@email.com",
    bio: "Amante de la literatura latinoamericana y los clásicos. Siempre en busca de nuevas historias que me transporten a otros mundos.",
    joinDate: "2023-06-15",
    location: "Ciudad de México, México",
    favoriteGenres: ["Realismo mágico", "Clásicos", "Ficción histórica"],
    readingGoal: 24,
    booksReadThisYear: 8,
  })

  const [editForm, setEditForm] = useState(userProfile)

  const handleSave = () => {
    setUserProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm(userProfile)
    setIsEditing(false)
  }

  const readBooks = allBooks.filter((book) => book.progress === 100)
  const currentlyReading = allBooks.filter((book) => book.progress > 0 && book.progress < 100)

  const tabs = [
    { id: "overview", label: "Resumen", icon: User },
    { id: "library", label: "Mi Biblioteca", icon: BookOpen },
    { id: "favorites", label: "Favoritos", icon: Heart },
    { id: "stats", label: "Estadísticas", icon: BarChart3 },
    { id: "settings", label: "Configuración", icon: Settings },
  ]

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
              <h1 className="text-xl font-bold text-foreground">Mi Perfil</h1>
              <p className="text-sm text-muted-foreground">Gestiona tu cuenta y preferencias</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{userProfile.name}</h3>
                  <p className="text-sm text-muted-foreground">{userProfile.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Miembro desde{" "}
                    {new Date(userProfile.joinDate).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {tab.label}
                      </Button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Profile Info */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Información Personal</CardTitle>
                      <CardDescription>Tu información básica y biografía</CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleCancel}>
                          <X className="w-4 h-4 mr-2" />
                          Cancelar
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                          <Save className="w-4 h-4 mr-2" />
                          Guardar
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!isEditing ? (
                      <>
                        <div>
                          <label className="text-sm font-medium text-foreground">Nombre</label>
                          <p className="text-muted-foreground">{userProfile.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email</label>
                          <p className="text-muted-foreground">{userProfile.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Ubicación</label>
                          <p className="text-muted-foreground">{userProfile.location}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Biografía</label>
                          <p className="text-muted-foreground">{userProfile.bio}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="text-sm font-medium text-foreground">Nombre</label>
                          <Input
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email</label>
                          <Input
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Ubicación</label>
                          <Input
                            value={editForm.location}
                            onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Biografía</label>
                          <Textarea
                            value={editForm.bio}
                            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                            rows={3}
                          />
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Reading Goal */}
                <Card>
                  <CardHeader>
                    <CardTitle>Meta de Lectura 2024</CardTitle>
                    <CardDescription>Tu progreso hacia tu objetivo anual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {userProfile.booksReadThisYear} / {userProfile.readingGoal}
                        </div>
                        <p className="text-sm text-muted-foreground">libros leídos</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">
                          {Math.round((userProfile.booksReadThisYear / userProfile.readingGoal) * 100)}%
                        </div>
                        <p className="text-sm text-muted-foreground">completado</p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min((userProfile.booksReadThisYear / userProfile.readingGoal) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Favorite Genres */}
                <Card>
                  <CardHeader>
                    <CardTitle>Géneros Favoritos</CardTitle>
                    <CardDescription>Tus preferencias de lectura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.favoriteGenres.map((genre, index) => (
                        <Badge key={index} variant="secondary">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "library" && (
              <div className="space-y-6">
                {/* Currently Reading */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Leyendo Actualmente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {currentlyReading.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentlyReading.map((book) => (
                          <div key={book.id} className="flex gap-4 p-4 border border-border rounded-lg">
                            <img
                              src={book.cover || "/placeholder.svg"}
                              alt={book.title}
                              className="w-16 h-20 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground line-clamp-1">{book.title}</h4>
                              <p className="text-sm text-muted-foreground">{book.author}</p>
                              <div className="mt-2">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Progreso</span>
                                  <span>{book.progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: `${book.progress}%` }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No tienes libros en progreso actualmente.</p>
                    )}
                  </CardContent>
                </Card>

                {/* Read Books */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Libros Leídos ({readBooks.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {readBooks.map((book) => (
                        <div key={book.id} className="text-center">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-32 object-cover rounded mb-2"
                          />
                          <h4 className="text-sm font-medium line-clamp-2">{book.title}</h4>
                          <p className="text-xs text-muted-foreground">{book.author}</p>
                          {book.userRating && (
                            <div className="flex items-center justify-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < book.userRating ? "text-yellow-400" : "text-muted-foreground"
                                  }`}
                                >
                                  ★
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "favorites" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Libros Favoritos ({favoriteBooks.length})
                  </CardTitle>
                  <CardDescription>Tus libros marcados como favoritos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {favoriteBooks.map((book) => (
                      <div key={book.id} className="text-center group cursor-pointer">
                        <div className="relative">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-32 object-cover rounded mb-2 group-hover:scale-105 transition-transform"
                          />
                          <Heart className="absolute top-2 right-2 w-4 h-4 fill-red-500 text-red-500" />
                        </div>
                        <h4 className="text-sm font-medium line-clamp-2">{book.title}</h4>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "stats" && (
              <div className="space-y-6">
                {/* Reading Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{readBooks.length}</div>
                      <p className="text-muted-foreground">Libros completados</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{currentlyReading.length}</div>
                      <p className="text-muted-foreground">Leyendo actualmente</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{favoriteBooks.length}</div>
                      <p className="text-muted-foreground">Favoritos</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Reading Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actividad de Lectura</CardTitle>
                    <CardDescription>Tu historial de lectura reciente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {readBooks.map((book) => (
                        <div key={book.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            className="w-12 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{book.title}</h4>
                            <p className="text-sm text-muted-foreground">{book.author}</p>
                            <p className="text-xs text-muted-foreground">
                              Completado el {new Date(book.readDate!).toLocaleDateString("es-ES")}
                            </p>
                          </div>
                          {book.userRating && (
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < book.userRating! ? "text-yellow-400" : "text-muted-foreground"
                                  }`}
                                >
                                  ★
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                {/* Account Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración de Cuenta</CardTitle>
                    <CardDescription>Gestiona tu cuenta y preferencias</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Meta de lectura anual</label>
                      <Input
                        type="number"
                        value={userProfile.readingGoal}
                        onChange={(e) =>
                          setUserProfile({ ...userProfile, readingGoal: Number.parseInt(e.target.value) || 0 })
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Notificaciones</label>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Recomendaciones semanales</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Recordatorios de lectura</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Nuevos lanzamientos</span>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Privacidad</CardTitle>
                    <CardDescription>Controla la visibilidad de tu perfil</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Perfil público</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Mostrar actividad de lectura</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Permitir recomendaciones de otros usuarios</span>
                    </label>
                  </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">Zona de Peligro</CardTitle>
                    <CardDescription>Acciones irreversibles</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                      Eliminar historial de lectura
                    </Button>
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                      Eliminar cuenta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
