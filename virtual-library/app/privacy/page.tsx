"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
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
              <h1 className="text-xl font-bold text-foreground">Política de Privacidad</h1>
              <p className="text-sm text-muted-foreground">Última actualización: 15 de enero de 2024</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Política de Privacidad</CardTitle>
            <p className="text-muted-foreground">
              En Biblioteca Virtual, respetamos tu privacidad y nos comprometemos a proteger tu información personal.
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">1. Información que Recopilamos</h3>
                <p className="text-muted-foreground mb-4">
                  Recopilamos información que nos proporcionas directamente y información que se recopila
                  automáticamente cuando usas nuestros servicios:
                </p>

                <h4 className="text-lg font-medium text-foreground mb-2">Información Personal</h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Nombre y dirección de correo electrónico</li>
                  <li>Información de perfil (biografía, ubicación, preferencias de lectura)</li>
                  <li>Historial de lectura y calificaciones de libros</li>
                  <li>Comentarios y reseñas que publiques</li>
                </ul>

                <h4 className="text-lg font-medium text-foreground mb-2">Información Técnica</h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Dirección IP y ubicación geográfica aproximada</li>
                  <li>Tipo de navegador y sistema operativo</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">2. Cómo Usamos tu Información</h3>
                <p className="text-muted-foreground mb-4">
                  Utilizamos la información recopilada para los siguientes propósitos:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Proporcionar y mantener nuestros servicios</li>
                  <li>Personalizar tu experiencia de lectura y recomendaciones</li>
                  <li>Comunicarnos contigo sobre actualizaciones y nuevas funciones</li>
                  <li>Mejorar nuestros servicios y desarrollar nuevas características</li>
                  <li>Detectar y prevenir fraudes o actividades maliciosas</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">3. Compartir Información</h3>
                <p className="text-muted-foreground mb-4">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes
                  circunstancias:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Con tu consentimiento:</strong> Cuando nos das permiso explícito
                  </li>
                  <li>
                    <strong>Proveedores de servicios:</strong> Con empresas que nos ayudan a operar la plataforma
                  </li>
                  <li>
                    <strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos
                  </li>
                  <li>
                    <strong>Transferencias comerciales:</strong> En caso de fusión, adquisición o venta de activos
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">4. Cookies y Tecnologías Similares</h3>
                <p className="text-muted-foreground mb-4">Utilizamos cookies y tecnologías similares para:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Recordar tus preferencias y configuraciones</li>
                  <li>Mantener tu sesión iniciada</li>
                  <li>Analizar el uso de la plataforma</li>
                  <li>Personalizar contenido y anuncios</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Puedes controlar las cookies a través de la configuración de tu navegador, aunque esto puede afectar
                  la funcionalidad de la plataforma.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">5. Seguridad de los Datos</h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Encriptación de datos en tránsito y en reposo</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de sistemas de seguridad</li>
                  <li>Capacitación del personal en protección de datos</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Sin embargo, ningún método de transmisión por internet es 100% seguro, por lo que no podemos
                  garantizar la seguridad absoluta.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">6. Tus Derechos</h3>
                <p className="text-muted-foreground mb-4">
                  Tienes los siguientes derechos respecto a tu información personal:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Acceso:</strong> Solicitar una copia de la información que tenemos sobre ti
                  </li>
                  <li>
                    <strong>Rectificación:</strong> Corregir información inexacta o incompleta
                  </li>
                  <li>
                    <strong>Eliminación:</strong> Solicitar la eliminación de tu información personal
                  </li>
                  <li>
                    <strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado
                  </li>
                  <li>
                    <strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines
                  </li>
                  <li>
                    <strong>Limitación:</strong> Solicitar la limitación del procesamiento
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">7. Retención de Datos</h3>
                <p className="text-muted-foreground">
                  Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos
                  descritos en esta política, a menos que la ley requiera un período de retención más largo. Cuando
                  elimines tu cuenta, eliminaremos o anonimizaremos tu información personal, excepto cuando sea
                  necesario conservarla por razones legales.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">8. Menores de Edad</h3>
                <p className="text-muted-foreground">
                  Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos intencionalmente
                  información personal de menores de 13 años. Si descubrimos que hemos recopilado información de un
                  menor de 13 años, la eliminaremos inmediatamente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">9. Transferencias Internacionales</h3>
                <p className="text-muted-foreground">
                  Tu información puede ser transferida y procesada en países distintos al tuyo. Nos aseguramos de que
                  dichas transferencias cumplan con las leyes de protección de datos aplicables y que tu información
                  reciba un nivel adecuado de protección.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">10. Cambios a esta Política</h3>
                <p className="text-muted-foreground">
                  Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios
                  significativos publicando la nueva política en nuestra plataforma y actualizando la fecha de "última
                  actualización". Te recomendamos revisar periódicamente esta política.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-4">11. Contacto</h3>
                <p className="text-muted-foreground mb-4">
                  Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, puedes
                  contactarnos:
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacidad@bibliotecavirtual.com
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
