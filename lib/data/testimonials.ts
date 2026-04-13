export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export const testimonials: Testimonial[] = [
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
    role: "Compañero de equipo",
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
