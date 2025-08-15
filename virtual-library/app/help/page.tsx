"use client"

import { useState } from "react"
import { ArrowLeft, Search, HelpCircle, BookOpen, User, Settings, Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const faqCategories = [
  {
    id: "reading",
    title: "Lectura y Libros",
    icon: BookOpen,
    questions: [
      {
        question: "¿Cómo puedo leer un libro online?",
        answer:
          "Para leer un libro online, simplemente haz clic en el botón 'Leer' en cualquier libro de nuestra biblioteca. Se abrirá el lector integrado donde podrás disfrutar de la lectura con herramientas como marcadores, ajuste de fuente y modo nocturno.",
      },
      {
        question: "¿Puedo descargar libros para leer offline?",
        answer:
          "Actualmente, nuestra biblioteca está diseñada para lectura online. Esto nos permite ofrecer una experiencia de lectura optimizada y mantener actualizada nuestra colección. Estamos trabajando en opciones de lectura offline para el futuro.",
      },
      {
        question: "¿Cómo funcionan las recomendaciones?",
        answer:
          "Nuestro sistema de recomendaciones analiza tu historial de lectura, géneros favoritos y calificaciones para sugerirte libros que podrían interesarte. Mientras más uses la plataforma, más precisas serán las recomendaciones.",
      },
      {
        question: "¿Puedo marcar libros como favoritos?",
        answer:
          "Sí, puedes marcar cualquier libro como favorito haciendo clic en el ícono de corazón. Todos tus favoritos se guardan en tu perfil para acceso rápido.",
      },
    ],
  },
  {
    id: "account",
    title: "Cuenta y Perfil",
    icon: User,
    questions: [
      {
        question: "¿Cómo creo una cuenta?",
        answer:
          "Puedes crear una cuenta haciendo clic en 'Registrarse' en la parte superior de la página. Solo necesitas proporcionar tu email y crear una contraseña segura.",
      },
      {
        question: "¿Cómo cambio mi información personal?",
        answer:
          "Ve a tu perfil y haz clic en 'Editar' en la sección de información personal. Puedes actualizar tu nombre, biografía, ubicación y otros datos.",
      },
      {
        question: "¿Puedo cambiar mi meta de lectura?",
        answer: "Sí, puedes ajustar tu meta de lectura anual en cualquier momento desde la configuración de tu perfil.",
      },
      {
        question: "¿Cómo elimino mi cuenta?",
        answer:
          "Si deseas eliminar tu cuenta, ve a Configuración > Zona de Peligro. Ten en cuenta que esta acción es irreversible y perderás todo tu historial de lectura.",
      },
    ],
  },
  {
    id: "technical",
    title: "Problemas Técnicos",
    icon: Settings,
    questions: [
      {
        question: "El lector no carga correctamente",
        answer:
          "Si el lector tiene problemas, intenta refrescar la página. Si el problema persiste, verifica tu conexión a internet y prueba con otro navegador. También puedes limpiar la caché de tu navegador.",
      },
      {
        question: "No puedo buscar libros",
        answer:
          "Asegúrate de que estás escribiendo correctamente en la barra de búsqueda. Puedes buscar por título, autor, género o etiquetas. Si el problema continúa, contacta a soporte.",
      },
      {
        question: "La página se ve mal en mi dispositivo",
        answer:
          "Nuestra biblioteca está optimizada para todos los dispositivos. Si experimentas problemas de visualización, asegúrate de tener la última versión de tu navegador.",
      },
      {
        question: "¿Qué navegadores son compatibles?",
        answer:
          "Recomendamos usar las versiones más recientes de Chrome, Firefox, Safari o Edge para la mejor experiencia de lectura.",
      },
    ],
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

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
              <h1 className="text-xl font-bold text-foreground">Centro de Ayuda</h1>
              <p className="text-sm text-muted-foreground">Encuentra respuestas a tus preguntas</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">¿En qué podemos ayudarte?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Busca en nuestras preguntas frecuentes o contacta a nuestro equipo de soporte
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar en la ayuda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-base"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/contact">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Contactar Soporte</h3>
                  <p className="text-sm text-muted-foreground">Envía un mensaje a nuestro equipo</p>
                </CardContent>
              </Card>
            </Link>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Chat en Vivo</h3>
                <p className="text-sm text-muted-foreground">Habla con un agente ahora</p>
                <Badge className="mt-2 bg-green-500 text-white">En línea</Badge>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Llamar</h3>
                <p className="text-sm text-muted-foreground">+52 55 1234 5678</p>
                <p className="text-xs text-muted-foreground mt-1">Lun-Vie 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Categories */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-8">Preguntas Frecuentes</h3>

          {searchQuery && filteredFAQs.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No se encontraron resultados para "{searchQuery}"</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchQuery("")}>
                  Limpiar búsqueda
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="space-y-8">
            {(searchQuery ? filteredFAQs : faqCategories).map((category) => {
              const Icon = category.icon
              return (
                <div key={category.id}>
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-primary mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const questionId = `${category.id}-${index}`
                      const isExpanded = expandedQuestion === questionId

                      return (
                        <Card key={index} className="border border-border">
                          <CardHeader
                            className="cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => setExpandedQuestion(isExpanded ? null : questionId)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{faq.question}</CardTitle>
                              <div className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </CardHeader>
                          {isExpanded && (
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </CardContent>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Still Need Help */}
        <section className="mt-16 text-center">
          <Card className="bg-muted">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">¿Aún necesitas ayuda?</h3>
              <p className="text-muted-foreground mb-6">
                Si no encontraste la respuesta que buscabas, nuestro equipo de soporte está aquí para ayudarte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button>Contactar Soporte</Button>
                </Link>
                <Button variant="outline">Reportar un Problema</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
