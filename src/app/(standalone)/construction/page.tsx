"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, Home, Mail, Phone } from "lucide-react"

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-6 sm:p-6">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl text-center space-y-6 sm:space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={120} height={60} className="w-24 sm:w-32 h-auto" />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="relative inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Site en construction</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto px-2">
            Nous travaillons actuellement sur cette page. Merci de votre patience.
          </p>
        </div>

        <div className="w-full mx-auto bg-green-50 p-5 sm:p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Nous serons bientôt prêts!</h2>
          <div className="space-y-4">
            <a
              href="mailto:contact@reogroupe.fr"
              className="flex items-center justify-center gap-2 text-gray-600 py-2 hover:text-green-600 transition-colors"
            >
              <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">contact@reogroupe.fr</span>
            </a>
            <a
              href="tel:+33123456789"
              className="flex items-center justify-center gap-2 text-gray-600 py-2 hover:text-green-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">+33 1 23 45 67 89</span>
            </a>
          </div>
        </div>

        <div className="pt-2 sm:pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-base font-medium"
          >
            <Home size={18} />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </div>

        <div className="pt-6">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} REO Groupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  )
}
