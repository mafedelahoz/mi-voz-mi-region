import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mi Voz, Mi Región",
  description: "Creando un movimiento de conexión, empoderamiento y acción",
  openGraph: {
    title: "Mi Voz, Mi Región",
    description: "Creando un movimiento de conexión, empoderamiento y acción",
    url: "https://mi-voz-mi-region.vercel.app",
    siteName: "Mi Horario Uniandes",
    images: [
      {
        url: "https://img.freepik.com/psd-gratis/ilustracion-bandera-pais-colombia_23-2151870667.jpg",
        alt: "Mi Voz, Mi Región",
      },
    ],
    locale: "es_CO",
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}




