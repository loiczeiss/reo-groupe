"use client"
import '../styles/globals.css' // or wherever your tailwind styles are imported
import  img  from "public/logo.png"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Logo placeholder - replace with your actual logo */}
        <div className="flex justify-center">
          <Image
            src={img.src}
            alt="Logo"
            width={120}
            height={60}
            className="mb-8"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-gray-800">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700">Page non trouvée</h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto bg-green-50 p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Retour</span>
            </button>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} RBD Groupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  )
}