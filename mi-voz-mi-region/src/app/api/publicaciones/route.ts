import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET() {
    const publicaciones = await prisma.publicacion.findMany()
    return NextResponse.json(publicaciones)
}


export async function POST(request: Request) {
    const data = await request.json();
    const publicacion = await prisma.publicacion.create({data})
    return NextResponse.json(publicacion)
}