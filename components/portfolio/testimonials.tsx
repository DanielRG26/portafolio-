import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Kevin Castro",
    role: "Cliente",
    content: "Trabajar con Felipe fue una experiencia muy profesional. Necesitabamos una pagina web moderna y funcional, y logro entregarnos justo lo que buscabamos. Destaco mucho su capacidad para entender los requerimientos y proponer mejoras en la interfaz. Sin duda lo recomendaria para proyectos de desarrollo web.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kevin%20%20Castro-MOOASqZjEUe9WjdaEcnOTyadCW99s3.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Josebeth Lopez",
    role: "Companero de equipo",
    content: "Felipe fue una pieza clave en el desarrollo del proyecto. Siempre aporto ideas claras y soluciones eficientes a los problemas tecnicos. Ademas, su comunicacion con el equipo facilito mucho el avance del trabajo. Es alguien confiable y comprometido.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Josebeth%20Lopez%20-YpF08lKq13jnUIbZZbuXBERXPn78Cb.jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Jose Bastidas",
    role: "Colega desarrollador",
    content: "Me impresiono la forma en que Felipe aborda los problemas de programacion. No solo implementa soluciones funcionales, sino que tambien se preocupa por la calidad del codigo y la optimizacion. Tiene una mentalidad muy orientada a mejorar constantemente.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jose%20Bastidas-aqkfHuG9QYTU7OZdLrvrcp78Cn8Ov4.png",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground">
            Lo que dicen colegas y profesores sobre mi trabajo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 mb-4">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-10 w-10 text-primary/50" />
                  )}
                </div>

                {/* Name */}
                <h4 className="font-semibold text-foreground text-lg mb-2">
                  {testimonial.name}
                </h4>

                {/* Role */}
                {testimonial.role && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {testimonial.role}
                  </p>
                )}

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Content placeholder line */}
                {!testimonial.content && (
                  <div className="w-full space-y-2">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-4/5 mx-auto" />
                    <div className="h-3 bg-muted rounded w-3/5 mx-auto" />
                  </div>
                )}

                {testimonial.content && (
                  <p className="text-muted-foreground leading-relaxed italic">
                    {`"${testimonial.content}"`}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center">
          <Card className="inline-block border-primary/20 bg-primary/5">
            <CardContent className="p-4 flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Has trabajado conmigo?
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:guevararodriguezdanielfelipe@gmail.com">
                  Enviame tu testimonio
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
