'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Mail } from 'lucide-react'


interface Publicacion {
  id: number
  titulo: string
  contenido: string
  departamento: string
  grupoSocial: string
  categoria: string
  autor: string
  correo: string
  imagen: string
  fecha: string
}




export default function Publicaciones() {
  const [currentPage, setCurrentPage] = useState(1)
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([])

  const ITEMS_PER_PAGE = 6


  useEffect(() => {
    fetch('/api/publicaciones')
      .then(res => res.json())
      .then(data => setPublicaciones(data))
  }, [])
  const totalPages = Math.ceil(publicaciones.length / ITEMS_PER_PAGE)

  const paginatedPublicaciones = publicaciones.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Publicaciones recientes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {paginatedPublicaciones.map((pub) => (
          <PublicacionCard key={pub.id} publicacion={pub} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(prev => Math.max(prev - 1, 1))
              }}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage(index + 1)
                }}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

function PublicacionCard({ publicacion }: { publicacion: Publicacion }) {
  
  const imageUrl = publicacion.imagen
    ? `data:image/jpeg;base64,${publicacion.imagen}`
    : "/default.jpg";

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{publicacion.titulo}</CardTitle>
        <p className="text-sm text-muted-foreground">{publicacion.departamento}</p>
      </CardHeader>
      <img 
        src={imageUrl}
        alt={`Imagen para ${publicacion.titulo}`}
        className="object-cover w-full h-48"
        onError={(e) => {
          e.currentTarget.src = "/default.jpg"; // Reemplaza con imagen default si falla
          console.log(publicacion.imagen && !publicacion.imagen.endsWith("jpg"));
        }}
      />
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mb-2">
          {publicacion.contenido}
        </p>
        <p className="text-sm font-semibold mt-2">Autor: {publicacion.autor}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Mostrar más
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{publicacion.titulo}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={imageUrl}
                alt={`Imagen para ${publicacion.titulo}`}
                className="object-cover w-full h-48 mb-4 rounded-md"
                onError={(e) => {
                  e.currentTarget.src = "/default.jpg";
                  console.log(publicacion.imagen && !publicacion.imagen.endsWith("jpg"));
                }}
              />
              <p className="text-sm text-gray-600 mb-4">{publicacion.contenido}</p>
              <div className="text-sm">
                <p><strong>Autor:</strong> {publicacion.autor}</p>
                <p><strong>Departamento:</strong> {publicacion.departamento}</p>
                <p className="flex items-center mt-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${publicacion.correo}`} className="text-blue-600 hover:underline">
                    {publicacion.correo}
                  </a>
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
