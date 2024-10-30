import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg mx-auto">
        
        {/* Sección del encabezado con el logo */}
        <header className="text-center mb-10">
          <Image src="/mivoz.png" alt="Logo de Mi Voz, Mi Región" width={300} height={300} className="mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Bienvenido a Mi Voz, Mi Región</h1>
          <p className="text-gray-700 mt-2">Escucha y comparte las voces de las minorías en Colombia.</p>
          <Link href="/publicaciones" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Explorar Publicaciones
          </Link>
        </header>

        {/* Sección de estadísticas */}
        <section className="text-center my-10">
          <h2 className="text-2xl font-semibold mb-6">Estadísticas Impactantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-blue-500">6</h3>
              <p className="mt-2 text-gray-600">Regiones de Colombia</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">32</h3>
              <p className="mt-2 text-gray-600">Departamentos conectados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">100%</h3>
              <p className="mt-2 text-gray-600">Compromiso con las minorías</p>
            </div>
          </div>
        </section>

        {/* Sección de imágenes visuales */}
        <section className="my-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image src="/mapa-colombia.jpg" alt="Mapa de Colombia" width={600} height={400} className="rounded-lg" />
              <p className="mt-3 text-gray-600">Conectando las voces desde todas las regiones de Colombia.</p>
            </div>
            <div>
              <Image src="/community.jpg" alt="Comunidad" width={600} height={400} className="rounded-lg border border-gray-300" />
              <p className="mt-3 text-gray-600">Dando visibilidad a las necesidades de las comunidades locales.</p>
            </div>
          </div>
        </section>

        {/* Llamado a la acción final */}
        <section className="text-center my-10">
          <h2 className="text-2xl font-semibold">¿Tienes algo que decir?</h2>
          <p className="text-gray-700 mt-2">No esperes más, comparte tu historia o ayuda a quienes lo necesitan.</p>
          <Link href="/publicar" className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Crear Publicación
          </Link>
        </section>
      </div>
    </main>
  );
}
