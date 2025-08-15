"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
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
              <h1 className="text-xl font-bold text-foreground">Términos de Uso</h1>
              <p className="text-sm text-muted-foreground">Última actualización: 15 de enero de 2024</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Términos y Condiciones de Uso</CardTitle>
            <p className="text-muted-foreground">
              Al acceder y utilizar Biblioteca Virtual, aceptas cumplir con estos términos y condiciones.
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h3>
                <p className="text-muted-foreground mb-4">
                  Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos de servicio, todas las
                  leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento de cualquier ley
                  local aplicable.
                </p>
                <p className="text-muted-foreground">
                  Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">2. Uso de la Plataforma</h3>
                <p className="text-muted-foreground mb-4">
                  Biblioteca Virtual es una plataforma de lectura digital que proporciona acceso a una colección de
                  libros y contenido literario. El uso de esta plataforma está sujeto a las siguientes condiciones:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Debes tener al menos 13 años para crear una cuenta</li>
                  <li>Eres responsable de mantener la confidencialidad de tu cuenta</li>
                  <li>No puedes compartir tu cuenta con terceros</li>
                  <li>Debes usar la plataforma solo para fines legales y autorizados</li>
                  <li>No puedes intentar acceder a áreas restringidas del sistema</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">3. Contenido y Derechos de Autor</h3>
                <p className="text-muted-foreground mb-4">
                  Todo el contenido disponible en Biblioteca Virtual, incluyendo textos, imágenes, logotipos y software,
                  está protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>El contenido es solo para uso personal y no comercial</li>
                  <li>No puedes reproducir, distribuir o modificar el contenido sin autorización</li>
                  <li>Respetamos los derechos de autor y esperamos que los usuarios hagan lo mismo</li>
                  <li>
                    Si crees que tu trabajo ha sido copiado de manera que constituye infracción de derechos de autor,
                    contáctanos
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">4. Cuentas de Usuario</h3>
                <p className="text-muted-foreground mb-4">
                  Para acceder a ciertas funciones de la plataforma, debes crear una cuenta. Al crear una cuenta,
                  aceptas:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Mantener la seguridad de tu contraseña</li>
                  <li>Notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta</li>
                  <li>Ser responsable de todas las actividades que ocurran bajo tu cuenta</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">5. Conducta Prohibida</h3>
                <p className="text-muted-foreground mb-4">Al usar Biblioteca Virtual, te comprometes a no:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Violar cualquier ley local, estatal, nacional o internacional</li>
                  <li>Transmitir material que sea abusivo, obsceno, difamatorio o ilegal</li>
                  <li>Intentar obtener acceso no autorizado a otros sistemas informáticos</li>
                  <li>Interferir con el funcionamiento normal de la plataforma</li>
                  <li>Usar la plataforma para actividades comerciales no autorizadas</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">6. Privacidad</h3>
                <p className="text-muted-foreground">
                  Tu privacidad es importante para nosotros. Consulta nuestra{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  para entender cómo recopilamos, usamos y protegemos tu información personal.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">7. Limitación de Responsabilidad</h3>
                <p className="text-muted-foreground mb-4">
                  Biblioteca Virtual se proporciona "tal como está" sin garantías de ningún tipo. No seremos
                  responsables de:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Interrupciones del servicio o errores técnicos</li>
                  <li>Pérdida de datos o información</li>
                  <li>Daños directos, indirectos, incidentales o consecuentes</li>
                  <li>Uso no autorizado de tu cuenta</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">8. Terminación</h3>
                <p className="text-muted-foreground">
                  Podemos terminar o suspender tu acceso a la plataforma inmediatamente, sin previo aviso, por cualquier
                  motivo, incluyendo el incumplimiento de estos términos. Al terminar, tu derecho a usar la plataforma
                  cesará inmediatamente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">9. Modificaciones</h3>
                <p className="text-muted-foreground">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                  vigor inmediatamente después de su publicación en la plataforma. Tu uso continuado de la plataforma
                  después de dichos cambios constituye tu aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">10. Contacto</h3>
                <p className="text-muted-foreground">
                  Si tienes preguntas sobre estos términos, puedes contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> legal@bibliotecavirtual.com
                    <br />
                    <strong>Dirección:</strong> Av. Universidad 123, Ciudad de México, México
                    <br />
                    <strong>Teléfono:</strong> +52 55 1234 5678
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
