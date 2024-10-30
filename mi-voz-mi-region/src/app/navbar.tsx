"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const routes = [
    { href: '/publicar', label: 'Publicar' },
    { href: '/publicaciones', label: 'Ver publicaciones' },
    { href: '/informacion', label: 'Información de crisis' },
  ]

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className='flex items-center gap-2'>
            <Image
              src="/logo.svg"
              alt="Mi Voz Mi Región"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-semibold">Mi Voz Mi Región</h1>
          </Link>


        </div>
        <div className="hidden md:flex gap-4">
          {routes.map((route, index) => (
            <Link key={index} href={route.href} className="hover:underline">{route.label}</Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden flex flex-col mt-2'>
          {routes.map((route, index) => (
            <Link key={index} href={route.href} className="p-2 hover:bg-gray-700">{route.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
