'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { departamentosColombia, categorias, gruposSociales } from './data'

export default function Publicar() {
  const [titulo, setTitulo] = useState('')
  const [contenido, setContenido] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [autor, setAutor] = useState('')
  const [correo, setCorreo] = useState('')
  const [imagen, setImagen] = useState<File | null>(null)
  const [categoria, setCategoria] = useState('')
  const [grupoSocial, setGrupoSocial] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Convertir imagen a Base64 si existe
    let imagenBase64 = null;
    if (imagen) {
      const reader = new FileReader();
      imagenBase64 = await new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result?.toString().split(',')[1]); // Elimina el prefijo "data:image/png;base64,"
        reader.onerror = reject;
        reader.readAsDataURL(imagen);
      });
    }


    // Aquí iría la lógica para enviar la publicación
    const res = await fetch('/api/publicaciones', {
      method: 'POST',
      body: JSON.stringify({
        titulo,
        contenido,
        departamento,
        autor,
        correo,
        imagen: imagenBase64,
        categoria,
        grupoSocial
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    setTitulo('')
    setContenido('')
    setDepartamento('')
    setAutor('')
    setCorreo('')
    setImagen(null)
    setCategoria('')
    setGrupoSocial('')
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(e.target.files[0])
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Crear una nueva publicación</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="titulo">Título</Label>
          <Input
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="contenido">Contenido</Label>
          <Textarea
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={6}
            required
          />
        </div>
        <div>
          <Label htmlFor="departamento">Departamento</Label>
          <Select value={departamento} onValueChange={setDepartamento} required>
            <SelectTrigger id="departamento">
              <SelectValue placeholder="Selecciona un departamento" />
            </SelectTrigger>
            <SelectContent>
              {departamentosColombia.map((departamento) => (
                <SelectItem key={departamento.value} value={departamento.value}>
                  {departamento.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="grupoSocial">Grupo social</Label>
          <Select value={grupoSocial} onValueChange={setGrupoSocial} required>
            <SelectTrigger id="departamento">
              <SelectValue placeholder="Selecciona el grupo social al que perteneces" />
            </SelectTrigger>
            <SelectContent>
              {gruposSociales.map((grupoSocial) => (
                <SelectItem key={grupoSocial.value} value={grupoSocial.value}>
                  {grupoSocial.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="categoria">Categoria</Label>
          <Select value={categoria} onValueChange={setCategoria} required>
            <SelectTrigger id="departamento">
              <SelectValue placeholder="Selecciona la categoria" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((categoria) => (
                <SelectItem key={categoria.value} value={categoria.value}>
                  {categoria.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="autor">Autor</Label>
          <Input
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="correo">Correo Electrónico</Label>
          <Input
            id="corre"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="imagen">Imagen</Label>
          <Input
            id="imagen"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <Button type="submit">Publicar</Button>
      </form>
    </div>
  )
}